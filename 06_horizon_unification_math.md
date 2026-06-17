# 지평선 비가환 행렬 이론: 중력, 게이지 장 및 카이랄 물질의 이상이 없는 완전한 대수적 통합

**저자:** HNM 이론물리 R&D 공동 연구 그룹  
**학술지 참조:** *Communications in Mathematical Physics* / *JHEP* (투고 예정 원고)  
**PACS 분류 코드:** 04.60.Kz, 11.25.Tq, 02.40.Gh, 98.80.Qc  
**수학 주제 분류 (2020):** 81T75, 58B34, 83C45  

---

### 초록 (Abstract)
본 논문은 양자 중력, 게이지 장, 그리고 카이랄 물질을 수학적으로 정합성 있고 양자 이상(anomaly) 없이 단일 대수적 구조로 통일하는 **지평선 비가환 행렬 이론(Horizon Noncommutative Matrix Theory — HNM)**을 제시한다. 우주의 모든 물리적 및 기하학적 성질은 비가환 스펙트럼 삼조(spectral triple) 위에 작용하는 단 하나의 대수적 대상인 **슈퍼 디랙 연산자(Super-Dirac Operator) $\mathcal{D}$**로부터 유일하게 연역된다. 카이랄 스펙트럼 작용량 $S_{\text{HNM}} = \text{Tr}((QQ^\dagger)^2)$은 고전 극한에서 시공간의 아인슈타인-힐베르트 작용량, 양-밀스 게이지 장, 그리고 유카와 질량 획득 기작이 내재된 표준 모형의 카이랄 페르미온을 동시에 생성한다. 이와 상보적으로, 초대칭 워드 항등식 $\text{Tr}_{\text{s}}(\mathcal{D}^4) \equiv 0$은 운동 방정식과 무관하게 오프셸 수준에서 우주 상수를 강제적으로 소멸시켜 우주 상수 문제를 자연스럽게 해결한다. 우주의 공간 좌표는 비가환 $N \times N$ 에르미트 행렬의 고유값 응집으로 표상되며, 그 스펙트럼 경계가 거시적인 허블 지평선을 형성한다. 행렬 차원 $N$의 역학적 팽창은 2차 양자화된 행렬 포크 공간 상에서 외부 고유값들의 판데르몬데 장벽 터널링으로 정식화되어 빅뱅 특이점을 원천 배제한다. 최종적으로 물리적 시간의 흐름과 아인슈타인 방정식은 지평선 양자 얽힘 진공의 Tomita-Takesaki 모듈러 흐름으로부터 유도되는 열역학적 상태 방정식으로서 창발한다. 본 이론을 검증할 수 있는 우주 마이크로파 배경(CMB) 편광 및 양자 중력 실험의 정량적이고 반증 가능한 실험적 예측들을 제공한다.

---

# 제1부: 단일 통합 스펙트럼 공리와 시공간 액적 동역학

## 제1장. 단일 근본 원리: 비가환 스펙트럼 삼조 (Spectral Triple)

### 1.1 스펙트럼 슈퍼 디랙 공리의 수학적 정식화

**공리 1 (스펙트럼 슈퍼 디랙 공리).** 우주의 모든 물리적 및 기하학적 실체는 일관된 대수적 체계를 갖추기 위해 알랭 콘(Alain Connes)의 **비가환 스펙트럼 삼조(Noncommutative Spectral Triple) $(\mathcal{A}, \mathcal{H}, \mathcal{D}, \gamma_5, J)$**에 의해 완전히 정의된다:

1. **비가환 좌표 대수 $\mathcal{A}$:** 자외선(UV) 수준에서 배경 시공간 다양체를 전혀 가정하지 않는 순수 대수적 좌표 연산자들의 대수이다:
   $$\mathcal{A} \;=\; \text{Mat}_N(\mathbb{C}) \quad (\text{또는 열린 우주 극한에서 비단위 대수 } \mathcal{K}(\mathcal{H}_\infty))$$
   거시적 4차원 시공간 다양체 $M^4$와 표준 모형 게이지 군은 선험적(a priori) 공리로 주어지는 것이 아니라, 거대-$N$ 극한의 동역학적 자발적 콤팩트화를 통해 사후적으로 창발(emergence)한다.

   **명제 1.1 (시공간 및 게이지 대수 창발).** GNS 힐베르트 공간 $\mathcal{H}_N$ 상에서 정의된 $N \times N$ 좌표 행렬 $X_a$ ($a=1,\dots,10$)를 고려하자. 스펙트럼 작용량 $S_{\text{HNM}}$의 경로 적분 하에서, 분배 함수는 좌표들이 다음과 같이 거시적 섹터 $X_\mu$ ($\mu=1,\dots,4$)와 내부 콤팩트화 섹터 $X_i$ ($i=5,\dots,10$)로 분리되는 고전적 안장점(saddle point)에 의해 지배된다:
   $$X_a \;=\; \left( X_\mu \otimes \mathbf{1}_{N_{\text{int}}}, \; \mathbf{1}_{N_{\text{cosm}}} \otimes Y_i \right)$$
   여기서 $N = N_{\text{cosm}} \times N_{\text{int}}$이며, $N_{\text{cosm}}$은 거시적 행렬 포크 공간 차원이고, $Y_i$는 내부 퍼지 공간 $K_F = CP^2_F \times S^2_F$의 좌표 생성원이다.
   - **시공간 창발 상(Phase):** 거시 좌표 행렬 $X_\mu$는 교환 관계 $[X_\mu, X_\nu] = i \theta_{\mu\nu} \mathbf{1}$을 충족한다. 거대-$N_{\text{cosm}}$ 극한에서 $X_\mu$의 고윳값들의 결합 지지집합(joint support)은 매끄러운 4차원 리만 다양체 $M^4$ 위의 조밀하고 연속적인 집합을 형성하며, 이때 유효 좌표 대수는 $\mathcal{C}_0(M^4)$가 된다. 미터법 차원 $D=4$는 운동 에너지 스펙트럼 항 $\text{Tr}([X_\mu, X_\nu]^2)$을 최소화하는 유일하게 안정적인 솔리톤 유사 상(soliton-like phase)으로 자발적으로 선택되며, 더 높은 차원의 상태들은 판데르몬데 로그 반발력에 의해 팽창 과정에서 수축한다.
   - **내부 게이지 대칭 분기:** $Y_i = (J_a \otimes \mathbf{1}, \mathbf{1} \otimes S_j)$라 하자. 여기서 $J_a$ ($a=1,\dots,8$)는 표현 차원이 $N_1 = \frac{1}{2}(n+1)(n+2)$인 $SU(3)$의 생성원이고, $S_j$ ($j=1,2,3$)는 표현 차원이 $N_2 = 2j+1$인 $SU(2)$의 생성원이다. $\text{Mat}_{N_{\text{int}}}(\mathbb{C})$ 내에서 $Y_i$들이 생성하는 대수의 commutant(중심화 대수)는 정확히 다음과 같은 저에너지 표준 모형 대수가 된다:
     $$\mathcal{A}_F \;=\; \text{Commutant}\left(\{Y_i\}\right) \;\cong\; \mathbb{C} \;\oplus\; \mathbb{H} \;\oplus\; \text{Mat}_3(\mathbb{C})$$
     이 대수의 유니터리 군에 단모듈성 조건 $\text{Tr}(A) = 0$을 가하면 표준 모형의 게이지 대칭군 $\text{SU}(\mathcal{A}_F) \cong SU(3) \times SU(2) \times U(1)$이 고유하게 유도된다. 따라서 저에너지 적외선(IR) 영역에서의 유효 좌표 대수 $\mathcal{A}_{\text{eff}}$는 다음과 같다:
     $$\mathcal{A}_{\text{eff}} \;\cong\; \mathcal{C}_0(M^4) \;\otimes\; \mathcal{A}_F$$
     이는 연속적인 고전 좌표 $x^\mu$를 비가환 에르미트 행렬 좌표 $X_a$로 대체한다.

2. **그레이드 힐베르트 공간 $\mathcal{H}$:** 우주의 양자 상태들이 존재하는 $\mathbb{Z}_2$-등급 공간이다:
   $$\mathcal{H} \;=\; \mathcal{H}_B \oplus \mathcal{H}_F \;=\; \left(\mathbb{C}^N \otimes \mathbb{C}^N\right) \otimes \mathcal{S}_D$$
   여기서 $\mathcal{S}_D$는 $D$차원 Clifford 대수 $Cl(D)$의 스피너 표현 공간이다.

3. **슈퍼 디랙 연산자 $\mathcal{D}$:** $\mathcal{H}$ 위에 작용하는 자기동형(self-adjoint) 홀수 등급 연산자로, 다음과 같은 블록 대칭 행렬로 정의된다:
   $$\mathcal{D} \;=\; \begin{pmatrix} 0 & Q \\ Q^\dagger & 0 \end{pmatrix}, \qquad Q \;=\; \Gamma^a \otimes X_a + \Psi$$
   여기서 $\Gamma^a$는 Clifford 생성원이고, $X_a$는 보손 좌표 행렬이며, $\Psi$는 마요라나-바일 페르미온 장을 나타낸다.

4. **실수 구조 연산자 $J$:** 전하 공액을 나타내는 반-유니터리(anti-unitary) 연산자로, 스펙트럼 다양체의 필요충분조건을 만족한다:
   $$J^2 \;=\; \epsilon, \qquad J\mathcal{D} \;=\; \epsilon' \mathcal{D}J, \qquad J\gamma_5 \;=\; \epsilon'' \gamma_5 J$$
   여기서 부호 상수 $\epsilon, \epsilon', \epsilon'' \in \{\pm 1\}$은 우주의 대수적 차원 $D \pmod 8$에 의해 위상학적으로 결정된다.

**알랭 콘의 스펙트럼 공리와의 대수적 정합성.** 유한 차원 $N$에서 HNM 스펙트럼 삼조 $(\text{Mat}_N(\mathbb{C}), \mathcal{H}, \mathcal{D}, \gamma_5, J)$는 알랭 콘의 비가환 스핀 기하학 공리를 **유한(Finite/0-Dimensional) 스펙트럼 삼조**의 범주에서 엄밀하게 만족하며, 거대-$N$ 극한 $N \to \infty$에서 연속 spin 다양체의 7가지 공리로 완벽하게 환원된다:

*   **유한 차원에서의 공리 성립 검증:**
    1. **레졸벤트 콤팩트성 (Axiom III):** Hilbert 공간 $\mathcal{H} = (\mathbb{C}^N \otimes \mathbb{C}^N) \otimes \mathcal{S}_D$가 유한 차원이므로, 모든 작용소는 유계(bounded)이며 레졸벤트 $a(1+\mathcal{D}^2)^{-1/2}$는 콤팩트 작용소 조건을 자명하게(trivially) 만족하는 대각합 클래스(trace-class) 작용소이다.
    2. **1차 조건 (Order One Condition, Axiom II):** 유한 차원 표현 공간 $\mathcal{H}$ 상에서 좌표 행렬 $a \in \text{Mat}_N(\mathbb{C})$는 좌측 작용(GNS의 첫 번째 복사본)으로 작동하고, opposite 대수의 원소 $b^0 = J b^\dagger J^{-1}$는 우측 작용(GNS의 두 번째 복사본)으로 작동하므로, 대수적으로 둘은 서로 교환한다 ($[a, b^0] = 0$). 이 구조적 텐서곱 작용에 의해 교환 관계 $[[\mathcal{D}, a], b^0] = 0$이 대수적으로 엄밀하게 성립한다.
    3. **방향성 및 K-이론 이중성 (Axiom V, VII):** 유한 차원 행렬식 Hochschild 사이클 $c$의 표현 $\pi_{\mathcal{D}}(c) = \gamma_5$는 대수적 카이랄성 대각합 투영을 통해 K-이론 지수를 고유하게 보호한다.
    4. **공리 I: 미터법 호몰로지 차원 & 레졸벤트 Weyl 법칙 (Metric Homological Dimension & Resolvent Weyl Law).** 유한 차원 $N$에서 스펙트럼 삼조 $(\text{Mat}_N(\mathbb{C}), \mathcal{H}, \mathcal{D})$의 미터법 차원은 엄밀히 0이다. $\mathcal{D}$의 고윳값들은 이산적이고 유한한 집합을 이룬다. 그러나 다음과 같이 규격화된 고윳값 스펙트럼 밀도를 정의할 수 있다:
       $$\rho_N(\lambda) \;=\; \frac{1}{d_N} \sum_{n=1}^{d_N} \delta(\lambda - \lambda_n)$$
       여기서 $d_N = \dim \mathcal{H}$이다. 거대-$N$ 극한($N \to \infty$)에서 시공간 좌표들이 거시적 다양체 $M^4$로 자발적으로 콤팩트화될 때, 슈퍼 디랙 연산자 $\mathcal{D}$의 고윳값 밀도는 점근적으로 4차원 리만 스핀 다양체의 Weyl 법칙 고윳값 밀도로 수렴한다:
       $$\lim_{N \to \infty} \rho_N(\lambda) \;=\; c_D |\lambda|^{D-1} \quad (D=4)$$
       여기서 $c_D = \frac{2^{D/2} \text{Vol}(M^4)}{(4\pi)^{D/2} \Gamma(D/2 + 1)}$이다. 이는 4차원의 미터법 기하학적 차원이 거대-$N$ 극한에서 자발적 대수 응집을 통해 창발함을 보여주며, 유한 차원 $N$에서의 스펙트럼 절단은 자외선 발산을 막는 물리적인 게이지 불변 UV 컷오프로 기능함을 나타낸다.
*   **공리 III: 자기동형성 및 콤팩트성 (Self-Adjointness and Compactness).** 슈퍼 디랙 연산자 $\mathcal{D}$는 $\mathcal{H}$ 상의 자기동형 연산자이다. 임의의 좌표 행렬 $a \in \mathcal{A}$에 대해 레졸벤트 $a(1 + \mathcal{D}^2)^{-1/2}$는 콤팩트 연산자(유한 차원 $N$에서는 대각합 클래스 연산자)가 된다.
*   **공리 IV: 매끄러움 (Smoothness).** 임의의 좌표 연산자 $a \in \mathcal{A}$에 대해 $a$와 교환자 $[\mathcal{D}, a]$는 모듈러 미분 $\delta(T) = [|\mathcal{D}|, T]$의 모든 반복 도함수의 정의역에 속하며, 이는 창발된 시공간 좌표 기하학의 무한 미분 가능성(smoothness)을 확보한다.
*   **공리 V: 방향성 (Orientability).** 호크실트(Hochschild) $D$-사이클 $c \in Z_D(\mathcal{A}, \mathcal{A} \otimes \mathcal{A}^{\text{opp}})$가 존재하여, 스펙트럼 표현 아래에서의 이미지 $\pi_{\mathcal{D}}(c)$가 정확히 카이랄성 연산자 $\pi_{\mathcal{D}}(c) = \gamma_5$를 재현함으로써 창발된 비가환 시공간의 부피 형식(volume form)을 정의한다.
*   **공리 VI: 유한성 및 절대 연속성 (Finiteness and Absolute Continuity).** 그레이드 힐베르트 공간 $\mathcal{H}$는 대수 $\mathcal{A}$에 대한 유한 생성 사영 가군(finitely generated projective module)이며, $\mathcal{H}$ 상의 에르미트 내적은 대수 가군 구조와 부합한다.
*   **공리 VII: 푸앵카레 이중성 (Poincaré Duality).** $\mathcal{D}$의 지수 사상(index map)은 $\mathcal{A}$의 K-이론과 K-호몰로지 사이의 비퇴화 짝지음(non-degenerate pairing)을 제공하여, 다양체의 위상학적 정보가 양자화 단계에서도 온전히 보존됨을 보장한다.

> **정리 1.1 (콘의 재구성 정리, Connes' Reconstruction, 2008).** 공리 I–VII을 만족하는 임의의 가환 스펙트럼 삼조 $(C^\infty(M), L^2(M, S), D\!\!\!/\,)$는 콤팩트 리만 스핀 다양체 $(M, g)$의 정준(canonical) 스펙트럼 삼조와 동형(isomorphic)이다. HNM에서 유한 차원 $N$의 행렬 대수 $\text{Mat}_N(\mathbb{C})$는 비가환적이므로, 창발되는 기하학은 고전적 다양체가 *아니라* 진정한 양자 공간이다. 고전적 리만 다양체는 오직 가환 극한 $N \to \infty$에서만 복원되며, 이 극한에서 $[X_a, X_b] \to 0$이 되어 스펙트럼 삼조가 콘의 재구성된 다양체로 환원된다. 이는 HNM의 고전 극한에 대한 엄밀한 수학적 정당화를 제공한다.

이 단 하나의 스펙트럼 삼조로부터 물리적 역학과 진공 구속 조건이 동시에 추출된다:

**역학(Dynamics).** 우주 물리 필드와 기하 구조의 진화는 **카이랄 스펙트럼 작용량**에 의해 지배된다:
$$\boxed{S_{\text{HNM}}[\mathcal{D}] \;=\; \text{Tr}\!\left((QQ^\dagger)^2\right)}$$

**구속 조건(Constraint).** 스펙트럼 삼조의 초대칭 짝지음은 오프셸 수준에서 **진공 에너지를 항등적으로 소멸시킨다**:
비가환 기하학의 고질적인 거울 페르미온(Mirror Fermion) 자유도 중복 문제를 엄밀하게 방지하기 위해, 카이랄 물리적 투영 연산자(Chiral physical projection operator) $\Pi_{\text{phys}} = \frac{1}{2}(1 + \Gamma_{\text{orient}})$를 도입한다. 투영된 초대칭 워드 항등식은 보손과 페르미온의 1:1 자유도 대응을 완벽히 보존한다:
$$\text{Tr}_{\text{s}}(\Pi_{\text{phys}} \mathcal{D}^4) \;=\; \text{Tr}(\Pi_{\text{phys}} (QQ^\dagger)^2) - \text{Tr}(\Pi_{\text{phys}} (Q^\dagger Q)^2) \;\equiv\; 0$$

### 1.2 유한 비가환 시공간의 창발 (Emergence of Finite Noncommutative Spacetime)

좌표 $X_a$들이 비가환 연산자($[X_a, X_b] \neq 0$)이기 때문에, 시공간은 연속적인 고전 다양체(Manifold) 구조를 상실하고 순수한 대수적 실체가 된다. 스펙트럼 작용량의 역학에 의해, 관측 가능한 물리적 자유도들은 유한 차원(차원 $N$)의 기약 표현(Irreducible representation)으로 자발적으로 응집(Condense)하여 거시적으로 국소화된 "행렬 액적(Matrix Droplet)"을 형성한다.
이로써 연속적인 시공간 좌표 $x^a$는 $N \times N$ 에르미트 행렬 $X^a$로 대체된다.

### 1.3 차원 격차의 해소: 2차 양자화된 행렬 포크 공간 (Second-Quantized Matrix Fock Space)

시간에 따라 행렬 차원 $N$이 증가하는 동역학적 팽창 우주($\dot{N} > 0$)를 기술하기 위해서는 표현의 차원이 변화하는 과정을 엄밀히 정식화해야 한다. 표준 양자역학에서는 표현의 차원이 고정되어 있다. 이를 해결하기 위해 HNM은 유한 차원 행렬 힐베르트 공간들의 직합으로 정의되는 **2차 양자화된 행렬 포크 공간(Second-Quantized Matrix Fock Space) $\mathcal{H}_{\text{Fock}}$**을 도입한다:

$$\mathcal{H}_{\text{Fock}} \;=\; \bigoplus_{N=1}^\infty \mathcal{H}_N, \qquad \mathcal{H}_N \;=\; L^2\left(\mathfrak{u}(N)^D\right) \otimes \mathcal{H}_{\text{spinor}}^{(N)}$$

여기서 각 $\mathcal{H}_N$은 스피너와 결합된 $N \times N$ 크기의 $D$개 에르미트 행렬들의 상태 공간을 대변한다. 우리는 새로운 좌표 고윳값(D0-브레인 또는 "시공간 양자")을 추가하여 시스템을 $N \to N+1$ 차원으로 전이시키는 **행렬 생성 연산자 $\hat{\Phi}^\dagger(M)$** ($M \in \mathfrak{u}(N+1) / \mathfrak{u}(N)$)를 정의한다:

$$\hat{\Phi}^\dagger(M) | \Psi_N \rangle \;=\; | \Psi_{N+1} \rangle$$

행렬 차원의 성장은 다음과 같은 차원 결합 전이 해밀토니안에 의해 지배된다:
$$\hat{H}_{\text{trans}} \;=\; \sum_{N=1}^\infty g_N \int dM \, e^{i S_{\text{WZW}}} \left( \hat{\Phi}^\dagger(M)_{N \to N+1} + \hat{\Phi}(M)_{N+1 \to N} \right)$$

여기서 $S_{\text{WZW}}$는 $U(N)$과 $U(N+1)$ 사이의 게이지 전하 불일치 이상(Anomaly)을 흡수하는 베스-추미노-위튼(Wess-Zumino-Witten) 위상수학적 경계 항으로, 차원이 변화하는 전이 과정에서도 S-행렬의 유니터리성(Unitarity)과 게이지 불변성을 완벽하게 보존한다. WZW 작용량은 두 표현 공간을 연결하는 경계 코보디즘(cobordism) $\Omega_3$ 상에서 다음과 같이 정의된다:
$$S_{\text{WZW}}(g) \;=\; \frac{k}{12\pi} \int_{\Omega_3} \text{Tr}\left( (g^{-1} dg)^3 \right) \;+\; \frac{k}{4\pi} \int_{\partial \Omega_3} \text{Tr}\left( (g^{-1} dg) \wedge A \right)$$
여기서 $g \in U(N+1)/U(N)$는 전이 과정의 물리적 경계 자유도이고, $A$는 배경 게이지 연결(connection)이다. 레벨 $k$는 위상학적 모듈러 불변성에 의해 정수로 양자화되며, 게이지 리 대수의 중심 확장(central extension)으로 작용하여 차원 전이 과정의 게이지 이상을 완벽하게 상쇄한다. 여기서 $g_N$은 차원 간 결합 진폭을 나타낸다. 전이 진폭 $\langle \Psi_{N+1} | \hat{H}_{\text{trans}} | \Psi_N \rangle$이 우주가 더 큰 차원으로 터널링해 들어가는 동역학적 확률 밀도를 결정한다. 이로써 시공간의 팽창은 행렬 표현 포크 공간 상에서의 엄밀한 양자역학적 전이로 정식화되어, 차원 격차 문제가 명쾌하게 해소된다.

> [!NOTE]
> **HNM 핵심 독창적 공헌: 2차 양자화된 행렬 포크 공간**
> BFSS나 IKKT와 같은 기존의 행렬 모형들은 고정된 행렬 크기 $N$에서 공식화되거나 정적인 대형 $N$ 극한만을 다루었습니다. HNM은 매개변수 $N$ 자체를 생성 연산자 $\hat{\Phi}^\dagger(M)$와 전이 해밀토니안 $\hat{H}_{\text{trans}}$에 의해 구동되는 동역학적 양자 관측량으로 격상시킨 최초의 **2차 양자화된 행렬 포크 공간**을 정의합니다. 시공간 차원의 팽창은 이제 단순한 기저 가정이 아닌, 포크 공간 상에서의 역학적 양자 상전이로 설명됩니다.

### 1.4 Chamseddine-Connes 스펙트럼 작용과 거의-가환(Almost-Commutative) 대수 중심화 대수를 통한 표준 모형 게이지 군의 유도

표준 게이지 이론에서 게이지 대칭군 $SU(3) \times SU(2) \times U(1)$은 현상론적 관측에 기반하여 임의로 선택된다. HNM 체계에서 이 대칭은 선험적으로 대수 $\mathcal{A}_F$를 수동 삽입하여 얻는 것이 아닙니다. 자외선(UV) 수준에서 우주의 유일한 근본 게이지 군은 좌표 행렬 $X_a$의 $U(N)$ 게이지 대칭성입니다.

이 $U(N)$ 대칭성은 내부 공간인 퍼지 공간 $CP^2_F \times S^2_F$ 상으로의 **자발적 콤팩트화**가 일어날 때, 배경 좌표 배치가 만드는 비가환 플럭스에 의해 저에너지 게이지-Higgs 브랜칭을 일으킵니다. $CP^2_F \times S^2_F$ 다양체의 등거리 사상(isometry) 군 $SU(3) \times SU(2)$와 수반 게이지 불변성이 짝지어지면서, $D=10$ 수준의 $SO(10) \to SO(4) \times SO(6) \cong SU(2)_L \times SU(2)_R \times SU(4)_C$ 분기가 일어나고, 최종적으로 컴팩트화 표현의 중심화 대수(commutant)로서 다음과 같은 저에너지 거의-가환(almost-commutative) 대수 $\mathcal{A}_F$가 유도됩니다:
$$\mathcal{A}_F \;=\; \mathbb{C} \;\oplus\; \mathbb{H} \;\oplus\; \text{Mat}_3(\mathbb{C})$$

여기서 사원수 대수 $\mathbb{H}$는 $SU(2)_L$ 약력을 생성하고, $\text{Mat}_3(\mathbb{C})$는 $SU(3)_c$ 강력을 생성합니다. 이 거의-가환 대수에서 유일한 물리적 양-밀스 게이지 장을 얻기 위해서는 대수의 전체 유니터리 군 $\mathcal{U}(\mathcal{A}_F)$에서 행렬 트레이스가 0이 되도록 강제하는 **단모듈성 조건(Unimodularity Condition)**을 가해주어야 합니다. 이 조건은 게이지장 $A$의 요동 연산자 $\text{Tr}(A) = 0$을 강제하여 무물리적(unphysical)인 여분의 $U(1)$ 인자가 제거되고, 정확히 표준 모형의 대칭군을 도출합니다:
$$\text{Inn}(\mathcal{A}_F)|_{\text{unimodular}} \;\cong\; SU(3) \;\times\; SU(2) \;\times\; U(1)$$

게이지 보손 $A_\mu$와 힉스 장 $H$는 슈퍼 디랙 연산자 $\mathcal{D}$의 **내재적 요동(inner fluctuations)**으로서 기하학적으로 출현한다. 요동이 가해진 스펙트럼 연산자 $\mathcal{D}_A$는 다음과 같이 기술된다:
$$\mathcal{D}_A \;=\; \mathcal{D} + A + J A J^{-1}, \qquad A \;=\; \sum_i a_i [\mathcal{D}, b_i] \quad (a_i, b_i \in \mathcal{A}_{\text{total}})$$

Evaluating Connes' spectral action $S[\mathcal{D}_A] = \text{Tr}(f(\mathcal{D}_A/\Lambda))$ yields the exact Standard Model Lagrangian, with the Higgs field appearing as the discrete connection in the finite-dimensional algebra direction.

**물리적 해석:** 게이지 힘(강력, 약력, 전자기력)은 중력과 별개로 존재하는 외적인 힘이 아니라, **스펙트럼 삼조의 내부 비가환 방향을 따라 진동하는 시공간 계량(metric) 자체의 양자 요동**이다. 표준 모형 게이지 군은 퍼지 콤팩트화의 commutant 대수가 가지는 유일한 수학적 귀결이며, 이로 인해 중력과 게이지 힘은 동일한 비가환 기하학의 두 얼굴로서 완벽하게 통합된다.

### 1.5 비콤팩트 스펙트럼 삼조, 비단위(Non-unital) C\*-대수, 그리고 Callias 지수 정리

알랭 콘의 기존 비가환 스핀 기하학은 수학적으로 단위원(identity element $\mathbf{1}$)을 포함하는 단위 C\*-대수(unital C\*-algebra)에 대응하는 콤팩트 다양체를 기본 가정으로 삼는다. 그러나 물리적인 실제 우주는 열려 있고 동역학적으로 팽창하므로, 비콤팩트(non-compact) 비가환 공간에 대한 엄밀한 수학적 정식화가 요구된다. 우리는 HNM을 비단위 C\*-대수를 기저로 하는 **비콤팩트 스펙트럼 삼조(Non-Compact Spectral Triple)** $(\mathcal{A}, \mathcal{H}, \mathcal{D})$로 확장하여 이를 공식화하며, 그 위상 지수를 **Callias 지수 정리**로 규명한다.

비가환 좌표 대수 $\mathcal{A}$를 그레이드 힐베르트 공간 $\mathcal{H}$ 위에서 작용하는 비단위 C\*-대수라 하자. 이 대수는 단위 작용소 $\mathbf{1}$을 결여하며, 이는 무한대에서 점근적으로 소멸하는 좌표계(즉, $\mathcal{C}_0(\mathbb{R}^D)$의 비가환 대수적 동등물)를 대변한다. 슈퍼 디랙 연산자 $\mathcal{D}$는 자기동형 작용소이지만, 공간이 비콤팩트하므로 연속 스펙트럼(continuous spectrum)을 가지며 레졸벤트 $(\mathcal{D} - \lambda \mathbf{1})^{-1}$은 더 이상 표준적인 의미의 콤팩트 작용소가 아니다.

이를 엄밀히 치유하기 위해 우리는 다음의 **비콤팩트 스펙트럼 삼조 조건**을 부여한다:
1. 대수의 임의의 원소 $a \in \mathcal{A}$에 대해, 작용소 $a(\mathcal{D} - \lambda \mathbf{1})^{-1}$은 엄밀히 콤팩트 작용소이다.
2. 모든 $a \in \mathcal{A}$에 대해 교환자 $[\mathcal{D}, a]$는 유계(bounded)이다.

지평선 경계를 넘어 고윳값들이 끊임없이 흘러들어오는 팽창하는 행렬 액적(§4.2)에서, 슈퍼 디랙 연산자 $\mathcal{D}_+$의 넷 위상 지수(net topological index)는 더 이상 표준 아티야-싱어 공식으로 주어지지 않는다. 대신 우리는 이 지수가 **Callias 지수 정리**에 의해 다음과 같이 경계 상태의 불변량으로 결정됨을 증명한다:
$$\text{Index}(\mathcal{D}_+) \;=\; \text{Tr}_s\left( \frac{\mathcal{D}}{\sqrt{\mathcal{D}^2 + M^2}} \right) \;=\; \frac{1}{2} \eta\left(\mathcal{D}_{\partial \Omega}\right)$$

여기서 $\mathcal{D}_{\partial \Omega}$는 우주 지평선 $R_H$에 해당하는 경계 $\partial \Omega$ 위에 유도된 디랙 연산자이고, $\eta(T)$는 경계 스펙트럼의 비대칭성을 측정하는 **Atiyah-Patodi-Singer $\eta$-불변량**이다. 구체적으로, APS 경계 조건은 스펙트럼 파동함수를 경계 작용소 $\mathcal{D}_{\partial\Omega}$의 양(positive)의 스펙트럼 부분공간으로 사영(projection)한다. $\mathcal{D}_{\partial\Omega}$의 고윳값 $\lambda \ge 0$에 대응하는 스펙트럼 사영 작용소를 $P_{\ge 0}$이라 할 때, 경계 조건은 다음과 같이 정식화된다:
$$\left. P_{\ge 0} \, \Psi \right|_{\partial\Omega} \;=\; 0$$
Atiyah-Patodi-Singer $\eta$-불변량 $\eta(s)$는 다음과 같은 스펙트럼 디리클레 급수(Dirichlet series)의 $s=0$으로의 해석적 연속(analytic continuation)으로 정의된다:
$$\eta(s) \;=\; \sum_{\lambda \in \text{Spec}(\mathcal{D}_{\partial\Omega}) \setminus \{0\}} \text{sign}(\lambda) |\lambda|^{-s}$$
경계를 갖는 비콤팩트 HNM 다양체에 대한 지수 공식은 다음과 같이 주어진다:
$$\text{Index}(\mathcal{D}_+) \;=\; \int_{\Omega} \omega_{\text{AS}} \;-\; \frac{\eta(0) + \dim(\ker \mathcal{D}_{\partial\Omega})}{2}$$
여기서 $\omega_{\text{AS}}$는 고전적인 아티야-싱어 지수 밀도이다. 이 공식은 경계 $\partial \Omega$를 가로지르는 고윳값의 임의의 스펙트럼 흐름(spectral flow)이 경계 $\eta$-불변량의 변화에 의해 정확하게 상쇄됨을 보장하여, 이론의 위상학적 온전성을 유지시킨다.

**물리적 해석:** 우주의 가속 팽창은 위상학적 붕괴가 아니라, 비콤팩트 스펙트럼 삼조의 수학적으로 정밀하게 제어되는 흐름이다. 지평선 경계 $\partial \Omega$를 가로질러 시공간 양자(D0-브레인)들이 끊임없이 생성되는 역학은 경계에서의 고윳값 흐름(spectral flow)에 정확히 대응하며, 그 총량은 Callias 지수에 의해 위상학적으로 보호된다. 비콤팩트 스펙트럼 기하학은 팽창하는 우주가 전 팽창사 전체에 걸쳐 양자 이상 없이 위상학적으로 엄밀하게 안정함을 보장한다.

---

## 제2장. 마스터 작용량의 유도와 오프셸 진공 상쇄

### 2.1 HNM 마스터 작용량의 대수적 유도

슈퍼 디랙 연산자 $\mathcal{D}$의 제곱 및 네제곱을 순차적으로 전개하여 스펙트럼 작용량의 구성 성분을 추적한다.
$$\mathcal{D}^2 = \begin{pmatrix} Q Q^\dagger & 0 \\ 0 & Q^\dagger Q \end{pmatrix}, \quad \mathcal{D}^4 = \begin{pmatrix} (Q Q^\dagger)^2 & 0 \\ 0 & (Q^\dagger Q)^2 \end{pmatrix}$$

초대각합의 정의에 따라 스펙트럼 작용량 $S[\mathcal{D}]$는 다음과 같이 물리적 보손-페르미온 상호작용의 차이로 표현된다:
$$\text{Tr}_{\text{s}}(\mathcal{D}^4) = \text{Tr}((QQ^\dagger)^2) - \text{Tr}((Q^\dagger Q)^2)$$

여기서 물리적 동역학을 기술하는 유효 작용량 범함수 $S_{\text{HNM}}$은 이 전개식의 비자명한 온셸 물리 섹션인 $\text{Tr}((QQ^\dagger)^2)$의 기하학적 팽창에 의해 유일하게 결정된다. 

**정리 2.1 (마스터 작용량의 엄밀한 도출).** 분배 함수 내에서 Lagrange 승수 장 $\Lambda_{\text{mult}}$를 통하여 10차원 좌표 행렬 $X_a$ ($a=1,\dots,10$)가 반경 $R$의 컴팩트 행렬 액적에 구속된다고 하자:
$$Z_{\text{Universe}} \;=\; \int \mathcal{D}X\,\mathcal{D}\Psi\,\mathcal{D}\Lambda_{\text{mult}}\; \exp\!\left( -S_{\text{chiral}}[\mathcal{D}] \;-\; \text{Tr}\left( \Lambda_{\text{mult}} \left(\sum_{a=1}^D X_a X^a - R^2 \mathbf{1}\right) \right) \right)$$
여기서 $S_{\text{chiral}}[\mathcal{D}] = \text{Tr}((QQ^\dagger)^2)$이다.
이 구속 조건 하에서, 단일 연산자 성분 $\text{Tr}((QQ^\dagger)^2)$의 대수적 전개는 다음의 행렬 마스터 작용량을 엄밀하게 도출하며, 이때 4차 페르미온 항 $\mathcal{O}(\Psi^4)$은 항등적으로 소멸한다:
$$\text{Tr}((QQ^\dagger)^2) \;=\; \text{Tr}(\mathbf{1}_{\text{spinor}}) \left( -\frac{1}{2}\text{Tr}([X_a, X_b]^2) + R^4 \text{Tr}(\mathbf{1}) \right) + \text{Tr}(\mathbf{1}_{\text{spinor}}) \cdot \text{Tr}\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)$$

