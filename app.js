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
    const contentVersion = "20260707-hnm-final-copy";

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

        if (state.activeView === "sandbox-view") {
            updateEnergyStatus();
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
        docName = normalizeDocName(docName) || docName;
        if (docName === 'README.md') {
            return state.currentLang === 'en' ? 'README.md' : 'README_ko.md';
        }
        if (docName === 'hnm_research_summary.md') {
            return state.currentLang === 'en' ? 'hnm_research_summary.md' : 'hnm_research_summary_ko.md';
        }
        if (state.currentLang === 'en' && docName.endsWith('.md')) {
            return docName.replace('.md', '_en.md');
        }
        return docName;
    }

    function normalizeDocName(docName) {
        if (!docName) return null;
        let clean = decodeURIComponent(String(docName)).trim();
        clean = clean.split("?")[0].split("#")[0].replace(/\\/g, "/");
        clean = clean.substring(clean.lastIndexOf("/") + 1);

        if (!clean.endsWith(".md")) return null;
        if (clean === "README_ko.md") return "README.md";
        if (clean === "hnm_research_summary_ko.md") return "hnm_research_summary.md";
        if (clean.endsWith("_en.md")) return clean.replace("_en.md", ".md");
        return clean;
    }

    function getDocRouteFromHash() {
        const hash = window.location.hash || "";
        if (!hash.startsWith("#doc=")) return null;
        return normalizeDocName(hash.slice("#doc=".length));
    }

    function getViewRouteFromHash() {
        const hash = window.location.hash || "";
        if (!hash.startsWith("#view=")) return null;

        const view = decodeURIComponent(hash.slice("#view=".length)).trim();
        return view === "sandbox" || view === "theory-map" ? view : null;
    }

    function getDocFromLinkHref(href) {
        if (!href) return null;
        const rawHref = href.trim();

        if (rawHref.startsWith("#doc=")) {
            return normalizeDocName(rawHref.slice("#doc=".length));
        }

        const hrefWithoutHash = rawHref.split("#")[0].split("?")[0];
        if (hrefWithoutHash.endsWith(".md")) {
            return normalizeDocName(hrefWithoutHash);
        }

        try {
            const url = new URL(rawHref, window.location.href);
            const samePage = url.origin === window.location.origin && url.pathname.endsWith(".md");
            return samePage ? normalizeDocName(url.pathname) : null;
        } catch {
            return null;
        }
    }

    function setActiveNavDocument(docName) {
        const normalizedDoc = normalizeDocName(docName);
        if (!normalizedDoc) return null;

        navButtons.forEach(btn => btn.classList.remove("active"));
        const matchingBtn = Array.from(navButtons).find(btn => btn.getAttribute("data-doc") === normalizedDoc);
        if (matchingBtn) matchingBtn.classList.add("active");
        return matchingBtn || null;
    }

    function getDocumentLabel(docName) {
        const matchingBtn = Array.from(navButtons).find(btn => btn.getAttribute("data-doc") === docName);
        const label = matchingBtn ? matchingBtn.querySelector("span") : null;
        if (label) return label.innerText;

        const labels = {
            "README.md": state.currentLang === "en" ? "Overview" : "개요",
            "hnm_research_summary.md": state.currentLang === "en" ? "HNM Research Summary" : "HNM 압축 요약본",
            "06_horizon_unification_math.md": state.currentLang === "en" ? "06. HNM Full Treatise" : "06. HNM 풀버전 이론서"
        };
        return labels[docName] || docName;
    }

    function showDocument(docName, options = {}) {
        const normalizedDoc = normalizeDocName(docName);
        if (!normalizedDoc) return;

        state.activeView = "doc-view";
        docView.classList.add("active");
        sandboxView.classList.remove("active");
        if (theoryMapView) theoryMapView.classList.remove("active");

        setActiveNavDocument(normalizedDoc);
        parentCrumb.innerText = state.currentLang === "en" ? "Library" : "라이브러리";
        currentCrumb.innerText = getDocumentLabel(normalizedDoc);

        if (options.updateHash) {
            const nextHash = `#doc=${encodeURIComponent(normalizedDoc)}`;
            if (window.location.hash !== nextHash) {
                history.pushState(null, "", nextHash);
            }
        }

        loadMarkdown(normalizedDoc);
    }

    function showInteractiveTool(action, options = {}) {
        if (action !== "sandbox" && action !== "theory-map") return;

        navButtons.forEach(btn => btn.classList.remove("active"));
        const matchingBtn = Array.from(navButtons).find(btn => btn.getAttribute("data-action") === action);
        if (matchingBtn) matchingBtn.classList.add("active");

        parentCrumb.innerText = state.currentLang === "en" ? "Interactive" : "인터랙티브 툴";

        if (options.updateHash) {
            const nextHash = `#view=${encodeURIComponent(action)}`;
            if (window.location.hash !== nextHash) {
                history.pushState(null, "", nextHash);
            }
        }

        if (action === "sandbox") {
            state.activeView = "sandbox-view";
            docView.classList.remove("active");
            sandboxView.classList.add("active");
            if (theoryMapView) theoryMapView.classList.remove("active");

            currentCrumb.innerText = state.currentLang === "en" ? "Quantum Sandbox" : "양자 샌드박스";
            updateEnergyStatus();
            initSandbox();
            return;
        }

        state.activeView = "theory-map-view";
        docView.classList.remove("active");
        sandboxView.classList.remove("active");
        if (theoryMapView) theoryMapView.classList.add("active");

        currentCrumb.innerText = state.currentLang === "en" ? "HNM Theory Map" : "HNM 이론 도식 맵";
        initTheoryMap();
    }

    function wireInternalMarkdownLinks() {
        markdownContainer.querySelectorAll("a[href]").forEach(link => {
            const viewTarget = link.getAttribute("data-view-target") || getViewRouteFromHashValue(link.getAttribute("href"));
            if (viewTarget) {
                link.setAttribute("href", `#view=${encodeURIComponent(viewTarget)}`);
                link.classList.add("internal-view-link");
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    showInteractiveTool(viewTarget, { updateHash: true });
                });
                return;
            }

            const targetDoc = getDocFromLinkHref(link.getAttribute("href"));
            if (!targetDoc) return;

            link.setAttribute("href", `#doc=${encodeURIComponent(targetDoc)}`);
            link.setAttribute("data-doc-target", targetDoc);
            link.classList.add("internal-doc-link");
            link.addEventListener("click", (event) => {
                event.preventDefault();
                showDocument(targetDoc, { updateHash: true });
            });
        });
    }

    function getViewRouteFromHashValue(href) {
        if (!href) return null;
        const rawHref = href.trim();
        if (!rawHref.startsWith("#view=")) return null;

        const view = decodeURIComponent(rawHref.slice("#view=".length)).trim();
        return view === "sandbox" || view === "theory-map" ? view : null;
    }

    async function loadMarkdown(docName) {
        const normalizedDoc = normalizeDocName(docName) || docName;
        state.activeDoc = normalizedDoc;
        loadingSpinner.style.display = "flex";
        const loadingText = document.getElementById("loading-text");
        if (loadingText) {
            loadingText.innerText = state.currentLang === 'en' ? "Loading document..." : "문서를 불러오는 중입니다...";
        }
        const targetFile = getLocalizedDocName(normalizedDoc);

        try {
            let response = await fetch(`${targetFile}?v=${contentVersion}`);
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

            wireInternalMarkdownLinks();

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
                    lines[i] = state.currentLang === 'en' ? '> **💡 Note**' : '> **💡 참고 (Note)**';
                } else if (line.includes('[!IMPORTANT]')) {
                    alertType = 'alert-important';
                    lines[i] = state.currentLang === 'en' ? '> **🚨 Important**' : '> **🚨 중요 (Important)**';
                } else if (line.includes('[!WARNING]')) {
                    alertType = 'alert-warning';
                    lines[i] = state.currentLang === 'en' ? '> **⚠️ Warning**' : '> **⚠️ 경고 (Warning)**';
                } else if (line.includes('[!CAUTION]')) {
                    alertType = 'alert-caution';
                    lines[i] = state.currentLang === 'en' ? '> **🛑 Caution**' : '> **🛑 주의 (Caution)**';
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

    // Initialize document view, honoring internal document routes such as #doc=06_horizon_unification_math.md.
    const initialRouteDoc = getDocRouteFromHash();
    if (initialRouteDoc) {
        state.activeDoc = initialRouteDoc;
        setActiveNavDocument(initialRouteDoc);
        currentCrumb.innerText = getDocumentLabel(initialRouteDoc);
    }
    loadMarkdown(state.activeDoc);

    function handleRouteChange() {
        const routeView = getViewRouteFromHash();
        if (routeView) {
            showInteractiveTool(routeView);
            return;
        }

        const routeDoc = getDocRouteFromHash();
        if (routeDoc && routeDoc !== state.activeDoc) {
            showDocument(routeDoc);
        }
    }
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    // ----------------------------------------------------
    // Navigation Routing
    // ----------------------------------------------------
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const doc = btn.getAttribute("data-doc");
            const action = btn.getAttribute("data-action");

            if (doc) {
                showDocument(doc, { updateHash: true });
            } else if (action) {
                showInteractiveTool(action, { updateHash: true });
            }
        });
    });

    const initialRouteView = getViewRouteFromHash();
    if (initialRouteView) {
        window.setTimeout(() => showInteractiveTool(initialRouteView), 0);
    }

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
            energyGauge.innerText = state.currentLang === "en" ? "Macroscopic / Planck Scale" : "거시적 / 플랑크 스케일";
            convergenceStatus.innerText = state.currentLang === "en" ? "Expanding spacetime" : "시공간 팽창 중";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "electromagnetism") {
            energyGauge.innerText = state.currentLang === "en" ? "Atomic Scale (~1 eV)" : "원자 스케일 (~1 eV)";
            convergenceStatus.innerText = state.currentLang === "en" ? "Coupling stable" : "결합 안정";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "strong") {
            energyGauge.innerText = state.currentLang === "en" ? "Hadronic Scale (~1 GeV)" : "강입자 스케일 (~1 GeV)";
            convergenceStatus.innerText = state.currentLang === "en" ? "Confinement active" : "가둠 작용 활성";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "string") {
            energyGauge.innerText = state.currentLang === "en" ? "Planck Scale (10^19 GeV)" : "플랑크 스케일 (10^19 GeV)";
            convergenceStatus.innerText = state.currentLang === "en" ? "Vibrating strings..." : "끈 진동 중...";
            convergenceStatus.className = "info-value text-green";
        } else if (currentMode === "horizon") {
            energyGauge.innerText = (state.currentLang === "en" ? "HNM Matrix Scale N = " : "HNM 행렬 스케일 N = ") + (20 + accretedCount);
            convergenceStatus.innerText = state.currentLang === "en" ? "Information accretion active" : "정보 흡수 활성";
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
        const baseRadius = Math.min(w, h) * 0.22;
        const expansionScale = 1.0 + accretedCount * 0.015;
        const horizonRadius = baseRadius * Math.min(1.5, expansionScale);
        const time = Date.now() * 0.001;

        // Update Horizon Ripples
        for (let i = horizonRipples.length - 1; i >= 0; i--) {
            const ripple = horizonRipples[i];
            ripple.phase += 0.08;
            ripple.opacity *= 0.95;
            if (ripple.opacity < 0.05) {
                horizonRipples.splice(i, 1);
            }
        }

        // 1. Draw Warped Spacetime Grid (Quantum Gravity Lensing)
        sandboxCtx.strokeStyle = "rgba(168, 85, 247, 0.06)"; // glowing violet grid
        sandboxCtx.lineWidth = 1;
        const cols = 26;
        const rows = 20;
        const xStep = w / cols;
        const yStep = h / rows;

        // We draw vertical grid lines but bent towards black hole
        for (let i = 0; i <= cols; i++) {
            sandboxCtx.beginPath();
            for (let j = 0; j <= rows; j++) {
                const ox = i * xStep;
                const oy = j * yStep;
                
                // Calculate bending vector
                const dx = ox - centerX;
                const dy = oy - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                let rx = ox;
                let ry = oy;
                if (dist > horizonRadius) {
                    // Pull grid vertices towards center to represent gravity warping
                    const warpFactor = Math.pow(horizonRadius / dist, 2.5) * 45 * baseForceStrength;
                    rx -= (dx / dist) * warpFactor;
                    ry -= (dy / dist) * warpFactor;
                } else {
                    // Inside the horizon, the grid collapses to the singularity
                    const collapse = (dist / horizonRadius);
                    rx = centerX + dx * collapse * 0.1;
                    ry = centerY + dy * collapse * 0.1;
                }

                if (j === 0) sandboxCtx.moveTo(rx, ry);
                else sandboxCtx.lineTo(rx, ry);
            }
            sandboxCtx.stroke();
        }

        // Draw horizontal grid lines bent towards black hole
        for (let j = 0; j <= rows; j++) {
            sandboxCtx.beginPath();
            for (let i = 0; i <= cols; i++) {
                const ox = i * xStep;
                const oy = j * yStep;
                
                const dx = ox - centerX;
                const dy = oy - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                let rx = ox;
                let ry = oy;
                if (dist > horizonRadius) {
                    const warpFactor = Math.pow(horizonRadius / dist, 2.5) * 45 * baseForceStrength;
                    rx -= (dx / dist) * warpFactor;
                    ry -= (dy / dist) * warpFactor;
                } else {
                    const collapse = (dist / horizonRadius);
                    rx = centerX + dx * collapse * 0.1;
                    ry = centerY + dy * collapse * 0.1;
                }

                if (i === 0) sandboxCtx.moveTo(rx, ry);
                else sandboxCtx.lineTo(rx, ry);
            }
            sandboxCtx.stroke();
        }

        // 2. Draw Torsion Bounce Shockwaves
        if (torsionBounceActive) {
            bounceRadius += 5;
            if (bounceRadius > horizonRadius) {
                torsionBounceActive = false;
            } else {
                sandboxCtx.strokeStyle = `rgba(236, 72, 153, ${1 - bounceRadius / horizonRadius})`; // neon pink
                sandboxCtx.lineWidth = 3;
                sandboxCtx.beginPath();
                sandboxCtx.arc(centerX, centerY, bounceRadius, 0, Math.PI * 2);
                sandboxCtx.stroke();
            }
        }

        // 3. Draw Accretion Disk Glowing Heat (Faint glowing ellipses background)
        const gradient = sandboxCtx.createRadialGradient(centerX, centerY, horizonRadius - 20, centerX, centerY, horizonRadius * 2.2);
        gradient.addColorStop(0, "rgba(251, 113, 133, 0.15)"); // Rose glow
        gradient.addColorStop(0.3, "rgba(168, 85, 247, 0.08)"); // Purple glow
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        sandboxCtx.fillStyle = gradient;
        sandboxCtx.beginPath();
        sandboxCtx.arc(centerX, centerY, horizonRadius * 2.2, 0, Math.PI * 2);
        sandboxCtx.fill();

        // 4. Draw Event Horizon Boundary (Beautiful neon ring with shader-like waves)
        sandboxCtx.strokeStyle = "rgba(192, 132, 252, 0.85)"; // purple border
        sandboxCtx.lineWidth = 3;
        sandboxCtx.shadowColor = "rgba(168, 85, 247, 0.7)";
        sandboxCtx.shadowBlur = 18;
        
        sandboxCtx.beginPath();
        const segments = 150;
        for (let i = 0; i <= segments; i++) {
            const angle = (i * Math.PI * 2) / segments;
            let currentRadius = horizonRadius;
            
            // Dynamic surface ripples (simulating quantum gravity fluctuations)
            currentRadius += Math.sin(angle * 12 + time * 3.5) * 2.5;
            currentRadius += Math.cos(angle * 7 - time * 2) * 1.8;

            // Collision ripples
            horizonRipples.forEach(ripple => {
                const diff = Math.abs(angle - ripple.angle);
                if (diff < 0.6) {
                    currentRadius += Math.sin(ripple.phase) * 14 * ripple.opacity * Math.cos((diff / 0.6) * Math.PI / 2);
                }
            });

            // Extra dimensions warp in 10D/11D
            if (activeDimension > 4) {
                currentRadius += Math.sin(angle * 16 + time * 6) * 1.2 * (activeDimension - 3);
            }

            const x = centerX + Math.cos(angle) * currentRadius;
            const y = centerY + Math.sin(angle) * currentRadius;
            if (i === 0) sandboxCtx.moveTo(x, y);
            else sandboxCtx.lineTo(x, y);
        }
        sandboxCtx.closePath();
        sandboxCtx.stroke();
        
        // Inner Black Hole Singularity Core
        sandboxCtx.shadowBlur = 0;
        sandboxCtx.fillStyle = "#010003";
        sandboxCtx.beginPath();
        sandboxCtx.arc(centerX, centerY, horizonRadius - 3, 0, Math.PI * 2);
        sandboxCtx.fill();

        // 5. Initialize particles for different forces if empty
        if (simParticles.length === 0) {
            // Accretion disk dust
            for (let i = 0; i < 40; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = horizonRadius * (1.2 + Math.random() * 1.5);
                simParticles.push({
                    type: "dust",
                    x: centerX + Math.cos(angle) * r,
                    y: centerY + Math.sin(angle) * r,
                    angle: angle,
                    orbitRadius: r,
                    speed: (0.015 + Math.random() * 0.01) * baseForceStrength,
                    size: Math.random() * 2 + 1,
                    color: "rgba(251, 191, 36, 0.7)" // Golden Yellow
                });
            }
            // Electromagnetic charged particles (+ and -)
            for (let i = 0; i < 6; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = horizonRadius * (1.5 + Math.random() * 1.0);
                simParticles.push({
                    type: "em",
                    charge: i % 2 === 0 ? 1 : -1,
                    x: centerX + Math.cos(angle) * r,
                    y: centerY + Math.sin(angle) * r,
                    angle: angle,
                    orbitRadius: r,
                    speed: 0.008 * (i % 2 === 0 ? 1 : -1.2) * baseForceStrength,
                    size: 4,
                    color: i % 2 === 0 ? "rgba(0, 240, 255, 0.9)" : "rgba(239, 68, 68, 0.9)" // blue (+) / red (-)
                });
            }
            // Strong force quarks (bound pairs)
            for (let i = 0; i < 4; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = horizonRadius * (1.3 + Math.random() * 0.8);
                const qx = centerX + Math.cos(angle) * r;
                const qy = centerY + Math.sin(angle) * r;
                
                // Red quark
                const q1 = {
                    id: "q_" + i + "_r",
                    type: "quark",
                    color: "rgba(244, 63, 94, 0.9)", // red
                    charge: "red",
                    x: qx - 20,
                    y: qy - 20,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                    size: 4,
                    partnerId: "q_" + i + "_g"
                };
                // Green quark partner
                const q2 = {
                    id: "q_" + i + "_g",
                    type: "quark",
                    color: "rgba(16, 185, 129, 0.9)", // green
                    charge: "green",
                    x: qx + 20,
                    y: qy + 20,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                    size: 4,
                    partnerId: "q_" + i + "_r"
                };
                simParticles.push(q1, q2);
            }
            // Weak force beta particles (unstable)
            for (let i = 0; i < 4; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = horizonRadius * (1.6 + Math.random() * 1.0);
                simParticles.push({
                    type: "weak",
                    x: centerX + Math.cos(angle) * r,
                    y: centerY + Math.sin(angle) * r,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    decayTimer: Math.random() * 200 + 100,
                    size: 3,
                    color: "rgba(253, 224, 71, 0.8)" // yellow
                });
            }
        }

        // 6. Draw Spacetime Grid inside the horizon (COLLAPSING)
        sandboxCtx.strokeStyle = "rgba(168, 85, 247, 0.08)";
        for (let i = 1; i < 10; i++) {
            sandboxCtx.beginPath();
            sandboxCtx.arc(centerX, centerY, (horizonRadius / 10) * i, 0, Math.PI * 2);
            sandboxCtx.stroke();
        }

        // 7. Update and Draw Particles
        const newParticles = [];
        for (let i = simParticles.length - 1; i >= 0; i--) {
            const p = simParticles[i];

            if (p.isAccreted) {
                // --- INNER MATRICIZED PARTICLES (COLLAPSING) ---
                const dx = p.x - centerX;
                const dy = p.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Gravity pull towards singularity r -> 0
                const innerPull = 1.2 * baseForceStrength;
                p.x -= (dx / (dist || 1)) * innerPull;
                p.y -= (dy / (dist || 1)) * innerPull;

                // Add modular time jittering
                p.x += (Math.random() - 0.5) * 1.5;
                p.y += (Math.random() - 0.5) * 1.5;

                // Draw inside particle as purple matrix quantum
                sandboxCtx.fillStyle = "rgba(168, 85, 247, 0.85)";
                sandboxCtx.shadowColor = "rgba(168, 85, 247, 0.8)";
                sandboxCtx.shadowBlur = 4;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
                sandboxCtx.fill();
                sandboxCtx.shadowBlur = 0;

                // Singularity Torsion Bounce
                if (dist < 12) {
                    torsionBounceActive = true;
                    bounceRadius = 8;
                    accretedCount--; // consume accreted quantum for bounce
                    if (accretedCount < 0) accretedCount = 0;
                    valParticlesText.innerText = accretedCount;
                    simParticles.splice(i, 1);
                }
                continue;
            }

            // --- OUTER ACTIVE PARTICLES (FORCE BY FORCE) ---
            if (p.type === "dust") {
                // Accretion disk dust spirals in
                p.angle += p.speed;
                p.orbitRadius -= 0.3 * baseForceStrength;
                
                p.x = centerX + Math.cos(p.angle) * p.orbitRadius;
                p.y = centerY + Math.sin(p.angle) * p.orbitRadius;

                // Render dust particle
                sandboxCtx.fillStyle = p.color;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();

                // Accretion trigger
                if (p.orbitRadius <= horizonRadius) {
                    accreteParticle(p, i);
                }
            } 
            else if (p.type === "em") {
                // Charged particles orbit and generate lightning arcs
                p.angle += p.speed;
                p.orbitRadius -= 0.15 * baseForceStrength;
                
                p.x = centerX + Math.cos(p.angle) * p.orbitRadius;
                p.y = centerY + Math.sin(p.angle) * p.orbitRadius;

                // Draw EM particle with neon aura
                sandboxCtx.fillStyle = p.color;
                sandboxCtx.shadowColor = p.color;
                sandboxCtx.shadowBlur = 8;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();
                sandboxCtx.shadowBlur = 0;

                // Generate Electric Arcs to the horizon when close
                if (p.orbitRadius < horizonRadius * 1.5) {
                    const hAngle = p.angle + (Math.random() - 0.5) * 0.4;
                    const hx = centerX + Math.cos(hAngle) * horizonRadius;
                    const hy = centerY + Math.sin(hAngle) * horizonRadius;
                    
                    // Draw jagged lightning path
                    drawLightning(p.x, p.y, hx, hy, "rgba(0, 240, 255, 0.65)");
                }

                // Accretion trigger
                if (p.orbitRadius <= horizonRadius) {
                    accreteParticle(p, i);
                }
            } 
            else if (p.type === "quark") {
                // Quark Orbit & QCD Confinement String
                // Attract to black hole
                const dx = centerX - p.x;
                const dy = centerY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                p.vx += (dx / dist) * 0.12 * baseForceStrength;
                p.vy += (dy / dist) * 0.12 * baseForceStrength;

                // Find partner quark
                const partner = simParticles.find(other => other.id === p.partnerId);
                if (partner) {
                    const pdx = partner.x - p.x;
                    const pdy = partner.y - p.y;
                    const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
                    
                    // QCD potential: Constant force + Hooke force
                    const strongTension = (1.5 + pdist * 0.05) * baseForceStrength;
                    p.vx += (pdx / (pdist || 1)) * strongTension * 0.05;
                    p.vy += (pdy / (pdist || 1)) * strongTension * 0.05;

                    // Draw Confinement Gluon Tube (Wavy string) only once
                    if (p.charge === "red") {
                        drawGluonString(p.x, p.y, partner.x, partner.y, pdist);
                    }

                    // Hadronization check: if pulled too far, string breaks and spawns a new pair!
                    if (pdist > 95) {
                        const midX = (p.x + partner.x) / 2;
                        const midY = (p.y + partner.y) / 2;
                        
                        // Hadronization flash
                        sandboxCtx.fillStyle = "rgba(255, 255, 255, 0.9)";
                        sandboxCtx.beginPath();
                        sandboxCtx.arc(midX, midY, 15, 0, Math.PI * 2);
                        sandboxCtx.fill();

                        // Break pairing and create two new pairs
                        const randomId1 = "q_new_" + Math.random();
                        const randomId2 = "q_new_" + Math.random();

                        p.partnerId = randomId1;
                        partner.partnerId = randomId2;

                        // Create two new quarks at middle
                        const nq1 = {
                            id: randomId1,
                            type: "quark",
                            color: "rgba(16, 185, 129, 0.9)", // green
                            charge: "green",
                            x: midX - 5,
                            y: midY - 5,
                            vx: -p.vx * 0.5,
                            vy: -p.vy * 0.5,
                            size: 4,
                            partnerId: p.id
                        };
                        const nq2 = {
                            id: randomId2,
                            type: "quark",
                            color: "rgba(244, 63, 94, 0.9)", // red
                            charge: "red",
                            x: midX + 5,
                            y: midY + 5,
                            vx: -partner.vx * 0.5,
                            vy: -partner.vy * 0.5,
                            size: 4,
                            partnerId: partner.id
                        };

                        newParticles.push(nq1, nq2);
                    }
                }

                // Add drag
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.95;
                p.vy *= 0.95;

                // Draw quark
                sandboxCtx.fillStyle = p.color;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();

                // Accretion check
                if (dist <= horizonRadius) {
                    accreteParticle(p, i);
                }
            } 
            else if (p.type === "weak") {
                // Weak Force particle decay
                const dx = centerX - p.x;
                const dy = centerY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                p.vx += (dx / dist) * 0.08 * baseForceStrength;
                p.vy += (dy / dist) * 0.08 * baseForceStrength;

                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.96;
                p.vy *= 0.96;

                p.decayTimer -= 1 * baseForceStrength;

                // Draw yellow weak particle with decay trail
                sandboxCtx.fillStyle = p.color;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();

                // Decay trigger (Beta decay representation)
                if (p.decayTimer <= 0) {
                    // Explode into a lighter lepton (blue) and a neutrino (very faint)
                    for (let j = 0; j < 3; j++) {
                        const decayAngle = Math.random() * Math.PI * 2;
                        newParticles.push({
                            type: "decay_product",
                            x: p.x,
                            y: p.y,
                            vx: Math.cos(decayAngle) * 3 * baseForceStrength,
                            vy: Math.sin(decayAngle) * 3 * baseForceStrength,
                            life: 25,
                            size: 2,
                            color: j === 0 ? "rgba(147, 51, 234, 0.85)" : "rgba(255, 255, 255, 0.4)"
                        });
                    }
                    // Remove parent weak particle
                    simParticles.splice(i, 1);
                    continue;
                }

                // Accretion check
                if (dist <= horizonRadius) {
                    accreteParticle(p, i);
                }
            } 
            else if (p.type === "decay_product") {
                // Leptons/neutrinos produced in decay
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.95;
                p.vy *= 0.95;
                p.life -= 1;

                sandboxCtx.fillStyle = p.color;
                sandboxCtx.beginPath();
                sandboxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                sandboxCtx.fill();

                if (p.life <= 0) {
                    simParticles.splice(i, 1);
                }
            }
        }

        // Push new particles
        if (newParticles.length > 0) {
            simParticles.push(...newParticles);
        }

        // Helper: Accrete particle into the horizon
        function accreteParticle(particle, index) {
            const collisionAngle = Math.atan2(particle.y - centerY, particle.x - centerX);
            
            // Trigger horizon ripple
            horizonRipples.push({
                angle: collisionAngle,
                phase: 0,
                opacity: 1.0
            });

            // Increment accreted count
            accretedCount++;
            valParticlesText.innerText = accretedCount;
            updateEnergyStatus();

            // Transform this particle into an inner matricized quantum
            particle.isAccreted = true;
            particle.x = centerX + Math.cos(collisionAngle) * (horizonRadius - 8);
            particle.y = centerY + Math.sin(collisionAngle) * (horizonRadius - 8);
            particle.vx = -Math.cos(collisionAngle) * 1.5;
            particle.vy = -Math.sin(collisionAngle) * 1.5;
        }

        // Helper: Draw electric lightning arcs (EM force)
        function drawLightning(x1, y1, x2, y2, color) {
            sandboxCtx.strokeStyle = color;
            sandboxCtx.lineWidth = 1.5;
            sandboxCtx.beginPath();
            sandboxCtx.moveTo(x1, y1);

            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const segments = Math.max(3, Math.floor(dist / 12));

            let currentX = x1;
            let currentY = y1;

            for (let j = 1; j < segments; j++) {
                const ratio = j / segments;
                const tx = x1 + dx * ratio;
                const ty = y1 + dy * ratio;

                // Add random perpendicular jitter
                const jitter = (Math.random() - 0.5) * 8;
                const angle = Math.atan2(dy, dx) + Math.PI / 2;
                currentX = tx + Math.cos(angle) * jitter;
                currentY = ty + Math.sin(angle) * jitter;

                sandboxCtx.lineTo(currentX, currentY);
            }

            sandboxCtx.lineTo(x2, y2);
            sandboxCtx.stroke();
        }

        // Helper: Draw Gluon String / QCD Color Tube (Strong Force)
        function drawGluonString(x1, y1, x2, y2, distance) {
            sandboxCtx.strokeStyle = `rgba(239, 68, 68, ${0.5 + (distance / 100) * 0.4})`; // turns redder as stretched
            sandboxCtx.lineWidth = 2.5;
            sandboxCtx.beginPath();
            
            const dx = x2 - x1;
            const dy = y2 - y1;
            const steps = 30;
            const frequency = 4; // wave frequency
            const amplitude = Math.min(10, 2 + distance * 0.08); // vibrates more when stretched
            const timePhase = Date.now() * 0.025;

            for (let j = 0; j <= steps; j++) {
                const ratio = j / steps;
                const tx = x1 + dx * ratio;
                const ty = y1 + dy * ratio;
                
                // Sine wave perpendicular to line
                const perpAngle = Math.atan2(dy, dx) + Math.PI / 2;
                const offset = Math.sin(ratio * Math.PI * frequency + timePhase) * amplitude * Math.sin(ratio * Math.PI); // envelope limits amplitude at ends
                
                const wx = tx + Math.cos(perpAngle) * offset;
                const wy = ty + Math.sin(perpAngle) * offset;

                if (j === 0) sandboxCtx.moveTo(wx, wy);
                else sandboxCtx.lineTo(wx, wy);
            }
            sandboxCtx.stroke();
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
    const theoryMapMinZoom = 0.35;
    const theoryMapMaxZoom = 2.4;

    const hnmNodes = [
        {
            id: "axiom",
            symbol: "D",
            nameEn: "Super-Dirac Axiom",
            nameKo: "슈퍼 디랙 공리",
            mathCode: "\\mathcal{D}=\\begin{pmatrix}0&Q\\\\Q^\\dagger&0\\end{pmatrix}",
            descEn: "HNM starts from one Super-Dirac operator on a finite noncommutative matrix algebra. Spacetime, fields, and geometry are treated as structures extracted from this spectral datum.",
            descKo: "HNM은 유한 차원 비가환 행렬 대수 위의 하나의 슈퍼 디랙 연산자에서 출발합니다. 시공간, 장, 기하학은 이 스펙트럼 데이터에서 추출되는 구조로 정리됩니다.",
            sectionEn: "Full Treatise: Chapter 1",
            sectionKo: "풀버전 이론서: 제1장",
            doc: "06_horizon_unification_math.md",
            x: 0,
            y: -20,
            radius: 35,
            color: "rgba(251, 191, 36, 0.95)",
            borderColor: "rgba(251, 191, 36, 0.4)",
            hoverColor: "#fbbf24"
        },
        {
            id: "horizon",
            symbol: "R_H",
            nameEn: "Horizon Information Bound",
            nameKo: "지평선 정보 한계",
            mathCode: "N \\propto R_H^2",
            descEn: "The horizon is interpreted as an algebraic information-capacity limit, not merely a surface inside pre-existing spacetime. This links finite light speed, minimum length, entropy, and gravity.",
            descKo: "지평선은 이미 존재하는 시공간 속의 표면이 아니라 관찰 가능한 정보 용량의 대수적 한계로 해석됩니다. 여기서 빛의 유한 속도, 최소 길이, 엔트로피, 중력이 연결됩니다.",
            sectionEn: "Full Treatise: Section 1.2",
            sectionKo: "풀버전 이론서: 1.2절",
            doc: "06_horizon_unification_math.md",
            x: -240,
            y: -160,
            radius: 27,
            color: "rgba(236, 72, 153, 0.95)",
            borderColor: "rgba(236, 72, 153, 0.4)",
            hoverColor: "#ec4899"
        },
        {
            id: "fock",
            symbol: "F_N",
            nameEn: "Matrix Fock Expansion",
            nameKo: "행렬 포크 공간 팽창",
            mathCode: "\\mathcal{H}_{\\text{Fock}}=\\bigoplus_N\\mathcal{H}_N",
            descEn: "Cosmic expansion is modeled as growth of the matrix representation dimension. The transition N to N+1 adds coordinate degrees of freedom and horizon information capacity.",
            descKo: "우주 팽창은 행렬 표현 차원 자체의 성장으로 모델링됩니다. $N \\to N+1$ 전이는 좌표 자유도와 지평선 정보 용량의 증가를 뜻합니다.",
            sectionEn: "Full Treatise: Section 1.3 and Chapter 4",
            sectionKo: "풀버전 이론서: 1.3절 및 제4장",
            doc: "06_horizon_unification_math.md",
            x: -430,
            y: -40,
            radius: 27,
            color: "rgba(14, 165, 233, 0.95)",
            borderColor: "rgba(14, 165, 233, 0.4)",
            hoverColor: "#0ea5e9"
        },
        {
            id: "action",
            symbol: "S",
            nameEn: "HNM Master Action",
            nameKo: "HNM 마스터 작용량",
            mathCode: "S_{\\text{HNM}}=\\text{Tr}((QQ^\\dagger)^2)",
            descEn: "The chiral spectral action is the central dynamical equation. In the matrix limit it yields an IKKT/BFSS-type action for coordinates and spinors.",
            descKo: "카이랄 스펙트럼 작용량은 이론의 중심 동역학입니다. 행렬 극한에서 좌표와 스피너를 위한 IKKT/BFSS형 작용량으로 환원됩니다.",
            sectionEn: "Full Treatise: Chapter 2",
            sectionKo: "풀버전 이론서: 제2장",
            doc: "06_horizon_unification_math.md",
            x: -230,
            y: 120,
            radius: 29,
            color: "rgba(6, 182, 212, 0.95)",
            borderColor: "rgba(6, 182, 212, 0.4)",
            hoverColor: "#06b6d4"
        },
        {
            id: "ward",
            symbol: "Tr_s",
            nameEn: "Vacuum-Energy Constraint",
            nameKo: "진공 에너지 구속조건",
            mathCode: "\\text{Tr}_{s}(\\mathcal{D}^4)\\equiv0",
            descEn: "The supersymmetric supertrace identity is read as a constraint pairing bosonic and fermionic spectral contributions, separating chiral dynamics from bulk vacuum-energy cancellation.",
            descKo: "초대칭 초대각합 항등식은 보손과 페르미온 스펙트럼 기여를 짝짓는 구속조건으로 읽힙니다. 카이랄 동역학과 벌크 진공 에너지 상쇄를 구분합니다.",
            sectionEn: "Full Treatise: Section 2.2",
            sectionKo: "풀버전 이론서: 2.2절",
            doc: "06_horizon_unification_math.md",
            x: 0,
            y: -190,
            radius: 28,
            color: "rgba(168, 85, 247, 0.95)",
            borderColor: "rgba(168, 85, 247, 0.4)",
            hoverColor: "#a855f7"
        },
        {
            id: "classical",
            symbol: "G_YM",
            nameEn: "Classical Field Limit",
            nameKo: "고전 장 이론 극한",
            mathCode: "[X^b,[X_b,X_a]]+\\frac12\\bar{\\Psi}\\Gamma_a\\Psi=0",
            descEn: "In the large-N limit, commutators become curvature and field strength. Gravity, Yang-Mills theory, and the Dirac equation are organized as effective faces of one matrix dynamics.",
            descKo: "큰 $N$ 극한에서 교환자는 곡률과 장세기로 해석됩니다. 중력, 양-밀스 이론, 디랙 방정식은 하나의 행렬 동역학의 서로 다른 유효 표현으로 정리됩니다.",
            sectionEn: "Full Treatise: Section 2.3",
            sectionKo: "풀버전 이론서: 2.3절",
            doc: "06_horizon_unification_math.md",
            x: 0,
            y: 160,
            radius: 28,
            color: "rgba(34, 197, 94, 0.95)",
            borderColor: "rgba(34, 197, 94, 0.4)",
            hoverColor: "#22c55e"
        },
        {
            id: "d10",
            symbol: "D=10",
            nameEn: "D=10 Consistency",
            nameKo: "D=10 일관성",
            mathCode: "D-2\\in\\{1,2,4,8\\}",
            descEn: "Supersymmetric Fierz identities, Majorana-Weyl spinors, and normed division algebras select the 10-dimensional consistency branch emphasized in the full treatise.",
            descKo: "초대칭 Fierz 항등식, 마요라나-바일 스피너, 노름 나눗셈 대수가 결합되어 풀버전에서 강조하는 10차원 일관성 가지를 선택합니다.",
            sectionEn: "Full Treatise: Chapter 3",
            sectionKo: "풀버전 이론서: 제3장",
            doc: "06_horizon_unification_math.md",
            x: 240,
            y: -160,
            radius: 28,
            color: "rgba(244, 63, 94, 0.95)",
            borderColor: "rgba(244, 63, 94, 0.4)",
            hoverColor: "#f43f5e"
        },
        {
            id: "compact",
            symbol: "A_F",
            nameEn: "SM Fuzzy Compactification",
            nameKo: "표준모형 퍼지 콤팩트화",
            mathCode: "\\mathcal{A}_F\\cong\\mathbb{C}\\oplus\\mathbb{H}\\oplus\\text{Mat}_3(\\mathbb{C})",
            descEn: "The internal fuzzy sector CP^2_F x S^2_F is used to organize Standard Model gauge symmetry, three generations, Higgs structure, and neutrino masses.",
            descKo: "내부 퍼지 부문 $CP^2_F \\times S^2_F$는 표준모형 게이지 대칭, 3세대, 힉스 구조, 중성미자 질량을 정리하는 역할을 합니다.",
            sectionEn: "Full Treatise: Chapters 1 and 6",
            sectionKo: "풀버전 이론서: 제1장 및 제6장",
            doc: "06_horizon_unification_math.md",
            x: 430,
            y: -40,
            radius: 27,
            color: "rgba(16, 185, 129, 0.95)",
            borderColor: "rgba(16, 185, 129, 0.4)",
            hoverColor: "#10b981"
        },
        {
            id: "cosmology",
            symbol: "q",
            nameEn: "Eigenvalue Cosmology",
            nameKo: "고윳값 우주론",
            mathCode: "q_{\\text{vacuum}}=-1",
            descEn: "Free-probabilistic eigenvalue droplets, instanton tunneling, and the Vandermonde barrier are used to connect de Sitter-like expansion with a Big Bounce scenario.",
            descKo: "자유 확률론적 고윳값 액적, 인스턴톤 터널링, 판데르몬데 장벽을 통해 드 시터형 팽창과 빅 바운스 시나리오를 연결합니다.",
            sectionEn: "Full Treatise: Chapters 4 and 5",
            sectionKo: "풀버전 이론서: 제4장 및 제5장",
            doc: "06_horizon_unification_math.md",
            x: 250,
            y: 125,
            radius: 28,
            color: "rgba(59, 130, 246, 0.95)",
            borderColor: "rgba(59, 130, 246, 0.4)",
            hoverColor: "#3b82f6"
        },
        {
            id: "erepr",
            symbol: "ER",
            nameEn: "ER=EPR & Dark Matter",
            nameKo: "ER=EPR과 암흑 물질",
            mathCode: "\\rho_{\\text{DM}}\\propto a^{-3}",
            descEn: "Off-diagonal matrix blocks are interpreted as entanglement channels. The same sector is used to model cold dark matter as frozen Kaluza-Klein remnants.",
            descKo: "비대각 행렬 블록은 얽힘 채널로 해석됩니다. 같은 부문에서 암흑 물질은 얼어붙은 Kaluza-Klein 잔존물로 모델링됩니다.",
            sectionEn: "Full Treatise: Chapter 7",
            sectionKo: "풀버전 이론서: 제7장",
            doc: "06_horizon_unification_math.md",
            x: -430,
            y: 190,
            radius: 28,
            color: "rgba(99, 102, 241, 0.95)",
            borderColor: "rgba(99, 102, 241, 0.4)",
            hoverColor: "#6366f1"
        },
        {
            id: "time",
            symbol: "Δ^it",
            nameEn: "Modular Time & Gravity",
            nameKo: "모듈러 시간과 중력",
            mathCode: "\\sigma_s(A)=\\Delta^{-is}A\\Delta^{is}",
            descEn: "Time is treated as emergent modular flow. Entanglement thermodynamics then supplies the route from matrix states to Einstein-like gravitational equations.",
            descKo: "시간은 창발적 모듈러 흐름으로 취급됩니다. 얽힘 열역학은 행렬 상태에서 아인슈타인형 중력 방정식으로 가는 경로를 제공합니다.",
            sectionEn: "Full Treatise: Chapters 8 and 9",
            sectionKo: "풀버전 이론서: 제8장 및 제9장",
            doc: "06_horizon_unification_math.md",
            x: -150,
            y: 320,
            radius: 28,
            color: "rgba(234, 88, 12, 0.95)",
            borderColor: "rgba(234, 88, 12, 0.4)",
            hoverColor: "#ea580c"
        },
        {
            id: "predictions",
            symbol: "Obs",
            nameEn: "Falsifiable Signatures",
            nameKo: "반증 가능한 관측 신호",
            mathCode: "n_T=+0.0215\\pm0.0005",
            descEn: "The prediction layer collects proposed signatures: minimum length corrections, area quantization, Hawking lines, heavy KK dark matter, blue-tilted primordial waves, and holographic noise.",
            descKo: "예측 층은 최소 길이 보정, 면적 양자화, 호킹 방출선, 무거운 KK 암흑 물질, 청색 기울기 원시 중력파, 홀로그래픽 노이즈를 관측 신호로 모읍니다.",
            sectionEn: "Full Treatise: Chapter 10",
            sectionKo: "풀버전 이론서: 제10장",
            doc: "06_horizon_unification_math.md",
            x: 130,
            y: 320,
            radius: 28,
            color: "rgba(217, 70, 239, 0.95)",
            borderColor: "rgba(217, 70, 239, 0.4)",
            hoverColor: "#d946ef"
        },
        {
            id: "strings",
            symbol: "Σ_g",
            nameEn: "Emergent Strings",
            nameKo: "창발적 끈 이론",
            mathCode: "F=\\sum_g N^{2-2g}\\mathcal{F}_g",
            descEn: "String worldsheets are read as the large-N ribbon-graph expansion of the matrix path integral. String theory becomes a perturbative shadow, not the starting axiom.",
            descKo: "끈 세계면은 행렬 경로적분의 큰 $N$ 리본 그래프 전개로 읽힙니다. 끈 이론은 출발 공리가 아니라 섭동적 그림자로 정리됩니다.",
            sectionEn: "Full Treatise: Chapters 11 and 12",
            sectionKo: "풀버전 이론서: 제11장 및 제12장",
            doc: "06_horizon_unification_math.md",
            x: 430,
            y: 215,
            radius: 27,
            color: "rgba(20, 184, 166, 0.95)",
            borderColor: "rgba(20, 184, 166, 0.4)",
            hoverColor: "#14b8a6"
        }
    ];

    const hnmLinks = [
        { from: "axiom", to: "horizon" },
        { from: "axiom", to: "fock" },
        { from: "axiom", to: "action" },
        { from: "axiom", to: "ward" },
        { from: "axiom", to: "d10" },
        { from: "action", to: "classical" },
        { from: "d10", to: "compact" },
        { from: "fock", to: "cosmology" },
        { from: "horizon", to: "time" },
        { from: "horizon", to: "erepr" },
        { from: "cosmology", to: "erepr" },
        { from: "cosmology", to: "predictions" },
        { from: "classical", to: "predictions" },
        { from: "compact", to: "predictions" },
        { from: "action", to: "strings" },
        { from: "strings", to: "predictions" }
    ];

    function resizeTheoryMapCanvas() {
        if (!theoryMapCanvas) return;
        const rect = theoryMapCanvas.parentElement.getBoundingClientRect();
        theoryMapCanvas.width = rect.width;
        theoryMapCanvas.height = rect.height;
    }

    function fitTheoryMapToViewport() {
        if (!theoryMapCanvas || !hnmNodes.length) return;

        const paddingX = 85;
        const paddingY = 90;
        const minX = Math.min(...hnmNodes.map(node => node.x - node.radius)) - paddingX;
        const maxX = Math.max(...hnmNodes.map(node => node.x + node.radius)) + paddingX;
        const minY = Math.min(...hnmNodes.map(node => node.y - node.radius)) - paddingY;
        const maxY = Math.max(...hnmNodes.map(node => node.y + node.radius)) + paddingY;
        const mapWidth = maxX - minX;
        const mapHeight = maxY - minY;
        const availableWidth = Math.max(280, theoryMapCanvas.width - 56);
        const availableHeight = Math.max(280, theoryMapCanvas.height - 56);

        theoryMapZoom = Math.min(0.82, availableWidth / mapWidth, availableHeight / mapHeight);
        theoryMapZoom = Math.max(theoryMapMinZoom, Math.min(theoryMapZoom, theoryMapMaxZoom));
        theoryMapPan = {
            x: -((minX + maxX) / 2) * theoryMapZoom,
            y: -((minY + maxY) / 2) * theoryMapZoom
        };
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
        const linkLabel = state.currentLang === "en" ? "Related Source" : "관련 원문";
        const linkDoc = node.doc || "06_horizon_unification_math.md";
        const linkName = state.currentLang === "en"
            ? (node.sectionEn || "Open HNM Full Treatise")
            : (node.sectionKo || "HNM 풀버전 이론서 열기");

        nodeDetails.innerHTML = `
            <div class="detail-node-name">${name}</div>
            <div class="detail-node-math">$$${node.mathCode}$$</div>
            <div class="detail-node-desc">${desc}</div>
            <div class="detail-node-links">
                <span class="detail-node-links-title">${linkLabel}</span>
                <a href="#doc=${encodeURIComponent(linkDoc)}" class="detail-node-link-item link" data-doc-target="${linkDoc}">
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
                showDocument(linkDoc, { updateHash: true });
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
        
        fitTheoryMapToViewport();
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
                const symbolFontSize = Math.max(13, Math.min(20, 13 / theoryMapZoom));
                theoryMapCtx.font = `bold ${symbolFontSize}px 'JetBrains Mono', monospace`;
                theoryMapCtx.fillStyle = isSelected ? "#000" : "#ffffff";
                theoryMapCtx.textAlign = "center";
                theoryMapCtx.textBaseline = "middle";
                theoryMapCtx.fillText(node.symbol, node.x, node.y);

                // Draw name below
                const name = state.currentLang === "en" ? node.nameEn : node.nameKo;
                const labelFontSize = Math.max(12, Math.min(18, 12 / theoryMapZoom));
                theoryMapCtx.font = `600 ${labelFontSize}px 'Outfit', 'Noto Sans KR', sans-serif`;
                theoryMapCtx.fillStyle = isSelected ? "#c084fc" : (isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.65)");
                theoryMapCtx.fillText(name, node.x, node.y + radius + (18 / theoryMapZoom));
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
                theoryMapZoom = Math.min(theoryMapZoom * zoomFactor, theoryMapMaxZoom);
            } else {
                theoryMapZoom = Math.max(theoryMapZoom / zoomFactor, theoryMapMinZoom);
            }

            // Zoom centering adjustment
            theoryMapPan.x -= worldPos.x * (theoryMapZoom - previousZoom);
            theoryMapPan.y -= worldPos.y * (theoryMapZoom - previousZoom);
        });

        window.addEventListener("resize", () => {
            resizeTheoryMapCanvas();
            if (state.activeView === "theory-map-view") {
                fitTheoryMapToViewport();
            }
        });
    }
});
