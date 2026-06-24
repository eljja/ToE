/* ==========================================================================
   Theory of Everything (ToE) Portal - JavaScript Application
   Core Logic: Star Background, Markdown Loader, KaTeX Math Parser, Quantum Sandbox
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // State Management
    // ----------------------------------------------------
    const state = {
        activeView: "doc-view", // 'doc-view' or 'sandbox-view'
        activeDoc: "README.md",
        theme: "dark-theme",
        currentLang: "en"
    };

    // ----------------------------------------------------
    // UI Elements
    // ----------------------------------------------------
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");
    const langToggleBtn = document.getElementById("lang-toggle");
    const langText = langToggleBtn ? langToggleBtn.querySelector(".lang-text") : null;
    const docView = document.getElementById("doc-view");
    const sandboxView = document.getElementById("sandbox-view");
    const markdownContainer = document.getElementById("markdown-container");
    const loadingSpinner = document.getElementById("loading");
    const parentCrumb = document.getElementById("parent-crumb");
    const currentCrumb = document.getElementById("current-crumb");
    const navButtons = document.querySelectorAll(".nav-btn");
    const theoryMapView = document.getElementById("theory-map-view");
    const theoryMapCanvas = document.getElementById("theory-map-canvas");
    const nodeDetails = document.getElementById("node-details");

    // ----------------------------------------------------
    // Theme Management
    // ----------------------------------------------------
    themeToggleBtn.addEventListener("click", () => {
        if (state.theme === "dark-theme") {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            state.theme = "light-theme";
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            state.theme = "dark-theme";
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    // ----------------------------------------------------
    // Language Management
    // ----------------------------------------------------
    function updateUITexts() {
        document.querySelectorAll("[data-en][data-ko]").forEach(el => {
            el.innerText = el.getAttribute("data-" + state.currentLang);
        });
        
        // Update breadcrumb
        const activeBtn = document.querySelector(".nav-btn.active span");
        if (activeBtn) {
            currentCrumb.innerText = activeBtn.innerText;
        }
        
        const parentCrumbText = document.getElementById("parent-crumb");
        if (parentCrumbText) {
            if (state.activeView === "doc-view") {
                parentCrumbText.innerText = state.currentLang === "en" ? "Library" : "라이브러리";
            } else {
                parentCrumbText.innerText = state.currentLang === "en" ? "Interactive" : "인터랙티브 툴";
            }
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            state.currentLang = state.currentLang === 'en' ? 'ko' : 'en';
            if (langText) langText.innerText = state.currentLang.toUpperCase();
            document.documentElement.lang = state.currentLang;
            
            updateUITexts();
            
            // Reload the document if in doc-view
            if (state.activeView === "doc-view") {
                loadMarkdown(state.activeDoc);
            } else if (state.activeView === "theory-map-view") {
                selectNode(theoryMapSelectedNode);
            }
        });
    }

    // Initialize UI texts on startup
    updateUITexts();

    // ----------------------------------------------------
    // Starry Space Background Canvas
    // ----------------------------------------------------
    const spaceCanvas = document.getElementById("space-bg");
    const spaceCtx = spaceCanvas.getContext("2d");
    let stars = [];
    const starCount = 150;

    function resizeSpaceCanvas() {
        spaceCanvas.width = window.innerWidth;
        spaceCanvas.height = window.innerHeight;
    }
    resizeSpaceCanvas();
    window.addEventListener("resize", resizeSpaceCanvas);

    // Initialize Stars
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * spaceCanvas.width,
            y: Math.random() * spaceCanvas.height,
            size: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.05 + 0.01,
            brightness: Math.random(),
            color: Math.random() > 0.8 ? 'rgba(0, 240, 255, 0.4)' : 'rgba(161, 118, 255, 0.4)'
        });
    }

    function animateSpaceBackground() {
        spaceCtx.clearRect(0, 0, spaceCanvas.width, spaceCanvas.height);
        
        // Render Stars
        for (let i = 0; i < starCount; i++) {
            const s = stars[i];
            
            // Twinkle
            s.brightness += (Math.random() - 0.5) * 0.1;
            if (s.brightness < 0.1) s.brightness = 0.1;
            if (s.brightness > 1) s.brightness = 1;
            
            // Move slowly (cosmic drift)
            s.y -= s.speed;
            if (s.y < 0) {
                s.y = spaceCanvas.height;
                s.x = Math.random() * spaceCanvas.width;
            }
            
            spaceCtx.fillStyle = s.color.replace('0.4', s.brightness.toString());
            spaceCtx.beginPath();
            spaceCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            spaceCtx.fill();
        }
        
        requestAnimationFrame(animateSpaceBackground);
    }
    animateSpaceBackground();

    // ----------------------------------------------------
    // Document Loader & Markdown/Math Parser
    // ----------------------------------------------------
    function getLocalizedDocName(docName) {
        if (docName === 'README.md') {
            return state.currentLang === 'en' ? 'README.md' : 'README_ko.md';
        }
        if (state.currentLang === 'en' && docName.endsWith('.md')) {
            return docName.replace('.md', '_en.md');
        }
        return docName;
    }

    async function loadMarkdown(docName) {
        state.activeDoc = docName;
        loadingSpinner.style.display = "flex";
        const loadingText = document.getElementById("loading-text");
        if (loadingText) {
            loadingText.innerText = state.currentLang === 'en' ? "Loading document..." : "문서를 불러오는 중입니다...";
        }
        const targetFile = getLocalizedDocName(docName);

        try {
            let response = await fetch(targetFile);
            if (!response.ok && state.currentLang === 'en') {
                // Fallback to original (Korean) if English file doesn't exist
                response = await fetch(docName);
            }
            if (!response.ok) {
                throw new Error(state.currentLang === 'en' ? "Document not found." : "문서를 찾을 수 없습니다.");
            }
            let text = await response.text();

            // Pre-process GitHub-style alerts in Markdown
            text = preprocessAlerts(text);

            // 수학 수식 보호 (KaTeX 렌더링 오류 방지: marked.js가 수식 내의 _, * 등을 변환하지 못하게 함)
            const mathBlocks = {};
            let mathIndex = 0;
            // $$ ... $$ 블록 보호
            text = text.replace(/\$\$([\s\S]+?)\$\$/g, (match) => {
                const token = `__MATH_BLOCK_${mathIndex}__`;
                mathBlocks[token] = match;
                mathIndex++;
                return token;
            });
            // $ ... $ 인라인 보호
            text = text.replace(/\$([^\n\$]+?)\$/g, (match) => {
                const token = `__MATH_INLINE_${mathIndex}__`;
                mathBlocks[token] = match;
                mathIndex++;
                return token;
            });

            // Render Markdown using Marked.js
            let renderedHtml = marked.parse(text);

            // 수학 수식 복원
            for (const [token, math] of Object.entries(mathBlocks)) {
                renderedHtml = renderedHtml.replace(token, math);
            }

            markdownContainer.innerHTML = renderedHtml;

            // Render Mathematical Formulas using KaTeX
            if (window.renderMathInElement) {
                renderMathInElement(markdownContainer, {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "$", right: "$", display: false },
                        { left: "\\(", right: "\\)", display: false },
                        { left: "\\[", right: "\\]", display: true }
                    ],
                    throwOnError: false
                });
            }

            loadingSpinner.style.display = "none";
            markdownContainer.style.opacity = "1";
        } catch (error) {
            console.error(error);
            const title = state.currentLang === 'en' ? "Error loading document" : "문서 로딩 중 에러가 발생했습니다";
            const subtitle = state.currentLang === 'en' ? "Please check if the file exists or run on a local web server/GitHub Pages." : "서버(GitHub Pages) 또는 로컬 웹서버를 구동하여 확인해 주세요.";
            markdownContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-magenta);">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 48px; margin-bottom: 16px;"></i>
                    <h2>${title}</h2>
                    <p style="margin-top: 8px;">${error.message}</p>
                    <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">${subtitle}</p>
                </div>
            `;
            loadingSpinner.style.display = "none";
            markdownContainer.style.opacity = "1";
        }
    }

    // Convert GitHub alert syntax (> [!NOTE]) into class-annotated blockquotes
    function preprocessAlerts(mdText) {
        const lines = mdText.split('\n');
        let inQuote = false;
        let alertType = null;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('>')) {
                if (!inQuote) {
                    inQuote = true;
                }
                
                // Detect alerts
                if (line.includes('[!NOTE]')) {
                    alertType = 'alert-note';
                    lines[i] = '> **💡 참고 (Note)**';
                } else if (line.includes('[!IMPORTANT]')) {
                    alertType = 'alert-important';
                    lines[i] = '> **🚨 중요 (Important)**';
                } else if (line.includes('[!WARNING]')) {
                    alertType = 'alert-warning';
                    lines[i] = '> **⚠️ 경고 (Warning)**';
                } else if (line.includes('[!CAUTION]')) {
                    alertType = 'alert-caution';
                    lines[i] = '> **🛑 주의 (Caution)**';
                }
            } else {
                if (inQuote) {
                    // Inject class when leaving blockquote
                    if (alertType) {
                        // Apply the alert class to the preceding quote block in a basic way
                        // (Marked supports parsing raw class if we format as blockquote)
                        alertType = null;
                    }
                    inQuote = false;
                }
            }
        }
        
        return lines.join('\n');
    }

    // Initialize document view
    loadMarkdown(state.activeDoc);

    // ----------------------------------------------------
    // Navigation Routing
    // ----------------------------------------------------
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update Active button state
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const doc = btn.getAttribute("data-doc");
            const action = btn.getAttribute("data-action");

            if (doc) {
                // Switch to Document View
                state.activeView = "doc-view";
                docView.classList.add("active");
                sandboxView.classList.remove("active");
                if (theoryMapView) theoryMapView.classList.remove("active");
                
                parentCrumb.innerText = state.currentLang === "en" ? "Library" : "라이브러리";
                currentCrumb.innerText = btn.querySelector("span").innerText;

                loadMarkdown(doc);
            } else if (action === "sandbox") {
                // Switch to Sandbox View
                state.activeView = "sandbox-view";
                docView.classList.remove("active");
                sandboxView.classList.add("active");
                if (theoryMapView) theoryMapView.classList.remove("active");

                parentCrumb.innerText = state.currentLang === "en" ? "Interactive" : "인터랙티브 툴";
                currentCrumb.innerText = state.currentLang === "en" ? "Quantum Sandbox" : "양자 샌드박스";

                initSandbox();
            } else if (action === "theory-map") {
                // Switch to Theory Map View
                state.activeView = "theory-map-view";
                docView.classList.remove("active");
                sandboxView.classList.remove("active");
                if (theoryMapView) theoryMapView.classList.add("active");

                parentCrumb.innerText = state.currentLang === "en" ? "Interactive" : "인터랙티브 툴";
                currentCrumb.innerText = state.currentLang === "en" ? "HNM Theory Map" : "HNM 이론 도식 맵";

                initTheoryMap();
            }
        });
    });

    // ----------------------------------------------------
    // Quantum Sandbox Engine (Physics Simulator)
    // ----------------------------------------------------
    const sandboxCanvas = document.getElementById("sandbox-canvas");
    const sandboxCtx = sandboxCanvas.getContext("2d");
    let sandboxAnimationId;
    let simParticles = [];
    let gravityGrid = [];
    let mouse = { x: 0, y: 0, isDown: false, rx: 0, ry: 0 };
    
    // Sandbox Controls
    const forceModeSelect = document.getElementById("force-mode");
    const particlesInput = document.getElementById("param-particles");
    const valParticlesText = document.getElementById("val-particles");
    const couplingInput = document.getElementById("param-coupling");
    const valCouplingText = document.getElementById("val-coupling");
    const dimButtons = document.querySelectorAll(".dim-btn");
    const valDimsText = document.getElementById("val-dims");
    const resetSimBtn = document.getElementById("reset-sim");
    const energyGauge = document.getElementById("energy-gauge");
    const convergenceStatus = document.getElementById("convergence-status");

    let currentMode = "gravity";
    let activeDimension = 4;
    let baseForceStrength = 1.0;
    let maxParticlesCount = 40;
    let accretedCount = 0;
    let horizonRipples = [];
    let torsionBounceActive = false;
    let bounceRadius = 0;

    function resizeSandboxCanvas() {
        if (sandboxView.classList.contains("active")) {
            const rect = sandboxCanvas.parentElement.getBoundingClientRect();
            sandboxCanvas.width = rect.width;
            sandboxCanvas.height = rect.height;
        }
    }

    // Set controls & event listeners
    forceModeSelect.addEventListener("change", (e) => {
        currentMode = e.target.value;
        updateEnergyStatus();
        initSandbox();
    });

    particlesInput.addEventListener("input", (e) => {
        maxParticlesCount = parseInt(e.target.value);
        valParticlesText.innerText = maxParticlesCount;
        initSandbox();
    });

    couplingInput.addEventListener("input", (e) => {
        baseForceStrength = parseFloat(e.target.value);
        valCouplingText.innerText = baseForceStrength.toFixed(1);
    });

    dimButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            dimButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeDimension = parseInt(btn.getAttribute("data-dim"));
            valDimsText.innerText = activeDimension + "D";
            initSandbox();
        });
    });

    resetSimBtn.addEventListener("click", initSandbox);

    // Mouse Tracking
    sandboxCanvas.addEventListener("mousemove", (e) => {
        const rect = sandboxCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    sandboxCanvas.addEventListener("mousedown", (e) => {
        mouse.isDown = true;
        // Spawn particle on click
        if (currentMode !== "strong" && currentMode !== "string") {
            const rect = sandboxCanvas.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            spawnParticle(px, py);
        }
    });

    window.addEventListener("mouseup", () => {
        mouse.isDown = false;
    });

    function updateEnergyStatus() {
        if (currentMode === "gravity") {
            energyGauge.innerText = "Macroscopic / Planck Scale";
            convergenceStatus.innerText = "Expanding spacetime";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "electromagnetism") {
            energyGauge.innerText = "Atomic Scale (~1 eV)";
            convergenceStatus.innerText = "Coupling stable";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "strong") {
            energyGauge.innerText = "Hadronic Scale (~1 GeV)";
            convergenceStatus.innerText = "Confinement active";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "string") {
            energyGauge.innerText = "Planck Scale (10^19 GeV)";
            convergenceStatus.innerText = "Vibrating strings...";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "horizon") {
            energyGauge.innerText = "HNM Matrix Scale N = " + (20 + accretedCount);
            convergenceStatus.innerText = "Information accretion active";
            convergenceStatus.className = "info-value text-green";
        }
    }

    // Physics Engine Initialization
    function initSandbox() {
        cancelAnimationFrame(sandboxAnimationId);
        resizeSandboxCanvas();
        simParticles = [];
        gravityGrid = [];
        
        const w = sandboxCanvas.width;
        const h = sandboxCanvas.height;

        if (currentMode === "gravity") {
            // Build 2D Spacetime Grid Mesh
            const cols = 22;
            const rows = 16;
            const xStep = w / cols;
            const yStep = h / rows;
            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    gravityGrid.push({
                        ox: i * xStep,
                        oy: j * yStep,
                        x: i * xStep,
                        y: j * yStep
                    });
                }
            }
            // Spawn orbit particles
            for (let i = 0; i < maxParticlesCount / 2; i++) {
                simParticles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    mass: Math.random() * 5 + 2,
                    color: "rgba(0, 240, 255, 0.7)"
                });
            }
        } 
        else if (currentMode === "electromagnetism") {
            // Spawn positive (+) and negative (-) charged particles
            for (let i = 0; i < maxParticlesCount; i++) {
                const charge = Math.random() > 0.5 ? 1 : -1;
                simParticles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5,
                    charge: charge,
                    size: 6,
                    color: charge > 0 ? "rgba(255, 0, 127, 0.8)" : "rgba(0, 240, 255, 0.8)"
                });
            }
        } 
        else if (currentMode === "strong") {
            // Spawn 3 Quarks (Red, Green, Blue) bound by gluon flux-tubes (Strings)
            const centerX = w / 2;
            const centerY = h / 2;
            const colors = ["#ff0055", "#00ff66", "#00a2ff"];
            for (let i = 0; i < 3; i++) {
                const angle = (i * 2 * Math.PI) / 3;
                simParticles.push({
                    x: centerX + Math.cos(angle) * 80,
                    y: centerY + Math.sin(angle) * 80,
                    vx: 0,
                    vy: 0,
                    size: 14,
                    color: colors[i],
                    isQuark: true
                });
            }
        } 
        else if (currentMode === "string") {
            // Spawn vibrating 1D Strings
            const stringCount = Math.floor(maxParticlesCount / 4);
            for (let i = 0; i < stringCount; i++) {
                simParticles.push({
                    x: Math.random() * (w - 200) + 100,
                    y: Math.random() * (h - 200) + 100,
                    length: Math.random() * 80 + 40,
                    angle: Math.random() * Math.PI * 2,
                    harmonics: Math.floor(Math.random() * 4) + 1,
                    phase: Math.random() * 100,
                    isClosed: Math.random() > 0.5
                });
            }
        }
        else if (currentMode === "horizon") {
            accretedCount = 0;
            horizonRipples = [];
            const centerX = w / 2;
            const centerY = h / 2;
            const horizonRadius = Math.min(w, h) * 0.28;

            // 1. 사건의 지평선 안쪽의 아기 우주 입자들
            for (let i = 0; i < maxParticlesCount / 2; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * horizonRadius * 0.7;
                simParticles.push({
                    x: centerX + Math.cos(angle) * r,
                    y: centerY + Math.sin(angle) * r,
                    vx: (Math.random() - 0.5) * 1.0,
                    vy: (Math.random() - 0.5) * 1.0,
                    size: Math.random() * 3 + 2,
                    color: "rgba(161, 118, 255, 0.8)",
                    isInside: true
                });
            }

            // 2. 사건의 지평선 바깥쪽의 모태 우주 입자들
            for (let i = 0; i < maxParticlesCount / 2; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * (Math.max(w, h) - horizonRadius) + horizonRadius + 30;
                simParticles.push({
                    x: centerX + Math.cos(angle) * r,
                    y: centerY + Math.sin(angle) * r,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 4 + 2,
                    color: "rgba(255, 215, 0, 0.7)",
                    isInside: false
                });
            }
        }

        animateSandbox();
    }

    function spawnParticle(x, y) {
        if (currentMode === "gravity") {
            simParticles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                mass: Math.random() * 8 + 4,
                color: "rgba(161, 118, 255, 0.8)"
            });
        } else if (currentMode === "electromagnetism") {
            const charge = Math.random() > 0.5 ? 1 : -1;
            simParticles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                charge: charge,
                size: 6,
                color: charge > 0 ? "rgba(255, 0, 127, 0.8)" : "rgba(0, 240, 255, 0.8)"
            });
        }
        
        // Cap count
        if (simParticles.length > maxParticlesCount * 1.5) {
            simParticles.shift();
        }
    }

    // Main Sandbox Loop
    function animateSandbox() {
        const w = sandboxCanvas.width;
        const h = sandboxCanvas.height;
        sandboxCtx.fillStyle = "#030208";
        sandboxCtx.fillRect(0, 0, w, h);

        if (currentMode === "gravity") {
            updateGravitySimulation(w, h);
        } else if (currentMode === "electromagnetism") {
            updateElectromagnetismSimulation(w, h);
        } else if (currentMode === "strong") {
            updateStrongSimulation(w, h);
        } else if (currentMode === "string") {
            updateStringSimulation(w, h);
        } else if (currentMode === "horizon") {
            updateHorizonSimulation(w, h);
        }

        sandboxAnimationId = requestAnimationFrame(animateSandbox);
    }

    // --- Mode 1: Gravity (Bending Spacetime) ---
    function updateGravitySimulation(w, h) {
        // Warp grid nodes around the massive particles + mouse
        gravityGrid.forEach(node => {
            let dxTotal = 0;
            let dyTotal = 0;
            
            // Attractor 1: Mouse (if dragging)
            if (mouse.isDown) {
                const dx = mouse.x - node.ox;
                const dy = mouse.y - node.oy;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);
                if (dist < 180) {
                    const force = ((180 - dist) / 180) * 35 * baseForceStrength;
                    dxTotal += (dx / dist) * force;
                    dyTotal += (dy / dist) * force;
                }
            }

            // Attractor 2: Massive Particles
            simParticles.forEach(p => {
                const dx = p.x - node.ox;
                const dy = p.y - node.oy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = ((150 - dist) / 150) * p.mass * 4 * baseForceStrength;
                    dxTotal += (dx / (dist || 1)) * force;
                    dyTotal += (dy / (dist || 1)) * force;
                }
            });

            node.x = node.ox + dxTotal;
            node.y = node.oy + dyTotal;
        });

        // Render Spacetime Grid (Grid Lines)
        sandboxCtx.strokeStyle = "rgba(161, 118, 255, 0.15)";
        sandboxCtx.lineWidth = 1;
        
        // Draw grid connections
        const cols = 22;
        const rows = 16;
        for (let i = 0; i <= cols; i++) {
            sandboxCtx.beginPath();
            for (let j = 0; j <= rows; j++) {
                const idx = i * (rows + 1) + j;
                const node = gravityGrid[idx];
                if (node) {
                    if (j === 0) sandboxCtx.moveTo(node.x, node.y);
                    else sandboxCtx.lineTo(node.x, node.y);
                }
            }
            sandboxCtx.stroke();
        }
        for (let j = 0; j <= rows; j++) {
            sandboxCtx.beginPath();
            for (let i = 0; i <= cols; i++) {
                const idx = i * (rows + 1) + j;
                const node = gravityGrid[idx];
                if (node) {
                    if (i === 0) sandboxCtx.moveTo(node.x, node.y);
                    else sandboxCtx.lineTo(node.x, node.y);
                }
            }
            sandboxCtx.stroke();
        }

        // Render & Update orbit particles
        simParticles.forEach(p => {
            // Attraction force to mouse/center
            const targetX = mouse.isDown ? mouse.x : w / 2;
            const targetY = mouse.isDown ? mouse.y : h / 2;
            const dx = targetX - p.x;
            const dy = targetY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 5) {
                const force = (p.mass * 0.15 * baseForceStrength) / (dist * 0.05 + 1);
                p.vx += (dx / dist) * force;
                p.vy += (dy / dist) * force;
            }

            // Apply higher dimensional drift (visualizing strings or multidim quantum paths)
            if (activeDimension > 4) {
                p.vx += (Math.sin(Date.now() * 0.001 * p.mass) * 0.08) * (activeDimension - 3);
                p.vy += (Math.cos(Date.now() * 0.001 * p.mass) * 0.08) * (activeDimension - 3);
            }

            p.x += p.vx;
            p.y += p.vy;

            // Friction
            p.vx *= 0.98;
            p.vy *= 0.98;

            // Draw particle
            sandboxCtx.fillStyle = p.color;
            sandboxCtx.shadowColor = p.color;
            sandboxCtx.shadowBlur = p.mass * 2;
            sandboxCtx.beginPath();
            sandboxCtx.arc(p.x, p.y, p.mass, 0, Math.PI * 2);
            sandboxCtx.fill();
            sandboxCtx.shadowBlur = 0;
        });
    }

    // --- Mode 2: Electromagnetism (Coulomb's Law) ---
    function updateElectromagnetismSimulation(w, h) {
        // Double loop to calculate particle interactions (Attract opposite, repel like)
        for (let i = 0; i < simParticles.length; i++) {
            const p1 = simParticles[i];
            for (let j = i + 1; j < simParticles.length; j++) {
                const p2 = simParticles[j];
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);
                
                if (dist > 12 && dist < 250) {
                    // Coulomb force F = k * (q1*q2) / r^2
                    const force = (p1.charge * p2.charge * -10 * baseForceStrength) / distSq;
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;
                    
                    p1.vx += fx;
                    p1.vy += fy;
                    p2.vx -= fx;
                    p2.vy -= fy;
                }
            }

            // Attract to mouse
            if (mouse.isDown) {
                const dx = mouse.x - p1.x;
                const dy = mouse.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 5) {
                    p1.vx += (dx / dist) * 0.2 * baseForceStrength;
                    p1.vy += (dy / dist) * 0.2 * baseForceStrength;
                }
            }

            // Dimensional decay paths
            if (activeDimension > 4) {
                p1.vx += (Math.random() - 0.5) * 0.25 * (activeDimension - 3);
                p1.vy += (Math.random() - 0.5) * 0.25 * (activeDimension - 3);
            }

            p1.x += p1.vx;
            p1.y += p1.vy;
            
            p1.vx *= 0.95;
            p1.vy *= 0.95;

            // Boundary bounce
            if (p1.x < 10 || p1.x > w - 10) p1.vx *= -1;
            if (p1.y < 10 || p1.y > h - 10) p1.vy *= -1;

            // Draw field lines connecting opposite charges
            simParticles.forEach(pOther => {
                if (p1.charge !== pOther.charge) {
                    const dx = pOther.x - p1.x;
                    const dy = pOther.y - p1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 70) {
                        sandboxCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
                        sandboxCtx.lineWidth = 0.5;
                        sandboxCtx.beginPath();
                        sandboxCtx.moveTo(p1.x, p1.y);
                        sandboxCtx.lineTo(pOther.x, pOther.y);
                        sandboxCtx.stroke();
                    }
                }
            });

            // Draw particle
            sandboxCtx.fillStyle = p1.color;
            sandboxCtx.shadowColor = p1.color;
            sandboxCtx.shadowBlur = 8;
            sandboxCtx.beginPath();
            sandboxCtx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
            sandboxCtx.fill();
            
            // Draw charge sign (+ or -)
            sandboxCtx.fillStyle = "#fff";
            sandboxCtx.font = "bold 9px var(--font-mono)";
            sandboxCtx.textAlign = "center";
            sandboxCtx.textBaseline = "middle";
            sandboxCtx.fillText(p1.charge > 0 ? "+" : "-", p1.x, p1.y);
            sandboxCtx.shadowBlur = 0;
        }
    }

    // --- Mode 3: Strong Interaction (Quark Confinement & Strings) ---
    function updateStrongSimulation(w, h) {
        // Quark dynamics. bound by constant tension string (gluon flux tubes)
        const p1 = simParticles[0];
        const p2 = simParticles[1];
        const p3 = simParticles[2];
        
        if (!p1 || !p2 || !p3) return;

        const pairs = [[p1, p2], [p2, p3], [p3, p1]];

        // Drag handler for quarks
        if (mouse.isDown) {
            let grabbed = null;
            let minDist = 30;
            simParticles.forEach(p => {
                const dist = Math.sqrt(mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2;
                if (dist < minDist) {
                    grabbed = p;
                }
            });
            
            // Just pull whichever particle is closest to the mouse
            let closest = p1;
            let cDist = Math.sqrt((p1.x - mouse.x)**2 + (p1.y - mouse.y)**2);
            [p2, p3].forEach(p => {
                const dist = Math.sqrt((p.x - mouse.x)**2 + (p.y - mouse.y)**2);
                if (dist < cDist) {
                    closest = p;
                    cDist = dist;
                }
            });
            closest.x = mouse.x;
            closest.y = mouse.y;
            closest.vx = 0;
            closest.vy = 0;
        }

        // Apply Confinement force (Strong force constant k * r tension)
        pairs.forEach(pair => {
            const q1 = pair[0];
            const q2 = pair[1];
            const dx = q2.x - q1.x;
            const dy = q2.y - q1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Confinement: force does NOT decrease with distance. It increases or stays constant!
            // F = k * r (like a rubber band)
            const stringTensionConstant = 0.015 * baseForceStrength;
            const fx = dx * stringTensionConstant;
            const fy = dy * stringTensionConstant;
            
            q1.vx += fx;
            q1.vy += fy;
            q2.vx -= fx;
            q2.vy -= fy;

            // Draw flux tube string (gluon string)
            sandboxCtx.strokeStyle = "rgba(161, 118, 255, 0.4)";
            sandboxCtx.lineWidth = Math.max(1, 10 - dist * 0.02); // gets thinner as you pull it
            
            // Draw a wavy spring-like line to look like a vibrating color string
            sandboxCtx.beginPath();
            const waves = 14;
            for (let i = 0; i <= waves; i++) {
                const t = i / waves;
                const wx = q1.x + dx * t;
                const wy = q1.y + dy * t;
                
                // Add transverse wave vibration
                const perpX = -dy / dist;
                const perpY = dx / dist;
                const amp = Math.sin(Date.now() * 0.05 + i * 2) * 5 * (dist * 0.002);
                
                if (i === 0) sandboxCtx.moveTo(wx, wy);
                else sandboxCtx.lineTo(wx + perpX * amp, wy + perpY * amp);
            }
            sandboxCtx.stroke();
        });

        // Update Quarks
        simParticles.forEach(q => {
            q.x += q.vx;
            q.y += q.vy;
            q.vx *= 0.9;
            q.vy *= 0.9;

            // Center gravitational constraint to keep quarks from floating away
            const cdx = w / 2 - q.x;
            const cdy = h / 2 - q.y;
            q.vx += cdx * 0.002;
            q.vy += cdy * 0.002;

            // Draw Quark
            sandboxCtx.fillStyle = q.color;
            sandboxCtx.shadowColor = q.color;
            sandboxCtx.shadowBlur = 15;
            sandboxCtx.beginPath();
            sandboxCtx.arc(q.x, q.y, q.size, 0, Math.PI * 2);
            sandboxCtx.fill();
            sandboxCtx.shadowBlur = 0;
        });
    }

    // --- Mode 4: String Theory (Vibrating Strings) ---
    function updateStringSimulation(w, h) {
        simParticles.forEach(s => {
            s.phase += 0.08 * baseForceStrength;
            
            // Draw string
            sandboxCtx.strokeStyle = "rgba(0, 240, 255, 0.6)";
            sandboxCtx.lineWidth = 2;
            sandboxCtx.shadowColor = "rgba(0, 240, 255, 0.8)";
            sandboxCtx.shadowBlur = 10;
            sandboxCtx.beginPath();

            const segmentCount = 60;
            
            if (s.isClosed) {
                // Closed String (Loop)
                for (let i = 0; i <= segmentCount; i++) {
                    const angle = (i * 2 * Math.PI) / segmentCount;
                    const rBase = s.length / 2;
                    
                    // Complex harmonic vibration representing high dimensional modes
                    let rRadial = 0;
                    for (let n = 1; n <= s.harmonics + 1; n++) {
                        rRadial += Math.sin(angle * n + s.phase) * (6 / n);
                        if (activeDimension > 4) {
                            rRadial += Math.cos(angle * (n + 2) - s.phase * 0.5) * (3 / n) * (activeDimension - 3);
                        }
                    }

                    const r = rBase + rRadial;
                    const sx = s.x + Math.cos(angle) * r;
                    const sy = s.y + Math.sin(angle) * r;

                    if (i === 0) sandboxCtx.moveTo(sx, sy);
                    else sandboxCtx.lineTo(sx, sy);
                }
            } else {
                // Open String
                const dx = Math.cos(s.angle) * s.length;
                const dy = Math.sin(s.angle) * s.length;
                const px = -dy / s.length;
                const py = dx / s.length;

                for (let i = 0; i <= segmentCount; i++) {
                    const t = i / segmentCount;
                    const bx = s.x + dx * t;
                    const by = s.y + dy * t;

                    // Vibrational amplitude
                    let amp = 0;
                    for (let n = 1; n <= s.harmonics; n++) {
                        amp += Math.sin(t * Math.PI * n) * Math.sin(s.phase * n) * (14 / n);
                        if (activeDimension > 4) {
                            amp += Math.cos(t * Math.PI * (n + 1)) * Math.cos(s.phase * 0.5) * (5 / n) * (activeDimension - 3);
                        }
                    }

                    const sx = bx + px * amp;
                    const sy = by + py * amp;

                    if (i === 0) sandboxCtx.moveTo(sx, sy);
                    else sandboxCtx.lineTo(sx, sy);
                }
            }
            sandboxCtx.stroke();
            sandboxCtx.shadowBlur = 0;
        });

        // Mouse warping strings
        if (mouse.isDown) {
            simParticles.forEach(s => {
                const dx = mouse.x - s.x;
                const dy = mouse.y - s.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    s.x += (dx / dist) * 2 * baseForceStrength;
                    s.y += (dy / dist) * 2 * baseForceStrength;
                }
            });
        }
    }

    function updateHorizonSimulation(w, h) {
        const centerX = w / 2;
        const centerY = h / 2;
        const baseRadius = Math.min(w, h) * 0.28;
        // Spacetime expansion inside based on accreted count
        const expansionScale = 1.0 + accretedCount * 0.015;
        const horizonRadius = baseRadius * Math.min(1.5, expansionScale);

        // Update Horizon Ripples
        for (let i = horizonRipples.length - 1; i >= 0; i--) {
            const ripple = horizonRipples[i];
            ripple.phase += 0.08;
            ripple.opacity *= 0.95;
            if (ripple.opacity < 0.05) {
                horizonRipples.splice(i, 1);
            }
        }

        // 1. Draw Spacetime grid *inside* the horizon (expanding)
        sandboxCtx.strokeStyle = "rgba(161, 118, 255, 0.08)";
        sandboxCtx.lineWidth = 1;
        const gridLines = 14;
        
        // Circular spacetime mesh representing expanding metric inside black hole
        for (let i = 1; i <= gridLines; i++) {
            const r = (horizonRadius / gridLines) * i;
            sandboxCtx.beginPath();
            sandboxCtx.arc(centerX, centerY, r, 0, Math.PI * 2);
            sandboxCtx.stroke();
        }
        for (let i = 0; i < 24; i++) {
            const angle = (i * Math.PI * 2) / 24;
            sandboxCtx.beginPath();
            sandboxCtx.moveTo(centerX, centerY);
            sandboxCtx.lineTo(centerX + Math.cos(angle) * horizonRadius, centerY + Math.sin(angle) * horizonRadius);
            sandboxCtx.stroke();
        }

        // 2. Draw Torsion Bounce Shockwaves at r -> 0
        if (torsionBounceActive) {
            bounceRadius += 4;
            if (bounceRadius > horizonRadius) {
                torsionBounceActive = false;
            } else {
                sandboxCtx.strokeStyle = `rgba(255, 0, 127, ${1 - bounceRadius / horizonRadius})`;
                sandboxCtx.lineWidth = 3;
                sandboxCtx.beginPath();
                sandboxCtx.arc(centerX, centerY, bounceRadius, 0, Math.PI * 2);
                sandboxCtx.stroke();
            }
        }

        // 3. Draw Event Horizon Boundary (Glowing Ring)
        sandboxCtx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        sandboxCtx.lineWidth = 4;
        sandboxCtx.shadowColor = "rgba(0, 240, 255, 0.5)";
        sandboxCtx.shadowBlur = 15;
        
        // Draw the main circle with ripple distortions
        sandboxCtx.beginPath();
        const segments = 120;
        for (let i = 0; i <= segments; i++) {
            const angle = (i * Math.PI * 2) / segments;
            let currentRadius = horizonRadius;
            
            // Add ripple deformations
            horizonRipples.forEach(ripple => {
                const diff = Math.abs(angle - ripple.angle);
                if (diff < 0.5) {
                    currentRadius += Math.sin(ripple.phase) * 12 * ripple.opacity * Math.cos((diff / 0.5) * Math.PI / 2);
                }
            });

            // Dimension warp wave (visualize 10D/11D extra dimensions folding)
            if (activeDimension > 4) {
                currentRadius += Math.sin(angle * 8 + Date.now() * 0.005) * 2 * (activeDimension - 3);
            }

            const x = centerX + Math.cos(angle) * currentRadius;
            const y = centerY + Math.sin(angle) * currentRadius;
            if (i === 0) sandboxCtx.moveTo(x, y);
            else sandboxCtx.lineTo(x, y);
        }
        sandboxCtx.closePath();
        sandboxCtx.stroke();
        sandboxCtx.shadowBlur = 0;

        // 4. Update & Spawn particles
        // Auto-spawn outer parent particles if they run low
        const outerCount = simParticles.filter(p => !p.isInside).length;
        if (outerCount < maxParticlesCount / 2) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.max(w, h) * 0.6;
            simParticles.push({
                x: centerX + Math.cos(angle) * r,
                y: centerY + Math.sin(angle) * r,
                vx: 0,
                vy: 0,
                size: Math.random() * 4 + 2,
                color: "rgba(255, 215, 0, 0.7)",
                isInside: false
            });
        }

        // Loop over particles
        for (let i = simParticles.length - 1; i >= 0; i--) {
            const p = simParticles[i];
            
            if (p.isInside) {
                // --- INNER BABY UNIVERSE PARTICLES ---
                const dx = p.x - centerX;
                const dy = p.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Keep them inside the horizon (soft boundary bounce)
                if (dist > horizonRadius - p.size - 5) {
                    const angle = Math.atan2(dy, dx);
                    p.x = centerX + Math.cos(angle) * (horizonRadius - p.size - 6);
                    p.vx = -Math.cos(angle) * Math.abs(p.vx) * 0.8;
                    p.vy = -Math.sin(angle) * Math.abs(p.vy) * 0.8;
                }

                // Torsion Bounce: if a particle gets too close to the singularity center (r < 25)
                if (dist < 25) {
                    const angle = Math.atan2(dy, dx);
                    p.vx = Math.cos(angle) * 3 * baseForceStrength;
                    p.vy = Math.sin(angle) * 3 * baseForceStrength;
                    p.x = centerX + Math.cos(angle) * 26;
                    
                    // Trigger shockwave
                    torsionBounceActive = true;
                    bounceRadius = 15;
                }

                // Drag to mouse (if inside and mouse down)
                if (mouse.isDown && dist < horizonRadius) {
                    const mdx = mouse.x - p.x;
                    const mdy = mouse.y - p.y;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist > 5 && mdist < 150) {
                        p.vx += (mdx / mdist) * 0.1 * baseForceStrength;
                        p.vy += (mdy / mdist) * 0.1 * baseForceStrength;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Draw inner particles
                sandboxCtx.fillStyle = p.color;
                sandboxCtx.shadowColor = p.color;
                sandboxCtx.shadowBlur = 6;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();
                sandboxCtx.shadowBlur = 0;
            } 
            else {
                // --- OUTER PARENT UNIVERSE PARTICLES (Accretion) ---
                const dx = centerX - p.x;
                const dy = centerY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Gravitational pull of the black hole
                const gravityStrength = 0.5 * baseForceStrength;
                if (dist > 5) {
                    p.vx += (dx / dist) * gravityStrength;
                    p.vy += (dy / dist) * gravityStrength;
                }

                // Drag by mouse
                if (mouse.isDown) {
                    const mdx = mouse.x - p.x;
                    const mdy = mouse.y - p.y;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < 150) {
                        p.vx += (mdx / (mdist || 1)) * 0.25 * baseForceStrength;
                        p.vy += (mdy / (mdist || 1)) * 0.25 * baseForceStrength;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.97;
                p.vy *= 0.97;

            }
        }
    }

    // ----------------------------------------------------
    // HNM Theory Map Visualizer
    // ----------------------------------------------------
    let theoryMapCtx = theoryMapCanvas ? theoryMapCanvas.getContext("2d") : null;
    let theoryMapSelectedNode = null;
    let theoryMapHoveredNode = null;
    let theoryMapPan = { x: 0, y: 0 };
    let theoryMapZoom = 1.0;
    let theoryMapAnimationId = null;
    let theoryMapIsPanning = false;
    let theoryMapStartPan = { x: 0, y: 0 };
    let theoryMapCenterTween = null;

    const hnmNodes = [
        {
            id: "axiom",
            symbol: "D",
            nameEn: "Super-Dirac Axiom",
            nameKo: "슈퍼 디랙 공리",
            mathCode: "\\mathcal{D} = \\begin{pmatrix} 0 & Q \\\\ Q^\\dagger & 0 \\end{pmatrix}",
            descEn: "The fundamental starting point of HNM. The entire physical and geometric properties of the universe are uniquely encoded in a single Super-Dirac operator acting on a noncommutative spectral triple.",
            descKo: "HNM 이론의 절대적인 시작점입니다. 우주의 모든 물리적 및 기하학적 성질은 비가환 스펙트럼 삼조 상에 작용하는 단 하나의 슈퍼 디랙 연산자에 의해 수학적으로 코딩됩니다.",
            link: "06_horizon_unification_math.md#L17-L22",
            x: 0,
            y: 0,
            radius: 35,
            color: "rgba(251, 191, 36, 0.95)", // Golden Amber
            borderColor: "rgba(251, 191, 36, 0.4)",
            hoverColor: "#fbbf24"
        },
        {
            id: "chiral",
            symbol: "S",
            nameEn: "Chiral Spectral Action",
            nameKo: "카이랄 스펙트럼 작용량",
            mathCode: "S_{\\text{HNM}} = \\text{Tr}((Q Q^\\dagger)^2)",
            descEn: "The variational principle driving all physical dynamics. Under spontaneous compactification, it yields general relativity, Yang-Mills gauge theory, and standard model chiral fermions.",
            descKo: "우주의 동역학을 유도하는 변분 원리입니다. 자발적 콤팩트화를 거치며 고전 아인슈타인-힐베르트 중력 작용량, 양-밀스 게이지 이론 및 3세대 카이랄 페르미온을 생성합니다.",
            link: "06_horizon_unification_math.md#L176-L190",
            x: -160,
            y: -100,
            radius: 28,
            color: "rgba(6, 182, 212, 0.95)", // Cyan
            borderColor: "rgba(6, 182, 212, 0.4)",
            hoverColor: "#06b6d4"
        },
        {
            id: "susy",
            symbol: "Tr_s",
            nameEn: "SUSY Ward Identity",
            nameKo: "초대칭 워드 항등식",
            mathCode: "\\text{Tr}_{\\text{s}}(\\mathcal{D}^4) \\equiv 0",
            descEn: "Algebraic identity that vanishes identically off-shell. It acts as a constraint forcing the cosmological constant to vanish and resolving the vacuum energy density crisis.",
            descKo: "오프셸 수준에서 항상 0으로 소멸하는 수학적 항등식입니다. 대수적 구속조건으로 작용하여 우주의 벌크 진공 에너지를 0으로 강제하며 우주상수 문제를 해결합니다.",
            link: "06_horizon_unification_math.md#L209-L220",
            x: 160,
            y: -100,
            radius: 28,
            color: "rgba(168, 85, 247, 0.95)", // Purple
            borderColor: "rgba(168, 85, 247, 0.4)",
            hoverColor: "#a855f7"
        },
        {
            id: "droplet",
            symbol: "X_a",
            nameEn: "Fuzzy Droplet Geometry",
            nameKo: "퍼지 액적 기하학",
            mathCode: "[X_a, X_b] = i \\theta_{ab} \\mathbf{1}",
            descEn: "Coordinate matrices form a fuzzy droplet under the action. In the large-N limit, the eigenvalues condense to form a continuous 4D Riemannian manifold.",
            descKo: "비가환 시공간 좌표 행렬들이 응집해 구 형태의 퍼지 액적 기하학을 형성합니다. 큰-$N$ 극한에서 고윳값 분포가 연속적인 4차원 곡선 시공간 다양체로 창발합니다.",
            link: "06_horizon_unification_math.md#L473-L485",
            x: -280,
            y: -10,
            radius: 25,
            color: "rgba(34, 197, 94, 0.95)", // Emerald Green
            borderColor: "rgba(34, 197, 94, 0.4)",
            hoverColor: "#22c55e"
        },
        {
            id: "horizon",
            symbol: "R_H",
            nameEn: "Holographic Horizon",
            nameKo: "홀로그래픽 지평선",
            mathCode: "S = N^2 = \\frac{A}{4\\ell_P^2}",
            descEn: "The spectral outer boundary of the fuzzy droplet functions as the cosmic horizon. Entropy is equivalent to the matrix representation size squared.",
            descKo: "행렬 액적의 외곽 경계가 물리적 우주 지평선을 정의합니다. 우주의 정보 한계와 베켄슈타인-호킹 엔트로피가 행렬 차원 $N^2$과 직접 동정됩니다.",
            link: "06_horizon_unification_math.md#L581-L590",
            x: -360,
            y: 110,
            radius: 25,
            color: "rgba(236, 72, 153, 0.95)", // Magenta
            borderColor: "rgba(236, 72, 153, 0.4)",
            hoverColor: "#ec4899"
        },
        {
            id: "bounce",
            symbol: "V_eff",
            nameEn: "Vandermonde Bounce",
            nameKo: "판데르몬데 빅 바운스",
            mathCode: "V_{\\text{eff}}(a) \\approx \\frac{\\ell(\\ell+1)}{a^2} - \\frac{\\Lambda}{3}a^2",
            descEn: "The Vandermonde repulsion between eigenvalues acts as an effective potential diverging at small scale factor, eliminating the Big Bang singularity.",
            descKo: "행렬 고윳값들의 판데르몬데 반발력이 척도인자 $a \\to 0$ 극한에서 무한대로 발산하는 장벽을 형성해 빅뱅 특이점을 우주론적 빅 바운스로 완벽히 대체합니다.",
            link: "06_horizon_unification_math.md#L591-L606",
            x: -220,
            y: 220,
            radius: 25,
            color: "rgba(14, 165, 233, 0.95)", // Sky Blue
            borderColor: "rgba(14, 165, 233, 0.4)",
            hoverColor: "#0ea5e9"
        },
        {
            id: "time",
            symbol: "Δ^it",
            nameEn: "Modular Time Flow",
            nameKo: "모듈러 시간 흐름",
            mathCode: "\\alpha_t(A) = \\Delta_{\\Omega}^{it} A \\Delta_{\\Omega}^{-it}",
            descEn: "Lorentzian time is not fundamental; it emerges as a modular automorphism (Tomita-Takesaki theory) from the horizon entanglement KMS state.",
            descKo: "시간은 기본 차원이 아니며 지평선 얽힘 진공의 Tomita-Takesaki 모듈러 흐름(KMS 열적 진공)으로부터 창발되는 열역학적 매개변수입니다.",
            link: "06_horizon_unification_math.md#L857-L870",
            x: 0,
            y: 220,
            radius: 28,
            color: "rgba(244, 63, 94, 0.95)", // Rose
            borderColor: "rgba(244, 63, 94, 0.4)",
            hoverColor: "#f43f5e"
        },
        {
            id: "compact",
            symbol: "Y_i",
            nameEn: "Fuzzy Compactification",
            nameKo: "퍼지 콤팩트화",
            mathCode: "SO(10) \\to SU(3) \\times SU(2) \\times U(1)",
            descEn: "Spontaneous dimensional compactification on CP^2_F x S^2_F. The commutant of this fuzzy space dynamically yields the Standard Model gauge symmetry.",
            descKo: "10차원 기하학 중 6차원이 퍼지 공간 $CP^2_F \\times S^2_F$ 상으로 자발적 콤팩트화되며, 여분 차원 대칭성이 표준 모형 $SU(3) \\times SU(2) \\times U(1)$로 분기됩니다.",
            link: "06_horizon_unification_math.md#L636-L650",
            x: 280,
            y: -10,
            radius: 25,
            color: "rgba(16, 185, 129, 0.95)", // Emerald
            borderColor: "rgba(16, 185, 129, 0.4)",
            hoverColor: "#10b981"
        },
        {
            id: "matter",
            symbol: "χ=3",
            nameEn: "Chiral Matter & Higgs",
            nameKo: "카이랄 물질과 힉스 보손",
            mathCode: "n_{\\text{gen}} = \\chi(CP^2 \\times S^2) = 3",
            descEn: "Compact space topology dictates exactly three generations of chiral fermions. The spectral Higgs mechanism generates physical masses.",
            descKo: "콤팩트 공간의 위상학적 특성(오일러 지수 = 3)에 의해 자연스럽게 3세대 카이랄 페르미온이 선택되며 스펙트럼 힉스 메커니즘을 통해 질량이 획득됩니다.",
            link: "06_horizon_unification_math.md#L675-L690",
            x: 360,
            y: 110,
            radius: 25,
            color: "rgba(99, 102, 241, 0.95)", // Indigo
            borderColor: "rgba(99, 102, 241, 0.4)",
            hoverColor: "#6366f1"
        }
    ];

    const hnmLinks = [
        { from: "axiom", to: "chiral" },
        { from: "axiom", to: "susy" },
        { from: "chiral", to: "droplet" },
        { from: "droplet", to: "horizon" },
        { from: "horizon", to: "bounce" },
        { from: "horizon", to: "time" },
        { from: "droplet", to: "compact" },
        { from: "compact", to: "matter" }
    ];

    function resizeTheoryMapCanvas() {
        if (!theoryMapCanvas) return;
        const rect = theoryMapCanvas.parentElement.getBoundingClientRect();
        theoryMapCanvas.width = rect.width;
        theoryMapCanvas.height = rect.height;
    }

    function toWorldCoords(mousePos) {
        return {
            x: (mousePos.x - theoryMapCanvas.width / 2 - theoryMapPan.x) / theoryMapZoom,
            y: (mousePos.y - theoryMapCanvas.height / 2 - theoryMapPan.y) / theoryMapZoom
        };
    }

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function selectNode(node) {
        theoryMapSelectedNode = node;
        
        if (!node) {
            nodeDetails.classList.remove("active");
            nodeDetails.innerHTML = `
                <div class="no-selection-msg">
                    <i class="fa-solid fa-fingerprint animate-pulse"></i>
                    <p data-en="Hover or click a node in the map to display its details." data-ko="지평선 비가환 기하학 네트워크 맵의 노드를 가리키거나 클릭하여 상세 물리 정보를 확인해 보세요.">${state.currentLang === 'en' ? 'Hover or click a node in the map to display its details.' : '지평선 비가환 기하학 네트워크 맵의 노드를 가리키거나 클릭하여 상세 물리 정보를 확인해 보세요.'}</p>
                </div>
            `;
            return;
        }

        nodeDetails.classList.add("active");
        
        const name = state.currentLang === "en" ? node.nameEn : node.nameKo;
        const desc = state.currentLang === "en" ? node.descEn : node.descKo;
        const linkLabel = state.currentLang === "en" ? "References in Paper" : "논문 내 관련 항목";
        const linkPath = node.link;
        const linkName = linkPath.split('/').pop().replace('#', ' #');

        nodeDetails.innerHTML = `
            <div class="detail-node-name">${name}</div>
            <div class="detail-node-math">$$${node.mathCode}$$</div>
            <div class="detail-node-desc">${desc}</div>
            <div class="detail-node-links">
                <span class="detail-node-links-title">${linkLabel}</span>
                <a href="${linkPath}" class="detail-node-link-item link">
                    <i class="fa-solid fa-file-lines"></i> ${linkName}
                </a>
            </div>
        `;

        if (window.katex && node.mathCode) {
            const mathEl = nodeDetails.querySelector(".detail-node-math");
            if (mathEl) {
                try {
                    window.katex.render(node.mathCode, mathEl, {
                        displayMode: true,
                        throwOnError: false
                    });
                } catch (err) {
                    console.error("KaTeX error:", err);
                }
            }
        }
        
        // Add click events to document links in sidebar to let them load inside the app
        const linkItem = nodeDetails.querySelector(".detail-node-link-item");
        if (linkItem) {
            linkItem.addEventListener("click", (e) => {
                e.preventDefault();
                // Extract document filename
                const docFile = linkPath.split('#')[0];
                
                // Find matching button
                const matchingBtn = Array.from(navButtons).find(btn => btn.getAttribute("data-doc") === docFile);
                if (matchingBtn) {
                    matchingBtn.click();
                } else {
                    // Fallback load
                    state.activeView = "doc-view";
                    docView.classList.add("active");
                    sandboxView.classList.remove("active");
                    if (theoryMapView) theoryMapView.classList.remove("active");
                    loadMarkdown(docFile);
                }
            });
        }
    }

    function smoothCenterOn(tx, ty) {
        const targetPanX = -tx * theoryMapZoom;
        const targetPanY = -ty * theoryMapZoom;
        
        let startX = theoryMapPan.x;
        let startY = theoryMapPan.y;
        let elapsed = 0;
        const duration = 400; // ms
        const startTime = performance.now();

        function animateCenter(now) {
            elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1.0);
            const ease = t * (2 - t); // quadratic ease-out

            theoryMapPan.x = startX + (targetPanX - startX) * ease;
            theoryMapPan.y = startY + (targetPanY - startY) * ease;

            if (t < 1.0) {
                theoryMapCenterTween = requestAnimationFrame(animateCenter);
            } else {
                theoryMapCenterTween = null;
            }
        }
        
        if (theoryMapCenterTween) cancelAnimationFrame(theoryMapCenterTween);
        theoryMapCenterTween = requestAnimationFrame(animateCenter);
    }

    function initTheoryMap() {
        if (!theoryMapCanvas) return;
        cancelAnimationFrame(theoryMapAnimationId);
        resizeTheoryMapCanvas();
        
        // Reset pan and zoom to center
        theoryMapPan = { x: 0, y: 0 };
        theoryMapZoom = 1.0;
        selectNode(null);

        // Animation Loop
        function drawTheoryMap() {
            if (state.activeView !== "theory-map-view") return;
            
            theoryMapCtx.clearRect(0, 0, theoryMapCanvas.width, theoryMapCanvas.height);
            
            // Draw background quantum mesh grid (very faint)
            const spaceTimePulse = Date.now() * 0.0005;
            theoryMapCtx.save();
            theoryMapCtx.translate(theoryMapCanvas.width / 2 + theoryMapPan.x, theoryMapCanvas.height / 2 + theoryMapPan.y);
            theoryMapCtx.scale(theoryMapZoom, theoryMapZoom);

            // Draw grid lines
            theoryMapCtx.strokeStyle = "rgba(168, 85, 247, 0.03)";
            theoryMapCtx.lineWidth = 1;
            const gridSize = 80;
            const gridLimit = 1000;
            for (let x = -gridLimit; x <= gridLimit; x += gridSize) {
                theoryMapCtx.beginPath();
                theoryMapCtx.moveTo(x, -gridLimit);
                theoryMapCtx.lineTo(x, gridLimit);
                theoryMapCtx.stroke();
            }
            for (let y = -gridLimit; y <= gridLimit; y += gridSize) {
                theoryMapCtx.beginPath();
                theoryMapCtx.moveTo(-gridLimit, y);
                theoryMapCtx.lineTo(gridLimit, y);
                theoryMapCtx.stroke();
            }

            // Draw connection lines
            hnmLinks.forEach(link => {
                const fromNode = hnmNodes.find(n => n.id === link.from);
                const toNode = hnmNodes.find(n => n.id === link.to);
                if (fromNode && toNode) {
                    // Draw thick faint background line
                    theoryMapCtx.beginPath();
                    theoryMapCtx.moveTo(fromNode.x, fromNode.y);
                    theoryMapCtx.lineTo(toNode.x, toNode.y);
                    theoryMapCtx.strokeStyle = "rgba(147, 51, 234, 0.12)";
                    theoryMapCtx.lineWidth = 6;
                    theoryMapCtx.stroke();

                    // Draw inner glowing line
                    theoryMapCtx.beginPath();
                    theoryMapCtx.moveTo(fromNode.x, fromNode.y);
                    theoryMapCtx.lineTo(toNode.x, toNode.y);
                    theoryMapCtx.strokeStyle = "rgba(168, 85, 247, 0.4)";
                    theoryMapCtx.lineWidth = 2;
                    theoryMapCtx.stroke();

                    // Draw animated pulse along link
                    const dx = toNode.x - fromNode.x;
                    const dy = toNode.y - fromNode.y;
                    const ratio = ((Date.now() * 0.0008) % 1.0);
                    const pulseX = fromNode.x + dx * ratio;
                    const pulseY = fromNode.y + dy * ratio;

                    theoryMapCtx.beginPath();
                    theoryMapCtx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
                    theoryMapCtx.fillStyle = "#f43f5e"; // bright rose pulse
                    theoryMapCtx.shadowColor = "#f43f5e";
                    theoryMapCtx.shadowBlur = 10;
                    theoryMapCtx.fill();
                    theoryMapCtx.shadowBlur = 0;
                }
            });

            // Draw nodes
            hnmNodes.forEach(node => {
                const isHovered = theoryMapHoveredNode === node;
                const isSelected = theoryMapSelectedNode === node;
                const radius = node.radius * (isHovered ? 1.15 : (isSelected ? 1.1 : 1.0));

                // Draw outer halo
                theoryMapCtx.shadowColor = node.hoverColor;
                theoryMapCtx.shadowBlur = isHovered ? 20 : (isSelected ? 15 : 6);
                theoryMapCtx.beginPath();
                theoryMapCtx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
                theoryMapCtx.fillStyle = isHovered || isSelected ? node.color.replace("0.95", "0.2") : "rgba(255, 255, 255, 0.02)";
                theoryMapCtx.fill();
                theoryMapCtx.shadowBlur = 0;

                // Draw border
                theoryMapCtx.beginPath();
                theoryMapCtx.arc(node.x, node.y, radius, 0, Math.PI * 2);
                theoryMapCtx.strokeStyle = isSelected ? "#ffffff" : (isHovered ? node.hoverColor : node.borderColor);
                theoryMapCtx.lineWidth = isSelected ? 3 : 2;
                theoryMapCtx.stroke();

                // Draw solid inner fill
                theoryMapCtx.beginPath();
                theoryMapCtx.arc(node.x, node.y, radius - 2, 0, Math.PI * 2);
                theoryMapCtx.fillStyle = isSelected ? node.color : "rgba(12, 6, 26, 0.9)";
                theoryMapCtx.fill();

                // Draw symbol
                theoryMapCtx.font = "bold 13px 'JetBrains Mono', monospace";
                theoryMapCtx.fillStyle = isSelected ? "#000" : "#ffffff";
                theoryMapCtx.textAlign = "center";
                theoryMapCtx.textBaseline = "middle";
                theoryMapCtx.fillText(node.symbol, node.x, node.y);

                // Draw name below
                const name = state.currentLang === "en" ? node.nameEn : node.nameKo;
                theoryMapCtx.font = "600 12px 'Outfit', 'Noto Sans KR', sans-serif";
                theoryMapCtx.fillStyle = isSelected ? "#c084fc" : (isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.65)");
                theoryMapCtx.fillText(name, node.x, node.y + radius + 18);
            });

            theoryMapCtx.restore();
            theoryMapAnimationId = requestAnimationFrame(drawTheoryMap);
        }

        theoryMapAnimationId = requestAnimationFrame(drawTheoryMap);
    }

    // Theory Map Event Listeners
    if (theoryMapCanvas) {
        theoryMapCanvas.addEventListener("mousedown", (e) => {
            const mousePos = getMousePos(theoryMapCanvas, e);
            const worldPos = toWorldCoords(mousePos);

            // Find if a node is clicked
            const clickedNode = hnmNodes.find(node => {
                const dx = worldPos.x - node.x;
                const dy = worldPos.y - node.y;
                return Math.sqrt(dx * dx + dy * dy) <= node.radius * 1.2;
            });

            if (clickedNode) {
                selectNode(clickedNode);
                smoothCenterOn(clickedNode.x, clickedNode.y);
            } else {
                theoryMapIsPanning = true;
                theoryMapStartPan = { x: mousePos.x - theoryMapPan.x, y: mousePos.y - theoryMapPan.y };
            }
        });

        theoryMapCanvas.addEventListener("mousemove", (e) => {
            const mousePos = getMousePos(theoryMapCanvas, e);
            
            if (theoryMapIsPanning) {
                if (theoryMapCenterTween) cancelAnimationFrame(theoryMapCenterTween);
                theoryMapPan.x = mousePos.x - theoryMapStartPan.x;
                theoryMapPan.y = mousePos.y - theoryMapStartPan.y;
            } else {
                const worldPos = toWorldCoords(mousePos);
                // Check if hovering a node
                const hoverNode = hnmNodes.find(node => {
                    const dx = worldPos.x - node.x;
                    const dy = worldPos.y - node.y;
                    return Math.sqrt(dx * dx + dy * dy) <= node.radius * 1.2;
                });

                if (hoverNode !== theoryMapHoveredNode) {
                    theoryMapHoveredNode = hoverNode;
                    theoryMapCanvas.style.cursor = hoverNode ? "pointer" : "grab";
                }
            }
        });

        window.addEventListener("mouseup", () => {
            theoryMapIsPanning = false;
        });

        theoryMapCanvas.addEventListener("wheel", (e) => {
            e.preventDefault();
            const mousePos = getMousePos(theoryMapCanvas, e);
            const worldPos = toWorldCoords(mousePos);

            const zoomFactor = 1.1;
            const previousZoom = theoryMapZoom;

            if (e.deltaY < 0) {
                theoryMapZoom = Math.min(theoryMapZoom * zoomFactor, maxZoom);
            } else {
                theoryMapZoom = Math.max(theoryMapZoom / zoomFactor, minZoom);
            }

            // Zoom centering adjustment
            theoryMapPan.x -= worldPos.x * (theoryMapZoom - previousZoom);
            theoryMapPan.y -= worldPos.y * (theoryMapZoom - previousZoom);
        });

        window.addEventListener("resize", resizeTheoryMapCanvas);
    }
});