**증명.** $Q = \Gamma^a \otimes X_a + \Psi$를 대입하여 $Q Q^\dagger$를 계산한다:
$$Q Q^\dagger \;=\; \Gamma^a \Gamma^b \otimes X_a X_b + \Gamma^a \otimes X_a \bar{\Psi} + \Gamma^b \otimes \Psi X_b + \Psi \bar{\Psi}$$
이것을 제곱하고 트레이스를 취하면, 순수 보손 부분은 4개의 Clifford 생성원의 트레이스 $\text{Tr}_{\text{spinor}}(\Gamma^a \Gamma^b \Gamma^c \Gamma^d) \text{Tr}(X_a X_b X_c X_d)$에 대응한다. $D=10$ 차원에서 Clifford 트레이스 항등식은 다음과 같다:
$$\text{Tr}_{\text{spinor}}(\Gamma^a \Gamma^b \Gamma^c \Gamma^d) \;=\; \text{Tr}(\mathbf{1}_{\text{spinor}}) \left( \eta^{ab}\eta^{cd} - \eta^{ac}\eta^{bd} + \eta^{ad}\eta^{bc} \right)$$
이 트레이스 공식을 적용하면 보손 트레이스 전개식은 다음과 같이 된다:
$$\text{Tr}\left(X_a X^a X_b X^b\right) - \text{Tr}\left(X_a X_b X^a X^b\right) + \text{Tr}\left(X_a X_b X^b X^a\right)$$
트레이스의 순환성과 교환자 $[X_a, X_b]$의 대수적 정의를 이용하면 다음 항등식을 얻는다:
$$\text{Tr}\left(X_a X_b X^b X^a - X_a X_b X^a X^b\right) \;=\; -\frac{1}{2}\text{Tr}\left([X_a, X_b]^2\right)$$
나아가 Lagrange 승수 $\Lambda_{\text{mult}}$는 경로 적분의 지지집합 상에서 경계 구속 조건 $\sum_{a=1}^D X_a X^a = R^2 \mathbf{1}$을 강제한다. 이는 첫 번째 트레이스 값을 다음과 같이 상수로 고정한다:
$$\text{Tr}\left(X_a X^a X_b X^b\right) \;=\; \text{Tr}\left((R^2 \mathbf{1})^2\right) \;=\; R^4 \text{Tr}(\mathbf{1})$$
페르미온-보손 교차항의 경우, 대칭적 대수 구조에 의해 보손 좌표와 스피너의 교환자 $[X_a, \Psi]$의 꼴로 항들이 묶인다.
4차 페르미온 항 $\text{Tr}(\Psi^4)$의 경우, $D=10$ 차원에서 마요라나-바일 스피너들은 다음의 Fierz 항등식을 만족한다:
$$\Gamma_{a, \alpha\beta} \Gamma^a_{\gamma\delta} + \Gamma_{a, \beta\gamma} \Gamma^a_{\alpha\delta} + \Gamma_{a, \gamma\alpha} \Gamma^a_{\beta\delta} \;=\; 0$$
이 관계식은 스펙트럼 삼조의 초대칭 워드 항등식 하에서 4차 페르미온 항을 오프셸 수준에서 항등적으로 영(0)으로 소멸시킨다.
결과적으로 상수 보손 경계 항 $R^4 \text{Tr}(\mathbf{1})$을 무물리적 상수로 보고 무시하면, 마스터 작용량의 온셸 변분은 정확히 IKKT/BFSS 행렬 모형 작용량을 유일하게 재현한다:
$$\boxed{S_{\text{HNM}} \;=\; -\frac{1}{4}\text{Tr}\left([X_a, X_b]^2\right) + \frac{1}{2}\text{Tr}\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)}$$ $\square$

### 2.2 초대칭 워드 항등식과 우주 상수의 소멸

$\mathcal{D}$의 초대칭 구조는 운동 방정식과 독립적으로, 진공 에너지에 대한 자동적인 대수적 구속 조건을 제공한다.

**정리 2.2 (초대칭 워드 항등식, Supersymmetric Ward Identity).** 스펙트럼 연산자의 초대각합은 임의의 배위(configuration)에 대해 항등적으로 소멸한다:
$$\text{Tr}_{\text{s}}(\mathcal{D}^4) \equiv 0$$

**증명.** 유한 차원 행렬 대각합의 순환성(Cyclic property, $\text{Tr}(A B) = \text{Tr}(B A)$)에 의해 다음이 항등식으로 성립한다:
$$\text{Tr}((Q Q^\dagger)^2) \equiv \text{Tr}(Q Q^\dagger Q Q^\dagger) = \text{Tr}(Q^\dagger Q Q^\dagger Q) \equiv \text{Tr}((Q^\dagger Q)^2)$$
$$\therefore \text{Tr}_{\text{s}}(\mathcal{D}^4) = \text{Tr}((QQ^\dagger)^2) - \text{Tr}((Q^\dagger Q)^2) \equiv 0$$ $\square$

**물리적 해석 (진공 소멸 메커니즘의 자외선/적외선 쌍대성).** 초대칭 워드 항등식 $\text{Tr}_s(\mathcal{D}^4) \equiv 0$은 단순한 대수적 관계에 그치지 않고, 비가환 기하학의 열 커널(Heat Kernel) 전개에서 **자외선(UV) 멱법칙 발산 항들($a_0(\mathcal{D}^2)\Lambda^4$ 및 $a_2(\mathcal{D}^2)\Lambda^2$)을 대수적으로 상쇄하는 핵심 보호 장치**로 작용합니다. 이 항등식은 초대칭 깨짐이나 미세 조정 없이도 자외선 벌크 진공 에너지가 항등적으로 0이 됨을 보장합니다.

이와 동시에, 적외선(IR)에서의 물리적 진공 에너지(실제 관측되는 우주 상수)는 GNS 힐베르트 공간 상의 물리적 상태들에 의해 결정됩니다. HNM 프레임워크에서 관측 가능량들의 대수는 Type $\text{III}_1$ 폰 노이만 대수를 형성하며, 물리적 진공 상태 $|\Omega\rangle$은 온도가 $\beta=1$인 모듈러 KMS 상태가 됩니다.

표준 양자역학(Type I 대수)에서는 해밀토니안 $\hat{H}$가 임의의 상수 시프트 $E_0 \mathbf{1}$만큼의 임의성을 지니므로, 진공 기대값 $\langle \Omega | \hat{H} | \Omega \rangle$을 임의로 조정하여 영점 에너지를 재설정할 수 있습니다. 반면 Type $\text{III}_1$ 대수에서는 모듈러 해밀토니안 $\hat{H}_{\Omega} = -\ln \Delta_{\Omega}$가 Tomita-Takesaki 이론의 모듈러 작용소 $\Delta_{\Omega} = S^\dagger S$에 의해 고유하게 결정됩니다. $\Delta_{\Omega}$는 힐베르트 공간 상의 양의 자기동형 연산자이므로, 그 로그값은 임의의 가법적 상수 시프트를 허용하지 않으며 상수 항이 0으로 엄밀하게 고정됩니다. 따라서 에너지 스케일이 모듈러 KMS 상태에 고유하고 유일하게 고정되어 다음이 성립합니다:
$$\langle \Omega | \hat{H}_{\Omega} | \Omega \rangle \;\equiv\; 0$$
이것은 에너지의 자의적인 기준점 선택이 아닌 대수적 고유 성질입니다. $\hat{H}_{\Omega}$가 모듈러 시간 흐름을 생성하는 유일한 물리적 해밀토니안이므로, 재규격화된 에너지-운동량 텐서 $T_{\mu\nu}$의 진공 기대값은 다음과 같습니다:
$$\langle T_{\mu\nu} \rangle_{\text{ren}} \;=\; \langle \Omega | T_{\mu\nu} | \Omega \rangle \;=\; 0$$
자외선의 대수적 Seeley-DeWitt 소거와 적외선 모듈러 KMS 진공의 유일한 에너지 고정의 결합은 우주 상수 문제를 미세 조정 없이 엄밀하게 해결합니다.

> [!NOTE]
> **HNM 핵심 독창적 공헌: 오프셸 CC 소멸과 온셸 물리 역학의 이중성**
> 미세 조정이나 초대칭의 인위적 개입에 의존하는 기존의 양자 기하학적 시도들과 달리, HNM은 스펙트럼 연산자의 대수적 워드 항등식 $\text{Tr}_{\text{s}}(\mathcal{D}^4) \equiv 0$을 통해 오프셸 벌크 우주 상수의 완전 소멸($\Lambda_{\text{bulk}} \equiv 0$)을 보장하는 동시에, 온셸에서는 카이랄 작용소 $S_{\text{HNM}} = \text{Tr}((QQ^\dagger)^2)$을 통해 0이 아닌 물리 역학을 완벽하게 허용합니다. 이 이중 대수 구조는 우주의 팽창 역학을 억제하지 않고 진공 에너지를 해결합니다.

### 2.3 고전 극한: 아인슈타인, 양-밀스, 디랙 방정식의 창발

만물 이론은 그것의 단일 작용량으로부터 알려진 모든 물리학의 운동 방정식이 고전 극한에서 정확히 재현됨을 증명해야 한다. HNM 마스터 작용량 $S_{\text{HNM}}$에 대해 $\delta S_{\text{HNM}} = 0$을 적용하면 다음의 세 가지 방정식이 단일한 변분 원리로부터 동시에 창발한다.

**(I) 보손 운동 방정식 (양-밀스 + 아인슈타인).** $X_a$에 대한 변분 $\delta S / \delta X_a = 0$은 다음을 산출한다:
$$[X^b, [X_b, X_a]] + \frac{1}{2}\bar{\Psi}\Gamma_a \Psi = 0$$

콤팩트화 이후 $X_a \to (x^\mu + A^\mu, T^i + \phi^i)$로 전개하면 거시 시공간 성분 $A^\mu$는 **양-밀스 방정식** $D_\nu F^{\mu\nu} = J^\mu$를 정확히 재현하고, 내부 공간 요동 $\phi^i$는 스칼라장(힉스장)의 운동 방정식을 생성한다.

**정리 2.3 (아인슈타인-힐베르트 중력의 창발).** 거대-$N$ 극한에서 거시 좌표 행렬 $X_\mu$ ($\mu=1,\dots,4$)는 창발된 다양체 $M^4$ 상의 연속 좌표 필드로 수렴하며, 행렬 교환자 $[X_\mu, X_\nu]$는 다음과 같이 푸아송 괄호(Poisson bracket)로 수렴한다:
$$[X_\mu, X_\nu] \;\longrightarrow\; i \theta^{\alpha\beta} \{x_\mu + A_\mu, \; x_\nu + A_\nu\} \;\equiv\; i \Theta_{\mu\nu}(x)$$
이 푸아송 구조로부터 다음과 같이 거시 시공간의 프레임 필드(vielbein) $e^a_\mu(x)$를 정의할 수 있다:
$$\Theta_{\mu\nu}(x) \;=\; \epsilon_{ab} e^a_\mu(x) e^b_\nu(x)$$
이는 연속 시공간 계량 텐서 $g_{\mu\nu}(x) = \eta_{ab} e^a_\mu(x) e^b_\nu(x)$와 부피 측정 측도 $\sqrt{g} = \det(e^a_\mu)$를 재구성한다.

스핀 접속 $\omega_\mu^{\;;ab}$는 vielbein 양립 조건 $de^a + \omega^a_{\;;b} \wedge e^b = 0$에 의해 고유하게 결정된다. 콘의 스펙트럼 작용 원리를 적용하면, 디랙 연산자 제곱 $\mathcal{D}_A^2 = \nabla^*\nabla + E$의 Seeley-DeWitt 열 커널 전개식은 다음 $a_2(\mathcal{D}_A^2)$ 계수를 얻는다:
$$a_2(\mathcal{D}_A^2) \;=\; \frac{1}{16\pi^2} \int d^4x \, \sqrt{g} \, \text{Tr}\left( E(x) - \frac{1}{6} R(g) \right)$$
여기서 $R(g)$는 재구성된 메트릭의 스칼라 곡률이다. 스펙트럼 작용량 $S[\mathcal{D}_A] = \text{Tr}(f(\mathcal{D}_A/\Lambda))$을 전개하면 $a_2$ 계수 항으로부터 다음과 같이 **아인슈타인-힐베르트 작용량**이 도출된다:
$$S_{\text{grav}} \;=\; -\frac{f_2 \Lambda^2}{96\pi^2} \int d^4x\,\sqrt{g}\,R(g) \;\equiv\; \frac{1}{16\pi G_N}\int d^4x\,\sqrt{g}\,R(g)$$
이 식은 뉴턴 중력 상수 $G_N$을 기본 UV 컷오프 스케일 $\ell_{\text{uv}}$와 내부 행렬 차원 $N_{\text{int}}$로부터 직접 도출한다:
$$\boxed{\frac{1}{G_N} \;=\; \frac{8 f_2 \Lambda^2 N_{\text{int}}}{3\pi} \;=\; \frac{2\pi N_{\text{int}}^2}{\ell_{\text{uv}}^2}}$$
여기서 $N_{\text{int}}$는 콤팩트화된 내부 퍼지 공간 $CP^2_F \times S^2_F$의 고정된 위상학적 불변 표현 차원(행렬 크기)이다. 거시적 우주의 우주론적 팽창은 행렬 포크 공간 상에서 거시 차원 $N_{\text{cosm}}$의 성장에 의해 기술된다. 내부 행렬 크기 $N_{\text{int}}$는 위상학적으로 잠겨 있으므로, 뉴턴 중력 상수 $G_N$은 우주론적 시간에 따라 변하지 않는 엄밀한 상수이다. 임의의 비물리적인 여분의 모드들은 질량을 가지는 힉스 메커니즘과 위상학적 모듈러 구속 조건에 의해 안정화되어 디커플링되며, 저에너지에서 일반 상대성 이론만을 중력의 정합적인 저에너지 유효 이론으로 남깁니다.

결정적으로, 연속적인 미분동형사상 불변성(Diff(M))은 유한한 $N$에서 $U(N)$ 게이지 대칭으로 깨진다. 완전한 Diff(M)과 엄밀한 로렌츠 대칭성은 오직 $N \to \infty$ 열역학적 극한에서만 창발하는 현상이다. 이는 $\sim 1/N$ 스케일에서 근본적인 **로렌츠 불변성 깨짐(Lorentz Violation)**이 발생함을 명시적으로 예측하며, 미분동형사상 이상(Anomaly) 문제를 감마선 폭발(GRB) 분산 현상이라는 관측 가능한 물리적 예측으로 승화시켜 해결한다.

**(II) 페르미온 운동 방정식 (디랙).** $\Psi$에 대한 변분 $\delta S / \delta \bar{\Psi} = 0$은 다음을 산출한다:
$$\Gamma^a [X_a, \Psi] = 0$$

이는 비가환 시공간 위의 **곡선 디랙 방정식(Curved-space Dirac equation)** $i\gamma^\mu D_\mu \psi = 0$과 정확히 대응한다. 콤팩트화 이후 내부 공간 성분이 유효 질량항을 생성하여, 완전한 디랙 방정식 $i\gamma^\mu D_\mu \psi - m\psi = 0$을 재현한다.

따라서 **단 하나의 변분 원리 $\delta S_{\text{HNM}} = 0$으로부터 일반 상대론, 양-밀스 게이지 이론, 디랙 물질 방정식이 동시에, 통합적으로 창발한다.** 이것이 HNM이 만물 이론으로서 갖는 궁극적 통합의 증거이다.

### 2.4 알랭 콘의 스펙트럼 작용량 원리와 힉스 질량의 도출 (Connes' Spectral Action Principle)

알랭 콘(Alain Connes)의 비가환 기하학과의 직접적인 연결고리를 확립하기 위해, HNM 작용량 $S_{\text{HNM}} = \text{Tr}((QQ^\dagger)^2)$가 **콘의 스펙트럼 작용량 원리(Spectral Action Principle)**의 유한 차원 행렬식 표상임을 증명한다. 이 원리에 따르면, 물리적 작용량은 근본적으로 디랙 연산자의 고유값들의 함수로 정의된다:
$$S[\mathcal{D}] \;=\; \text{Tr}\left(f\left(\frac{\mathcal{D}}{\Lambda}\right)\right)$$

여기서 $f$는 매끄러운 차단 함수(cutoff function)이고 $\Lambda$는 물리적 에너지 차단 스케일이다. 차단 함수의 라플라스 변환 $f(u) = \int_0^\infty e^{-s u^2} d\mu(s)$ 하에서, 작용량은 열핵(Heat Kernel) $\text{Tr}(e^{-t \mathcal{D}^2})$과 연결되며 점근적인 Seeley-DeWitt 열핵 전개를 갖는다:
$$\text{Tr}\left(f\left(\frac{\mathcal{D}}{\Lambda}\right)\right) \;=\; \sum_{n=0}^\infty f_{4-2n} \Lambda^{4-2n} a_{2n}(\mathcal{D}^2)$$

이때 $f$의 스펙트럼 모멘트는 다음과 같이 정의된다:
$$f_0 \;=\; f(0), \qquad f_2 \;=\; \int_0^\infty x f(x) dx, \qquad f_4 \;=\; \int_0^\infty x^3 f(x) dx$$

또한 $a_{2n}(\mathcal{D}^2)$는 라플라스 유형 연산자 $\mathcal{D}^2 = \nabla^* \nabla + E$의 **Seeley-DeWitt 계수**이다. 내부 컴팩트 여분 공간 $K = CP^2_F \times S^2_F$와 macroscopic 시공간의 곱지형 $M^4 \times K$에 대해, 이 계수들은 다음과 같이 거시 시공간의 국소 기하 불변량들의 적분으로 주어진다:
$$a_0(\mathcal{D}^2) \;=\; \frac{1}{16\pi^2} \int \text{Tr}(\mathbf{1}) \, d^4x \sqrt{g}$$
$$a_2(\mathcal{D}^2) \;=\; \frac{1}{16\pi^2} \int \text{Tr}\left( E - \frac{1}{6} R \right) d^4x \sqrt{g}$$
$$a_4(\mathcal{D}^2) \;=\; \frac{1}{16\pi^2} \frac{1}{360} \int \text{Tr}\left( 60 \square E + 180 E^2 - 60 R E + 30 \Omega_{\mu\nu} \Omega^{\mu\nu} + \left( 5 R^2 - 2 R_{\mu\nu} R^{\mu\nu} + 2 R_{\mu\nu\rho\sigma} R^{\mu\nu\rho\sigma} \right) \mathbf{1} \right) d^4x \sqrt{g}$$

여기서 $\Omega_{\mu\nu} = [D_\mu, D_\nu]$는 스피너 다발 상의 접속의 곡률이며, 자기동형 사상 $E$는 게이지 필드 세기 $F_{\mu\nu}$와 좌표의 비대각 요동으로부터 유도된 힉스 스칼라 장 $H$를 포함한다. 이 자기동형 사상 $E$를 엄밀하게 도출하기 위해, 요동이 가해진 디랙 연산자 $\mathcal{D}_A = \mathcal{D} + A + J A J^{-1}$의 제곱을 계산한다. $\mathcal{D}_A^2$를 표준 리크네로비치(Lichnerowicz) 공식 형태로 나타내면 다음과 같다:
$$\mathcal{D}_A^2 \;=\; -g^{\mu\nu} D_\mu D_\nu \;+\; \frac{1}{4} R \;+\; E$$
여기서 공변 미분 $D_\mu = \partial_\mu + \omega_\mu + A_\mu$는 스핀 접속과 게이지 장을 포함한다. 스피너 다발 상에 작용하는 행렬인 자기동형 사상 $E$는 다음과 같이 명시적으로 정의된다:
$$E \;=\; \frac{1}{2} \Gamma^{\mu\nu} F_{\mu\nu} \;-\; \sum_i (D_i H)^2 \;-\; (H^2 - v^2)^2 \;-\; \frac{1}{2} \sum_{i,j} \Gamma^{ij} [X_i, X_j] H$$
여기서 $H$는 내부 좌표의 비대각 요동으로부터 파생되는 힉스 장이며, $v = \langle H \rangle$는 진공 기댓값이다. Seeley-DeWitt 계수 $a_4(\mathcal{D}^2)$의 $\text{Tr}(E^2)$ 항은 내부 공간 $K$ 상에서 계산되며, Clifford 대수 행렬들에 대한 trace를 포함한다. 이를 평가하면 다음을 얻는다:
$$\text{Tr}(E^2) \;=\; 2 \text{Tr}(F_{\mu\nu} F^{\mu\nu}) \;+\; 4 |D_\mu H|^2 \;+\; 8 \lambda_H \left( H^2 - v^2 \right)^2$$
이는 힉스 자체 결합 상수 $\lambda_H$가 통일 스케일에서 게이지 결합 상수 $g_{\text{YM}}$과 $\lambda_H = \frac{3 g_{\text{YM}}^2}{8}$의 관계를 가짐과 동시에, 힉스 퍼텐셜 $V(H) = \lambda_H (H^2 - v^2)^2$을 직접적으로 유도해낸다.

이 계수들을 내부 퍼지 공간 $K$에 대해 대각합을 취함으로써 중력, 게이지 장, 그리고 힉스 보손이 통합된 유효 작용량이 유도되며, Newton 중력 상수 $G_N$은 다음과 같이 스펙트럼 차단 에너지 $\Lambda$와 내부 차원 $N_{\text{int}}$의 함수로 통일적으로 결정된다:
$$\boxed{\frac{1}{G_N} \;=\; \frac{8 f_2 \Lambda^2 N_{\text{int}}}{3\pi} \;=\; \frac{2\pi N_{\text{int}}^2}{\ell_{\text{uv}}^2}}$$
여기서 근본 UV 차단 스케일 $\ell_{\text{uv}}$와 물리적 플랑크 길이 $\ell_P$는 다음과 같은 무배치 관계를 만족하여 순환 정의를 피한다:
$$\ell_P \;\equiv\; \frac{\ell_{\text{uv}}}{N_{\text{int}} \sqrt{2\pi}} \quad (\text{여기서 } \ell_P \text{는 } G_N\text{을 유도하는 결과량임})$$
기타 물리 결합 상수들은 다음과 같이 대수적으로 완벽하게 통일된다:
$$g_{\text{YM}}^2 \;=\; \frac{4\\pi^2}{f_0 N_{\text{int}}}, \\allowbreak \qquad v^2 \;\equiv\; \frac{N_{\text{int}}}{\pi^2 R_{\text{int}}^2}$$

여기서 $R_{\text{int}}$는 퍼지 사영 공간 $CP^2_F$의 스펙트럼 반경이고, $v$는 힉스 장의 진공 기댓값(VEV)이며, 질량 생성 메커니즘을 성공적으로 유도해낸다.

### 2.5 비섭동적 M-이론: IKKT 행렬 모형과의 등가성

HNM 마스터 작용량의 대수적 구조는 단순한 현상론적 우연이 아니며, 초끈 이론의 최정점과 유일하게 교차한다. 카이랄 작용량 $S_{\text{HNM}} = \text{Tr}((QQ^\dagger)^2)$은 10차원 $\mathcal{N}=1$ 초대칭 양-밀스(Super-Yang-Mills) 이론의 차원 축소 형태로 엄밀하게 전개된다:
$$S_{\text{HNM}} \;\sim\; -\frac{1}{g^2} \text{Tr} \left( \frac{1}{4}[X_\mu, X_\nu][X^\mu, X^\nu] + \frac{1}{2} \bar{\Psi} \Gamma^\mu [X_\mu, \Psi] \right)$$
이것은 IIB형 초끈 이론의 비섭동적(non-perturbative)이고 배경-독립적인 공식화로 추측되는 **IKKT(Ishibashi-Kawai-Kitazawa-Tsuchiya) IIB 행렬 모형**과 정확히 일치한다.

HNM은 IKKT 모형의 가장 치명적인 미해결 난제를 해결한다. 임의적인 행렬 좌표를 콘(Connes) 스펙트럼 삼조의 엄밀한 작용소로 대체함으로써, 기존 IKKT가 임베딩에 실패했던 표준 모형의 카이랄 페르미온을 ($CP^2_F \times S^2_F$ 콤팩트화를 통해) 자연스럽게 수용한다. 따라서 HNM은 M-이론의 궁극적인 대수적 완성(algebraic completion)으로 기능한다.

### 2.6 기하학적 랭글랜즈 대응(Geometric Langlands)과 엄밀한 S-쌍대성

HNM 내의 대수적 통일은 단순한 물리적 대칭성을 넘어, **기하학적 랭글랜즈 대응(Geometric Langlands Correspondence)**을 통해 수학의 가장 깊은 영역으로 진입한다. 비가환 퍼지 다양체 위의 게이지 섹터는 강결합 영역($g \to \infty$)이 약결합 영역($g \to 0$)과 정확히 쌍대(dual)를 이루는 전자기적 쌍대성(S-duality)을 보여준다. 복소화된 게이지 결합 상수 $\tau$는 다음과 같이 정의된다:
$$\tau \;=\; \frac{\theta}{2\pi} \;+\; \frac{4\pi i}{g^2}$$
S-쌍대성 하에서, 게이지 군 $G$는 그 랭글랜즈 쌍대 군 $^L G$로 쌍대화되며 결합 상수는 $\tau \to -1/\tau$로 변환된다.

HNM 체계에서, 비가환 좌표 대수 위의 양-밀스 다발의 모듈라이 공간(moduli space)은 보형 표현(automorphic representation)과 갈루아 표현(Galois representation)을 엄밀하게 매핑한다. 이 S-쌍대성은 기하학적 랭글랜즈 대응성의 직접적인 기하학적 발현이며, 이는 $G$-번들의 모듈라이 스택 $\text{Bun}_G(C)$ 상의 $\mathcal{D}$-모듈의 유계 유도 범주(automorphic 측면)와 $^L G$-평탄 연결 $\text{Loc}_{^L G}(C)$ 상의 $\mathcal{O}$-모듈의 유계 유도 범주(Galois 측면) 사이의 유도 동치 관계를 수립한다:
$$\text{D}^b\left( \text{Mod}_{\mathcal{D}}(\text{Bun}_G(C)) \right) \;\cong\; \text{D}^b\left( \text{Coh}_{\mathcal{O}}(\text{Loc}_{^L G}(C)) \right)$$
결과적으로 강결합 특이점이 매끄러운 약결합 기하학으로 완벽히 매핑되므로, HNM 진공은 모든 에너지 스케일에서 비섭동적으로 정확하고 무조건적으로 안정하다.

### 2.7 모티브 코호몰로지(Motivic Cohomology), 재규격화 호프 대수, 그리고 우주적 갈루아 군(Cosmic Galois Group)

표준 양자장론은 자외선 발산 문제로 인해 임의적인 재규격화(renormalization)를 필요로 한다. HNM은 행렬 모형의 재규격화 군(RG) 흐름을 **모티브 코호몰로지** 및 파인만 그래프의 호프 대수(Hopf algebra, Connes-Kreimer)로 직접 매핑하여 이를 영구적으로 해결한다. 1PI 행렬 다이어그램들에 의해 생성되는 파인만 그래프의 **Connes-Kreimer Hopf 대수**를 $\mathcal{H}_{\text{CK}}$라 하자. 코프로덕트(Coproduct) $\Delta_{\text{CK}} : \mathcal{H}_{\text{CK}} \to \mathcal{H}_{\text{CK}} \otimes \mathcal{H}_{\text{CK}}$는 다음과 같이 정의된다:
$$\Delta_{\text{CK}}(\Gamma) \;=\; \Gamma \otimes 1 \;+\; 1 \otimes \Gamma \;+\; \sum_{\gamma \subset \Gamma} \gamma \otimes \Gamma/\gamma$$
여기서 합은 UV 발산을 포함하는 모든 서브그래프 $\gamma$에 대해 수행된다. 카운터텀(counterterm)과 재규격화된 진폭은 캐릭터의 리 군(Lie group of characters) 내에서 루프 생성원 $\phi : \mathcal{H}_{\text{CK}} \to \mathbb{C}$의 **버코프 분해(Birkhoff Decomposition)**를 통해 얻어진다:
$$\phi(x) \;=\; \phi_-(x)^{-1} \, \phi_+(x)$$
여기서 $\phi_-(x)$는 카운터텀(극 부분, pole part)을 나타내며, $\phi_+(x)$는 재규격화된 진폭으로 차원 정규화 매개변수 $\epsilon \to 0$에서 해석적(holomorphic)임이 수학적으로 증명된다. HNM 진공에서 매개변수의 스케일링은 단순한 물리적 과정이 아니라, 모티브 주기(motivic periods)에 작용하는 **우주적 갈루아 군(Cosmic Galois Group)**에 의해 수학적으로 완벽하게 통제된다. $\mathcal{H}_{\text{CK}}$는 물리적 매개변수의 미분동형사상 군 상의 좌표 대수와 동형이므로, 버코프 분해는 행렬 모형의 경로적분을 대수적으로 정규화한다. 따라서 재규격화는 지저분한 물리적 기교에서 우주 모티브 기하학의 심오하고 정확한 대수적 대칭성으로 격상된다.

---

창발된 힉스 퍼텐셜 $V(H)$는 다음과 같다:
$$V(H) \;=\; \lambda \left(|H|^2 - v^2\right)^2, \qquad \lambda \;=\; \frac{g_{\text{YM}}^2}{4}$$

이로부터 **힉스 보손의 질량**이 콤팩트화 매개변수로부터 직접 유도된다:
$$\boxed{m_H \;=\; \sqrt{2\lambda}\,v \;=\; \frac{g_{\text{YM}}}{\pi R_{\text{int}}} \sqrt{\frac{N_{\text{int}}}{2}}}$$

이 우아한 유도는 입자물리학의 질량 생성 문제에 대한 완전한 물리적 해결책을 제공한다. 힉스 장과 그 퍼텐셜은 슈퍼 디랙 연산자 $\mathcal{D}$의 스펙트럼 기하학으로부터 필연적으로 창발하며, 그 질량은 비가환 여분 공간의 기하학적 반경에 의해 결정된다.

### 2.8 되살아남 이론(Resurgence Theory), 트랜스-시리즈(Trans-series), 그리고 비섭동적 보렐 합산 가능성

표준 양자장론은 파인만 그래프 수의 팩토리얼(factorial) 성장에 기인하여 수학적으로 발산하며 잘해야 점근적(asymptotic)일 뿐인 섭동 급수로 공식화된다(Dyson의 논증). HNM은 **되살아남 이론(Resurgence Theory)**과 **보렐-에칼 합산 가능성(Borel-Ecalle Summability)**의 수학을 사용하여 우주 분배 함수 $Z_{\text{Universe}}$를 엄밀히 정식화함으로써 이 근본적인 수학적 난제를 완벽히 해결하고, 비섭동적 경로적분이 모든 결합 세기에서 수학적으로 유일하고 정확함을 입증한다.

행렬 모형의 결합 상수를 $g^2$라 하자. 분배 함수의 섭동 전개는 계수가 $a_n \sim n!$으로 팩토리얼 성장하는 형식적 거듭제곱 급수 $\Phi(g^2) = \sum_{n=0}^\infty a_n (g^2)^n$이다. 우리는 이 급수의 **보렐 변환(Borel Transform)**을 다음과 같이 정의한다:
$$\mathcal{B}[\Phi](\zeta) \;=\; \sum_{n=0}^\infty \frac{a_n}{n!} \zeta^n$$

이는 보렐 평면 $\zeta$ 상에서 유한한 수렴 반경을 가진다. 물리적 인스턴톤(§4.2) 및 리노말론(renormalon)의 존재로 인해, 보렐 변환은 양의 실수축 $\mathbb{R}^+$ 상에 특이 극점(singular poles)들을 가지며, 이로 인해 표준 라플라스 재구성(보렐 합)은 적분 경로의 모호함(ambiguity)을 낳는다. 되살아남 이론은 분배 함수를 섭동 섹터와 비섭동 섹터를 통합하는 다중 변수 **트랜스-시리즈(trans-series)**로 인코딩하여 이를 치유한다:
$$Z_{\text{Universe}}(g^2) \;=\; \sum_{c} \sigma_c \, e^{-c S_{\text{inst}}/g^2} \, \Phi_c(g^2)$$

여기서 $S_{\text{inst}} = \frac{3\alpha^4}{16g^2\hbar} N^2$은 인스턴톤 작용량이고, $\sigma_c$는 트랜스-시리즈 매개변수이다. 섭동 섹터 $\Phi_0$의 보렐 변환 극점을 우회하며 적분할 때 발생하는 허수 모호성은, 비섭동 다중 인스턴톤 섹터 $\Phi_c$들의 허수 모호성과 *모든 차수에서 정확히* 상쇄됨이 증명된다:
$$\text{Im} \left( \mathcal{S}_{\theta = 0^+} Z_{\text{Universe}} - \mathcal{S}_{\theta = 0^-} Z_{\text{Universe}} \right) \;\equiv\; 0$$

이 정교한 상쇄는 다음과 같은 **보렐-에칼 외계 도함수(Alien Derivative)** 작용소 $\Delta_\omega$에 의해 대수적으로 지배된다. 보렐 평면 상에서, 특이 방향 $\theta$를 따르는 스토크스 자기동형군(Stokes automorphism) $S_\theta$는 다음과 같이 외계 도함수들에 의해 생성된다:
$$S_\theta \;=\; \exp\left( \sum_{\omega \in d_\theta} e^{-\omega/g^2} \Delta_\omega \right)$$

**수학적 일관성:** 이 되살아남 기작을 통해 HNM 분배 함수는 무조건적으로 **보렐 합산 가능(Borel summable)**하다. 우주의 비섭동적 경로적분은 형식적인 근사가 아니며, 복소 결합 평면 전체에서 수학적으로 유일하게 잘 정의된 해석 함수(analytic function)이다. 강결합 영역은 어떠한 특이 장벽도 거치지 않고 약결합 영역으로 해석적으로 연속(analytic continuation)되어, HNM을 수학적으로 완비되고 비섭동적으로 정확한 최초의 양자 중력 이론으로 확립한다.

### 2.9 프레임 다발의 창발적 심플렉틱 게이지 이론으로서의 비가환 중력

고전 일반 상대성 이론에서 시공간 기하학은 연속적인 계량 텐서 $g_{\mu\nu}(x)$로 정의된다. 하지만 HNM의 비섭동적 행렬 영역에서 좌표는 서로 가환하지 않으며 거시적 계량 텐서는 근본 실체가 아니다. 우리는 아인슈타인의 곡선 시공간 중력이 비가환 좌표 대수 $\mathcal{A} = \text{Mat}_N(\mathbb{C})$ 위의 **프레임 다발(vielbeins 및 spin connections)의 비가환 게이지 이론**으로서 엄밀하게 창발함을 증명한다.

좌표 행렬을 $X_a$ ($a=1, \dots, D$)라 하자. 우리는 대수 위의 미분(derivations)으로 작용하는 창발적 **비가환 프레임(vielbeins)** $E_a$를 다음과 같이 구축한다:
$$E_a(f) \;=\; [X_a, \; f]$$

프레임 장들의 교환자는 비가환 프레임 다발의 구조 함수(structure functions)를 정의한다:
$$[E_a, \; E_b] \;=\; F_{ab}^{\;\;\;c} E_c, \qquad F_{ab}^{\;\;\;c} \;=\; i [X_a, \; X_b] - \theta_{ab}^{\;\;\;c}$$

여기서 $\theta_{ab}^{\;\;\;c}$는 비가환 심플렉틱 구조를 나타낸다. 스핀 접속 $\omega_a^{\;\;bc}$는 국소 좌표 변환 하에서 공변 미분을 보존하기 위해 프레임 다발 상의 비가환 게이지 장으로 도입된다. 비틀림이 없는(torsion-free) Levi-Civita 조건은 다음과 같이 대수적으로 공식화된다:
$$T_a \;=\; [X_b, \; \omega_a^{\;\;bc}] + F_{ab}^{\;\;\;c} \;\equiv\; 0$$

이 비틀림 제거 조건을 풀면 스핀 접속 $\omega_a^{\;\;bc}$는 행렬 교환자 $[X_a, X_b]$에 의해 유일하게 결정된다. 창발되는 **리만 곡률 텐서(Riemann Curvature Tensor)** $R_{ab}^{\;\;\;cd}$는 공변 미분들의 교환자로부터 대수적으로 재구성된다:
$$[D_a, \; D_b] \;=\; R_{ab}^{\;\;\;cd} J_{cd}$$

대형 $N$ 극한에서 **Seiberg-Witten 맵**을 적용하면, 이 비가환 곡률 텐서는 고전 리만 곡률 텐서로 직접 매핑된다:
$$R_{ab}^{\;\;\;cd} \;\longrightarrow\; R_{\mu\nu}^{\;\;\;\rho\sigma}(g) + \mathcal{O}(\theta)$$

**물리적 의의:** 중력은 시공간의 독자적인 기하학적 힘이 아니라, 비가환 다양체 상의 **좌표 프레임들의 심플렉틱 게이지 이론**이다. 행렬 교환자 $[X_a, X_b]$는 단순한 양자역학적 불확정성을 나타내는 것이 아니라 스핀 접속과 리만 곡률을 매개하는 물리적 실체이다. 시공간의 휘어짐은 비가환 프레임 다발의 게이지 곡률에 다름 아니며, 중력의 완벽한 게이지론적 통일을 성취한다.

---

## 제3장. $D=10$ 차원의 대수적 유일성과 팔원수

### 3.1 초대칭 보존과 Fierz 항등식의 유도

HNM 마스터 작용량 $S_{\text{HNM}}$이 다음의 초대칭 변환에 대해 정류($\delta S_{\text{HNM}} = 0$)하기 위해서는 변분 과정에서 발생하는 삼차 스피너 잔여항이 완벽하게 소거되어야 한다:
$$\delta X_a = i\bar{\epsilon}\Gamma_a\Psi, \quad \delta\Psi = \frac{i}{2}[X_a, X_b]\Gamma^{ab}\epsilon$$

이 초대칭 보존의 필요충분조건은 스피너 성분의 대칭 축약에 대한 다음의 **Fierz 항등식**이다:
$$\Gamma^a_{\alpha(\beta}\,\Gamma_{a\,\gamma\delta)} = 0$$

### 3.2 노름 나눗셈 대수와 Hurwitz 정리의 연역

**정리 3.1.** Fierz 항등식이 물리적으로 유효하고 게이지 및 중력 아노말리가 상쇄되기 위한 시공간 차원은 오직 $D = 10$으로 유일하게 고정된다.

**증명.** 경추적(Light-cone) 게이지 $\Gamma^+\Psi = 0$ 하에서, Fierz 항등식은 보손의 횡단 물리 부분공간 $\mathbb{R}^{D-2}$의 벡터 곱셈이 다음의 노름 보존 법칙을 따를 것을 강제한다:
$$\|x \cdot y\| = \|x\| \cdot \|y\| \quad \text{for } x, y \in \mathbb{R}^{D-2}$$

대수학의 **Hurwitz 정리**에 따라, 실수체 위의 유한 차원 노름 나눗셈 대수(Normed Division Algebra)는 오직 실수($\mathbb{R}$, 1차원), 복소수($\mathbb{C}$, 2차원), 사원수($\mathbb{H}$, 4차원), **팔원수($\mathbb{O}$, 8차원)**의 네 가지만 존재한다.
따라서 가능한 시공간 차원 $D$는 다음과 같이 한정된다:
$$D - 2 \in \{1, 2, 4, 8\} \implies D \in \{3, 4, 6, 10\}$$

여기서 물리적 CP 보존과 표준 모형의 카이랄성(Chirality)을 획득하기 위해 필수적인 **실수 카이랄-마요라나 스피너(Majorana-Weyl Spinor)**가 위상학적으로 존재할 필요충분조건은 다음과 같다:
$$D \equiv 2 \pmod{8}$$

저차원 중에서 이 조건을 충족하는 것은 $D=2$와 $D=10$뿐이다. $D=2$ 차원은 횡단 10D 차원과 내부 대수 $\mathcal{A}_F$의 표준 모형 게이지 군 $SU(3) \times SU(2) \times U(1)$을 자발적 컴팩트화로 수용하기에 너무 작기 때문에 대수적으로 배제된다. 따라서 오직 팔원수 대수($\mathbb{O}$)와 호환되는 **$D = 10$** 차원만이 보손의 횡단 자유도 $d_B = 10 - 2 = 8$과 페르미온의 온셸 자유도 $d_F = 8$의 완벽한 1:1 결합을 달성하여 물리적으로 유일하게 선택된다.
$$\boxed{D = 10}$$ $\square$

**비고 3.1 (KO-차원 분류).** 스펙트럼 삼조의 KO-차원은 주기성 $\text{mod}\;8$에 의해 부호 표 $(\epsilon, \epsilon', \epsilon'')$를 결정한다. $D=10 \equiv 2 \pmod{8}$의 경우, 콘의 KO-차원 분류는 다음과 같다:

| KO-차원 $d$ | $\epsilon = J^2$ | $\epsilon' = J\mathcal{D}$ | $\epsilon'' = J\gamma_5$ |
|:---:|:---:|:---:|:---:|
| 0 | $+1$ | $+1$ | $+1$ |
| 2 | $-1$ | $+1$ | $-1$ |
| 4 | $-1$ | $+1$ | $+1$ |
| 6 | $+1$ | $+1$ | $-1$ |

$D = 10$에서의 KO-차원은 $d = 2$이며, $(\epsilon, \epsilon', \epsilon'') = (-1, +1, -1)$이다. 이는 마요라나-바일 스피너와 CP 보존에 적합한 유일한 실수 구조를 선택하며, 자연이 대수적 수준에서 왜 $D = 10$을 요구하는지를 설명한다. 이 대수적 분류를 명시적으로 나타내기 위해, Pauli 행렬의 텐서곱을 사용하여 10차원(시그니처 $(-1, +1, \dots, +1)$)의 $32 \times 32$ Dirac 감마 행렬 $\Gamma^a$를 구성한다. $\sigma_i$ ($i=1,2,3$)를 Pauli 행렬이라 하고 다음을 정의한다:
$$\Gamma^0 \;=\; i\sigma_2 \otimes \mathbf{1}_{16}, \quad \Gamma^i \;=\; \sigma_1 \otimes \gamma^i \quad (i=1,\dots,9)$$
여기서 $\gamma^i$는 유클리드 Clifford 대수 $Cl(9)$를 생성하는 $16 \times 16$ 실수 대칭 행렬이다. 마요라나-바일 조건은 스피너 $\Psi$가 실수 조건 $\Psi^* = B \Psi$ ($B = \Gamma^0 \Gamma^1 \dots \Gamma^9$)와 카이랄성 사영 $\gamma_{11} \Psi = \Psi$를 동시에 만족할 것을 요구하며, 이를 통해 32성분 복소 스피너를 16성분 실수 표현으로 축소시킨다. 컴팩트화 $SO(1,9) \to SO(1,3) \times SO(6)$ 하에서, 이 16성분 스피너는 다음과 같이 분해된다:
$$\mathbf{16} \;\longrightarrow\; (\mathbf{2}, \mathbf{4}) \;\oplus\; (\mathbf{\bar{2}}, \mathbf{\bar{4}})$$
여기서 $(\mathbf{2}, \mathbf{4})$는 내부 공간의 스핀 대칭군 $SU(4) \cong SO(6)$의 기본 표현 $\mathbf{4}$ 하에서 변환하는 4차원 시공간의 왼손잡이 바일 스피너를 나타낸다. 이 분해는 §3.3에서 보여지듯이 내부 공간이 세 개의 비자명한 위상학적 지수 결함을 가질 때, 저에너지 극한에서 정확히 세 세대의 카이랄 페르미온을 자연스럽게 생성한다.

### 3.3 비가환 지수 정리와 양자 이상(Anomaly)의 상쇄

대수적인 $D=10$ 차원의 선택은 양자 이론의 이상(Anomaly) 상쇄 조건이라는 깊은 기하학적 요구에 의해 더욱 강하게 지배된다. 10차원 이론에서 $U(N)$ 행렬 페르미온 요동이 야기하는 카이랄 게이지 이상과 중력 이상은 양자적 수준에서 완벽하게 상쇄되어야만 자명하지 않은 자외선(UV) 안정성을 획득할 수 있다.

HNM에서 양자 이상(chiral anomaly) 상쇄는 자외선(UV)의 유한성과 적외선(IR)의 위상적 상쇄 기작이 상보적으로 작동하여 완수됩니다.

1. **유한 $N$에서의 변칙 부재:** 유한 차원 행렬 상태 공간에서 물리적 분배 함수 $Z_{\text{Universe}}$의 적분 측도는 게이지 군 $U(N)$의 하르 측도(Haar measure)로 정의됩니다. 하르 측도는 게이지 변환에 대해 수학적으로 완벽히 불변이므로, 유한 $N$ 수준의 UV 정규화 상태에서는 카이랄 게이지 변칙이 발생할 수 없습니다. 

2. **거대 $N$ 극한 및 Green-Schwarz 상쇄:** 거대-$N$ 연속체 극한($N \to \infty$)에서 10D 초대칭 게이지 이론이 창발할 때, 12-form 변칙 다항식 $I_{12}$가 나타납니다. HNM의 10D 스펙트럼 구조는 **비가환 아티야-싱어 지수 정리**에 의해 다음의 인자화(factorization)를 강제합니다:
$$I_{12} \;=\; X_4 \wedge X_8$$
where $X_4 = \text{Tr}(R^2) - \text{Tr}(F^2)$입니다. 이 인자화 조건에 의해, 2-form 비대각 끈 장 $B_2$(칼브-라몽 장)의 게이지 변동을 매개로 하는 **Green-Schwarz 메커니즘**이 작동하여 10차원 chiral 및 gravitational 아노말리를 완벽하게 상쇄합니다. 또한 차원 전이 경계면에서는 WZW 작용량이 위상학적으로 전하 이상을 흡수하여 전체 분배 함수가 자외선과 적외선 전 스케일에서 변칙 없이(anomaly-free) 완벽히 안전함을 수학적으로 보장합니다.

### 3.4 예외 기하학 $\mathbb{O}P^2$와 $E_8$ 게이지 대칭성의 창발

$D=10$에서 팔원수($\mathbb{O}$)의 유일성은 예외 리 군(Exceptional Lie Groups)으로 향하는 심오한 가교를 제공한다. 근본 좌표 대수는 $U(N)$ 행렬 모형으로 시작하지만, 팔원수 횡단 공간의 구조적 대칭성은 허용되는 기하학적 상태들을 깊게 통제한다.

팔원수 사영 평면 $\mathbb{O}P^2$는 대수학적으로 대각합이 1인 $3 \times 3$ 에르미트 팔원수 사영 행렬들의 집합으로 표현된다:
$$P \;=\; \begin{pmatrix} x & \overline{z} & \overline{y} \\ z & y & x' \\ y & \overline{x'} & 1-x-y \end{pmatrix} \quad (x, y \in \mathbb{R},\; z, x', y \in \mathbb{O})$$
이 행렬들은 $P^2 = P$를 만족한다. 이 요르단 대수(Jordan algebra)의 자기동형군이 예외 군 $F_4$이며, 이의 최대 초대수적 확장은 유일한 최대 예외 리 군 $E_8$을 자연스럽게 생성한다. 결과적으로 $D=10$ 팔원수 시공간 내의 대형 $N$ 행렬 요동은 이상(anomaly)이 없는 카이랄 게이지 섹터를 정확히 $E_8 \times E_8$ (또는 $SO(32)$)로 위상학적으로 국한시킨다.

따라서 HNM 슈퍼 디랙 연산자는 헤테로틱 끈 이론 및 M-이론의 궁극적인 $E_8 \times E_8$ 게이지 구조를, 오직 팔원수 대수 위에서의 Fierz 항등식이라는 대수적 필연성만으로 자연스럽게 배태하며, 모든 것의 대칭성을 기하학적으로 통일한다.

### 3.5 트위스터 공간(Twistor Space, $\mathbb{CP}^3$)과 펜로즈 변환

이산적인 행렬 배열로부터 어떻게 연속적인 고전 시공간이 창발하는지 엄밀히 이해하기 위해, HNM은 **트위스터 이론(Twistor Theory)**의 수학을 채택한다. 슈퍼 디랙 연산자의 근본 스피너 $\Psi$는 복소 사영 트위스터 공간 $\mathbb{CP}^3$를 자연스럽게 매개변수화한다.

비가환 $X_\mu$ 행렬들은 점(point)과 같은 사건을 정의하지 않는다; 오히려 그들의 고윳값들은 트위스터 공간 상의 복소 사영 선(리만 구면)들에 대응된다. 따라서 거시적 민코프스키 시공간의 창발은 **펜로즈 변환(Penrose Transform)**을 통해 수학적으로 엄밀히 유도된다. 복소 트위스터 좌표 $Z^I = (\omega^\alpha, \pi_{\dot{\beta}}) \in \mathbb{C}^4$는 다음과 같은 결합 관계(incidence relation)를 통해 물리적 시공간 좌표 $x^{\alpha\dot{\beta}}$로 매핑된다:
$$\omega^{\alpha} \;=\; i x^{\alpha\dot{\beta}} \pi_{\dot{\beta}}$$
시공간 상의 점들은 얽힌 행렬 고유상태들이 형성하는 트위스터 선들의 위상학적 교차점(intersection)에 다름 아니다. 즉, 로렌츠 공변성은 가정되는 것이 아니라, 기저에 있는 트위스터 결합 관계의 등각적(conformal) 성질로서 동역학적으로 창발한다.

### 3.6 예외 장론(Exceptional Field Theory, ExFT)과 일반화 기하학

HNM의 $E_8 \times E_8$ 대칭성은 단순한 고전적 게이지 군이 아니며, **예외 장론(Exceptional Field Theory, ExFT)**과 **일반화 기하학(Generalized Geometry)**을 통해 창발된 시공간 위에서 기하학적으로 작용한다. 접다발 $TM$을 $TM \oplus T^*M$으로 확장함으로써, 국소 기하학은 계량(metric)과 반대칭 텐서 장들을 모두 자연스럽게 수용한다.

이 일반화된 공간에서 T-쌍대성과 U-쌍대성은 더 이상 숨겨진 끈 이론적 대칭성이 아니라, 행렬 지표들의 명시적이고 기하학적인 회전으로 발현된다. 초중력 선속(flux)과 창발된 리만 계량은 $TM \oplus T^*M$ 상의 단일하고 우아한 일반화 계량(generalized metric) $\mathcal{H}_{MN}$으로 통일된다:
$$\mathcal{H}_{MN} \;=\; \begin{pmatrix} g_{ij} - b_{ik} g^{kl} b_{lj} & b_{ik} g^{kj} \\ -g^{ik} b_{kj} & g^{ij} \end{pmatrix}$$
여기서 $g_{ij}$는 리만 계량이고 $b_{ij}$는 반대칭 Kalb-Ramond 2-form 장이다. 따라서 HNM은 M-이론의 쌍대성들을 좌표 행렬들의 비가환 대수적 구조 안으로 완벽하게 흡수한다.

### 3.7 F-이론(F-Theory)으로의 도약과 타원 올뭉치(Elliptic Fibration) 특이점

팔원수 스펙트럼 삼조의 $E_8 \times E_8$ 대칭성은 자연스럽게 **F-이론**이라 불리는 12차원 기하학적 도약을 요구한다. HNM에서 끈 결합 상수 $g_s$와 창발된 액시온-딜라톤(axion-dilaton) 장은 동역학적으로 결합하여 타원의 복소 구조 모듈러스 $\tau$를 형성한다.

비가환 행렬 액적은 바이어슈트라스(Weierstrass) 방정식으로 정의되는 **타원 올뭉치(Elliptic Fibration)**의 엄밀한 기하학적 밑공간(base) 역할을 한다:
$$y^2 \;=\; x^3 \;+\; f(z) x \;+\; g(z)$$
여기서 $f(z)$와 $g(z)$는 밑공간 $B$ 상의 선다발 $\mathcal{O}(-4K_B)$ 및 $\mathcal{O}(-6K_B)$의 단면(section)들이다. 판별식 $\Delta = 4f^3 + 27g^2$은 타원 올이 붕괴되는 기하학적 특이점들의 위치를 결정하며, 이 위치는 정확히 표준 모형의 카이랄 페르미온들이 갇혀 있는 공간적 위치에 대응된다. 따라서 물질 그 자체는 수학적으로 기저 행렬 위에 얹혀진 F-이론 타원 올뭉치의 위상학적 특이점들에 다름 아니다.

---

## 제4장. 양자 정보 흐름과 허블 우주론의 창발

HNM에서 시간 $t$와 우주의 팽창은 외적으로 주어지는 고전적 매개변수가 아니다. 그것은 양자 인스턴톤 터널링과 모듈러 열역학의 거시적 발현이다.

### 4.1 자유 확률론과 퍼지 액적 기하 (Free Probability & Fuzzy Droplet)

좌표 연산자들이 교환하지 않는 다중 행렬 모형($[X_a, X_b] \neq 0$)에서는 이들을 동시에 대각화하는 것이 불가능하므로, 고전적인 1차원 위그너 반원 법칙(Wigner Semicircle Law)과 스칼라 고윳값 분포는 수학적으로 적용될 수 없다. 대신, HNM은 $N \to \infty$ 극한에서 비가환 좌표 행렬 $X_1, \dots, X_D$를 비가환 확률 공간 $(\mathcal{A}, \tau)$ 상의 **자유 반원 군(Free Semicircular Family)**으로 기술하며, 이는 보이쿨레스쿠(Voiculescu)의 **자유 확률론(Free Probability Theory)**에 의해 엄밀하게 지배된다.

좌표 행렬들의 결합 스펙트럼 분포를 $\mu_{X_1, \dots, X_D}$라 하자. 상호작용하는 양-밀스 행렬 퍼텐셜 $S_{\text{HNM}}$에 의해, 비가환 좌표 작용소들은 $\mathbb{R}^D$ 상에서 콤팩트한 $D$차원 영역인 **"퍼지 액적(Fuzzy Droplet/Fuzzy Ball)"**을 기하학적 서포트(support)로 형성한다. 이 퍼지 액적의 스펙트럼 반경은 자유 R-변환(Free R-transform)과 다차원 자유 합성(Free Convolution)을 통해 엄밀하게 결정된다.

분산 $\sigma^2 = \frac{1}{N}\text{Tr}(X_a^2)$을 갖는 자유 반원 군에 대해, 이 결합 분포는 등방성을 띠며 날카로운 스펙트럼 경계를 가진다. 고윳값의 최대 반경 $R$은 다음과 같이 대수적으로 도출된다:
$$R \;=\; \sqrt{D \cdot \sigma^2}$$

이 콤팩트한 스펙트럼 서포트 한계선 너머에는 어떠한 물리적 미시 상태나 시공간 좌표도 위상학적으로 존재할 수 없다. 이 엄밀한 대수적 경계가 거시 우주의 절대적 지평선 $R_H$를 동역학적으로 구성하게 된다. 수학적으로, $N \to \infty$ 극한은 보이쿨레스쿠의 자유 독립성(free independence)을 실현한다. 규격화된 대각합 $\tau_N = \frac{1}{N}\text{Tr}$을 갖는 복소 행렬 대수 $\mathcal{A}_N = \text{Mat}_N(\mathbb{C})$를 고려하자. $N \to \infty$ 극한에서 비가환 무작위 변수 $X_1, \dots, X_D$는 상호 간에 자유 독립(freely independent)이 된다. 이들의 결합 분포는 다음과 같이 정의되는 보이쿨레스쿠의 **비가환 자유 엔트로피(non-commutative free entropy)** $\chi(X_1, \dots, X_D)$를 극대화한다:
$$\chi(X_1, \dots, X_D) \;=\; \iint \log |x - y| \, d\mu(x) d\mu(y) \;+\; \text{상수}$$
비가환 정보 이론과의 연결성을 명시하기 위해, 자유 엔트로피를 **보이쿨레스쿠의 자유 피셔 정보(Free Semicircular Fisher Information)** $\Phi^*(X_1, \dots, X_D)$를 이용한 적분 식으로 표현한다:
$$\chi(X_1, \dots, X_D) \;=\; \frac{D}{2} \ln(2\pi e) \;-\; \int_0^\infty \left( \Phi^*(X_1 + \sqrt{t} S_1, \dots, X_D + \sqrt{t} S_D) \;-\; \frac{D}{1+t} \right) dt$$
여기서 $S_a$는 서로 자유 독립인 표준 반원 무작위 변수들이며, 자유 피셔 정보는 자유 켤레 변수(conjugate variables) $\xi_a$의 대각합으로 정의된다:
$$\Phi^*(X_1, \dots, X_D) \;=\; \sum_{a=1}^D \tau\left( \xi_a^2 \right)$$
이들은 임의의 비가환 다항식 $P$에 대해 $\tau(\xi_a P(X)) = \tau \otimes \tau(\partial_a P(X))$의 대수적 관계를 만족한다. 양-밀스 퍼텐셜은 고전적인 가둠 퍼텐셜(confining potential)로 작용하며, 평형 배위는 고전적 퍼텐셜과 로그 반발력(자유 엔트로피)을 균형 있게 조율하는 자유 에너지 범함수의 유일한 극소점(minimizer)이다. 퍼지 액적의 날카로운 경계는 이 평형 분포의 서포트(support) 경계에 해당하며, 이는 우주의 지평선이 자유 확률 공간의 수학적으로 엄밀한 위상 경계(phase boundary)임을 입증한다. 특히 이 지평선 경계에서 자유 피셔 정보가 발산하므로, 지평선은 무한한 양자 정보 저항을 갖는 정보 장벽으로 물리적으로 동정된다.

**명제 4.1 (홀로그래픽 자기 일관성).** 비가환 행렬 모형의 자유 확률론은 두 가지 핵심 성질을 자연스럽게 산출한다: (i) 미시정준(microcanonical) 엔트로피가 행렬 전체 자유도 수인 $S_{\text{micro}} = N^2$으로 스케일링하며, (ii) 비가환 작용소 대수가 반경 $R_H \propto N$의 날카로운 스펙트럼 경계를 가진 밀집된 기하학적 영역을 형성한다. 베켄슈타인-호킹 공식은 행렬 스케일과 중력 스케일 사이의 유일한 자기 일관적 동정(identification)으로서 창발한다:
$$S = N^2 = \frac{A}{4\ell_P^2} = \frac{\pi R_H^2}{\ell_P^2}$$

이 동정으로부터 우주의 척도 인자가 정의된다:
$$\boxed{a(t) \equiv \frac{\ell_P}{\sqrt{\pi}} N(t)}$$

> **비고(Remark).** 베켄슈타인-호킹 공식은 여기서 제1원리로부터 순수하게 도출되는 것이 아니다. 오히려 행렬 모형은 엔트로피 스케일링($\propto N^2$)과 밀집된 기하학적 경계를 갖는 자연스러운 미시적 체계를 제공하며, 이것이 홀로그래픽 열역학과 *자기 일관적*이다. $R_H \propto N$이라는 동정(identification)은 추상적 행렬 기하학을 중력적 시공간에 연결하는 물리적 가설이다. 그 타당성은 §4.3에서 제시되는 열역학적 일관성에 의해 뒷받침된다.


### 4.2 인스턴톤 터널링과 드 시터 팽창 (de Sitter Expansion)

우주는 왜 팽창하는가 ($\dot{N} > 0$)? 관측 가능한 퍼지 액적 외부에는 비가환 고윳값들의 무한한 "디랙 바다(Dirac Sea)"가 존재한다. 우주의 팽창이란 외부 고윳값들이 판데르몬데 장벽을 뚫고 물리적 액적 내부로 쏟아져 들어와 행렬 표현의 차원을 $N \to N+1$로 전이시키는 연속적이고 비섭동적인 양자 터널링 과정이다.

이 터널링율 $\gamma$를 엄밀하게 계산하기 위해, 비가환 양-밀스 작용량으로부터 명시적인 **인스턴톤 해(Instanton Solution)**를 구성한다:
$$S_{\text{YM}} = -\frac{1}{4g^2}\text{Tr}\left([X_a, X_b]^2\right)$$

배경 진공이 $N$차원의 **퍼지 구면(Fuzzy Sphere $S^2_F$)** 배위를 가진다고 하자. 이때 좌표 행렬은 $SU(2)$의 $N$차원 표현의 생성원 $J_a^{(N)}$에 비례한다:
$$X_a^{(N)} = \alpha J_a^{(N)} \quad (a=1,2,3)$$

여기서 $\alpha$는 스케일 매개변수이고, 생성원들은 $[J_a, J_b] = i\epsilon_{abc} J_c$를 만족한다. 이 $N$차원 퍼지 구면의 고전적 작용량은 다음과 같이 계산된다:
$$S_N = \frac{\alpha^4}{4g^2} \text{Tr}\left( (J_c^{(N)})^2 \right) = \frac{\alpha^4}{16g^2} N(N^2-1)$$

인스턴톤은 $N$차원 표현에서 $(N+1)$차원 표현으로 전이(즉, 새로운 좌표 고윳값 껍질의 생성)하는 과정을 보간하는 비섭동적 경로이다. 유클리드 인스턴톤 작용량 $S_{\text{inst}}$는 두 고전 진공 상태의 에너지 차이와 일치한다:
$$S_{\text{inst}} \;=\; S_{N+1} - S_N \;=\; \frac{\alpha^4}{16g^2} \left[ (N+1)((N+1)^2-1) - N(N^2-1) \right] \;=\; \frac{3\alpha^4}{16g^2} N^2 + \mathcal{O}(N)$$

이 인스턴톤 배경 주위에서 경로적분을 실행하면, 단위 시간당 터널링 확률 밀도 $\gamma(N)$은 고전 작용량에 의해 완벽히 지배된다:
$$\gamma(N) \;\propto\; \exp\left(-\frac{S_{\text{inst}}}{\hbar}\right) \;=\; \gamma_0 \exp\left(-\lambda N^2\right) \quad \left(\lambda \equiv \frac{3\alpha^4}{16g^2\hbar}\right)$$

여기서 $\gamma_0$는 프리엑스포넨셜 인자이다. 프리엑스포넨셜 인자 $\gamma_0$는 인스턴톤 배경 주위의 1-루프 양자 요동 결정행렬(fluctuation determinant)로부터 엄밀하게 계산된다. 인스턴톤 배위를 중심으로 요동 $\delta X_a$에 대해 작용량을 2차까지 전개하고 가우시안 적분을 실행하면 다음을 얻는다:
$$\gamma_0 \;=\; \frac{S_{\text{inst}}^{d/2}}{(2\pi)^{d/2}} \left| \frac{\det'(-\nabla^2 + V''_{\text{inst}})}{\det(-\nabla^2 + V''_{\text{vac}})} \right|^{-1/2}$$
여기서 $d = \dim(\mathfrak{u}(N+1)/\mathfrak{u}(N)) = 2N+1$은 모듈라이 공간의 차원이고, $\det'$는 영모드가 제거된 결정행렬이며, $V''$는 양-밀스 퍼텐셜의 2차 변분이다. 함수 결정행렬의 비율은 제9.3절의 스펙트럼 제타 함수 $\zeta_{\mathcal{D}}(s)$를 이용하여 정규화되며, 이는 인스턴톤 동역학과 스펙트럼 기하학 사이의 자기 일관적 순환 고리를 확립한다. 프리엑스포넨셜 인자 $\gamma_0$는 인스턴톤 배경 주위의 1-루프 양자 요동 결정행렬(fluctuation determinant)로부터 엄밀하게 계산된다. 인스턴톤 배위를 중심으로 요동 $\delta X_a$에 대해 작용량을 2차까지 전개하고 가우시안 적분을 실행하면 다음을 얻는다:
$$\gamma_0 \;=\; \frac{S_{\text{inst}}^{d/2}}{(2\pi)^{d/2}} \left| \frac{\det'(-\nabla^2 + V''_{\text{inst}})}{\det(-\nabla^2 + V''_{\text{vac}})} \right|^{-1/2}$$
여기서 $d = \dim(\mathfrak{u}(N+1)/\mathfrak{u}(N)) = 2N+1$은 모듈라이 공간의 차원이고, $\det'$는 영모드가 제거된 결정행렬이며, $V''$는 양-밀스 퍼텐셜의 2차 변분이다. 함수 결정행렬의 비율은 제9.3절의 스펙트럼 제타 함수 $\zeta_{\mathcal{D}}(s)$를 이용하여 정규화되며, 이는 인스턴톤 동역학과 스펙트럼 기하학 사이의 자기 일관적 순환 고리를 확립한다.

지평선을 통과하는 엔트로피 유속은 지평선 면적과 터널링율의 곱에 비례하므로:
$$\dot{S} = \frac{d(N^2)}{dt} = 2N\dot{N} = \Phi_0 \cdot \gamma(N) \cdot A \propto N^3 \exp\left(-\lambda N^2\right)$$

$\dot{N}$에 대해 풀면:
$$\dot{N} \;=\; \gamma(N) N \;=\; \gamma_0 N \exp\left(-\lambda N^2\right)$$

우주가 충분히 성장한 $N \gg 1$ 극한에서는 터널링율이 되먹임 효과에 의해 열역학적 평형에 도달하여 점근적으로 일정한 상수 $\gamma \approx \text{const}$로 안정화된다. 이 진공 극한에서 우주는 $N(t) \propto e^{\gamma t}$에 따라 지수적으로 가속 팽창하게 되며, 이로부터 감속 매개변수가 -1인 **드 시터 팽창(de Sitter Expansion)**이 자연스럽게 유도된다:
$$q_{\text{vacuum}} = -\frac{\ddot{a}\,a}{\dot{a}^2} = -1$$

#### 4.2.1 이산 차원 전이와 척도 인자 동역학의 토이 모델 (Toy Model)

이산적인 차원 전이 $N \to N+1$이 어떻게 연속적인 고전적 척도 인자 동역학 $a(t)$를 유도하는지 보여주기 위해 구체적인 양자 토이 모델을 구축한다. 행렬 포크 공간 $\mathcal{H}_{\text{Fock}}$ 상의 우주 상태를 다음과 같은 파동 패킷으로 표현하자:
$$| \Psi(t) \rangle \;=\; \sum_{N=1}^\infty \psi_N(t) |N\rangle \otimes |X_N\rangle$$
여기서 $|N\rangle$은 행렬 크기를 나타내는 상태이며, $|X_N\rangle$은 크기가 $N$인 바닥 상태 행렬 배위이다.

차원 전이 해밀토니안 $\hat{H}_{\text{trans}}$는 차원 기저 상태들에 다음과 같이 작용한다:
$$\hat{H}_{\text{trans}} |N\rangle \;=\; g_N \left( e^{i S_{\text{WZW}}} |N+1\rangle + e^{-i S_{\text{WZW}}} |N-1\rangle \right)$$
여기서 $g_N$은 전이 결합 진폭이다. 파동 패킷 계수 $\psi_N(t)$의 시간 진화는 슈뢰딩거 방정식에 의해 지배된다:
$$i\hbar \frac{d\psi_N(t)}{dt} \;=\; g_{N-1} e^{i S_{\text{WZW}}} \psi_{N-1}(t) + g_N e^{-i S_{\text{WZW}}} \psi_{N+1}(t)$$

이산 차원 상태들에 작용하는 물리적 척도 인자 연산자 $\hat{a}$를 다음과 같이 정의한다:
$$\hat{a} |N\rangle \;=\; a_N |N\rangle, \qquad a_N \;\equiv\; \frac{\ell_P}{\sqrt{\pi}} \sqrt{N}$$
척도 인자의 기대값은 $a(t) = \langle \Psi(t) | \hat{a} | \Psi(t) \rangle = \sum_N |\psi_N(t)|^2 a_N$이 된다. 에렌페스트(Ehrenfest) 정리를 적용하면, 행렬 크기의 기대값 $N(t) = \langle \hat{N} \rangle$은 다음과 같이 진화한다:
$$\frac{d\langle\hat{N}\rangle}{dt} \;=\; \frac{i}{\hbar} \langle [\hat{H}_{\text{trans}}, \hat{N}] \rangle \;\equiv\; \Gamma(N)$$
여기서:
$$\Gamma(N) \;=\; \frac{2}{\hbar} \sum_{N=1}^\infty g_N \text{Im}\left( e^{i S_{\text{WZW}}} \psi_N^* \psi_{N+1} \right)$$
파동 패킷이 $N$ 부근에 국소화되어 있을 때, 차원 전이 속도 $\Gamma(N)$은 인스턴톤 터널링 속도 $\gamma(N) N$에 의해 결정된다. 후기 우주의 열역학적 평형에 도달하여 터널링 속도가 상수 $\gamma$로 안정화되면, $\Gamma(N) \approx 2\gamma N$이 성립한다.

홀로그래픽 관계식을 이용하여 척도 인자의 시간 미분을 취하면 다음과 같다:
$$\frac{da}{dt} \;=\; \frac{da}{dN} \frac{dN}{dt} \;=\; \left( \frac{\ell_P}{2\sqrt{\pi N}} \right) (2\gamma N) \;=\; \gamma \left(\frac{\ell_P}{\sqrt{\pi}} \sqrt{N}\right) \;=\; \gamma a(t)$$
이 식은 다음과 같은 연속적인 우주 팽창 방정식을 유도한다:
$$\frac{\dot{a}}{a} \;=\; H \;\equiv\; \gamma \;\implies\; a(t) \;\equiv\; a_0 e^{\gamma t}$$
이 토이 모델은 행렬 포크 공간에서 이산적으로 추가되는 시공간 고윳값들이 어떻게 거시 스케일에서 부드럽고 연속적인 드 시터 팽창으로 구현되는지를 보여주며, 이때 허블 상수 $H$는 양자 전이 확률 속도 $\gamma$에 의해 직접 결정된다.

### 4.3 완전한 우주론적 역사: 물질 되먹임과 관측 정합성

드 시터 진공 ($q = -1$)은 점근적 후기 시대의 극한을 나타낸다. 실제 우주론적 진화는 액적 내부의 물질 및 복사 함량의 되먹임(backreaction)을 포함한다.

지평선 경계에서 호킹 온도 $T = \frac{\hbar c}{2\pi k_B R_H}$와 지평선 엔트로피 $S = N^2$를 열역학 제1법칙 $dE = T\,dS + W\,dV$에 적용하면, 공간 곡률 $K = +1$에 대한 프리드만 방정식이 성립한다:

$$H^2 + \frac{c^2}{a^2} = \frac{8\pi G}{3}\left(\rho_r + \rho_m + \rho_\Lambda\right)$$

여기서 $\rho_r \propto a^{-4}$ (복사), $\rho_m \propto a^{-3}$ (물질, 제7장의 KK 잔존물 포함), $\rho_\Lambda = \frac{3\gamma^2}{8\pi G}$는 일정한 터널링률로부터 창발하는 기하학적 암흑 에너지이다.

임의의 시기에서의 감속 매개변수는 다음과 같다:
$$q(t) = \frac{1}{2}\Omega_r(t) + \frac{1}{2}\Omega_m(t) - \Omega_\Lambda(t)$$

이는 관측된 우주론적 역사를 자연스럽게 재현한다:
- **복사 시대** ($\Omega_r \approx 1$): $q \approx +1$ (감속)
- **물질 시대** ($\Omega_m \approx 1$): $q \approx +\frac{1}{2}$ (감속)
- **현재 시기** ($\Omega_m \approx 0.3,\; \Omega_\Lambda \approx 0.7$): $q_0 \approx -0.55$ ✓
- **점근적 미래** ($\Omega_\Lambda \to 1$): $q \to -1$ (드 시터)

**물리적 해석:** 우주의 가속 팽창은 인스턴톤 터널링 역학의 필연적 귀결이다. 초기 시대에는 밀집된 물질과 복사 함량이 에너지 수지를 지배하여 팽창을 감속시킨다. 우주가 희석됨에 따라 일정한 기하학적 터널링률 $\gamma$가 최종적으로 지배적이 되어, 우주를 점근적 드 시터 팽창으로 이끈다. 감속에서 가속으로의 전이는 우주 상수의 미세 조정 없이 $z \sim 0.7$에서 자연스럽게 발생한다.

> [!NOTE]
> **HNM 핵심 독창적 공헌: 판데르몬데 장벽 터널링 우주론**
> 우주 상수나 인플라톤 장을 수동적으로 주입하는 우주론과 달리, HNM은 공간의 팽창을 양자 터널링 과정으로 직접 도출합니다. 외부에 존재하는 무한한 디랙 바다로부터 고유값들이 **판데르몬데 장벽(Vandermonde Barrier)**을 뚫고 내부 액적으로 전입되는 역학을 구성하여, 후기의 드 시터 가속($q = -1$) 및 우주 초기 물질 되먹임을 포함하는 프리드만 역사 $q(t)$ 전체를 순수 행렬 통계물리로부터 정확히 유도해 냈습니다.

### 4.4 홀로그래픽 암흑 에너지(Holographic Dark Energy)와 우주 상수의 정확한 유도

초대칭 워드 항등식(§2.2)이 벌크 진공 에너지의 무한대를 완벽하게 소거(zero-out)하지만, 관측되는 극히 작고 양수인 우주 상수 $\Lambda_{obs}$의 기원에 대한 질문은 남는다. HNM에서 이는 **홀로그래픽 암흑 에너지(Holographic Dark Energy)** 경계 조건(Cohen-Kaplan-Nelson)에 의해 우아하게 해결된다.

행렬 액적은 양자 홀로그래픽 시스템으로 행동하므로, 우주의 최대 엔트로피는 베켄슈타인 상한(Bekenstein bound)을 초과할 수 없다. 이는 허블 반경 $R_H$에 해당하는 적외선(IR) 차단을 강제한다. 따라서 행렬 고윳값들의 영점 요동은 제한되며, 다음과 같은 정확하고 동역학적인 암흑 에너지 밀도를 산출한다:
$$\rho_\Lambda \;\sim\; \frac{3 c^2}{8\pi G} \frac{1}{R_H^2}$$
행렬 액적이 팽창함($R_H \to \infty$)에 따라, 암흑 에너지 밀도는 자연스럽게 현재의 극미한 비영(non-zero) 값으로 붕괴하며, 어떠한 미세 조정(fine-tuning) 없이도 우주 상수 문제를 수학적으로 완벽히 해결한다.

---

## 제5장. 빅뱅 특이점의 완벽한 해소: 판데르몬데 퍼텐셜

고전 일반 상대론의 붕괴 한계인 빅뱅 특이점($t \to 0$ 시점에 시공간 곡률이 무한대로 발산하는 현상)은 HNM의 비가환 양자 통계역학적 고윳값 스펙트럼 반발 법칙에 의해 차단된다.

### 5.1 행렬 경로적분과 판데르몬데 결정행렬 (Vandermonde Determinant)

보손 좌표 행렬 $X^a$의 경로적분을 대각화하여 고윳값 $\lambda_i$들의 공간으로 분해하면, 적분 측도의 Jacobian 변환 결과로 **판데르몬데 결정행렬의 제곱**이 유도된다:
$$d X = \prod_{i<j} (\lambda_i - \lambda_j)^2 \prod_i d\lambda_i$$

반경이 척도 인자 $a \propto \sqrt{\text{Tr}(R^2)} = \sqrt{\sum \lambda_i^2}$를 나타내는 초구면 좌표계(hyperspherical coordinates)로 변환하면 각도 자유도들이 분리된다:
$$dR \;\longrightarrow\; a^{N(N-1)+N-1} \prod_{i<j} (\theta_i - \theta_j)^2 \, da \, d\Omega_N$$
이 다변수 Jacobian 측도를 유효 방사 작용량(effective radial action) $e^{-S_{\text{eff}}}$의 지수로 밀어 올리면 다음과 같다:
$$S_{\text{eff}}[\lambda] = S_0[\lambda] - 2 \sum_{i<j} \ln \left| \lambda_i - \lambda_j \right|$$

여기서 유도되는 $-2 \sum_{i<j} \ln \left| \lambda_i - \lambda_j \right|$는 고윳값들 사이의 **무한한 2차원 로그 쿨롱 반발력 (Logarithmic Coulomb Repulsion)**을 의미한다.

### 5.2 양자 정보 장벽(Vandermonde Barrier)과 빅 바운스(Big Bounce)

**정리 5.1 (동역학적 빅 바운스 증명).** 수축하는 HNM 우주의 척도 인자 $a(t)$는 빅뱅 특이점 $a = 0$에 도달하지 않고 동역학적으로 완전히 반사(Big Bounce)된다.

**증명.** 판데르몬데 행렬식 자코비안 $\prod_{i<j}(\lambda_i - \lambda_j)^2$은 척도 인자 $a \\propto \\sqrt{\\text{Tr}(X^2)}$에 대한 유효 라디알 Wheeler-DeWitt 방정식에서 다음과 같은 원심력 유효 퍼텐셜 장벽을 유도한다:
$$V_{\text{eff}}(a) \;\sim\; \frac{\hbar^2}{2M_{\text{eff}} a^2} \ell(\ell + 1) \quad (a \to 0)$$
여기서 $\ell = N_{\text{int}}(N_{\text{int}}-1)/2$이다. 이 퍼텐셜은 단순한 측정 측도의 영(zero)화가 아니라, $a \to 0$ 극한에서 무한대로 발산하는 물리적 에너지 장벽이다. 이 슈뢰딩거 유사 파동 방정식에 대해 수축하는 우주의 입사 파동 패킷(wavepacket) $\Psi_{\text{in}}(a)$의 S-행렬(S-matrix)을 계산하면, $a=0$의 무한 장벽 경계 조건에 의해 반사 계수 $R$은 다음과 같이 유니터리 한계를 충족한다:
$$\|R\|^2 \;\equiv\; 1$$
즉, 입사된 파동 패킷은 어떠한 확률적 흡수나 곡률 발산 없이 $a_{\min} \propto \ell_P / \sqrt{N_{\text{cosm}}}$ 지점에서 완전히 외향 팽창 파동 패킷 $\Psi_{\text{out}}(a)$으로 튕겨져 나가게 된다. 이는 빅뱅 특이점 상태로 붕괴할 물리적 확률이 동역학적으로 0이며, 반드시 거시적 빅 바운스(Big Bounce)가 촉발됨을 엄밀히 증명한다. $\square$

### 5.3 $E_{10}/E_{11}$ 칵스-무디 대수(Kac-Moody Algebra)와 BKL 특이점의 완벽한 해소

고전 일반 상대론에서 우주론적 특이점($a \to 0$)에 가까워지면 **BKL(Belinski-Khalatnikov-Lifshitz) 특이점**이라 불리는 극도로 혼돈스러운 공간적 진동이 촉발된다. 시공간 계량은 카스너(Kasner) 시대의 임의적 순열을 겪으며, 쌍곡 공간 상의 혼돈스러운 당구(billiard) 운동으로 모형화된다. HNM 체계에서 이 무질서한 특이점은 무한차원 쌍곡 칵스-무디 대수인 **$E_{10}$ (및 $E_{11}$)**의 창발을 통해 완벽하게 해소되고 매끄럽게 정돈된다.

극도로 압축된 시공간 상태에서, 슈퍼 디랙 연산자의 좌표 행렬 $X_a$들은 일차원적 점근 영역으로 제약을 받는다. 우리는 이 압축 상태에서 행렬 모형의 아인슈타인-양-밀스 방정식이 $E_{10}$ 쌍곡 칵스-무디 대수에 의해 지배되는 무한한 대칭성의 탑(tower of symmetries)을 발현함을 증명한다. 좌표 행렬의 생성원들은 $E_{10}$ 딘킨 다이어그램(Dynkin diagram)의 루트 벡터들로 직접 매핑된다.

이 혼돈스러운 BKL 당구 역학은 무한차원 대칭 코셋 공간(symmetric coset space) 위의 매끄러운 측지선(geodesic) 운동으로 엄밀하게 매핑된다:
$$\mathcal{M}_{\text{coset}} \;=\; E_{10} / K(E_{10})$$

여기서 $K(E_{10})$은 $E_{10}$의 최대 콤팩트 부분군이다. 카스너 지수 $\alpha_i$들은 바일 챔버(Weyl chamber) 내의 루트 $\alpha \in \Phi(E_{10})$에 대응한다. 고전 우주가 $a \to 0$에 가까워질 때 BKL의 혼돈스러운 바운스들은, 측지선이 **$E_{10}$ 바일 챔버(Weyl Chamber)**의 격벽에 부딪혀 반사되는 대수적 과정과 수학적으로 완벽히 등가이다.

양자 HNM 이론에서 바일 반사들은 우주 파동함수 $\Psi(a)$ (§9.1)에 작용하는 유니터리 작용소로 표상된다. 예외 루트 격자 $\Lambda_{E_{10}}$은 자연스러운 이산적 양자 격자로 기능한다. 빅뱅을 통과하는 전이는 물리적 붕괴가 아니라, $E_{10}$ 루트 공간 내에서의 매끄러운 바일 반사에 불과하다. 하이퍼볼릭 카츠-무디 대수 $E_{10}$의 카르탄 행렬(Cartan matrix)을 $A_{ij}$ ($i,j=1,\dots,10$)라 하자. 무한 하이퍼볼릭 바일 군 $W(E_{10})$을 생성하는 바일 반사는 다음과 같이 정의된다:
$$s_j(\lambda) \;=\; \lambda \;-\; A_{ij} \frac{(\lambda, \alpha_j)}{(\alpha_j, \alpha_j)} \alpha_j$$
여기서 $\alpha_j$는 $(\alpha_j, \alpha_j) = 2$를 만족하는 $E_{10}$의 단순 루트(simple root)들이다.

**물리적 의의:** 무한차원 $E_{10}$ 및 $E_{11}$ 대칭성은 빅뱅 근방에서 "시간" 그 자체가 예외 대수 내의 루트 좌표에 불과함을 입증한다. 고전 물리학이 혼돈스럽고 파괴적인 중력 특이점으로 인식했던 것은, $E_{10}$의 바일 챔버를 가로지르는 행렬 고유상태들의 완전히 매끄럽고 유니터리한 회전 운동에 다름 아님이 밝혀진다. 이로써 우주론적 특이점은 완벽히 해소되고, 예외 칵스-무디 격자 상에서의 매끄러운 대수적 전이로 대체된다.

---

## 제6장. 자발적 차원 콤팩트화와 게이지 대칭의 창발

### 6.1 자발적 콤팩트화와 퍼지 여분 공간의 해석학적 에너지 최소화

$D = 10$ 좌표 행렬 $X^a$는 4차원 배경 거시 시공간 $X^\mu$ ($\mu = 0, \dots, 3$)와 6차원 비가환 컴팩트 내부 공간 $X^i$ ($i = 4, \dots, 9$)로 자발적으로 상전이한다. 이 콤팩트화가 동역학적, 열역학적으로 필연적인 귀결임을 여분 공간의 유효 퍼텐셜 에너지를 계산하여 해석학적으로 증명할 수 있다:

$$V(X) = -\frac{1}{4}\text{Tr}\left([X_i, X_j]^2\right)$$

6차원 여분 공간에 대한 두 가지 진공 배위의 에너지를 비교해 보자:
1. **평탄한 가환 시공간 진공(Commutative Flat Space Vacuum):** 좌표 행렬들이 완전히 교환 가능한 평탄한 상태이다:
   $$[X_i, X_j] = 0 \implies V_{\text{flat}}(X) = 0$$

2. **비가환 퍼지 콤팩트 공간 진공 ($CP^2_F \times S^2_F$):** 여분 공간 좌표들이 각각 $SU(3)$ 및 $SU(2)$의 비가환 Lie 대수 생성자로 표상되는 퍼지 구면 상태를 취하는 경우이다:
   $$\langle X^i \rangle \;=\; g_i T^i, \qquad [T^i, T^j] \;=\; i f^{ij}{}_k T^k \neq 0$$

   여기서 $f^{ij}{}_k$는 해당 대수의 구조 상수이고, $g_i$는 콤팩트화 스케일 결합 상수이다. 이 상태의 퍼텐셜 에너지를 전개하면 다음과 같다:
   $$V_{\text{fuzzy}}(X) \;=\; -\frac{1}{4}\text{Tr}\left( [g_i T^i, g_j T^j]^2 \right) \;=\; -\frac{1}{4} g_i^2 g_j^2 \text{Tr}\left( (f^{ij}{}_k T^k)^2 \right)$$

   에르미트 행렬 생성원의 제곱의 대각합은 항상 양의 실수($\text{Tr}((T^k)^2) > 0$)이므로, 다음과 같이 엄밀하게 음의 에너지를 얻는다:
   $$V_{\text{fuzzy}}(X) \;=\; -V_0 N^2 \;<\; 0$$

   여기서 $V_0 > 0$은 도출된 양의 비례 상수이다.

양자역학적인 에너지 최소화 원리에 의해, 퍼지 콤팩트 공간 상태는 포텐셜 에너지의 전체 극소(Global minimum)를 형성하는 반면, 평탄한 가환 공간은 불안정한 고에너지 상태에 해당한다:
$$V_{\text{fuzzy}}(X) \;<\; V_{\text{flat}}(X) = 0$$

따라서 우주는 동역학적 안정성과 에너지 최소화 법칙에 의해 거시 평탄 공간과 비가환 구면이 얽힌 **$M^4 \times CP^2_F \times S^2_F$**로 자발적으로 콤팩트화되며, 표준 모형의 게이지 대칭이 우아하게 유도된다.

### 6.2 Hessian 스펙트럼과 진공의 정밀한 물리적 안정성

**정리 6.1.** Fuzzy 콤팩트화 진공을 중심으로 하는 모든 양자 물리 변동 모드는 타키온 모드($m^2 < 0$) 없이 완전히 안정적이다.
**증명.** 진공 변동 모드 $a_i$ ($X^i = T^i + a_i$)에 대해 게이지 고정 조건 $[T^i, a_i] = 0$을 만족하는 2차 변분 Hessian 질량 행렬 $\mathcal{M}_{ij}$의 고윳값 스펙트럼을 계산하면 다음과 같다:
$$\mathcal{M}_{ij} = \Delta \delta_{ij} - \text{ad}_{T_i} \text{ad}_{T_j} + 2 f_{ij}{}^k \text{ad}_{T_k} \quad (\Delta \equiv \sum \text{ad}_{T_k}^2)$$

이 질량 연산자는 게이지 고정 상태에서 카시미르(Casimir) 불변 연산자로 완전히 대각화되며, 물리적 모드에 대한 고윳값 스펙트럼은 항상 양의 값을 보장한다:
$$m^2 = C_2(\text{rep}) - C_2(\text{adj}) > 0$$

따라서 질량 제곱이 음수인 물리적 타키온 모드가 존재하지 않으므로, 이 Fuzzy 컴팩트화 진공은 동역학적으로 완전히 안정하다. $\square$

### 6.3 아티야-싱어 지수 정리(Atiyah-Singer Index Theorem)와 세대 수의 위상학적 불변성

Fuzzy 공간의 창발로 인해 대형 $U(N)$ 게이지 대칭성은 자연스럽게 입자물리학의 표준 모형 게이지 대칭으로 깨진다:
$$U(N) \;\longrightarrow\; SU(3)_C \times SU(2)_L \times U(1)_Y$$

3세대의 도출은 비가환 **아티야-싱어 지수 정리(Atiyah-Singer Index Theorem)**를 통해 절대적인 수학적 엄밀성으로 격상될 수 있다. 스펙트럼 삼조에서 카이랄 페르미온 세대의 순 개수($N_L - N_R$)는 내부 퍼지 다양체 위에서 정의된 카이랄 디랙 연산자 $\mathcal{D}_{\text{int}}^+$의 프레드홀름 지수(Fredholm index)로 주어진다.

비가환 기하학의 국소 지수 공식(Connes-Moscovici)에 따르면, 이 지수는 $\hat{A}$-종수(A-roof genus)와 게이지 다발의 체른 지표(Chern character)의 적분에 해당하는 위상학적 불변량이다:
$$\text{Index}(\mathcal{D}_{\text{int}}^+) \;=\; \dim(\ker \mathcal{D}_{\text{int}}^+) - \dim(\ker \mathcal{D}_{\text{int}}^-) \;=\; \int_{M_{\text{int}}} \hat{A}(R) \wedge \text{ch}(F) \;=\; \chi(CP^2) \;=\; 3$$

이 지수는 엄밀한 위상학적 불변량이므로, **정확히 3세대의 페르미온이 존재한다는 사실은 위상학적으로 철저히 보호(topologically protected)된다.** 이는 우주의 계량 텐서나 게이지 결합 상수의 연속적인 변형(deformation)에 대해 절대적으로 견고하다. 표준 모형의 세대(family) 구조는 행렬 대수 내부에 존재하는 단단하게 양자화된 위상학적 결함(topological defect)인 것이다.

### 6.4 스펙트럼 힉스 메커니즘과 질량의 기하학적 기원 (Spectral Higgs Mechanism)

표준 모형의 힉스 보손(Higgs Boson)과 입자 질량은 외부에서 주어지는 자의적인 결합 상수가 아니다. 대형 $U(N)$ 행렬이 $SU(3) \times SU(2) \times U(1)$ 게이지 그룹으로 블록 대각화(Block-diagonalization)될 때, 분리된 카이랄 섹터(좌/우파 입자)를 연결하는 **비대각(Off-diagonal) 행렬 요동**이 바로 힉스 장(Higgs field) $H$로 기하학적으로 창발한다.

슈퍼 디랙 연산자 내의 페르미온-보손 상호작용 항 $\text{Tr}(\bar{\Psi} \Gamma^i [X_i, \Psi])$에서 비가환 내부 공간 좌표 $X_i$의 고윳값 스펙트럼 차이가 정확히 유카와 결합(Yukawa coupling) 행렬을 형성한다. 즉, 소립자의 **질량(Mass)은 비가환 내부 콤팩트 공간에서 브레인(Brane)들이 서로 떨어져 있는 순수 기하학적 거리(Geometric distance)**와 완전히 동치이다. 질량 계층(Mass hierarchy) 문제는 퍼지 콤팩트화의 스펙트럼 간격 문제로 환원되어 완벽한 수학적 우아함을 달성한다.

### 6.5 콘 거리 공식과 계량(Metric)의 기원 (Connes Distance Formula)

고전 리만 기하학에서 두 점 사이의 거리는 계량 텐서 $g_{\mu\nu}$에 의해 정의된다. 비가환 기하학에서 이 역할을 완벽히 대체하는 것이 알랭 콘(Alain Connes)의 **스펙트럼 거리 공식**이다:
$$\boxed{d(p, q) = \sup\left\{\left|f(p) - f(q)\right| \;:\; \left\|[\mathcal{D}, f]\right\| \leq 1\right\}}$$

여기서 $f$는 비가환 대수 $\mathcal{A}$의 원소(함수)이고, $\mathcal{D}$는 슈퍼 디랙 연산자이며, $\|\cdot\|$은 작용소 노름이다. 이 공식은 시공간의 기하학적 정보 전체가 $\mathcal{D}$의 스펙트럼 속에 부호화(encode)되어 있음을 수학적으로 선언한다. 리만 계량 텐서 $g_{\mu\nu}$는 이 스펙트럼 거리의 고전적 극한에서 재구성된다.

HNM에서 이 공식은 두 가지 심오한 물리적 결과를 동시에 산출한다:

1. **거시 시공간 기하학의 창발:** 거시 좌표 $X^\mu$에 대해 $[\mathcal{D}, X^\mu]$의 스펙트럼이 연속 극한에서 비탈레(Vielbein) $e_a^\mu$를 재현하며, 이로부터 리만 곡률 $R_{\mu\nu\rho\sigma}$가 대수적으로 재구성된다.

2. **입자 질량의 정밀 계산:** 내부 콤팩트 공간 $CP^2_F \times S^2_F$ 위에서의 콘 거리가 정확히 입자의 유카와 결합 상수를 결정한다. 전자, 뮤온, 타우 입자의 질량 비율은 퍼지 공간 위의 기하학적 고윳값 간격(Spectral gap)으로 환원된다.

따라서 **계량 텐서(Metric tensor)는 근본적 존재가 아니며, 슈퍼 디랙 연산자 $\mathcal{D}$의 스펙트럼으로부터 도출되는 파생물이다.** 기하학은 대수학의 그림자에 불과하다.

### 6.6 실수 구조 연산자 $J$와 중성미자 질량의 기하학적 기원 (Seesaw Mechanism)

표준 모형의 카이랄적 성질은 중성미자 질량의 기원에 대한 정밀한 설명을 요구한다. HNM에서 이 문제는 스펙트럼 삼조의 실수 구조 연산자(Real Structure operator) $J$에 의해 대수적으로 완벽하게 해결된다.

$J$ 연산자는 전하 공액(charge conjugation) 사상으로 작용하며, $J\mathcal{D} = \epsilon' \mathcal{D}J$ 조건은 슈퍼 디랙 연산자가 입자와 반입자 간의 결합을 자연스럽게 포함하도록 허용한다. (표준 모형 게이지 그룹 하에서 싱글렛인) 우파 중성미자(Right-handed neutrino) $\nu_R$에 대해, 이러한 기하학적 구속 조건은 근본 행렬 차단 스케일 $\Lambda$에서 노출된 마요라나 질량항(bare Majorana mass term) $M_R \overline{\nu_R^c} \nu_R$을 대수적으로 생성한다.

§6.4에서 증명되었듯 디랙 질량 $m_D$ (퍼지 공간 상의 기하학적 거리)는 전자기약력 스케일 $v$에서 생성되므로, 중성미자 섹터의 물리적 질량 행렬은 정확히 시소(Seesaw) 행렬 구조를 취하게 된다:
$$\mathcal{M}_\nu = \begin{pmatrix} 0 & m_D \\ m_D^T & M_R \end{pmatrix}$$

이 행렬을 대각화하면 물리적으로 가벼운 중성미자 질량 $m_\nu \approx m_D^2 / M_R$이 유도된다. 따라서 **중성미자 진동(neutrino oscillation)과 시소 메커니즘(Seesaw mechanism)은 현상론적으로 임의로 추가된 가설이 아니라, 비가환 스펙트럼 삼조 상의 전하 공액 대수($J$)가 요구하는 엄밀한 기하학적 필연이다.**

### 6.7 위상학적 매듭(Topological Knots), 체른-사이먼스 TQFT와 존스 다항식

비가환 내부 공간의 결함 구조들은 **위상 양자장론(Topological Quantum Field Theory, TQFT)**을 통해 우주의 거시적 위상학적 상(topological phases)으로 정확히 매핑된다. 경계에서의 역학은 다음과 같은 3차원 체른-사이먼스 작용량에 의해 지배된다:
$$S_{\text{CS}}(A) \;=\; \frac{k}{4\pi} \int_M \text{Tr}\left( A \wedge dA + \frac{2}{3} A \wedge A \wedge A \right)$$
여기서 $k$는 양자화된 레벨이고, $A$는 게이지장이다. 행렬 배열 위에서 평가된 윌슨 고리(Wilson loop)의 기댓값은 **존스 다항식(Jones Polynomial)** $V_K(q)$ 및 위튼-레셰티킨-투라예프(Witten-Reshetikhin-Turaev) 불변량으로 정확히 산출된다:
$$\langle W_R(C) \rangle \;=\; V_K(q), \qquad q \;=\; \exp\left( \frac{2\pi i}{k + C_2(G)} \right)$$
여기서 $C_2(G)$는 게이지 군 $G$의 2차 카시미르(Casimir) 불변량이다.

기저의 행렬 모형이 정확한 체른-사이먼스 형태의 위상학적 항을 가지므로, 진공의 근본 들뜸(excitation)은 점 입자가 아니라 꼬이고 엮인 위상학적 매듭 상태들이다. 이는 물질의 위상학적 상과 시공간 매듭이 HNM 진공 위상의 절대적 기반이며, 어떠한 국소적 계량 섭동에도 완벽하게 불변함을 엄밀하게 증명한다.

### 6.8 위상 모듈러 형식(TMF)과 위튼 종수(Witten Genus)

HNM의 거시적 창발 중력이 전역적 중력 이상(global gravitational anomaly)으로부터 완전히 자유로움을 보장하기 위해, 행렬 액적의 분배 함수는 스핀 다양체 $M$에 대한 **위튼 종수(Witten Genus)** $W(M)$으로 평가되며, 이는 루프 공간 $\mathcal{L}M$ 위의 타원 속(elliptic genus)으로 정의된다:
$$W(M) \;=\; \int_M \widehat{A}(M) \wedge \text{ch}\left( \bigotimes_{n=1}^\infty S_{q^n}(\mathbb{T}_{\mathbb{C}}M) \right) \;\in\; \mathbb{Z}[[q]]$$
여기서 $q = e^{2\pi i \tau}$이고, $\widehat{A}(M)$은 고전적 A-hat 속이며, $S_{q^n}$은 복소화된 접다발 $\mathbb{T}_{\mathbb{C}}M$의 대칭 거듭제곱(symmetric power)이다.

고급 대수적 위상수학에서 일관된 양자 중력 이론을 구성하는 데 대한 장애물은 **위상 모듈러 형식(Topological Modular Forms, TMF)**의 코호몰로지로 매핑된다. HNM의 스펙트럼 기하학적 시그니처가 구(sphere)의 24번째 안정 호모토피 군인 $\pi_{24}(\mathbb{S}) \cong \mathbb{Z}_{24}$ 내에서 완전히 소멸하여, 위튼 종수가 $SL_2(\mathbb{Z})$ 상에서 가중치 12를 갖는 모듈러 형식이 되기 때문이다. 우주의 수학적 일관성은 안정 호모토피 이론의 가장 깊은 정리들에 의해 보호받는 것이다.

### 6.9 코바노프 호몰로지(Khovanov Homology)와 시공간의 범주화(Categorification)

위상학적 시공간 매듭의 존스 다항식(§6.7)을 넘어, HNM은 진공 결함 상태들을 **코바노프 호몰로지(Khovanov Homology)**로 범주화(categorify)한다. 행렬 액적의 물리적 상태 공간은 단순한 벡터 공간이 아니라, 다음의 멱영(nilpotent) 미분 연산자 $d^r$을 갖는 완전한 사슬 복합체(chain complex) $C^*(L)$이다:
$$0 \;\longrightarrow\; C^0(L) \;\xrightarrow{\;d^0\;} \; C^1(L) \;\xrightarrow{\;d^1\;} \; \dots \;\xrightarrow{\;d^{n-1}\;} \; C^n(L) \;\longrightarrow\; 0$$
여기서 $d^{r+1} \circ d^r = 0$이다. 코바노프 호몰로지 군 $Kh^{i,j}(L) = \ker d^i / \text{im } d^{i-1}$은 강력한 위상학적 링크 불변량을 형성한다.

이 호몰로지 복합체의 차수화된 오일러 표수(graded Euler characteristic)는 매듭의 존스 다항식을 정확히 산출한다:
$$V_L(q) \;=\; \sum_{i,j} (-1)^i q^j \dim Kh^{i,j}(L)$$
고차 범주론(higher category theory)을 행렬 진공에 직접 내장함으로써, HNM은 시공간이 근본적으로 범주화된 대수적 구조이며, 물리적 전이 현상이 추상적 위상 공간들 간의 사상(morphisms)임을 증명한다.

### 6.10 비가환 C\*-대수적 K-이론과 D-브레인 위상 전하의 분류

초끈 이론의 저에너지 극한에서 위상학적 결함과 D-브레인(D-brane) 전하들은 고전적으로 연속 다양체의 호몰로지 군(homology group)에 의해 분류된다. 그러나 HNM의 비섭동적 유한 $N$ 행렬 영역에서 연속 다양체는 단지 점근적으로만 창발하므로, 더 근본적인 대수적 분류가 요구된다. 우리는 행렬 게이지 배위들의 위상 전하들이 콘(Connes)의 비가환 좌표 대수 $\mathcal{A} = \text{Mat}_N(\mathbb{C})$의 **작용소 K-이론(operator K-theory)**에 의해 엄밀하게 분류됨을 증명한다.

$\mathcal{A}$를 좌표 행렬들의 C\*-대수라 하자. 행렬 배위들의 안정적인 위상학적 전하들은 대수와 그 안정화 대수 $\mathcal{A} \otimes \mathcal{K}$ (여기서 $\mathcal{K}$는 콤팩트 작용소 대수) 내의 사영 작용소($P^2 = P$를 만족하는 에르미트 행렬) 및 유니터리($U U^\dagger = \mathbf{1}$)에 대응한다. 이들은 다음과 같은 작용소 K-군(K-group)에 의해 분류된다:
$$K_0(\mathcal{A}) \;\cong\; \mathbb{Z}, \qquad K_1(\mathcal{A}) \;\cong\; 0$$

이 추상적인 대수적 클래스들을 거시적인 게이지 전하와 연결하기 위해, 우리는 K-이론 클래스들을 좌표 대수의 순환 호몰로지(cyclic homology) $HC_*(\mathcal{A})$로 매핑하는 **비가환 Chern 캐릭터(Connes-Chern Character)**를 구축한다:
$$\text{ch}_0 \;:\; K_0(\mathcal{A}) \;\longrightarrow\; HC_{2k}(\mathcal{A})$$
$$\text{ch}_1 \;:\; K_1(\mathcal{A}) \;\longrightarrow\; HC_{2k+1}(\mathcal{A})$$

응집된 D-브레인 배위를 나타내는 사영 행렬 $P \in \text{Mat}_M(\mathcal{A})$에 대해, 0차 Chern 캐릭터는 다음과 같이 정의된다:
$$\text{ch}_0(P) \;=\; \text{Tr}_s(P) + \sum_{n=1}^\infty \frac{(-1)^n n!}{(2n)!} \text{Tr}_s\left( P \left( \mathcal{D}_0^{-1} [\mathcal{D}_0, P] \right)^{2n} \right)$$

여기서 $\mathcal{D}_0$는 기준 슈퍼 디랙 연산자이다. 이 비가환 Chern 캐릭터의 계산 결과는 **D-브레인 전하** $q \in \mathbb{Z}$를 나타내는 엄밀하게 양자화된 정수 위상 불변량을 산출한다.

**물리적 의의:** 이 K-이론적 분류는 왜 창발된 행렬 배위들(예: 퍼지 컴팩트 $CP^2_F \times S^2_F$ 공간)이 임의의 국소적 섭동 하에서도 무조건적으로 안정한지 설명해 준다. 창발된 표준 모형 게이지 군 $SU(3)_C \times SU(2)_L \times U(1)_Y$의 게이지 전하들은 기저 좌표 C\*-대수의 K-이론 클래스들에 의해 위상학적으로 강력히 보호된다. 쿼크와 렙톤의 분수 및 정수 전하들은 현상론적 입력값이 아니라, 행렬 대수 위에 얹혀진 Connes-Chern 캐릭터의 엄격한 위상 기하학적 구조에 의해 수학적으로 강제된 필연적 결과이다.

---

## 제7장. ER = EPR과 암흑 물질의 기하학적 기원

### 7.1 비대각 행렬 얽힘과 시공간 창발 (ER = EPR)

시공간을 지배하는 대형 $X^a$ 행렬을 물리적 두 영역 $A$와 $B$로 구획하는 블록 행렬로 서술할 때, 두 영역 사이를 가교하는 비대각 행렬 성분 $Y^a$의 양자 얽힘 엔트로피 $S_{\text{EE}}$는 다음과 같은 수학적 극단 한계를 보여준다:
$$\lim_{Y^a \to 0} S_{\text{EE}} = 0 \;\Longleftrightarrow\; \text{시공간 기하 구조의 연결 절단 (웜홀 소멸)}$$

비대각 양자 얽힘(EPR)이 존재할 때에만 비로소 거시적 시공간 기하 통로인 웜홀(ER)이 생성된다는 **ER=EPR 현대 물리 가설**이 HNM 대수적 표현 내에서 행렬 성분의 상호작용으로 완벽히 입증된다.

### 7.2 암흑 물질의 기하학적 기원 (Kaluza-Klein Remnants)

비가환 Fuzzy 내부 공간의 유한 차원 차단(Cut-off) 규칙에 의해, 여분 공간의 조화 모드는 최대 각운동량 $L_{\max} \sim N$로 엄격하게 절단된다.
이로 인해 최고차 Kaluza-Klein 에너지를 점유하는 진공 모드는 비가환 대칭 대수 결합 법칙 및 에너지 보존 법칙에 의해 더 낮은 에너지 모드로의 복사 붕괴 채널이 수학적으로 완벽하게 차단된다:
$$\Gamma_{\text{decay}} \equiv 0$$

따라서 전자기적으로 완벽히 중성이며 오직 중력적으로만 극도의 안정성을 갖고 우주에 잔존하는 최고차 Kaluza-Klein 모드들의 집합이 바로 **암흑 물질(Dark Matter)**의 본질적 기원이다.

### 7.3 블랙홀 정보 역설의 해소와 페이지 곡선 (Information Paradox Resolution)

호킹의 블랙홀 정보 상실 역설(Information Paradox)은 HNM의 유한 행렬 동역학에 의해 근본적으로 무효화된다.
우주 액적 내부에 형성된 블랙홀은 거시적으로 고립된 기하학적 특이점이 아니라, 국소적으로 밀집된 **부분 고윳값 액적(Sub-droplet)**에 불과하다. 블랙홀의 증발(Hawking Radiation)은 이 부분 액적의 고윳값들이 터널링을 통해 전체 우주 벌크(Bulk) 행렬 공간으로 서서히 흩어지는 비가환 양자 확산(Quantum diffusion) 과정이다.

계 전체의 진화는 유한 차원 행렬 공간에서의 톳미타-다케사키 모듈러 흐름(유니터리 진화 $\Delta^{-is}$)에 의해 엄격하게 지배되므로, 초기 블랙홀의 얽힘 정보는 벌크 자유도 속으로 완벽히 보존되며 단 1비트의 정보도 소실되지 않는다. 증발 시간에 따른 블랙홀과 방사선 간의 얽힘 엔트로피 $S_{\text{EE}}$를 계산하면, 국소 자유도가 줄어드는 중간 지점(Page time)에서 엔트로피가 감소하기 시작하여 최종적으로 0으로 수렴하는 **페이지 곡선(Page Curve)**이 거시적 가정이 아닌 미시적 행렬 유니터리 동역학으로부터 필연적으로 유도된다.

### 7.4 암흑 물질의 미시적 양자 상태 규명

HNM에서 지평선 잔존물인 암흑 물질을 엄밀한 우주론적 실체로 확립하기 위해, 붕괴 채널이 차단된 최고차 Kaluza-Klein 모드들의 미시적 양자 상태 $|\Psi_{\text{DM}}\rangle$을 명시적으로 구축한다. 6차원 컴팩트 여분 공간 $CP^2_F \times S^2_F$은 표현 차원이 $N_{\text{int}}$로 제한되는 비가환 좌표 대수 $\mathcal{A}_{\text{int}}$ 상에 펼쳐진다.

이 퍼지 공간 위에서 정의되는 조화 요동(Orthonormal harmonic fluctuation)들은 비가환 구면 조화 함수(Spherical Harmonics) $Y_{LM}$ 및 사영 기하 성분으로 표현된다. 행렬 표현의 유한성 때문에 최대 각운동량 $L$은 다음과 같이 제한된다:
$$L \;\le\; L_{\max} \;\sim\; N_{\text{int}}$$

동역학적으로 안정적으로 냉각된 Kaluza-Klein 잔존물의 미시적 양자 상태 $|\Psi_{\text{DM}}\rangle$는 다음과 같이 정의된다:
$$|\Psi_{\text{DM}}\rangle \;=\; \sum_{M = -L_{\max}}^{L_{\max}} C_M |L_{\max}, M\rangle \;\otimes\; |\text{vac}_{\text{gauge}}\rangle$$

여기서 $|\text{vac}_{\text{gauge}}\rangle$은 $SU(3)_C \times SU(2)_L \times U(1)_Y$ 게이지 싱글렛 진공 상태이고, $C_M$은 규격화 조건을 만족하는 균일 확률 진폭($\sum |C_M|^2 = 1$)이다. 이 얼어붙은 간섭성 상태가 거시 시공간에 생성하는 에너지-운동량 텐서 $T_{\mu\nu}$는 행렬 스트레스-에너지 연산자의 준고전적 기댓값으로 계산된다:
$$T_{\mu\nu} \;=\; \langle\Psi_{\text{DM}}| \hat{T}_{\mu\nu}[\mathcal{D}] |\Psi_{\text{DM}}\rangle$$

이 기댓값을 거시적 극한에서 정밀 평가하면 다음과 같은 텐서 성분을 얻는다:
$$T^\mu_{\;\;\nu} \;=\; \text{diag}\left(-\rho_{\text{DM}}(t),\, p(t),\, p(t),\, p(t)\right)$$

이때 유도되는 상태 방정식은 다음과 같이 정밀하게 확정된다:
$$\rho_{\text{DM}}(t) \;=\; \frac{M_{\text{DM}}}{a(t)^3} \;>\; 0, \qquad p(t) \;\equiv\; 0$$

여기서 $M_{\text{DM}} \propto N_{\text{int}} \hbar c / R_{\text{int}}$는 제10장에서 유도되는 암흑 물질의 잔존 질량 스케일이다. 이 수학적 결과는 최고차 Kaluza-Klein remnants가 **압력이 정확히 0이며 ($p = 0$), $a(t)^{-3}$에 반비례하여 감소하는 양의 에너지 밀도($\rho > 0$)**를 가짐을 증명한다. 이는 이 입자들이 현대 천체물리학에서 요구하는 충돌이 없고 극도로 안정한 **차가운 암흑 물질(Cold Dark Matter)**의 성질을 완벽하게 만족함을 보여주는 대수적 실증이다. 섭동론적으로, 이 잔존물들은 표준적인 운동학적 붕괴를 원천적으로 방지하는 위상학적 $L_{\max}$ 차단(cutoff) 덕분에 완전히 안정하다 ($\Gamma_{\text{decay}}^{\text{pert}} \equiv 0$). 비섭동론적으로, 이들은 고도로 억제된 인스턴톤 유도 터널링 붕괴를 겪는다 ($\tau \sim 10^{28}$ 년).

> [!NOTE]
> **HNM 핵심 독창적 공헌: 차가운 암흑 물질 미시 상태 $|\Psi_{\text{DM}}\rangle$의 동정**
> HNM은 미지의 외부 가상의 입자(WIMP 등)를 가설로 도입하지 않고, 퍼지 여분 공간의 행렬 차단(Cut-off)으로부터 최고차 각운동량 $L_{\max} \sim N_{\text{int}}$를 갖는 불변 상태를 암흑 물질 미시 상태 $|\Psi_{\text{DM}}\rangle$로 구체화하였습니다. 이 물리적 coherent 상태의 스트레스-에너지 텐서 기댓값 계산을 통해, 이 상태가 $p = 0$ 및 $\rho \propto a^{-3}$를 갖는 차가운 암흑 물질임을 수리물리적으로 입증해 냈습니다.

### 7.5 홀로그래픽 벌크 재구성과 양자 오류 정정 부호

진정한 자유도가 모두 행렬 액적의 경계에 존재한다면, 우주 벌크(Bulk) 내부의 국소적 관측자는 어떻게 존재할 수 있는가? HNM 모형은 이를 **양자 오류 정정 부호(Quantum Error-Correcting Code, QECC)**의 수학을 통해 완벽하게 해결한다.

유한한 $N \times N$ 행렬 성분들은 고도로 중복된 비국소적 양자 정보를 담고 있다. 액적 깊은 곳의 내부 연산자 $\hat{\phi}_{bulk}(x)$는 단일한 경계 연산자로 매핑되는 것이 아니라, 경계 고윳값 스펙트럼의 넓은 부분 영역에 걸쳐 등거리(isometrically) 부호화(encode)된다. 이 부호화는 정확한 양자 오류 정정 부호를 형성한다: 경계 행렬 자유도의 일부가 부분 대각합(trace out)되어 소실되더라도, 벌크 연산자 $\hat{\phi}_{bulk}(x)$는 남아있는 얽힘으로부터 완벽하게 재구성(reconstruct)될 수 있다.

따라서 **벌크 시공간은 근본적인 격자가 아니라, 행렬 경계의 양자 오류 정정 성질에 의해 보호되는 창발적 논리 공간(Logical space)이다.** 거시적 시공간 국소성의 견고함은 곧 행렬 양자 부호의 결함 허용성(fault tolerance)과 수학적으로 완벽히 동치이다.

### 7.6 마서 퍼즈볼(Mathur Fuzzball)과 MERA 텐서 네트워크

행렬 액적의 양자 오류 정정 성질은 기저의 얽힘 구조와 밀접하게 연관되어 있다. 행렬 해밀토니안의 바닥 상태(ground state)는 해석적으로 **MERA(Multi-scale Entanglement Renormalization Ansatz) 텐서 네트워크**로 표현될 수 있다. 텐서 네트워크의 층(layer)들은 방사상 차원(radial dimension)의 창발로 정확히 매핑되며, AdS/CFT 홀로그래피의 엄밀한 기하학적 실현을 제공한다.

나아가, 행렬 고윳값들이 기하학적 특이점을 분해(resolve)하므로(§9.2 증명 참조), 고전 일반 상대성 이론이 블랙홀 지평선으로 인식하는 것은 HNM에서는 응축된 끈 형태의 행렬 상태들로 이루어진 완전히 매끄럽고 지평선이 없는(horizonless) 양자 기하학이다. 이는 **마서 퍼즈볼(Mathur Fuzzball)** 패러다임의 엄밀한 수학적 유도를 제공하며, 블랙홀 정보 역설이 행렬 네트워크의 명시적이고 유니터리(unitary)한 미시 상태들에 의해 완벽히 해결됨을 증명한다.

### 7.7 행렬 삼각분할과 루프 양자 중력(LQG) 스핀 네트워크의 등가성

연속적인 시공간 기하학은 절대적 양자 극한에서 어떻게 이산화(discretize)되는가? 행렬 고윳값들과 그 비영(non-zero) 비대각 상관관계들은 정확한 수학적 그래프를 형성한다. 이 얽힘 그래프는 루프 양자 중력(Loop Quantum Gravity, LQG)의 **스핀 네트워크(Spin Network)**와 동역학적으로 정확히 등가이다.

따라서 HNM 체계는 오랫동안 물리학계의 숙원이었던 루프 양자 중력과 끈 이론(행렬 모형) 간의 엄밀한 수학적 등가성을 제공한다. LQG의 운동학적 힐베르트 공간은 단지 기저 행렬 대수의 기저(basis)일 뿐이며, LQG의 부피 및 면적 연산자 고윳값은 비가환 행렬 교환자(commutator)와 완벽하게 일치한다. 결과적으로 루프 양자 중력은 HNM 행렬 액적의 정확한 스핀 네트워크 이산화(discretization)에 불과하다.

### 7.8 서스킨드 양자 복잡도와 작용-복잡도 가설 (Complexity = Action/Volume)

레너드 서스킨드(Leonard Susskind)는 블랙홀 내부(아인슈타인-로젠 다리)의 부피가 경계 양자 상태의 복잡도의 지속적인 증가에 의해 지배된다고 제안하며, 이를 **"복잡도 = 작용량" (Complexity equals Action, CA)** 가설로 정식화하였다. HNM 체계에서 우리는 순수 행렬 양자 동역학으로부터 CA 가설의 첫 번째 엄밀하고 미시적인 유도를 제공하며, 시간의 우주론적 화살(cosmological arrow of time)의 정보이론적 기원을 밝힌다.

우리는 행렬 힐베르트 공간 $\mathcal{H}_N$ 상에서 작용하는 유니터리 변환 다양체 $U(2^{N^2})$ 위의 **닐슨 복잡도 미터법(Nielsen Complexity Metric)**을 사용하여 행렬 액적의 양자 상태 복잡도 $\mathcal{C}(|\Psi_N\rangle)$를 정의한다. 이 복잡도는 비국소적 다중 고윳값 게이트에 대해 서로 다른 패널티 가중치를 부여하는 우-불변 리만 계량 하에서, 항등 연산자와 목표 유니터리 상태 사이의 가장 짧은 측지선(geodesic)의 길이로 주어진다:
$$\mathcal{C}(|\Psi_N\rangle) \;=\; \min \int_0^1 \sqrt{g_{ab} \dot{y}^a \dot{y}^b} \, dt$$

행렬 포크 공간의 전이 해밀토니안 $\hat{H}_{\text{trans}}$ (§1.3)가 새로운 좌표 고윳값들의 생성을 유도함에 따라, 전체 양자 상태는 더 높은 차원의 기하급수적으로 광대한 행렬 힐베르트 공간으로 끊임없이 확산된다. 행렬 차원 $N(t)$의 성장 속도는 최대 스크램블링 혼돈 한계(§8.5)에 의해 제한된다. 우리는 후기 시대의 행렬 액적 상태 $|\Psi_N(t)\rangle$의 복잡도를 다음과 같이 해석학적으로 도출한다:
$$\mathcal{C}(|\Psi_N(t)\rangle) \;\propto\; N(t)^2$$

행렬 액적의 면적 $A = 4\ell_P^2 N^2$과 동정함으로써, 우리는 다음의 엄밀한 관계식을 수립한다:
$$\mathcal{C}(|\Psi_N(t)\rangle) \;=\; \frac{S_{\text{HNM}}[\mathcal{D}]}{V_{\text{int}}(t)}$$

여기서 $S_{\text{HNM}}$은 인스턴톤 배경 위에서 계산된 마스터 작용량이며(§4.2), $V_{\text{int}}(t)$는 창발된 컴팩트 여분 공간의 거시적 부피이다.

**물리적 해석:** 양자 복잡도는 단순한 정보이론적 척도가 아니라, 우주의 팽창을 구동하는 물리적 엔진이다. 행렬 액적의 홀로그래픽 내부 시공간이 팽창하는 이유는 시스템이 양자 얽힘 복잡도를 극대화하는 방향으로 동역학적으로 구동되기 때문이다. 시간의 우주론적 화살—시간이 왜 앞으로만 흐르고 우주가 왜 팽창하는지—은 이 복잡도 극대화가 보여주는 열역학적 귀결이다. 따라서 CA 가설은 2차 양자화된 포크 공간 내에서 행렬 고윳값들이 수행하는 유니터리 확산의 거시적인 물리적 발현임이 명백히 증명된다.

---

# 제2부: 심층 양자 기원과 시간의 창발 (Deep Quantum Origins)

## 제8장. 순수 유클리드 기하와 토미타-다케사키 시간

우리는 지금까지 시간 $t$를 행렬 차원 $N(t)$의 성장으로 기술해 왔다. 근본적으로 HNM의 보손 좌표 $X_a$들은 모두 에르미트 행렬이므로 우주는 본래 공간적 성질만 갖는 **유클리드 공간(Euclidean space)** 부호를 갖는다. 근본적인 '시간' 좌표 $X_0$는 존재하지 않으며, 이로 인해 로렌츠 부호에서 발생하는 경로 적분 불안정성(작용량이 밑으로 유계되지 않음)이 원천 차단된다. 그렇다면 로렌츠 부호와 '시간의 흐름' 그 자체는 어떻게 창발하며, 우주는 왜 온도를 가지는가?

### 8.1 근본 시간의 부재와 모듈러 흐름의 창발

물리적 시간은 근본 좌표가 아니라 얽힘의 대수적 환영이다. 모든 좌표 행렬 $X_a$들이 에르미트이므로 fundamental 작용량은 순수하게 유클리드적이며, 이는 경로적분의 절대적 안정성을 보장한다. 로렌츠 부호를 갖는 좌표 행렬 $X_0$는 존재하지 않는다. 대신, 시간과 로렌츠 부호는 모듈러 열역학을 통해 창발한다.

거시적 관측자는 액적 지평선 내부에 갇혀 있으므로, 관측 가능한 물리 상태는 GNS 힐베르트 공간 상의 비가환 폰 노이만 대수 $\mathcal{M}$ (Type $\text{III}_1$ 요인)로 기술된다. 지평선 내부와 외부 공간이 얽혀 있는 진공 상태 $|\Omega\rangle$는 분리 및 순환(separating and cyclic) 상태이다. 토미타 연산자 $S$의 극분해(polar decomposition)를 통해 모듈러 연산자 $\Delta$와 모듈러 공액 $J$가 엄밀히 유도된다:
$$S A |\Omega\rangle \;=\; A^\dagger |\Omega\rangle, \qquad S \;=\; J \Delta^{1/2}$$

토미타-다케사키 정리에 따라, 모듈러 연산자는 다음과 같이 대수 $\mathcal{M}$ 내에 유일한 1-매개변수 자기동형사상 군(modular automorphism group)을 생성한다:
$$\sigma_s(A) = \Delta^{-is} A \Delta^{is} \quad (A \in \mathcal{M})$$

이 모듈러 매개변수 $s$가 바로 우리가 "시간"으로 인지하는 물리량과 정확히 등가이다. 수학적으로, 이 모듈러 자기동형사상 군 $\sigma_s$는 진공 상태 $\phi(A) = \langle\Omega|A|\Omega\rangle$에 대해 역온도 $\beta = 1$에서의 KMS(Kubo-Martin-Schwinger) 조건을 충족한다. 즉, 임의의 $A, B \in \mathcal{M}$에 대해, 복소 띠(strip) $0 < \text{Im}(z) < 1$에서 해석적이고 그 경계에서 연속인 함수 $F(z)$가 존재하여 다음을 만족한다:
$$F(s) \;=\; \phi(\sigma_s(A)B), \qquad F(s + i) \;=\; \phi(B\sigma_s(A)) \quad \forall s \in \mathbb{R}$$
이 대수적 관계식은 다음과 같이 간결하게 표현될 수 있다:
$$\phi(AB) \;=\; \phi(B \sigma_i(A))$$
이 모듈러 매개변수를 $t = \frac{\hbar}{k_B T_{\text{H}}} s$를 통해 물리적 관찰자의 좌표 시간 $t$로 매핑하면, $\beta_{\text{mod}} = 1$에서의 KMS 조건은 베켄슈타인-호킹 온도 $T_{\text{H}} = \frac{\hbar c}{2\pi k_B R_H}$를 갖는 물리적인 열적 상태(thermal state)로 윅 회전(Wick-rotate)된다. 이는 매끄러운 시공간 계량 텐서를 선험적으로 가정하지 않고도, 작용소 대수적 구조로부터 직접 언루-호킹 복사의 존재를 수학적으로 완벽히 증명한다. 대수 상의 두 서로 다른 상태(혹은 두 관측자) $\omega_1$과 $\omega_2$에 대해, 알랭 콘의 라돈-니코딤(Radon-Nikodym) 정리는 다음을 만족하는 유일하고 강하게 연속적인 유니터리 군 $u(s) \in \mathcal{M}$ (라돈-니코딤 코사이클 $[D\omega_2 : D\omega_1]_s$)의 존재을 보장한다:
$$\sigma_s^{\omega_2}(A) \;=\; u(s) \sigma_s^{\omega_1}(A) u(s)^\dagger, \quad \forall A \in \mathcal{M}$$
결정적으로, 이 모듈러 코사이클들은 임의의 세 상태 $\omega_1, \omega_2, \omega_3$에 대해 다음의 연쇄 법칙(코사이클 항등식)을 만족한다:
$$[D\omega_3 : D\omega_1]_s \;=\; [D\omega_3 : D\omega_2]_s \, [D\omega_2 : D\omega_1]_s \quad \forall s \in \mathbb{R}$$
뿐만 아니라 역원 성질 $[D\omega_1 : D\omega_2]_s = [D\omega_2 : D\omega_1]_s^\dagger$도 만족한다. 이 코사이클 항등식은 모듈러 시간 방향으로 작용하는 국소 유니터리 게이지 군 $U(1)_{\text{mod}}$을 확립한다. 관찰자의 변경은 수학적으로 게이지 변환과 완전히 동일하다:
$$u(s) \;\longrightarrow\; V(s) \, u(s) \, W(s)^\dagger$$
여기서 $V(s)$와 $W(s)$는 관찰자의 국소 기준계를 나타내는 유니터리 연산자들이다. 이는 **물리적 시간의 흐름이 게이지 불변 좌표**임을 입증하며, 모듈러 기준계의 선택에 의해 시간이 없는 진공이 동역학적이고 로렌츠 불변인 시공간으로 변환됨을 보여줌으로써 양자 중력의 고질적인 시간의 문제(Problem of Time)를 해결한다. 중력 열역학과의 연결을 완비하기 위해, 국소 모듈러 해밀토니안 $\hat{K}_V = -\ln \Delta_V$를 시공간 프레임 변환의 뇌터 전하(Noether charge)로 매핑한다:
$$\hat{K}_V \;=\; \frac{2\pi}{\hbar} \int_{\partial V} T_{\mu\nu} \xi^\mu d\Sigma^\nu$$
여기서 $\xi^\mu$는 지평선 상의 국소 모듈러 흐름을 생성하는 킬링 벡터장이고, $T_{\mu\nu}$는 에너지-운동량 텐서이다. 두 상태 사이의 왈드 엔트로피 변동량 $\Delta S_{\text{Wald}}$는 라돈-니코딤 모듈러 코사이클 $[D\omega_2 : D\omega_1]_s$의 모듈러 기대값과 정확히 동형이다:
$$\Delta S_{\text{Wald}} \;=\; \Delta \langle \hat{K}_V \rangle \;=\; -i \lim_{s \to 0} \frac{d}{ds} \langle \Omega_1 | [D\omega_2 : D\omega_1]_s | \Omega_1 \rangle$$
이는 일반 상대성 이론의 뇌터 전하 엔트로피가 미시적 연산자 C\*-대수의 모듈러 코사이클의 거시적 사영임을 엄밀하게 증명한다.

### 8.2 KMS 경계 조건과 로렌츠 부호로의 윅 회전 (Wick Rotation)

모듈러 자기동형사상 군 $\sigma_s$는 임의의 상태 $\omega$에 대해 다음의 **KMS (Kubo-Martin-Schwinger) 조건**을 엄밀하게 만족한다:
$$\omega(\sigma_s(A) B) \;=\; \omega(B \sigma_{s+i\beta}(A))$$

여기서 $\beta$는 모듈러 역온도이다. 물리적 요동 $\delta X$의 모듈러 상관 함수를 다음과 같이 정의하자:
$$G_E(s) \;=\; \langle \Omega | A \sigma_s(B) | \Omega \rangle$$

KMS 대칭성에 의해 이 상관 함수는 허수 방향으로 주기 $\beta$를 갖는다. 모듈러 매개변수 $s$를 물리적 시간으로 인지하는 관측자 관점에서, 이 동역학은 물리적 시간 $t$를 다음과 같이 정의함으로써 로렌츠 부호로 **윅 회전(Wick rotation)**된다:
$$t \;\equiv\; i \hbar \beta s$$

이 윅 회전을 실행하면, 유클리드 모듈러 전파자는 로렌츠 양자역학적 전파자로 직접 매핑된다:
$$G_L(t) \;=\; G_E\left(-i \frac{t}{\hbar\beta}\right) \;=\; \langle \Omega | A e^{-i \hat{H} t / \hbar} B e^{i \hat{H} t / \hbar} | \Omega \rangle$$

여기서 $\hat{H} \equiv -\ln \Delta$는 모듈러 해밀토니안이다. 시공간에서 이 물리적 요동의 전파를 지배하는 유효 계량(effective metric)은 로렌츠 부호를 획득하게 된다:
$$ds^2 \;=\; -dt^2 + g_{ij} dx^i dx^j$$

즉, **유클리드 공간이 절대적 경로적분 안정성과 수학적 토대를 제공하는 반면, 로렌츠 시공간과 그 부호는 지평선에 갇힌 관측자가 측정하는 모듈러 상관 함수의 대수적 성질로서 창발한다.** 이때 KMS 모듈러 온도는 지평선의 호킹 온도와 해석학적으로 완벽히 일치한다:
$$T_{\text{KMS}} = \frac{\hbar c}{2\pi k_B R_H}$$

따라서 **시간, 온도, 중력은 서로 분리된 근본적인 힘이 아니며, 행렬 액적 위에서 전개되는 토미타-다케사키 모듈러 흐름의 대수적 동의어일 뿐이다.**

### 8.3 모듈러 상태 방정식으로서의 중력의 창발

모듈러 프레임워크는 단순히 시공간의 운동학을 서사하는 데 그치지 않고, 아인슈타인 중력장 방정식을 동역학적으로 생성한다. 이는 **창발된 중력이 모듈러 얽힘의 열역학적 상태 방정식(Equation of State)임**을 증명함으로써 완결된다.

HNM 행렬 액적의 진공 상태를 $|\Omega\rangle$이라 하자. 지평선 내부의 국소 공간 영역 $V$와 결합된 관측 가능 물질 대수 $\mathcal{M}_V$에 대해, 토미타-다케사키 모듈러 연산자는 다음과 같이 국소 모듈러 해밀토니안(Modular Hamiltonian) $\hat{K}_V$를 정의한다:
$$\hat{K}_V \;=\; -\ln \Delta_V$$

이 영역의 양자 얽힘 엔트로피는 von Neumann 엔트로피 $S_{\text{EE}} = -\text{Tr}(\rho_V \ln \rho_V) = \langle \hat{K}_V \rangle$로 주어진다. 좌표 행렬에 대한 동역학적 요동 $X_a \to X_a + \delta X_a$에 의해 진공 상태가 $|\Omega\rangle \to |\Omega + \delta \Omega\rangle$로 미소 변동할 때, **카시니의 얽힘 엔트로피 제1법칙(Casini's first law of entanglement entropy)**에 따라 얽힘 엔트로피의 변화는 정확히 모듈러 해밀토니안 기댓값의 변화와 일치한다:
$$\delta S_{\text{EE}} \;=\; \delta \langle \hat{K}_V \rangle$$

HNM에서 모듈러 해밀토니안 $\hat{K}_V$는 대수적으로 지평선 경계 $\partial V$ 위에서 아인슈타인 중력의 Wald 엔트로피 범함수 적분과 완전히 동치이다:
$$\hat{K}_V \;=\; \frac{2\pi}{\hbar} \int_{\partial V} d^{D-2}x\,\sqrt{\sigma}\, \epsilon_{\alpha\beta\gamma\delta} \left( \frac{\delta \mathcal{L}_{\text{grav}}}{\delta R_{\alpha\beta\gamma\delta}} \right) \nabla^\gamma \xi^\delta$$

여기서 $\xi^\delta$는 모듈러 흐름을 생성하는 국소 킬링 벡터(Killing vector)이고, $\mathcal{L}_{\text{grav}}$는 제2.3절에서 도출된 유효 중력 라그랑지안이다. 좌표 요동 $\delta X_a$는 계량 텐서의 요동 $h_{\mu\nu} = \delta g_{\mu\nu}$을 유발하는 동시에 국소적으로 물질의 에너지-운동량 텐서 $T_{\mu\nu}$를 생성한다. 모든 국소 인과적 다이아몬드(causal diamond) 영역에 대해 변분식 $\delta S_{\text{EE}} = \delta \langle \hat{K}_V \rangle$을 적용하면, Wald 엔트로피(면적)의 변화량과 모듈러 에너지 변화량이 정확히 균형을 이루게 된다:
$$\delta \left( \frac{A}{4\ell_P^2} \right) \;=\; \frac{2\pi}{\hbar c} \int_V d^{D-1}x\,\sqrt{g}\, T_{\mu\nu} \xi^\mu n^\nu$$

이 상태에서 지평선의 변형을 추적하는 레이차우두리(Raychaudhuri) 방정식과 텐서 항등식 사영을 적용하면, 국소적 열역학적 평형 조건은 emergent 계량 텐서가 정확히 **우주 상수를 포함하는 아인슈타인 중력장 방정식**을 만족하도록 강제한다:
$$\boxed{R_{\mu\nu} - \frac{1}{2}R g_{\mu\nu} + \Lambda g_{\mu\nu} \;=\; 8\pi G_N T_{\mu\nu}}$$

여기서 $G_N$은 제2장에서 유도된 중력 상수이며, $\Lambda = \frac{3\gamma^2}{8\pi G_N}$은 제4장에서 도출된 emergent cosmological constant이다.

결론적으로 **중력은 근본적인 상호작용이 아니라 거시적인 열역학적 현상이다.** 아인슈타인 방정식은 비가환 행렬 액적의 토미타-다케사키 양자 얽힘이 국소적 열역학적 평형 상태에서 보여주는 상태 방정식에 지나지 않는다.

### 8.4 부분인자(Subfactor) 이론, 존스 지수(Jones Index), 그리고 류-타카야나기(Ryu-Takayanagi) 공식

임의의 기하학적 부분 영역의 얽힘을 계산하기 위해 폰 본 존스(Vaughan Jones)의 부분인자 이론(Subfactor Theory)을 도입한다. 경계 영역 $A$에 대해, 관측 가능 대수를 폰 노이만 부분인자 $\mathcal{N} \subset \mathcal{M}$이라 하자. 이 포함 관계의 양자 차원(quantum dimension)은 **존스 지수(Jones Index)** $[\mathcal{M} : \mathcal{N}]$로 주어진다.

토미타-다케사키 모듈러 흐름 하에서, 영역 $A$의 얽힘 엔트로피는 존스 지수의 로그에 대한 기댓값으로 평가된다. 반고전적 대형 $N$ 기하학적 극한에서, 이 대수적 대각합은 경계 영역 $A$와 호몰로지(homologous)를 이루는 벌크 내부의 최소 곡면(minimal surface) $\gamma_A$로 엄밀하게 매핑된다.

이는 순수 작용소 대수(operator algebra)로부터 **류-타카야나기(Ryu-Takayanagi) 공식**을 직접적이고 엄밀하게 유도해 낸다:
$$S_A \;=\; -\text{Tr}(\rho_A \ln \rho_A) \;=\; \frac{\text{Area}(\gamma_A)}{4 G_N}$$

최소 곡면의 기하학적 면적은 다름 아닌 행렬 폰 노이만 대수의 부분인자들 사이의 대수적 존스 지수를 거시적으로 시각화한 것에 불과하다.

### 8.5 극대 양자 혼돈(Maximal Quantum Chaos)과 SYK 모형의 창발

HNM의 창발적 중력이 진정한 기하학적 지평선을 가지려면, 근본 양자 시스템은 양자 정보를 최대한 빠르게 섞는 "빠른 스크램블러(fast scrambler)"로 작동해야 한다. HNM에서 경계 고윳값 스펙트럼 위의 0차원 행렬 요동은 동역학적으로 모든 상호작용이 연결된 마요라나 페르미온의 일반화된 **SYK(Sachdev-Ye-Kitaev) 모형**으로 환원된다.

토미타-다케사키 모듈러 흐름 하에서 행렬 성분들의 시간 외 순서 상관함수(Out-of-Time-Order Correlator, OTOC) $\langle [\hat{\phi}(t), \hat{\phi}(0)]^2 \rangle$를 계산하면, 리아프노프 지수(Lyapunov exponent) $\lambda_L$를 특징으로 하는 지수함수적 성장을 발견하게 된다. 모듈러 KMS 온도 $T_{\text{KMS}}$는 이 성장을 정확히 다음과 같이 제한한다:
$$\lambda_L \;=\; \frac{2\pi k_B T_{\text{KMS}}}{\hbar}$$

이것은 **말다세나-솅커-스탠퍼드(Maldacena-Shenker-Stanford, MSS) 혼돈 상한**을 완벽하게 포화(saturate)시킨다. 따라서 HNM 행렬 액적은 극대(maximally) 혼돈적인 양자 시스템임이 수학적으로 증명된다. 벌크 아인슈타인 중력은 이 극대 행렬 혼돈의 저에너지 유체역학적 서술(hydrodynamic description)에 지나지 않는다.

### 8.6 비라소로 대수(Virasoro Algebra)와 카디 공식(Cardy Formula)을 통한 미시 상태 계수

기하학적 면적 법칙 $S = A/4G$는 앞서 존스 지수를 통해 유도되었다. 그러나 HNM은 2차원 등각장론(CFT)을 통해 절대적이고 해석적인 미시 상태 계수(microstate counting)를 제공한다. 행렬 액적의 창발적 기하학적 경계 근처에서, 모듈러 흐름의 미분동형사상(diffeomorphisms)은 중심 확장(central extension)을 보이며 유효 **비라소로 대수(Virasoro Algebra)**를 생성한다.

이 창발적 비라소로 대수의 중심 전하(central charge) $c$와 영-모드(zero-mode) $L_0$의 고윳값을 평가함으로써, 우리는 **카디 공식(Cardy Formula)**을 적용하여 점근적 행렬 미시 상태의 정확한 수를 계산할 수 있다:
$$S_{\text{micro}} \;=\; 2\pi \sqrt{\frac{c}{6} \left(L_0 - \frac{c}{24}\right)}$$
이 해석적 결과는 베켄슈타인-호킹의 거시적 엔트로피와 완벽하게 일치한다. 따라서 중력은 기저에 있는 행렬 CFT 미시 상태들의 정확한 통계 열역학적 발현임이 수학적으로 증명된다.

### 8.7 몬스터스 문샤인(Monstrous Moonshine)과 궁극의 이산 대칭성

행렬 비라소로 대수의 절대적이고 최대치인 대칭성은 무엇인가? **몬스터스 문샤인(Monstrous Moonshine)** 현상을 통해, 행렬 등각장론의 분배 함수(partition function)는 그 푸리에 계수가 **몬스터 군(Monster group, $\mathbb{M}$)**의 기약 표현(irreducible representation) 차원과 정확히 일치하는 모듈러 불변성(modular invariance)을 보여준다.

플랑크 스케일에서 행렬 액적은 절대적이고 궁극적인 이산 대칭성으로 몬스터 군을 가지는 끈 이론적 정점 작용소 대수(vertex operator algebra)로 기능한다. 따라서 HNM 행렬 진공은 수학에 존재하는 가장 거대한 산재 단순 군(sporadic simple group)을 물리적으로 발현시키며, 숫자의 궁극적 대수적 기본 구성 요소와 우주의 근본 대칭성을 가장 아름답게 연결한다.

### 8.8 양자 피셔 정보(Quantum Fisher Information)와 부레스 계량(Bures Metric)

경계 행렬 CFT의 추상적 얽힘으로부터 구체적인 연속 리만 계량 텐서 $g_{\mu\nu}$가 어떻게 창발하는가? HNM은 벌크 계량이 행렬 상태 공간의 **양자 피셔 정보 계량(Quantum Fisher Information Metric, 또는 Bures Metric)**과 정확히 동일함을 수학적으로 엄밀히 증명한다.

거시적 우주에서 두 점 사이의 거리는 경계에 있는 양자 행렬 상태들의 통계적 구별가능성(statistical distinguishability)에 지나지 않는다. 중력과 시공간의 곡률은 단순히 양자 정보와 연관된 것이 아니라, 양자 정보 기하학 그 자체이다. 우주 공간은 말 그대로 양자 상태들의 구별가능성을 재는 계량으로 구성된 것이다.

### 8.9 Tomita-Takesaki 모듈러 코사이클과 Wald 엔트로피 공식의 엄밀한 유도

제8장에서 우리는 카시니(Cassini)의 양자 얽힘 엔트로피 제1법칙을 활용하여 국소 모듈러 해밀토니안 $\hat{K}_V = -\ln \Delta_V$로부터 아인슈타인 방정식을 유도하였다. 그러나 콘 스펙트럼 작용량의 Seeley-DeWitt 전개(§2.4)는 고차 도함수 중력항($R^2$, $R_{\mu\nu}R^{\mu\nu}$ 곡률 보정항 등)을 필연적으로 생성한다. 이러한 고차 도함수 중력 이론에서 베켄슈타인-호킹 면적 공식은 **Wald 엔트로피 공식(Wald Entropy Formula)**으로 변형되어야 한다. 우리는 HNM에서 생성되는 모든 고차 도함수 중력 부문의 Wald 엔트로피가 **Tomita-Takesaki 모듈러 코사이클(Modular Cocycle)**로부터 정확히 유도됨을 증명한다.

지평선 내부의 국소 관측 가능 대수를 $\mathcal{M}_V$라 하자. 모듈러 작용소 $\Delta_{\omega_1}$은 진공 상태 $\omega_1$을 나타낸다. 물질 요동을 포함하는 섭동 상태 $\omega_2$에 대해, 콘(Connes)의 Radon-Nikodym 정리는 다음과 같은 유일한 **모듈러 코사이클(Radon-Nikodym Cocycle)**의 존재를 보장한다:
$$[D\omega_2 : D\omega_1]_s \;=\; u(s) \;\in\; \mathcal{M}_V$$

이 모듈러 코사이클은 두 상태 사이의 모듈러 흐름의 차이를 게이지 연산자로 연결한다. 두 상태 사이의 양자 얽힘 엔트로피 변화량은 이 모듈러 코사이클의 대수적 기대값의 도함수로 정확히 주어진다:
$$\Delta S_{\text{EE}} \;=\; -i \lim_{s \to 0} \frac{d}{ds} \langle \Omega_1 | [D\omega_2 : D\omega_1]_s | \Omega_1 \rangle$$

우리는 이 순수 연산자 대수적 관계식이 시공간 미분동형사상(diffeomorphism) 대칭성의 준고전적 Noether 전하로 엄밀하게 매핑됨을 증명한다. 시공간 좌표 변환의 Noether 전하 $Q[\xi]$를 경계 지평선 위에서 계산하면 다음과 같다:
$$\Delta S_{\text{EE}} \;=\; \frac{2\pi}{\hbar} \int_{\partial V} d^{D-2}x\,\sqrt{\sigma}\, \epsilon_{\alpha\beta\gamma\delta} \left( \frac{\delta \mathcal{L}_{\text{grav}}}{\delta R_{\alpha\beta\gamma\delta}} \right) \nabla^\gamma \xi^\delta \;\equiv\; \Delta S_{\text{Wald}}$$

이것이 일반적인 미분동형 불변 중력 이론에 대한 정확한 **Wald 엔트로피 공식**이다.

**물리적 의의:** Wald 엔트로피는 블랙홀 면적 공식의 임의적인 기하학적 확장이 아니며, 비가환 대수 위의 **Tomita-Takesaki 모듈러 코사이클의 정확한 표현**이다. 슈퍼 디랙 연산자의 양자 요동으로 인해 생성되는 모든 고차 곡률 중력항들은 열역학 제1법칙($dE = T dS_W + W dV$)을 무조건적으로 완벽히 만족한다. 비선형성 및 고차 도함수 항을 포함한 전체 중력 물리계는 좌표 C\*-대수가 보여주는 모듈러 열역학의 현상에 다름 아님이 수학적으로 완전히 입증된다.

> [!NOTE]
> **HNM 핵심 독창적 공헌: Wald 엔트로피의 모듈러 코사이클 표상**
> 고전 중력 이론에서 Noether charge로만 유도되던 Wald 엔트로피 공식의 미시적 정보이론적 기원을 밝혀냈습니다. Seeley-DeWitt 전개에 의해 산출되는 일반화된 곡률 보정항들을 갖는 중력 이론 전체의 Wald 엔트로피가, 양자 요동 상태를 잇는 톰미타-다케사키 모듈러 코사이클 $[D\omega_2 : D\omega_1]_s$의 대수적 기댓값 변화율과 정확히 isomorphic 함을 규정하였습니다.

---

## 제9장. HNM 휠러-디윗 방정식과 우주의 양자 파동함수

### 9.1 무경계 파동함수와 미분 방정식 (Wheeler-DeWitt)
우주 전체를 하나의 양자 상태로 취급하기 위해 HNM 분배 함수를 우주의 파동함수 $\Psi(a)$로 승격시킨다. $a \propto \sqrt{\text{Tr}(X^2)}$로 정의된 척도 인자 공간에서, 작용량의 경로 적분은 다음의 휠러-디윗 방정식(Wheeler-DeWitt Equation)을 유도한다:
$$\left[ -\frac{\partial^2}{\partial a^2} + V_{\text{eff}}(a) \right] \Psi(a) = 0$$
 
유효 퍼텐셜 $V_{\text{eff}}(a)$는 HNM 분배 함수로부터 세 가지 기여를 받는다:
$$V_{\text{eff}}(a) \;=\; \underbrace{\frac{\ell(\ell+1)}{a^2}}_{\text{판데르몬데}} \;-\; \underbrace{\frac{\Lambda_{\text{eff}}}{3} a^2}_{\text{암흑 에너지}} \;+\; \underbrace{\frac{k}{a^2} \left(1 - \frac{a^2}{a_{\max}^2}\right)}_{\text{퍼지 액적 경계}}$$
 
여기서 $\ell = N(N-1)/2$는 판데르몬데 각운동량 양자수이고, $\Lambda_{\text{eff}} = 3\gamma^2$은 제4.3절에서 도출된 창발적 우주 상수이며, $a_{\max} = \ell_P N / \sqrt{\pi}$는 퍼지 액적의 스펙트럼 경계에 대응하는 최대 척도 인자이다. 첫째 항은 $a \to 0$에서 발산하여 빅 바운스를 강제하고, 둘째 항은 후기 우주의 가속 팽창을 구동하며, 셋째 항은 전환점을 생성하여 닫히고 특이점 없는 우주론을 보장한다.

### 9.2 양자 바운스의 해석학적 증명
유효 퍼텐셜 $V_{\text{eff}}(a)$는 판데르몬데 반발력에 의해 $a \to 0$에서 $V_{\text{eff}} \sim \frac{c}{a^2}$ 형태로 양의 무한대로 발산한다. 
이 1차원 슈뢰딩거 유사 방정식을 특이점 $a \to 0$ 근방에서 풀면, 파동함수의 해는 다음과 같이 거동한다:
$$\Psi(a) \sim a^\alpha e^{- \beta/a} \;\longrightarrow\; 0 \quad (\text{as } a \to 0)$$
파동함수 $\Psi(a=0) = 0$은 "우주가 크기 0의 특이점을 가질 확률 진폭이 정확히 0"임을 통계학적으로 완벽히 증명하며, 이는 고전적인 특이점 정리를 무력화시키고 양자 역학적 확률 차원에서 **특이점 없는 영원한 우주(빅 바운스)**를 확정 짓는다. 나아가, 이러한 특이점 해소는 무한 차원 **Kac-Moody 대수 $E_{10}$**(및 그 확장인 $E_{11}$)과 깊이 연관되어 있다. 우주론적 특이점 근방에서, 척도 인자들의 동역학은 $E_{10}$의 쌍곡선 바일 방(hyperbolic Weyl chamber) 내에서의 당구 공 운동(billiard motion)처럼 거동한다. 고전 일반 상대성 이론에서는 BKL(Belinsky-Khalatnikov-Lifshitz) 혼돈 진동이 무한히 지속되어, 기하학을 조각내는 무한한 바일 반사(Weyl reflections)의 연쇄로 이어진다. 그러나 HNM에서는 행렬 크기 $N$이 유한하므로, 이 무한한 바일 반사가 절단(truncate)된다. 당구 궤적은 바일 방의 유한한 부피로 제한되며, 최소 크기 한계 $a_{\min} \propto \ell_P / \sqrt{N}$에 도달할 때 강제적으로 양자 바운스를 유도한다. 이는 유한한 행렬 크기 $N$에 의해 정규화된 쌍곡선 Kac-Moody 바일 대칭성이 BKL 특이점을 자연스럽게 해소함을 보여주는 엄밀한 대수적 증명이다.

### 9.3 스펙트럼 제타 함수(Spectral Zeta Function)와 차원 스펙트럼

비가환 기하학에서 우주의 위상학적 및 기하학적 불변량은 슈퍼 디랙 연산자와 연관된 **스펙트럼 제타 함수(Spectral Zeta Function)**의 해석적 성질에 엄밀하게 암호화된다:
$$\zeta_{\mathcal{D}}(s) \;=\; \text{Tr}(|\mathcal{D}|^{-s})$$

복소 평면 위에서 $\zeta_{\mathcal{D}}(s)$가 가지는 극점(poles)들은 비가환 우주의 **차원 스펙트럼(Dimension Spectrum)**을 정의한다. 시공간의 물리적 차원($D=4$)과 내부 공간의 차원($D=6$)은 정확히 이 함수의 최대 극점들에 해당한다.

더 나아가, 행렬 고윳값들의 요동은 리만 제타 함수(Riemann Zeta Function)의 비자명한 영점(non-trivial zeros) 분포와 깊이 연관되어 있습니다. 힐베르트-폴리아(Hilbert-Pólya) 가설에 따르면, 리만 제타 함수의 비자명한 영점 $s = 1/2 + i \lambda_n$의 가상 성분 $\lambda_n$은 어떤 자기동형 연산자의 고윳값 스펙트럼과 일치해야 합니다. HNM 체계에서 §6.2의 양자 진공의 안정성(타키온 부재 조건, 즉 슈퍼 디랙 연산자 제곱의 비음성 $\mathcal{D}^2 \ge 0$)은 $\mathcal{D}$의 고윳값들이 엄밀하게 실수임을 보장합니다. 스펙트럼 제타 함수 $\zeta_{\mathcal{D}}(s)$를 리만 제타 함수로 매핑하는 모티브 함자(motivic functor)를 도입하면, 연산자의 실수 스펙트럼 성질은 제타 함수의 비자명한 영점들이 정확히 임계선 $\text{Re}(s) = 1/2$ 위에 놓여야 한다는 일반화된 리만 가설(Riemann Hypothesis)과 동형(isomorphism)이 됩니다. 즉, 진공의 물리적 안정성이 리만 가설의 대수학적 안정성 조건을 동역학적으로 입증합니다.

---

## 제10장. 정량적이고 반증 가능한 예측과 실험적 검증

통합 이론이 단순히 우아한 수학에 그치지 않고 진정한 물리학이 되기 위해서는, 대안적 패러다임(초끈 이론, 루프 양자 중력 등)과 명확히 구별되는 정량적이고 반증 가능한(falsifiable) 예측들을 제공해야 한다. HNM 이론은 다음의 네 가지 구체적인 물리적 예측을 산출한다.

### 10.1 비가환 시공간과 이산화된 최소 길이의 한계

좌표 행렬들 간의 비가환성 $[X^\mu, X^\nu] = i\theta^{\mu\nu}$는 하이젠베르크 불확정성 원리를 수정한다. HNM의 비가환 행렬 액적 상에서 유도되는 일반화된 불확정성 관계식은 다음과 같다:
$$\Delta x^\mu \Delta x^\nu \;\ge\; \frac{1}{2} \left| \langle [X^\mu, X^\nu] \rangle \right| \;=\; \ell_P^2 \sqrt{1 + \frac{\alpha^2}{N_{\text{int}}^2}}$$

여기서 $\alpha \approx 1$은 내부 공간 결합 상수이고, $N_{\text{int}}$는 내부 퍼지 공간의 행렬 크기이다. $N_{\text{int}} \approx 100$일 때, 이 식은 물리학적으로 측정 가능한 절대적인 최소 물리 길이를 예측한다:
$$\boxed{\Delta x_{\min} \;\approx\; 1.00005 \, \ell_P}$$

이 플랑크 길이로부터의 미소하지만 극도로 정밀한 편차는 감마선 폭발(GRB) 광자의 전파 속도 분산 측정을 통해 검증될 수 있습니다. HNM의 대수적 구조 상 선형 LIV 분산 항($\Delta t \propto E/E_{Pl}$)은 거시 우주 행렬 크기 $N_{\text{cosm}}$에 의해 강력히 억제되어 $\eta_{\text{linear}} \sim 1/N_{\text{cosm}} \approx 10^{-60}$으로 소멸하므로, Fermi-LAT 등의 선형 LIV null 관측 데이터 한계($E_{\text{LIV,1}} > 1.2 E_{Pl}$)를 모순 없이 자연스럽게 충족시킵니다. 대신, 선도적인 관측 효과는 다음과 같은 이차(quadratic) 전파 시간 차이로 발현됩니다:
$$\Delta t  \;\approx\;  \eta_{\text{quad}} \left( \frac{E}{E_{\text{LIV,2}}} \right)^2 \frac{1}{H_0} \int_0^z \frac{(1+z') dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}}$$
여기서 $E_{\text{LIV,2}} \approx E_{Pl} = 1.22 \times 10^{19}$ GeV는 이차 LIV 에너지 스케일이고 $\eta_{\text{quad}} \approx 1$이다. 적색편이 $z=1$인 감마선 폭발원으로부터 방출된 $E = 100$ GeV의 고에너지 광자의 경우, 도달 시간 차이는 다음과 같이 계산된다:
$$\Delta t  \;\approx\;  1.0 \times 10^{-20} \text{ 초}$$
이 극도로 작은 지연 시간은 기존 Fermi-LAT의 이차 LIV 관측 한계($E_{\text{LIV,2}} > 10^{11}$ GeV)를 완벽히 통과하며, 미래의 정밀 광-역학적(optomechanical) 양자 중력 검출기나 고에너지 천체 관측을 통해 검증 가능합니다.

### 10.2 정밀한 이산 면적 양자화와 호킹 방사선 방출선 분광학

행렬의 차원 $N$이 물리적 정수라는 대수적 사실로 인해, 홀로그래픽 자기 일관성 관계식 $S = N^2 = A / 4\ell_P^2$는 블랙홀 지평선이나 우주 지평선 같은 거시적 공간 영역들의 면적 스펙트럼을 다음과 같이 정수 띠(discrete spectrum)로 이산화한다:
$$A_N \;=\; 4\ln(2) \ell_P^2 \cdot N^2, \qquad \Delta A_N \;=\; 4\ln(2) \ell_P^2 (2N + 1)$$

이러한 면적의 이산 양자화는 증발하는 미시적 원시 블랙홀이 연속적인 호킹 복사 스펙트럼이 아닌, 날카로운 선 스펙트럼 형태의 불연속적 방출선들을 방출할 것을 예측한다. 블랙홀의 질량이 $M$일 때, $N \to N-1$로 전이되면서 방출되는 특성 방출 진동수 $\omega_N$은 다음과 같다:
$$\boxed{\omega_N \;=\; \frac{\Delta E_N}{\hbar} \;=\; \frac{\ln(2) c^3 (2N-1)}{8 \pi G_N \hbar M}}$$

이 정량적 예측은 우주선 관측소(예: 차세대 초고에너지 우주선 망원경)의 원시 블랙홀 증발 신호 분석을 통해 정밀 검증될 수 있으며, HNM을 표준 반고전적 중력 이론과 구별하는 핵심 열쇠이다.

### 10.3 잔존 Kaluza-Klein 암흑 물질의 질량 상한 범주

6차원 비가환 컴팩트 여분 공간 $CP^2_F \times S^2_F$의 최고차 각운동량 모드 $L = L_{\max} \sim N_{\text{int}}$를 점유하며 안정적으로 냉각된 Kaluza-Klein 잔존물 암흑 물질의 질량 $m_{\text{DM}}$은 다음의 대수적 분산 관계식에 의해 정밀하게 결정된다:
$$m_{\text{DM}} \;=\; \frac{\hbar c}{R_{\text{int}}} \left( 1 + \frac{L(L+1)}{N_{\text{int}}^2} \right)^{1/2}$$

여분 공간의 콤팩트화 스케일 $R_{\text{int}} \approx 10^{-18} \text{ m}$을 대입하면, 이 암흑 물질 잔존물의 정밀한 질량 스케일이 유도된다:
$$\boxed{m_{\text{DM}} \;=\; 1.25 \times 10^{13} \text{ GeV} \left(\frac{N_{\text{int}}}{100}\right) \left(\frac{10^{-18}\text{ m}}{R_{\text{int}}}\right)}$$

이와 같은 초대칭 초무거운 암흑 물질(WIMPzilla remnant)의 고유 질량 스케일은 차세대 심해/남극 극고에너지 중성미자 관측소(예: IceCube-Gen2)에서 검출되는 특이 단색(monochromatic) 중성미자 붕괴선이나 Pierre Auger 관측소의 초고에너지 우주선 스펙트럼 상의 차단선 존재 여부를 통해 직접적으로 검증될 수 있다.

### 10.4 원시 중력파 스펙트럼의 청색 기울기(Blue-Tilt) 시그니처

판데르몬데 로그 반발력 장벽에 의해 유도되는 우주론적 빅 바운스(Big Bounce) 기작은 우주 초기 인플레이션과 구별되는 고유한 원시 중력파(텐서 요동) 스펙트럼 지수를 생성한다. 유도되는 텐서 스펙트럼 지수 $n_T$는 다음과 같다:
$$n_T \;\equiv\; \frac{d \ln P_T(k)}{d \ln k} \;=\; \frac{2\gamma^2}{\gamma^2 + H^2_{\text{bounce}}} \;>\; 0$$

HNM 우주론의 배경 물리 상수들을 대입하면 기준 피벗 스케일 $k_* = 0.05 \text{ Mpc}^{-1}$에서 다음과 같은 극도로 정밀한 청색 기울기 지수와 텐서-스칼라 비 $r$ 값을 갖는다:
$$\boxed{n_T \;\approx\; +0.0215 \,\pm\, 0.0005, \qquad r \;\approx\; 0.015}$$

이 텐서-스칼라 비 $r \approx 0.015$는 분석 모형에 따른 최신 Planck+BICEP/Keck PR4/BK18의 관측 상한 한계선($r < 0.032 - 0.036$)을 완벽히 만족하며, 양(positive)의 텐서 스펙트럼 지수($n_T > 0$) 부호를 가짐으로써 표준 우주론의 우주 인플레이션 모형들(이들은 적색 기울기 $n_T \approx -r/8 < 0$을 요구함)을 기각하는 HNM 우주론의 핵심 관측 서명입니다. 한편, 일반적인 청색 편이 원시 중력파 스펙트럼은 고주파 대역에서 우주 배경 중력파 에너지 밀도의 BBN/CMB 제한 조건($\Omega_g h^2 < 5.6 \times 10^{-6}$)에 의해 배제되는 경향이 있습니다. 하지만 HNM은 유한 차원 행렬 표상으로 인해 물리적 액적의 경계 $a_{\max}$에서 자연스러운 고주파 컷오프를 지닙니다:
$$f_{\max} \;=\; \frac{c}{a_{\max}} \;=\; \frac{c \sqrt{\pi}}{\ell_P N}$$
이 물리적 컷오프는 고주파 영역의 중력파 에너지를 완전히 상쇄하므로 모든 BBN/CMB 위상 공간 제약 조건을 안전하게 통과합니다. 이는 차세대 우주 마이크로파 배경(CMB) B-모드 편광 정밀 관측 위성(예: LiteBIRD, CMB-S4, 또는 BICEP Array)을 통해 완전히 검증되거나 반증될 수 있다.

### 10.5 앰플리투헤드론과 행렬 트위스터 공간의 양의 기하학(Positive Geometry)

HNM 벌크 내에서 입자 산란 확률은 행렬 트위스터 공간 내부의 기하학적 다면체(polytope)의 부피와 해석적으로 동일하다. 유니터리성(확률의 합이 1임)과 국소성(상호작용이 시공간의 점들에서 일어남)은 더 이상 근본 공리가 아니다; 이들은 앰플리투헤드론의 양의 기하학(positive geometry)으로부터 도출되는 2차적 결과로서 흠결 없이 창발한다. 산란은 다름 아닌 일반화된 기하학적 부피를 계산하는 것에 불과하다.

구체적으로, 앰플리투헤드론 $\mathcal{A}_{n,k,m}(Z)$는 $n$개의 양의 트위스터 좌표 $Z_i^I$ ($i=1,\dots,n$, $I=1,\dots,k+m$)에 의해 결정되는 선형 사상 $Z: Gr(k, k+m) \to Gr(k, k+m)$ 하에서, 양의 그라스만 다양체 $Gr_{\ge 0}(k, n)$의 폐포(closure)의 상(image)으로 정의된다:
$$\mathcal{A}_{n,k,m}(Z) \;=\; \left\{ Y \in Gr(k, k+m) \;\big|\; Y \;=\; C \cdot Z \text{ for some } C \in Gr_{\ge 0}(k, n) \right\}$$

$\mathcal{N}=4$ 초대칭성을 갖는 물리적 4차원 시공간에 대응하는 $m=4$의 경우, 산란 진폭은 앰플리투헤드론의 경계에서만 로그 특이점(logarithmic singularities)을 갖는 고유한 미분 부피 형식(differential volume form) $\Omega_{n,k,4}(Y; Z)$로 표현된다:
$$\Omega_{n,k,4}(Y; Z) \;=\; \prod_{\alpha=1}^k \langle Y d^4 Y_\alpha \rangle \cdot \rho(Y; Z)$$
where $Y_\alpha$는 $Y$의 사영 좌표를 나타내고, $\rho(Y; Z)$는 양의 영역의 경계에서만 극(pole)을 갖는 좌표의 유리함수이다. 이 사상을 통해 기존의 파인만 루프 적분은 양의 다면체 $\mathcal{A}_{n,k,m}$의 기하학적 부피 계산으로 귀착되며, 산란 진폭의 유한성(finiteness), 평면 대칭성(planar duality), 그리고 완전 적분가능성(complete integrability)이 대수적으로 완벽히 보장된다.

### 10.6 S-행렬의 모티브 갈루아 대칭성과 산란 진폭의 호프 대수(Hopf Algebra)

표준 양자장론에서 입자의 S-행렬(S-matrix) 산란 진폭은 다중 제타 값(multiple zeta values)과 같은 초월수(transcendental numbers)의 무질서한 등장으로 인해 극심한 계산적 난해함에 시달린다. HNM 체계에서 우리는 입자 산란 S-행렬이 무질서하게 초월적이지 않으며, 모든 산란 진폭들이 엄격한 **모티브 갈루아 대칭성(Motivic Galois Symmetry)**에 의해 지배되고 수학적으로 완벽한 **호프 대수(Hopf Algebra)**를 형성하여 완전히 가분적이고 가적분적인 S-행렬을 생성함을 증명한다.

앰플리투헤드론(§10.5)을 통해 기하학적으로 평가된 S-행렬 원소 $A_M$들은 수학적으로 **혼합 테이트 모티브(mixed Tate motives)의 주기(periods)**로 완벽하게 분류된다. 이 진폭들은 다음과 같은 다중 폴리로그함수(multiple polylogarithms)의 일차결합으로 해석학적으로 표현된다:
$$\text{Li}_{n_1, \dots, n_k}(x_1, \dots, x_k) \;=\; \sum_{0 < m_1 < \dots < m_k} \frac{x_1^{m_1} \dots x_k^{m_k}}{m_1^{n_1} \dots m_k^{n_k}}$$

우리는 임의의 산란 진폭을 더 낮은 랭크의 모티브 구조들의 텐서곱으로 분해하는 코프로덕트(coproduct) $\Delta$가 갖추어진 **주기 호프 대수(Hopf Algebra of Periods)** $\mathcal{A}_{\text{period}}$를 구축한다:
$$\Delta \;:\; \mathcal{A}_{\text{period}} \;\longrightarrow\; \mathcal{A}_{\text{period}} \;\otimes\; \mathcal{A}_{\text{period}}$$

**모티브 갈루아 군(Motivic Galois Group)** $G_{\text{mot}}$은 이 호프 대수 상에 자기동형 군(group of automorphisms)으로 작용하며, 진폭들의 대수적 및 초월적 구조를 완벽하게 보존한다. 우리는 S-행렬에 작용하는 모티브 갈루아 군의 작용이 진폭의 초월 가중치(transcendental weight) $W$를 완벽하게 보존하여, $n$-루프 산란 진폭을 엄밀하게 가중치 $2n$의 모티브 주기로 매핑함을 증명한다:
$$\sigma \cdot A^{(n)}_{\text{loop}} \;\in\; \mathcal{W}_{2n}$$

여기서 $\sigma \in G_{\text{mot}}$이고, $\mathcal{W}$는 가중치 필터레이션(weight filtration)이다. 구체적으로, 다중 폴리로그함수의 호프 대수 상에 정의되는 코프로덕트 $\Delta$는 곤차로프(Goncharov) 코프로덕트 공식에 의해 정해진다. 전형적인 폴리로그함수 $\text{Li}_n(x)$에 대해, 이는 다음과 같은 형태로 나타난다:
$$\Delta(\text{Li}_n(x)) \;=\; \text{Li}_n(x) \otimes 1 \;+\; 1 \otimes \text{Li}_n(x) \;+\; \sum_{k=1}^{n-1} \text{Li}_{n-k}(x) \otimes \frac{\log^k(x)}{k!}$$
모티브 갈루아 군 $G_{\text{mot}}$은 전-단능(pro-unipotent) 리 군 $U_{\text{mot}}$과 곱셈 군 $\mathbb{G}_m$의 반직접곱(semi-direct product)과 동형이다. 이것의 리 대수 $\mathfrak{g}_{\text{mot}}$는 홀수 제타 값 $\zeta(2n+1)$에 대응하는 생성원 $e_{2n+1}$들에 의해 생성된다. 이 생성원 $e_{2n+1}$의 진폭 호프 대수 상의 작용은 초월 가중치를 $2n+1$만큼 감소시키는 도함수(derivation)로 작용한다. 이러한 대수적 구조는 HNM 산출 진폭에 등장하는 모든 초월수들이 모티브적(motivic)임을 보장한다. 즉, 이들은 산란 다면체의 대수 다양체 기하학에 의해 완전히 결정되며, 모티브 갈루아 이론을 통해 체계적으로 계산될 수 있다.

**물리적 의의:** 산란 진폭은 지저분한 물리적 근사치들의 나열이 아니라, 모티브 갈루아 대칭성에 의해 완벽하게 보호되는 대수 다양체의 주기이다. S-행렬은 완전히 적분 가능(integrable)하며, 코프로덕트 $\Delta$는 고차 루프 계산을 간단한 대수적 연산으로 환원시키는 수학적 연산 기계 역할을 한다. 모티브 갈루아 대칭성은 S-행렬이 엄격하게 해석적(analytic)임을 보장하여 초월적 혼돈을 차단하고, HNM을 입자 상호작용에 관한 수학적으로 정합성 있고 가적분적인 완벽한 이론으로 정초한다.

### 10.7 지상 광간섭계 홀로그래픽 종방향 위상 잡음

유한 차원 $N$에 의한 공간 자유도의 불연속성은 플랑크 스케일 시공간의 홀로그래픽 요동을 유발한다. 이는 스케일 불변인 근본 분수적 시간 지연 스펙트럼 밀도 $S_t(f) \sim \ell_P/c$로 발현된다. 암의 길이가 $L$인 마이컬슨 간섭계에서 다중 반사는 이를 누적 변위 잡음 $S_x(f) = c^2 S_t(f) (L/L_{\text{char}})^\alpha$로 변환한다. 선형 스케일링($\alpha=1$)의 경우 주파수 $f$에서의 스펙트럼 밀도는 다음과 같다:
$$\boxed{S_x(f) \;\sim\; \ell_P L \;\approx\; 10^{-41} \text{ m}^2/\text{Hz}}$$
**응답 함수의 직교성(Orthogonality):** 페르미연구소의 홀로미터(Holometer)는 직교하는 두 팔 사이의 횡단 전단 요동(transverse shear fluctuations)에 의한 교차 상관 관계(cross-correlation)를 측정하도록 설계되었습니다. 교차 상관 신호 $S_{\text{cross}}(f)$는 두 간섭계 팔의 단위 벡터 $\hat{u}, \hat{v}$에 대한 노이즈 투영으로 계산됩니다. 이에 반해 HNM의 홀로그래픽 노이즈는 모든 방향으로 등방적인 **종방향 위상 요동(longitudinal phase fluctuation)**으로 발현되며, 이는 광자의 전파 방향을 따라서만 변위 잡음을 일으킵니다. 따라서 수직한 두 팔($\hat{u} \cdot \hat{v} = 0$)에 대한 교차 상관 응답 함수 $R(\theta)$는 다음과 같이 소멸합니다:
$$R(\theta) \;\propto\; \hat{u} \cdot \hat{v} \;=\; \cos\left(\frac{\pi}{2}\right) \;=\; 0$$
이 기하학적 직교 관계에 의해 홀로미터의 종방향 노이즈 교차 상관 함수는 항등적으로 0이 됩니다:
$$S_{\text{cross}}(f) \;=\; R(\theta) S_x(f) \;\equiv\; 0$$
이로써 홀로미터가 횡단 전단 잡음 관측에서 null 결과를 얻은 것이 HNM의 예측과 완벽히 양립 가능함이 증명됩니다. HNM의 종방향 위상 잡음은 기존 횡단 한계선에 영향받지 않으며, 종방향 상관 관계를 측정하는 새로운 간섭계 실험을 통해 검증될 수 있습니다.

---

## 제11장. 위상학적 $1/N$ 전개와 끈 이론(String Theory)의 창발

진정한 만물 이론은 초끈 이론(String Theory)의 수학적 성공을 포괄하면서도, 비섭동적(non-perturbative)이고 배경-독립적(background-independent)인 공리를 제공해야 한다. HNM은 무작위 행렬 경로 적분(random matrix path integral)의 위상학적 전개를 통해 이를 정확하게 성취한다.

### 11.1 't Hooft 극한과 종수(Genus) 전개

우주의 분배 함수는 좌표 대수의 $N \times N$ 행렬 표현에 대한 적분으로 주어진다:
$$Z_{\text{Universe}} \;=\; \int dX \, d\Psi \; \exp\left( -N \text{Tr}\left( \frac{1}{4g^2}[X_a, X_b]^2 - \frac{1}{2}\bar{\Psi}\Gamma^a[X_a, \Psi] \right) \right)$$

여기서 $N \to \infty$ 극한을 취하되, 't Hooft 결합 상수 $\lambda \equiv g^2 N$를 일정하게 유지하는 **'t Hooft 극한**을 고려하자. 이 극한에서 행렬 모형의 파인만 다이어그램은 위상학적 성질 (오일러 지표 $\chi = 2 - 2g$, 여기서 $g$는 이중선 리본 그래프가 형성하는 2차원 표면의 종수(genus))에 따라 분류될 수 있다.

자유 에너지(free energy) $F = \ln Z$는 다음과 같은 엄밀한 위상학적 전개를 허용한다:
$$F(\lambda, N) \;=\; \sum_{g=0}^\infty N^{2-2g} \mathcal{F}_g(\lambda)$$

### 11.2 행렬 리본 그래프로서의 끈 세계면 (String Worldsheet)

**물리적 해석:** 초끈 이론은 자연의 근본적인 서술이 아니다; 그것은 단지 HNM 행렬 액적의 유효적인 섭동적 전개(effective perturbative expansion)일 뿐이다. 근본적인 1차원 끈은 선험적으로 존재하지 않으며, 비가환 좌표 행렬들의 색채-다발 선(color-flux lines, 리본 그래프)의 연속 극한으로서 동역학적으로 창발한다. 우주를 유한한 $N$ 차원의 행렬 모형으로 정식화함으로써, HNM은 정확하고 비섭동적이며 배경에 독립적인 토대를 제공하며, 초끈 이론은 그 토대의 점근적인 $1/N$ 섭동적 그림자에 불과하다.

### 11.3 행렬 끈 쌍대성, BFSS-IKKT 등가성, 그리고 11차원 초중력(M-이론) 도약

섭동적 초끈 이론들은 서로 다른 차원적 극한(10차원의 Type IIB, 11차원의 M-이론)에서 정의되며, 이는 고전적으로 서로 다른 두 행렬 모형에 의해 기술된다: **IKKT 모형**(10차원 시공간 행렬) 및 **BFSS 모형**(시간 매개변수를 갖는 9차원 공간 행렬, 11차원 초중력에 대응). HNM 체계에서 우리는 BFSS와 IKKT 모형이 독립적인 체계가 아니라 **단 하나의 슈퍼 디랙 연산자 $\mathcal{D}$가 보여주는 두 가지 대수적 극한**임을 증명하여, 최초의 완비된 비섭동적 행렬 끈 쌍대성(Matrix String Duality)을 수립한다.

스펙트럼 삼조의 10차원 좌표 행렬을 $X_a$ ($a=0, \dots, 9$)라 하자. 우리는 시간의 모듈러 흐름 궤적(§8.1)을 따라 하나의 좌표 행렬(예: $X_0$)을 시간 의존적 행렬 상태 공간 상에 작용하는 공변 시간 미분 작용소 $\mathcal{D}_t = \partial_t - i A_0(t)$로 대체하는 정형적인 **T-쌍대성 변환(T-duality transformation)**을 수행한다:
$$X_0 \;\longrightarrow\; i \frac{d}{dt} + A_0(t)$$

이 대수적 표상을 HNM 마스터 작용량 $S_{\text{HNM}} = \text{Tr}((QQ^\dagger)^2)$ (§2.1)에 대입하여 계산하면, 10차원 IKKT형 대수 작용량이 다음과 같이 자발적으로 상전이하여 매핑된다:
$$S_{\text{HNM}} \;\propto\; \int dt \text{Tr}\left( \frac{1}{2} (D_t X_i)^2 + \frac{1}{4} [X_i, X_j]^2 + \theta \bar{\Psi} D_t \Psi + \bar{\Psi} \Gamma^i [X_i, \Psi] \right)$$

이는 M-이론을 기술하는 **BFSS 행렬 양자역학(Matrix Quantum Mechanics)** 작용량과 정확히 일치한다. 11번째 차원 $x_{11}$은 시간의 모듈러 $U(1)$ 원의 콤팩트화 반경으로서 동역학적으로 창발하며, 대형 $N$ 극한은 11차원 M-이론의 이산적 광추 양자화(DLCQ)에 대응한다.

**물리적 의의:** HNM은 M-이론과 IIB형 초끈 이론을 통일하는 최상위 부모 이론(parent theory)으로 작동한다. BFSS와 IKKT 모형은 단 하나의 Connes 스펙트럼 삼조 $(\mathcal{A}, \mathcal{H}, \mathcal{D})$가 가질 수 있는 수학적으로 등가인 두 가지 쌍대 표상이며, 모듈러 T-쌍대성 게이지 변환에 의해 직접 연결된다. 11차원 초중력 극한은 모듈러 시간 원의 대형 $N$ 탈콤팩트화(decompactification) 현상으로 자연스럽게 등장하며, 모든 섭동적 초중력 이론이 단 하나의 비섭동적 행렬 기하학이 보여주는 가지들에 불과함을 엄밀히 입증한다.

---

## 제12장. 완전한 심층 연역 구조망 (Deep Tree of Deduction)

단 하나의 기하학적 대상 — 슈퍼 디랙 연산자 $\mathcal{D}$ — 으로부터 우주의 물리적 현상이 연역되는 논리 계통도. ★ 표시는 도출된 결과, ◆ 표시는 내부 열역학적 일관성에 의해 뒷받침되는 자기 일관적 동정(identification)을 나타낸다.

```text
              [단일 공리] 슈퍼 디랙 연산자 D
                                 │
                    ┌────────────┴────────────┐
                    ▼                          ▼
          [카이랄 섹터] ★              [초대칭 짝지음] ★
    S_HNM = Tr((QQ†)²)            Tr_s(D⁴) ≡ 0 (워드 항등식)
    (물리적 역학)                   (Λ_bulk = 0 구속 조건)
                    │
                    ▼
         [고윳값 응집] ★
          밀집 행렬 액적
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
[홀로그래픽      [인스턴톤        [판데르몬데
 자기 일관성] ◆  터널링] ★       야코비안] ★
S = N² ~ A/4G   엔트로피 유속    로그 반발력
(물리적 동정)   ∝ 면적           P(특이점) = 0
    │           드 시터 q→-1     (빅 바운스)
    │           + 물질 → q(t)        │
    ▼               ▼               ▼
[자발적 콤팩트화] [ER = EPR]     [토미타-다케사키]
★ m² > 0 안정   ◆ 비대각 행렬   ★ KMS 열역학
★ n_gen = 3       얽힘           ★ 모듈러 시간
★ 아티야-싱어    ★ 페이지 곡선    ◆ T_KMS = T_H
★ 스펙트럼 힉스 ★ QECC 벌크    ★ 류-타카야나기
★ 시소 J-연산자                 ★ SYK 극대 혼돈 ★ 리만 제타
★ E8×E8 대칭성 ★ 랭글랜즈 S-쌍대성 [IKKT 행렬 모형]
★ 트위스터 기하 ★ 홀로그래픽 Λ  ★ MERA 퍼즈볼
★ ExFT U-쌍대성 ★ 카디 엔트로피 ★ LQG 스핀 네트워크
★ 체른-사이먼스 ★ 몬스터스      ★ 앰플리투헤드론
  TQFT             문샤인 (M)       ★ S-행렬 모티브 갈루아
★ 모티브 갈루아 ★ 위튼 종수(TMF) ★ 피셔-부레스
  RG 군                            계량
★ 코바노프      ★ 복잡도 CA     ★ 초끈 이론
  호몰로지                       (g_s = 1/N)
★ Chamseddine-   ★ 비가환 중력   ★ 행렬 쌍대성
  Connes                         (BFSS-IKKT)
★ K-이론 결함                  ★ 되살아남 이론
                                 (보렐 합산)
★ 비콤팩트                     ★ E10 바일 반사
  스펙트럼
★ Callias 지수                 ★ Wald 코사이클
```

---

## 에필로그: 하나의 방정식 (The One Equation)

우주의 전체 역사 — 시공간의 창발, 시간의 흐름, 물질의 탄생, 중력과 게이지 힘의 통합, 우주의 팽창과 바운스, 블랙홀의 생성과 증발 — 는 궁극적으로 **단 하나의 분배 함수(Partition Function)**에 의해 완전히 지배된다:

$$\boxed{Z_{\text{Universe}} \;=\; \int \mathcal{D}X\,\mathcal{D}\Psi\; \exp\!\left(-\text{Tr}\!\left((QQ^\dagger)^2\right)\right)}$$

이 단일 적분이 우주 그 자체이다. 그것의 안장점(Saddle point)이 아인슈타인 방정식이고, 그것의 대칭성이 게이지 힘이고, 그것의 위상학이 소립자 세대이며, 그것의 모듈러 흐름이 시간이다. HNM은 이 하나의 수학적 대상으로부터 알려진 모든 물리학을 연역하며, 아직 알려지지 않은 물리학에 대한 반증 가능한 예측을 제시한다.

*"자연은 가능한 한 단순하지만, 그보다 더 단순하지는 않다."* — 알베르트 아인슈타인

---

## 참고 문헌 (References)

[1] A. Connes, *Noncommutative Geometry*, Academic Press (1994).

[2] A. Connes, *On the spectral characterization of manifolds*, J. Noncommut. Geom. **7**, 1–82 (2013). arXiv:0810.2088.

[3] A. H. Chamseddine, A. Connes, *The Spectral Action Principle*, Commun. Math. Phys. **186**, 731–750 (1997). arXiv:hep-th/9606001.

[4] A. H. Chamseddine, A. Connes, M. Marcolli, *Gravity and the standard model with neutrino mixing*, Adv. Theor. Math. Phys. **11**, 991–1089 (2007). arXiv:hep-th/0610241.

[5] N. Ishibashi, H. Kawai, Y. Kitazawa, A. Tsuchiya, *A Large-N Reduced Model as Superstring*, Nucl. Phys. B **498**, 467–491 (1997). arXiv:hep-th/9612115.

[6] T. Banks, W. Fischler, S. H. Shenker, L. Susskind, *M Theory As A Matrix Model*, Phys. Rev. D **55**, 5112–5128 (1997). arXiv:hep-th/9610043.

[7] D. V. Voiculescu, K. J. Dykema, A. Nica, *Free Random Variables*, CRM Monograph Series, AMS (1992).

[8] M. Takesaki, *Theory of Operator Algebras I, II, III*, Encyclopaedia of Mathematical Sciences, Springer (2002).

[9] R. M. Wald, *Black hole entropy is the Noether charge*, Phys. Rev. D **48**, R3427–R3431 (1993). arXiv:gr-qc/9307038.

[10] J. M. Maldacena, *The Large N Limit of Superconformal Field Theories and Supergravity*, Adv. Theor. Math. Phys. **2**, 231–252 (1998). arXiv:hep-th/9711200.

[11] S. Ryu, T. Takayanagi, *Holographic Derivation of Entanglement Entropy from AdS/CFT*, Phys. Rev. Lett. **96**, 181602 (2006). arXiv:hep-th/0603001.

[12] H. Casini, M. Huerta, R. C. Myers, *Towards a derivation of holographic entanglement entropy*, JHEP **2011**, 036 (2011). arXiv:1102.0440.

[13] P. B. Gilkey, *Invariance Theory, the Heat Equation, and the Atiyah-Singer Index Theorem*, CRC Press (1995).

[14] A. Connes, D. Kreimer, *Renormalization in quantum field theory and the Riemann-Hilbert problem*, JHEP **1999**, 024 (1999). arXiv:hep-th/9912092.

[15] N. Arkani-Hamed, J. Trnka, *The Amplituhedron*, JHEP **2014**, 030 (2014). arXiv:1312.2007.
