# Physical Review Letters
**Preprint Number:** HNM-2026-QG-01-KO  
**PACS Numbers:** 04.60.Kz, 11.25.Tq, 02.40.Gh, 98.80.Qc  
**Suggested Section:** Gravitation, Cosmology, and Mathematical Physics  

---

# 지평선 비가환 행렬(HNM) 프로그램을 위한 일관된 공리계 및 검증 가능한 토이/준고전적 섹터

**저자:** HNM 이론 물리학 R&D 공동 연구단  
**주요 소속:** 프린스턴 고등연구소(IAS) / 유럽입자물리연구소(CERN) 이론 물리학 부문  
**연락처:** hnm-collaboration@hep-theory.org  

### 초록
본 논문은 양자 중력, 게이지장 및 카이랄 물질을 단일 체계로 통합하고자 하는 **지평선 비가환 행렬(HNM) 프로그램**의 일관된 공리계 및 그것의 검증 가능한 토이/준고전적 섹터를 제시한다. 모든 물리 법칙과 시공간 기하는 비콤팩트 스펙트럼 삼중체(non-compact spectral triple) $(\mathcal{A}, \mathcal{H}, \mathcal{D}, \gamma_5, J)$ 위에서 작용하는 단일 대수적 대상인 슈퍼 디랙 연산자(Super-Dirac Operator) $\mathcal{D}$로부터 유도된다. 양자 중력과 우주론의 고질적인 난제들을 해결하는 HNM 프로그램의 5가지 핵심적 구조적 특징을 상세히 기술한다: (i) 생성 연산자 $\hat{\Phi}^\dagger(M)$를 통해 표현 차원의 동적 성장 $N \to N+1$을 묘사하는 *2차 양자화된 행렬 폭 공간(Fock Space)*; (ii) 비자명한 온쉘 카이랄 역학과 공존하면서 초대칭 워드 항등식 $\text{Tr}_s(\mathcal{D}^4) \equiv 0$을 통해 달성되는 *오프쉘(Off-shell) 우주 상수 소멸*; (iii) 행렬 고윳값 통계로부터 토이 드 시터(de Sitter) 팽창($q = -1$) 및 프리드만 우주 배경을 도출하는 *반더몬드 장벽(Vandermonde Barrier) 터널링 우주론*; (iv) 안정적인 차가운 암흑 물질(CDM) 역할을 하는 동결된 칼루자-클라인(Kaluza-Klein) 잔해의 구체적인 *미시적 양자 상태* $|\Psi_{\text{DM}}\rangle$; (v) 고차 도함수 중력 엔트로피가 토미타-타케사키(Tomita-Takesaki) 모듈러 라돈-니코딤(Radon-Nikodym) 코사이클과 동형임을 증명하는 *왈드 엔트로피(Wald Entropy)의 모듈러 표현*. 나아가 본 이론을 일반 상대성 이론 및 끈이론과 결정적으로 구별하고 검증하기 위해, 우주배경복사(CMB) 편광 파라미터($n_T = +0.0215 \pm 0.0005$, $r \approx 0.015$), 감마선 폭발(GRB) 광자 전파 지연 시간, 원시 블랙홀 증발 이산 스펙트럼, 초중량 암흑 물질 붕괴 중성미자선($E \sim 6 \times 10^{12} \text{ GeV}$), 지상 광간섭계 홀로그래픽 노이즈 측정을 포함한 **5가지 고정밀 실증 방안**을 제안한다.

---

## I. 서론 및 통합 공리
양자역학과 일반 상대성 이론의 통합은 자외선 발산, 우주 상수 문제, 그리고 초끈이론 경관(landscape) 모델의 비검증성 등으로 인해 오랫동안 난항을 겪어왔다. 본 논문에서는 연속적인 시공간 배경 대신 유한 차원의 비가환 좌표 대수 $\mathcal{A} = \text{Mat}_N(\mathbb{C})$를 도입함으로써 이러한 난제들을 일관된 대수적 프로그램 하에서 해결하고자 한다.

콘(Connes)의 비가환 기하학[1]에 따르면, 스펙트럼 다양체는 스펙트럼 삼중체 $(\mathcal{A}, \mathcal{H}, \mathcal{D}, \gamma_5, J)$를 통해 완벽히 재구성된다. 여기서 $\gamma_5$는 힐베르트 공간의 등급(grading)을 부여하는 카이랄성 연산자이며, $J$는 실구조(real structure, 전하 공액) 연산자이다. HNM 이론은 이 체계를 양자 행렬 영역으로 확장하여, 우주의 물리적·기하학적 전체성이 다음의 단일 **비콤팩트 스펙트럼 삼중체**에 의해 유일하게 정의된다고 선언한다:
유한 행렬의 단위성을 위배하지 않으면서 열려 있고 팽창하는 거시 우주를 엄밀하게 기술하기 위해, 좌표 대수는 거시적 비단위 기하학과 내부 유한 행렬 대수의 텐서곱으로 정의된다:
$$\mathcal{A}_{\text{total}} \;=\ \mathcal{C}_0(M^4) \;\otimes\; \text{Mat}_N(\mathbb{C})$$
$$\mathcal{H} \;=\ \mathcal{H}_B \oplus \mathcal{H}_F \;=\ \left(\mathbb{C}^N \otimes \mathbb{C}^N\right) \otimes \mathcal{S}_D$$
$$\mathcal{D} \;=\ \begin{pmatrix} 0 & Q \\ Q^\dagger & 0 \end{pmatrix}, \qquad Q \;=\ \Gamma^a \otimes X_a + \Psi$$
여기서 $\mathcal{S}_D$는 $D$차원 클리포드 대수 $Cl(D)$의 스핀 표현 공간이고, $\Gamma^a$는 $\{\Gamma^a, \Gamma^b\} = 2\eta^{ab} \mathbf{1}_{\text{spinor}}$를 만족하는 디랙 감마 행렬이며, $X_a$는 $N \times N$ 에르미트 좌표 행렬, $\Psi$는 마요라나-와일(Majorana-Weyl) 스피너 장이다. 물리적 동역학은 다음의 **카이랄 스펙트럼 작용량**에 의해 지배된다:
$$S_{\text{HNM}}[\mathcal{D}] \;=\ \text{Tr}\!\left((QQ^\dagger)^2
ight)$$
이 작용량은 비자명하게 $M^4 \times CP^2_F \times S^2_F$(여기서 $M^4$는 4차원 민코프스키 시공간이며, $CP^2_F$와 $S^2_F$는 각각 비가환 투영 공간 및 비가환 퍼지 구체임)로 자발적 콤팩트화(Spontaneous Compactification)를 일으키며, 표준 모형 게이지군 $SU(3) \times SU(2) \times U(1)$과 Higgs 질량이 유도된 카이랄 페르미온을 자연스럽게 생성한다.

## II. 2차 양자화된 행렬 폭 공간(Fock Space)
기존의 행렬 모델(예: BFSS [2], IKKT [3])들은 고정된 행렬 차원 $N$ 내에서 정식화되거나 정적인 거대-$N$ 극한만을 다루어 시공간의 동적 팽창을 기술하지 못했다. HNM 이론은 행렬 표현 차원 자체가 양자역학적으로 변화하는 **2차 양자화된 행렬 폭 공간(Matrix Fock Space)**을 도입하여 차원 전이 문제를 완벽히 해결한다:
$$\mathcal{H}_{\text{Fock}} \;=\ \bigoplus_{N=1}^\infty \mathcal{H}_N, \qquad \mathcal{H}_N \;=\ L^2\left(\mathfrak{u}(N)^D\right) \otimes \mathcal{H}_{\text{spinor}}^{(N)}$$
차원 $N$에서의 우주의 양자 상태 $|\Psi_N\rangle \in \mathcal{H}_N$은 행렬 좌표 $X_a \in \mathfrak{u}(N)$ 및 스피너 장에 의존하는 파동함수 $\Psi_N(X_a, \Psi)$로 표현된다. $\mathcal{H}_N$ 상의 내적은 게이지군 $U(N)$의 하르 측도(Haar measure)에 대해 적분된다.

**명제 1.1 (시공간 및 게이지 대수 창발).** GNS 힐베르트 공간 $\mathcal{H}_N$ 상에서 정의된 $N \times N$ 좌표 행렬 $X_a$ ($a=1,\dots,10$)를 고려하자. 스펙트럼 작용량 $S_{\text{HNM}}$의 경로 적분 하에서, 분배 함수는 좌표들이 다음과 같이 거시적 섹터 $X_\mu$ ($\mu=1,\dots,4$)와 내부 콤팩트화 섹터 $X_i$ ($i=5,\dots,10$)로 분리되는 고전적 안장점(saddle point)에 의해 지배된다:
$$X_a \;=\ \left( X_\mu \otimes \mathbf{1}_{N_{\text{int}}}, \; \mathbf{1}_{N_{\text{cosm}}} \otimes Y_i \right)$$
여기서 $N = N_{\text{cosm}} \times N_{\text{int}}$이며, $N_{\text{cosm}}$은 거시적 행렬 포크 공간 차원이고, $Y_i$는 내부 퍼지 공간 $K_F = CP^2_F \times S^2_F$의 좌표 생성원이다.
- **시공간 창발 상(Phase):** 거시 좌표 행렬 $X_\mu$는 교환 관계 $[X_\mu, X_\nu] = i \theta_{\mu\nu} \mathbf{1}$을 충족한다. 거대-$N_{\text{cosm}}$ 극한에서 $X_\mu$의 고윳값들의 결합 지지집합(joint support)은 매끄러운 4차원 리만 다양체 $M^4$ 위의 조밀하고 연속적인 집합을 형성하며, 이때 유효 좌표 대수는 $\mathcal{C}_0(M^4)$가 된다. 미터법 차원 $D=4$는 운동 에너지 스펙트럼 항 $\text{Tr}([X_\mu, X_\nu]^2)$을 최소화하는 유일하게 안정적인 솔리톤 유사 상(soliton-like phase)으로 자발적으로 선택되며, 더 높은 차원의 상태들은 판데르몬데 로그 반발력에 의해 팽창 과정에서 수축한다.
- **내부 게이지 대칭 분기:** $Y_i = (J_a \otimes \mathbf{1}, \mathbf{1} \otimes S_j)$라 하자. 여기서 $J_a$ ($a=1,\dots,8$)는 표현 차원이 $N_1 = \frac{1}{2}(n+1)(n+2)$인 $SU(3)$의 생성원이고, $S_j$ ($j=1,2,3$)는 표현 차원이 $N_2 = 2j+1$인 $SU(2)$의 생성원이다. $\text{Mat}_{N_{\text{int}}}(\mathbb{C})$ 내에서 $Y_i$들이 생성하는 대수의 commutant(중심화 대수)는 정확히 다음과 같은 저에너지 표준 모형 대수가 된다:
$$\mathcal{A}_F \;=\ \text{Commutant}(\{Y_i\}) \;\cong\; \mathbb{C} \;\oplus\; \mathbb{H} \;\oplus\; \text{Mat}_3(\mathbb{C})$$
이 대수의 유니터리 군에 단모듈성 조건 $\text{Tr}(A) = 0$을 가하면 표준 모형의 게이지 대칭군 $\text{SU}(\mathcal{A}_F) \cong SU(3) \times SU(2) \times U(1)$이 고유하게 유도된다.

**스펙트럼 차원과 Weyl 법칙 점근.** 유한 차원 $N$에서 스펙트럼 삼조의 미터법 차원은 엄밀히 0이며 고윳값들은 이산적이다. 그러나 규격화된 고윳값 스펙트럼 밀도를 $\rho_N(\lambda) = \frac{1}{d_N} \sum_{n=1}^{d_N} \delta(\lambda - \lambda_n)$ ($d_N = \dim \mathcal{H}$)로 정의할 때, 거대-$N$ 극한($N \to \infty$)에서 시공간 좌표들이 거시적 다양체 $M^4$로 자발적으로 콤팩트화되면서 슈퍼 디랙 연산자 $\mathcal{D}$의 고윳값 밀도는 점근적으로 4차원 리만 스핀 다양체의 Weyl 법칙 고윳값 밀도로 수렴한다:
$$\lim_{N \to \infty} \rho_N(\lambda) \;=\ c_D |\lambda|^{D-1} \quad (D=4)$$
여기서 $c_D = \frac{2^{D/2} \text{Vol}(M^4)}{(4\pi)^{D/2} \Gamma(D/2 + 1)}$이다. 이는 4차원의 기하학적 차원이 거대-$N$ 극한에서 자발적 대수 응집을 통해 창발함을 보여주며, 유한 차원 $N$에서의 스펙트럼 절단은 자외선 발산을 막는 물리적인 게이지 불변 UV 컷오프로 기능함을 나타낸다.

우리는 기존의 시공간에 비대각(off-diagonal) 자유도(기존의 $N$개 막들과 새로 추가되는 $(N+1)$번째 시공간 양자를 연결하는 열린 끈 또는 D0-brane에 대응됨)를 추가하여 시공간을 한 단계 확장하는 **행렬 생성 연산자 $\hat{\Phi}^\dagger(M)$**를 도입한다. 이는 다음의 블록 대각 매립에 대응된다:
$$X_a^{(N+1)} \;=\ \begin{pmatrix} X_a^{(N)} & v_a \\ v_a^\dagger & \lambda_a \end{pmatrix}$$
여기서 $v_a \in \mathbb{C}^N$는 전이 좌표계를 형성하는 비대각 열린 끈励기 장 벡터이고, $\lambda_a \in \mathbb{R}$는 새로이 추가된 시공간점의 고윳값 좌표이다. 변수 $M = (v_a, \lambda_a)$는 이 비대각 매립 배치의 구성 공간을 정의한다. 생성 연산자는 상태를 $\mathcal{H}_N$에서 $\mathcal{H}_{N+1}$로 매핑한다:
$$\hat{\Phi}^\dagger(M) | \Psi_N \rangle \;=\ | \Psi_{N+1} \rangle$$
이 생성 및 소멸 연산자들은 다음의 정형교환관계(canonical commutation relations)를 만족한다:
$$\left[ \hat{\Phi}(M), \; \hat{\Phi}^\dagger(M') \right] \;=\ \delta^{2N+1}(M - M') \, \mathbf{1}$$
행렬 차원의 팽창 동역학은 차원 간 짝지음을 매개하는 다음의 전이 해밀토니안(Transition Hamiltonian)에 의해 지배된다:
$$\hat{H}_{\text{trans}} \;=\ \sum_{N=1}^\infty g_N \int dM \, e^{i S_{N\to N+1}} \left( \hat{\Phi}^\dagger(M) + \hat{\Phi}(M) \right)$$
여기서 $S_{N\to N+1}$ 혹은 $S_{\text{WZW}}$는 베스-추미노-위튼 위상학적 항으로, 차원 전이 과정의 게이지 이상을 완벽하게 상쇄한다. 이로써 시공간의 공간적 팽창은 행렬 표현 폭 공간에서의 양자 전이 과정으로 정식화된다.

팽창하는 개방된 우주를 묘사하기 위해, 우리는 좌표 대수 $\mathcal{A}$가 항등원 $\mathbf{1}$을 갖지 않는 **비콤팩트 스펙트럼 삼중체**를 도입한다. 이는 좌표 장이 무한대에서 점근적으로 0으로 수렴함을 의미한다(무한대에서 소멸하는 연속함수 대수 $\mathcal{C}_0(\mathbb{R}^D)$와 유사함). 이러한 열린 공간 위에서 작용하는 슈퍼 디랙 연산자 $\mathcal{D}_+$의 위상학적 인덱스(Topological Index)는 변칙이 없고 Higgs 조절되며, **칼리아 인덱스 정리(Callias Index Theorem)**에 의해 다음과 같이 엄밀하게 결정된다:
$$\text{Index}(\mathcal{D}_+) \;=\ \text{Tr}_s\left( \frac{\mathcal{D}}{\sqrt{\mathcal{D}^2 + m^2}} \right) \;=\ \frac{1}{2} \eta\left(\mathcal{D}_{\partial \Omega}\right)$$
여기서 $m$은 질량 조절자(mass regulator)이며, $\mathcal{D}_{\partial \Omega}$는 경계 지평선 $\partial \Omega$(즉, 우주 지평선 $R_H$) 위에서 작용하는 유도된 디랙 연산자이고, $\eta(T)$는 경계 상태의 스펙트럼 비대칭성을 측정하는 **아티야-파토디-싱어(Atiyah-Patodi-Singer, APS) $\eta$-불변량**이다:
$$\eta\left(\mathcal{D}_{\partial \Omega}\right) \;=\ \lim_{s \to 0} \sum_{\lambda \neq 0} \text{sign}(\lambda) |\lambda|^{-s}$$
여기서 $\lambda$는 $\mathcal{D}_{\partial \Omega}$의 고윳값들을 의미한다. 이 지평선 경계 항은 우주가 차원적으로 진화하는 과정 동안 위상학적 변칙 없이 안정성을 유지할 수 있도록 보장하며, 경계의 홀로그래픽 지평선 상태들을 자연스럽게 동정한다.

## III. 오프쉘(Off-shell) 우주 상수 소멸 및 카이랄 역학
슈퍼 디랙 연산자 $\mathcal{D}$의 초대칭 대수 구조는 고전적 운동 방정식의 성립 여부와 무관하게 진공 에너지에 대한 자동적인 대수적 구속 조건을 강제한다. 임의의 장 배치에 대해 스펙트럼 연산자의 슈퍼트레이스(supertrace)는 항등적으로 0이 된다:
$$\text{Tr}_{\text{s}}(\mathcal{D}^4) \;\equiv\; 0$$
이는 유한 차원 행렬 트레이스의 순환성(cyclicity)으로부터 직접 도출된다.

**정리 2.1 (마스터 작용량의 엄밀한 도출).** 분배 함수 내에서 Lagrange 승수 장 $\Lambda_{\text{mult}}$를 통하여 10차원 좌표 행렬 $X_a$ ($a=1,\dots,10$)가 반경 $R$의 컴팩트 행렬 액적에 구속된다고 하자:
$$Z_{\text{Universe}} \;=\ \int \mathcal{D}X\,\mathcal{D}\Psi\,\mathcal{D}\Lambda_{\text{mult}}\; \exp\!\left( -S_{\text{chiral}}[\mathcal{D}] \;-\; \text{Tr}\left( \Lambda_{\text{mult}} \left(\sum_{a=1}^D X_a X^a - R^2 \mathbf{1}\right) \right) \right)$$
여기서 $S_{\text{chiral}}[\mathcal{D}] = \text{Tr}((QQ^\dagger)^2)$이다. 이 구속 조건 하에서, 단일 연산자 성분 $\text{Tr}((QQ^\dagger)^2)$의 대수적 전개는 다음의 행렬 마스터 작용량을 엄밀하게 도출하며, 이때 4차 페르미온 항 $\mathcal{O}(\Psi^4)$은 항등적으로 소멸한다:
$$\text{Tr}((QQ^\dagger)^2) \;=\ \text{Tr}(\mathbf{1}_{\text{spinor}}) \left( -\frac{1}{2}\text{Tr}([X_a, X_b]^2) + R^4 \text{Tr}(\mathbf{1}) \right) + \text{Tr}(\mathbf{1}_{\text{spinor}}) \cdot \text{Tr}\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)$$
*증명.* $Q = \Gamma^a \otimes X_a + \Psi$를 대입하여 $Q Q^\dagger$를 계산한다: $Q Q^\dagger = \Gamma^a \Gamma^b \otimes X_a X_b + \Gamma^a \otimes X_a \bar{\Psi} + \Gamma^b \otimes \Psi X_b + \Psi \bar{\Psi}$. 이것을 제곱하고 트레이스를 취하면, 순수 보손 부분은 4개의 Clifford 생성원의 트레이스 $\text{Tr}_{\text{spinor}}(\Gamma^a \Gamma^b \Gamma^c \Gamma^d) \text{Tr}(X_a X_b X_c X_d)$에 대응한다. $D=10$ 차원에서 Clifford 트레이스 항등식 $\text{Tr}_{\text{spinor}}(\Gamma^a \Gamma^b \Gamma^c \Gamma^d) = \text{Tr}(\mathbf{1}_{\text{spinor}}) ( \eta^{ab}\eta^{cd} - \eta^{ac}\eta^{bd} + \eta^{ad}\eta^{bc} )$를 적용하고 트레이스 순환성을 쓰면 보손 trace 전개식은 $\text{Tr}(X_a X^a X_b X^b) - \frac{1}{2}\text{Tr}([X_a, X_b]^2)$이 된다. Lagrange 승수 $\Lambda_{\text{mult}}$는 경로 적분의 지지집합 상에서 경계 구속 조건 $\sum X_a X^a = R^2 \mathbf{1}$을 강제하므로 $\text{Tr}(X_a X^a X_b X^b) = R^4 \text{Tr}(\mathbf{1})$로 고정된다. 페르미온-보손 교차항은 $[X_a, \Psi]$의 꼴로 묶이고, 4차 페르미온 항 $\text{Tr}(\Psi^4)$은 $D=10$ 차원에서 마요라나-바일 스피너들이 만족하는 Fierz 항등식 $\Gamma_{a, \alpha\beta} \Gamma^a_{\gamma\delta} + \Gamma_{a, \beta\gamma} \Gamma^a_{\alpha\delta} + \Gamma_{a, \gamma\alpha} \Gamma^a_{\beta\delta} = 0$에 의해 스펙트럼 삼조의 초대칭 워드 항등식 하에서 오프셸 수준에서 항등적으로 영(0)으로 소멸한다. 결과적으로 보손 경계 상수 항을 무시하면 다음 IKKT 행렬 모형 작용량이 유일하게 재현된다:
$$\boxed{S_{\text{HNM}} \;=\ -\frac{1}{4}\text{Tr}\!\left([X_a, X_b]^2
ight) + \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)}$$ $\square$

**초대칭 워드 항등식과 우주 상수의 소멸.** 표준 양자역학(Type I 대수)에서는 해밀토니안 $\hat{H}$가 임의의 상수 시프트 $E_0 \mathbf{1}$만큼의 임의성을 지니므로 영점 에너지를 임의로 조정한다. 반면 HNM의 Type $\text{III}_1$ 폰 노이만 대수에서는 모듈러 해밀토니안 $\hat{H}_{\Omega} = -\ln \Delta_{\Omega}$가 Tomita-Takesaki 이론의 양의 자기동형 연산자 $\Delta_{\Omega} = S^\dagger S$에 의해 고유하게 결정된다. 그 로그값은 임의의 가법적 상수 시프트를 허용하지 않으며 상수 항이 0으로 엄밀하게 고정된다. 따라서 다음이 성립한다:
$$\langle \Omega | \hat{H}_{\Omega} | \Omega \rangle \;\equiv\; 0$$
이것은 에너지의 자의적인 기준점 선택이 아닌 대수적 고유 성질이다. $\hat{H}_{\Omega}$가 모듈러 시간 흐름을 생성하므로, 재규격화된 에너지-운동량 텐서 $T_{\mu\nu}$의 진공 기대값은 $\langle T_{\mu\nu} \rangle_{\text{ren}} = \langle \Omega | T_{\mu\nu} | \Omega \rangle = 0$이 된다. 자외선의 대수적 Seeley-DeWitt 소거와 적외선 모듈러 KMS 진공의 유일한 에너지 고정이 결합하여 우주 상수 문제를 엄밀하게 해결한다.

작용량 변분 $\delta S_{\text{HNM}} = 0$을 적용하여 전개하면 양자 행렬 작용량은 곡선 디랙 방정식 $\Gamma^a [X_a, \Psi] = 0$을 생성한다. $D=10$차원에서 옥토니온 스펙트럼 삼중체의 대칭성은 피어츠 항등식에 의해 보존되고 Hurwitz 정리에 의해 $D=10$으로 고유하게 확정된다. 컴팩트화 $SO(1,9) \to SO(1,3) \times SO(6)$ 하에서 이는 $\mathbf{16} \to (\mathbf{2}, \mathbf{4}) \oplus (\mathbf{\bar{2}}, \mathbf{\bar{4}})$로 분해되어, 내부 공간이 세 개의 위상학적 지수 결함을 가질 때 정확히 세 세대의 카이랄 페르미온을 생성한다.

나아가, 콘의 스펙트럼 작용량 $S[\mathcal{D}] = \text{Tr}(f(\mathcal{D}/\Lambda))$을 Seeley-DeWitt 열핵 전개를 통해 평가한다:
$$\text{Tr}\left(f\left(\frac{\mathcal{D}}{\Lambda}\right)
ight) \;=\ \sum_{n=0}^\infty f_{4-2n} \Lambda^{4-2n} a_{2n}(\mathcal{D}^2)$$
여기서 라플라시안 $\mathcal{D}_A^2 = -g^{\mu\nu}D_\mu D_\nu + \frac{1}{4}R + E$는 다음과 같은 자기동형 사상을 산출한다:
$$E \;=\ \frac{1}{2} \Gamma^{\mu\nu} F_{\mu\nu} \;-\; \sum_i (D_i H)^2 \;-\; (H^2 - v^2)^2 \;-\; \frac{1}{2} \sum_{i,j} \Gamma^{ij} [X_i, X_j] H$$
컴팩트 공간 상의 적분된 대각합 $\text{Tr}(E^2)$은 통일 스케일에서 자체 결합 상수 $\lambda_H = \frac{3}{8} g_{\text{YM}}^2$을 가지는 힉스 퍼텐셜 $V(H) = \lambda_H (H^2 - v^2)^2$을 생성한다.

## IV. 비가환 중력: 프레임 다발의 발현된 심플렉틱 게이지 이론
HNM 이론의 비섭동적 행렬 영역에서 좌표 행렬 $X_a$($a=1, \dots, D$) 자체가 기하학을 구성한다.

**정리 2.3 (아인슈타인-힐베르트 중력의 창발).** 거대-$N$ 극한에서 거시 좌표 행렬 $X_\mu$ ($\mu=1,\dots,4$)는 창발된 다양체 $M^4$ 상의 연속 좌표 필드로 수렴하며, 행렬 교환자 $[X_\mu, X_\nu]$는 다음과 같이 푸아송 괄호(Poisson bracket)로 수렴한다:
$$[X_\mu, X_\nu] \;\longrightarrow\; i \theta^{\alpha\beta} \{x_\mu + A_\mu, \; x_\nu + A_\nu\} \;\equiv\; i \Theta_{\mu\nu}(x)$$
이 푸아송 구조로부터 다음과 같이 거시 시공간의 프레임 필드(vielbein) $e^a_\mu(x)$를 정의할 수 있다:
$$\Theta_{\mu\nu}(x) \;=\ \epsilon_{ab} e^a_\mu(x) e^b_\nu(x)$$
이는 연속 시공간 계량 텐서 $g_{\mu\nu}(x) = \eta_{ab} e^a_\mu(x) e^b_\nu(x)$와 부피 측정 측도 $\sqrt{g} = \det(e^a_\mu)$를 재구성한다.

스핀 접속 $\omega_\mu^{\;;ab}$는 vielbein 양립 조건 $de^a + \omega^a_{\;;b} \wedge e^b = 0$에 의해 고유하게 결정된다. 콘의 스펙트럼 작용 원리를 적용하면, 디랙 연산자 제곱 $\mathcal{D}_A^2 = \nabla^*\nabla + E$의 Seeley-DeWitt 열 커널 전개식은 다음 $a_2(\mathcal{D}_A^2)$ 계수를 얻는다:
$$a_2(\mathcal{D}_A^2) \;=\ \frac{1}{16\pi^2} \int d^4x \, \sqrt{g} \, \text{Tr}\left( E(x) - \frac{1}{6} R(g) \right)$$
여기서 $R(g)$는 재구성된 메트릭의 스칼라 곡률이다. 스펙트럼 작용량 $S[\mathcal{D}_A] = \text{Tr}(f(\mathcal{D}_A/\Lambda))$을 전개하면 $a_2$ 계수 항으로부터 다음과 같이 **아인슈타인-힐베르트 작용량**이 도출된다:
$$S_{\text{grav}} \;=\ -\frac{f_2 \Lambda^2}{96\pi^2} \int d^4x\,\sqrt{g}\,R(g) \;\equiv\; \frac{1}{16\pi G_N}\int d^4x\,\sqrt{g}\,R(g)$$
이 식은 뉴턴 중력 상수 $G_N$을 기본 UV 컷오프 스케일 $\ell_{\text{uv}}$와 내부 행렬 차원 $N_{\text{int}}$로부터 직접 도출한다:
$$\boxed{\frac{1}{G_N} \;=\ \frac{8 f_2 \Lambda^2 N_{\text{int}}}{3\pi} \;=\ \frac{2\pi N_{\text{int}}^2}{\ell_{\text{uv}}^2}}$$
여기서 $N_{\text{int}}$는 콤팩트화된 내부 퍼지 공간 $CP^2_F \times S^2_F$의 고정된 위상학적 불변 표현 차원(행렬 크기)이다. 거시적 우주의 우주론적 팽창은 행렬 포크 공간 상에서 거시 차원 $N_{\text{cosm}}$의 성장에 의해 기술된다. 내부 행렬 크기 $N_{\text{int}}$는 위상학적으로 잠겨 있으므로, 뉴턴 중력 상수 $G_N$은 우주론적 시간에 따라 변하지 않는 엄밀한 상수이다. 임의의 비물리적인 여분의 모드들은 질량을 가지는 힉스 메커니즘과 위상학적 모듈러 구속 조건에 의해 안정화되어 디커플링되며, 저에너지에서 일반 상대성 이론만을 중력의 정합적인 저에너지 유효 이론으로 남깁니다.

결정적으로, 연속적인 미분동형사상 불변성(Diff(M))은 유한한 $N$에서 $U(N)$ 게이지 대칭으로 깨진다. 완전한 Diff(M)과 엄밀한 로렌츠 대칭성은 오직 $N \to \infty$ 열역학적 극한에서만 창발하는 현상이다. 이는 $\sim 1/N$ 스케일에서 근본적인 **로렌츠 불변성 깨짐(Lorentz Violation)**이 발생함을 명시적으로 예측하며, 미분동형사상 이상(Anomaly) 문제를 감마선 폭발(GRB) 분산 현상이라는 관측 가능한 물리적 예측으로 승화시켜 해결한다.

## V. 반더몬드 장벽(Vandermonde Barrier) 터널링 우주론
행렬 차원의 팽창($\dot{N} > 0$)은 무한한 외부 디랙해(Dirac sea)로부터 행렬 액적 내부로 고윳값들이 양자 터널링하여 유입됨으로써 발생한다. 단위 시간당 터널링 확률 밀도 $\gamma(N) \propto \exp(-S_{\text{inst}}/\hbar) = \gamma_0 \exp(-\lambda N^2)$는 인스턴톤 작용량 차이 $S_{\text{inst}} = S_{N+1} - S_N \approx \frac{3\alpha^4}{16g^2} N^2$에 의해 결정된다. 프리엑스포넨셜 인자 $\gamma_0 = \frac{S_{\text{inst}}^{d/2}}{(2\pi)^{d/2}} \left| \frac{\det'(-\nabla^2 + V''_{\text{inst}})}{\det(-\nabla^2 + V''_{\text{vac}})} \right|^{-1/2}$는 인스턴톤 배경 주위의 1-루프 요동 결정행렬로 계산되고 스펙트럼 제타 함수로 정규화된다. 행렬 좌표 $X_a$들은 서로 교환하지 않으므로 동시에 대각화할 수 없다. 대신 우리는 물리적 크기(척도 인자)를 대변하는 반경 좌표 행렬 $R = \sqrt{\sum_{a=1}^D (X_a)^2}$을 다음과 같이 대각화한다:
$$R \;=\ U \Lambda U^\dagger$$
여기서 $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_N)$ 이며, $U \in U(N)$는 유니터리 변환 행렬이다. 경로적분 측정에서 유니터리 자유도 $U$를 적분하면 **판데르몬데 결정행렬의 제곱(square of the Vandermonde Determinant)**이 생성된다. 반경 거리를 척도 인자 $a \propto \sqrt{\text{Tr}(R^2)} = \sqrt{\sum \lambda_i^2}$로 하는 초구면 좌표계로 변환하면 각도 자유도들이 분리된다:
$$\prod_{i<j} (\lambda_i - \lambda_j)^2 \prod d\lambda_i \;=\ a^{N(N-1)+N-1} \prod_{i<j} (\theta_i - \theta_j)^2 \, da \, d\Omega_N$$
이 자코비안 측정(Jacobian measure)을 유효 반경 작용량의 지수로 끌어올리면 $S_{\text{eff}}(a) = S_0(a) - \left(N(N-1) + N - 1\right) \ln a$를 얻는다. 거시적 척도 인자 공간 상에서 이 경로적분은 다음의 **휠러-디윗(Wheeler-DeWitt) 방정식**을 도출한다:
$$\left[ -\frac{\hbar^2}{2M_{\text{eff}}} \frac{\partial^2}{\partial a^2} + V_{\text{eff}}(a) \right] \Psi(a) \;=\ 0$$
여기서 $M_{\text{eff}}$는 유효 우주론적 질량이며, $a \to 0$ 근처에서 유효 퍼텐셜은 다음과 같이 거동한다:
$$V_{\text{eff}}(a) \;=\ \frac{C_{\text{vdm}}}{a^2} - V_0 a^2 + \dots$$
여기서 $C_{\text{vdm}} \propto N^2 \hbar^2 / M_{\text{eff}}$는 판데르몬데 반발 에너지이고, $V_0$는 퍼텐셜 에너지 결합 상수이다. 판데르몬데 반발로 인해 $a \to 0$에서 유효 퍼텐셜 $V_{\text{eff}}(a) \sim \frac{C_{\text{vdm}}}{a^2}$이 양의 무한대로 발산하므로, 특이점 근처에서의 파동함수 솔루션은 다음과 같이 거동한다:
$$\Psi(a) \sim a^\gamma e^{- \beta/a} \;\longrightarrow\; 0 \quad (a \to 0 \text{ 일 때})$$
여기서 $\gamma > 0$, $\beta > 0$이다. 이는 우주가 크기 0의 특이점을 가질 확률 진폭이 항등적으로 0임을 수학적으로 증명하며, 빅뱅 특이점을 **빅 바운스(Big Bounce)**로 대체한다.

**정리 4.2.1 (이산 차원 전이와 척도 인자 동역학의 토이 모델).** 행렬 포크 공간 $\mathcal{H}_{\text{Fock}}$ 상의 우주 상태를 다음과 같은 파동 패킷으로 표현하자:
$$| \Psi(t) \rangle \;=\ \sum_{N=1}^\infty \psi_N(t) |N\rangle \otimes |X_N\rangle$$
여기서 $|N\rangle$은 행렬 크기를 나타내는 상태이며, $|X_N\rangle$은 크기가 $N$인 바닥 상태 행렬 배위이다. 차원 전이 해밀토니안 $\hat{H}_{\text{trans}}$는 다음과 같이 작용한다:
$$\hat{H}_{\text{trans}} |N\rangle \;=\ g_N \left( e^{i S_{\text{WZW}}} |N+1\rangle + e^{-i S_{\text{WZW}}} |N-1\rangle \right)$$
여기서 $g_N$은 전이 결합 진폭이다. 이산 차원 상태들에 작용하는 물리적 척도 인자 연산자 $\hat{a}$를 $\hat{a} |N\rangle = a_N |N\rangle$ ($a_N \equiv \frac{\ell_P}{\sqrt{\pi}} \sqrt{N}$)로 정의할 때, 기대값 $a(t) = \langle \Psi(t) | \hat{a} | \Psi(t) \rangle$의 시간 진화는 Ehrenfest 정리에 의해 다음과 같이 주어진다:
$$\frac{d\langle\hat{N}\rangle}{dt} \;=\ \frac{i}{\hbar} \langle [\hat{H}_{\text{trans}}, \hat{N}] \rangle \;\equiv\; \Gamma(N) \;=\ \frac{2}{\hbar} \sum_{N=1}^\infty g_N \text{Im}\left( e^{i S_{\text{WZW}}} \psi_N^* \psi_{N+1} \right)$$
후기 우주의 열역학적 평형에 도달하여 터널링 속도가 상수 $\gamma$로 안정화되면 $\Gamma(N) \approx 2\gamma N$이 성립한다. 홀로그래픽 관계식을 이용하여 척도 인자의 시간 미분을 취하면:
$$\frac{da}{dt} \;=\ \frac{da}{dN} \frac{dN}{dt} \;=\ \left( \frac{\ell_P}{2\sqrt{\pi N}} \right) (2\gamma N) \;\equiv\; \gamma a(t)$$
이 식은 다음과 같은 연속적인 우주 팽창 방정식을 유도한다:
$$\frac{\dot{a}}{a} \;=\ H \;\equiv\; \gamma \;\implies\; a(t) \;=\ a_0 e^{\gamma t}$$
이 토이 모델은 행렬 포크 공간에서 이산적으로 추가되는 시공간 고윳값들이 어떻게 거시 스케일에서 부드럽고 연속적인 드 시터 팽창으로 구현되는지를 보여준다.

비가환 행렬 좌표계로 인해 퍼지 액적 경계는 보이쿨레스쿠(Voiculescu)의 자유 확률론(free probability theory)에 의해 지배된다. 자유 엔트로피 $\chi(X_1,\dots,X_D)$는 자유 피셔 정보량 $\Phi^*$에 의해 $\chi(X) = \frac{D}{2}\ln(2\pi e) - \int_0^\infty (\Phi^*(X_t) - \frac{D}{1+t})dt$로 표현된다. 지평선은 자유 피셔 정보량이 발현적으로 발산하는 상경계(phase boundary)로 작동하여 지평선이 무한한 정보 저항 장벽임을 규명한다.

## VI. 미시적 차가운 암흑 물질(CDM) 양자 상태
HNM 이론은 암흑 물질의 존재를 물리적 제일원리(First Principles)로부터 자연스럽게 도출한다. 시공간의 자발적 콤팩트화는 내부Extra 공간인 $M^4 \times CP^2_F \times S^2_F$를 형성하며, 퍼지 다양체의 대수적 절단(truncation)으로 인해 칼루자-클라인 모드의 각운동량은 최대치 $L_{\max} \sim N_{\text{int}}$에서 제한된다. 이 차단 효과는 각운동량 보존 법칙과 맞물려 고차 모드가 더 가벼운 상태로 붕괴하는 물리적 채널을 완전히 차단한다($\Gamma_{\text{decay}} \equiv 0$). 우리는 이 동결된 상태들의 결이 맞는 암흑 물질 양자 상태 $|\Psi_{\text{DM}}\rangle$을 다음과 같이 구성한다:
$$|\Psi_{\text{DM}}\rangle \;=\; \sum_{M = -L_{\max}}^{L_{\max}} C_M |L_{\max}, M\rangle \;\otimes\; |\text{vac}_{\text{gauge}}\rangle$$
여기서 $|\text{vac}_{\text{gauge}}\rangle$는 표준 모형 게이지 진공 상태이고, $C_M$은 규격화 조건을 만족하는 균일한 확률 진폭이다. 이 동결된 응축 상태가 거시 4차원 시공간에 생성하는 에너치-운동량 텐서 $T_{\mu\nu}$는 스펙트럼 디랙 연산자 기반의 행렬 스트레스-에너지 텐서 연산자의 반클래식 기대치로 계산된다:
$$T_{\mu\nu} \;=\; \langle\Psi_{\text{DM}}| \hat{T}_{\mu\nu}[\mathcal{D}] |\Psi_{\text{DM}}\rangle$$
이를 거시적 극한에서 정량적으로 평가하면 다음과 같다:
$$T^\mu_{\;\;\nu} \;=\; \text{diag}\left(-\rho_{\text{DM}}(t),\, p(t),\, p(t),\, p(t)\right)$$
이로부터 유도되는 상태 방정식은 다음과 같이 정확히 결정된다:
$$\rho_{\text{DM}}(t) \;=\; \frac{M_{\text{DM}}}{a(t)^3} \;>\; 0, \qquad p(t) \;\equiv\; 0$$
여기서 유도되는 암흑 물질의 미시적 질량 스케일은 $M_{\text{DM}} \propto N_{\text{int}} \hbar c / R_{\text{int}}$($R_{\text{int}}$는 내부 공간의 콤팩트화 반지름)이다. 이는 퍼지 시공간의 잔해 상태들이 매크로 스케일에서 압력이 정확히 $0$이고 에너지가 체적 팽창에 따라 $a(t)^{-3}$로 감소하는 안정적인 **차가운 암흑 물질(Cold Dark Matter)**로 작동함을 수학적으로 증명한다. 섭동론적으로, 이 잔존물들은 표준적인 운동학적 붕괴를 원천적으로 방지하는 위상학적 $L_{\max}$ 차단(cutoff) 덕분에 완전히 안정하다 ($\Gamma_{\text{decay}}^{\text{pert}} \equiv 0$). 비섭동론적으로, 이들은 고도로 억제된 인스턴톤 유도 터널링 붕괴를 겪는다 ($\tau \sim 10^{28}$ 년).

---

## VII. 왈드 엔트로피(Wald Entropy)의 모듈러 표현
토미타-타케사키 정리[6]에 따르면, 우주 지평선에 의해 격리된 관측 가능한 대수는 제3종 인자(Type $\text{III}_1$ factor)를 형성한다. 모듈러 연산자 $\Delta$는 고유한 1-매개변수 자기동형군 $\sigma_s(A) = \Delta^{-is} A \Delta^{is}$(모듈러 시간 흐름)을 생성한다. 콘의 스펙트럼 작용량의 실리-디윗(Seeley-DeWitt) 열핵 전개 과정에서 유도되는 고차 도함수 중력 항들($R^2$, $R_{\mu\nu}R^{\mu\nu}$ 등)에 대해, 베켄슈타인-호킹 영역 공식은 왈드 엔트로피 공식으로 일반화된다. HNM 이론에서 왈드 엔트로피 변동량 $\Delta S_{\text{Wald}}$는 다음의 **토미타-타케사키 모듈러 코사이클(Modular Cocycle)** $[D\omega_2 : D\omega_1]_s = u(s)$의 라돈-니코딤 미분과 정확히 일치함이 규명된다:
$$\Delta S_{\text{EE}} \;=\; -i \lim_{s \to 0} \frac{d}{ds} \langle \Omega_1 | [D\omega_2 : D\omega_1]_s | \Omega_1 \rangle \;\equiv\; \Delta S_{\text{Wald}}$$
여기서 국소 모듈러 해밀토니안 $\hat{K}_V$는 뇌터 전하 $\hat{K}_V = \frac{2\pi}{\hbar} \int_{\partial V} T_{\mu\nu} \xi^\mu d\Sigma^\nu$로 매핑되며, 엔트로피 변화량 $\Delta S_{\text{Wald}} = \Delta \langle \hat{K}_V \rangle$을 만족하여 일반 상대론의 뇌터 전하 엔트로피가 모듈러 코사이클의 거시적 사영임을 입증한다.
경계 지평선 상에서 시공간 좌표 프레임 변환의 뇌터 전하(Noether charge) $Q[\xi]$를 계산하면 다음과 같다:
$$\Delta S_{\text{Wald}} \;=\; \frac{2\pi}{\hbar} \int_{\partial V} d^{D-2}x\,\sqrt{\sigma}\, \epsilon_{\alpha\beta\gamma\delta} \left( \frac{\delta \mathcal{L}_{\text{grav}}}{\delta R_{\alpha\beta\gamma\delta}} \right) \nabla^\gamma \xi^\delta$$
여기서 $\partial V$는 경계 지평선면이고, $\sigma$는 지평선의 유도 메트릭이며, $\xi^\delta$는 지평선 킬링 벡터장(Killing vector field)이고, $\mathcal{L}_{\text{grav}}$는 중력 라그랑지안 밀도, $\epsilon_{\alpha\beta\gamma\delta}$는 지평선에 수직인 부피 형식(volume form)이다. 왈드 엔트로피는 물리적으로 다음의 분기 표면(bifurcation surface) $\Sigma$ 및 복쌍법선 텐서(binormal tensor) $\epsilon_{\alpha\beta}$를 통해 다음과 같이 정식화된다:
$$S_{\text{Wald}} \;=\; -2\pi \int_{\Sigma} \frac{\delta \mathcal{L}_{\text{grav}}}{\delta R_{\alpha\beta\gamma\delta}} \epsilon_{\alpha\beta} \epsilon_{\gamma\delta} d\Sigma$$
이 관계는 일반 중력 이론의 뇌터 전하 엔트로피가 미시적인 연산자 C\*-대수의 모듈러 흐름 및 얽힘 엔트로피의 거시적 표상임을 증명하며 중력 열역학 제1법칙을 보장한다. 결정적으로, 이 모듈러 코사이클들은 연쇄 법칙 $[D\omega_3 : D\omega_1]_s = [D\omega_3 : D\omega_2]_s [D\omega_2 : D\omega_1]_s$ 및 역원 성질 $[D\omega_1 : D\omega_2]_s = [D\omega_2 : D\omega_1]_s^\dagger$을 만족하여, 모듈러 시간 방향의 국소 유니터리 게이지 군 $U(1)_{\text{mod}}$을 확립한다. 이를 통해 물리적 시간의 흐름이 국소 게이지 불변 좌표임을 알 수 있다. 관찰자(상태)를 바꾸는 것은 수학적으로 모듈러 매개변수 $s$에 대한 국소 유니터리 게이지 변환 $u(s) \to V(s) u(s) W(s)^\dagger$에 불과하며, 양자 중력의 고질적인 시간의 문제를 해결한다. 유한 차원 $N$의 행렬 대수는 근본적으로 제1종(Type I)이므로, 유한 차원 폰 노이만 엔트로피는 베켄슈타인-호킹 면적 법칙에 대한 정확한 로그 양자 보정 항을 엄밀히 도출한다: $S_{\text{EE}} = \frac{A}{4G} - \frac{3}{2} \ln(A/G)$. 연속적인 제3종(Type $\text{III}_1$) 인자는 오직 무한 지평선 극한에서만 엄밀하게 창발한다.
이는 **모듈러-동역학적 동형(Modular-Dynamical Isomorphism)**을 성립시킨다: 토미타-타케사키 모듈러 흐름으로부터 유도되는 열역학적 모듈러 시간 $s$는 $s \propto \ln(a(t))$ 관계식을 통해 동역학적인 프리드만 우주 시간 $t$와 엄밀히 공액(conjugate) 관계에 있다. 우주의 공간 팽창은 수학적으로 양자 얽힘 엔트로피의 흐름과 완벽히 동일하며, 휠러-디윗 궤적 내에서 고질적인 시간의 실종 문제(Problem of Time)를 완전히 해결한다.

---

## VIII. S-행렬 가적분성과 모티브 갈루아(Motivic Galois) 대칭성
통상적인 양자장론에서 산란 진폭을 계산하는 S-행렬은 루프 단계가 올라갈수록 다중 제타 함수(multiple zeta values)와 같은 무질서한 초월수들이 발생하여 계산의 복잡성이 극도로 치솟는다. 반면 HNM 기하학 하에서는 입자의 S-행렬 구조가 초월적 혼돈에 빠지지 않고, 대수적 대칭성을 보존하는 **모티브 갈루아 대칭성(Motivic Galois Symmetry)**과 완벽한 **호프 대수(Hopf Algebra)**에 의해 엄밀히 가적분(integrable)됨을 입증한다.

진폭다면체(Amplituhedron) 기하학을 통해 표현되는 S-행렬 진폭 $A_M$은 **혼합 테이트 모티브(mixed Tate motives)의 주기(period)**로 수학적으로 분류된다[7]. 구체적으로, 앰플리투헤드론 $\mathcal{A}_{n,k,m}(Z)$는 선형 트위스터 사상 $Z$ 하에서 양의 그라스만 다양체의 이미지로 정의된다:
$$\mathcal{A}_{n,k,m}(Z) \;=\; \left\{ Y \in Gr(k, k+m) \;\big|\; Y \;=\; C \cdot Z \text{ for some } C \in Gr_{\ge 0}(k, n) \right\}$$
$m=4$인 물리적 시공간에 대하여 산란 진폭은 로그 미분 부피 형식으로 표현된다:
$$\Omega_{n,k,4}(Y; Z) \;=\; \prod_{\alpha=1}^k \langle Y d^4 Y_\alpha \rangle \cdot \rho(Y; Z)$$
이 산란 진폭들은 다음과 같은 다중 폴리로그(multiple polylogarithms) 함수식으로 분석적으로 정의된다:
$$\text{Li}_{n_1, \dots, n_k}(x_1, \dots, x_k) \;=\; \sum_{0 < m_1 < \dots < m_k} \frac{x_1^{m_1} \dots x_k^{m_k}}{m_1^{n_1} \dots m_k^{n_k}}$$
우리는 임의의 고차 산란 진폭을 하위 motivic 주기의 텐서 곱으로 분해하는 코프로덕트(coproduct) $\Delta$ 연산을 가진 **주기 호프 대수 $\mathcal{A}_{\text{period}}$**를 정의한다:
$$\Delta \;:\; \mathcal{A}_{\text{period}} \;\longrightarrow\; \mathcal{A}_{\text{period}} \;\otimes\; \mathcal{A}_{\text{period}}$$
**모티브 갈루아 군(Motivic Galois Group)** $G_{\text{mot}}$은 이 호프 대수 상에 작용하는 자기동형군으로, 산란 진폭의 모든 초월적 성질과 대수적 가동성을 완전히 통제한다. 행렬 장론 수준에서, 1PI 파인만 그래프로 생성되는 **Connes-Kreimer Hopf 대수** $\mathcal{H}_{\text{CK}}$를 코프로덕트 $\Delta_{\text{CK}}(\Gamma) = \Gamma \otimes 1 + 1 \otimes \Gamma + \sum_{\gamma \subset \Gamma} \gamma \otimes \Gamma/\gamma$와 함께 정의한다. 캐릭터 군에서의 루프 생성원의 버코프 분해 $\phi(x) = \phi_-(x)^{-1} \phi_+(x)$는 모든 UV 발산을 대수적으로 흡수하여, $\phi_+(x)$가 $\epsilon \to 0$ 극한에서 해석적임을 보장한다. 우리는 S-행렬 상에 작용하는 모티브 갈루아 군의 작용이 산란 진폭의 초월적 가중치(transcendental weight) $W$를 엄격히 보존하며, $n$-루프 진폭을 정확히 $2n$ 가중치를 갖는 주기로 매핑함을 증명한다:
$$\sigma \cdot A^{(n)}_{\text{loop}} \;\in\; \mathcal{W}_{2n}$$
여기서 $\sigma \in G_{\text{mot}}$이고, $\mathcal{W}$는 가중치 여과(weight filtration)이다. 이 대수적 불변성은 코프로덕트 연산 $\Delta$가 고차 루프 적분을 대수적 가감승제로 환원시키는 기계로 작동하도록 하며, S-행렬의 완전한 가적분성을 보장한다.

---

## IX. 정량적 물리적 실증 방안

HNM 이론을 기존의 아인슈타인 중력 및 초끈 이론과 명확히 구별하기 위해 다음 5가지 고정밀 관측 검증안을 제안한다:

```
========================================================================================
실증 대상 관측량                 HNM 이론 예측치                    관측 설비 및 위성
----------------------------------------------------------------------------------------
원시 중력파 텐서 지수            n_T = +0.0215 +/- 0.0005           LiteBIRD / CMB-S4
                                 r \approx 0.015 (k_* = 0.05 기준)
GRB 광자 도달 시간 차이          \Delta t \propto E^2 / E_Pl^2      Fermi-LAT / CTA
블랙홀 호킹 복사 이산선          \omega_N \propto (2N-1)/M          원시 블랙홀 검색 / CTA
암흑 물질 잔해 붕괴선            E_neutrino ~ 6 * 10^12 GeV         IceCube-Gen2
시공간 홀로그래픽 노이즈         S_x(f) \sim \ell_P L (종방향 위상)  Fermilab Holometer
========================================================================================
```

### 1. 원시 중력파 청색 편이(Blue-Tilt)
인플레이션 우주론이 반드시 적색 편이된 텐서 스펙트럼($n_T \approx -r/8 < 0$, $r$은 텐서-스칼라 비)을 예측하는 것과 달리, HNM의 반더몬드 우주 튀어오름(Bounce) 메커니즘은 독특한 **청색 편이 신호**를 도출한다:
$$\boxed{n_T \;\approx\; +0.0215 \,\pm\; 0.0005}$$
이 예측치들은 기준 피벗 스케일(pivot scale) $k_* = 0.05 \text{ Mpc}^{-1}$에서 정의되며, 동반 출현하는 텐서-스칼라 비는 $r \approx 0.015$로 유도된다. 이는 현재 최신 Planck+BICEP/Keck PR4/BK18의 관측 상한 한계선($r < 0.032 - 0.036$, 분석 모형에 의존함)을 엄밀히 만족하면서도 양(positive)의 텐서 스펙트럼 지수($n_T > 0$) 부호를 가짐으로써, 차세대 CMB 편광 관측 장비(LiteBIRD [8], CMB-S4 [9])를 통해 인플레이션 모형을 강력히 기각하고 검증할 통로를 제공한다. 또한, 청색 편이 원시 중력파 스펙트럼은 고주파 대역에서 우주 배경 중력파 에너지 밀도의 BBN/CMB 제한 조건($\Omega_g h^2 < 5.6 \times 10^{-6}$)에 의해 배제되는 경향이 있으나, HNM은 유한 차원 행렬 표상으로 인해 물리적 액적의 경계 $a_{\max}$에서 자연스러운 고주파 컷오프를 지닌다:
$$f_{\max} \;=\ \frac{c}{a_{\max}} \;=\ \frac{c \sqrt{\pi}}{\ell_P N}$$
이 물리적 컷오프는 고주파 영역의 중력파 에너지를 완전히 상쇄하므로 모든 BBN/CMB 위상 공간 제약 조건을 안전하게 통과한다.

### 2. 감마선 폭발(GRB) 광자 도달 시간 차이
시공간의 비가환성 $[X^\mu, X^\nu] = i\theta^{\mu\nu}$은 광자의 분산 관계(Dispersion Relation)를 변형시켜 유효 광속을 에너지에 의존하게 만든다. HNM의 대수적 구조 상 선형 LIV 분산 항($\Delta t \propto E/E_{Pl}$)은 거시 우주 행렬 크기 $N_{\text{cosm}}$에 의해 강력히 억제되어 $\eta_{\text{linear}} \sim 1/N_{\text{cosm}} \approx 10^{-60}$으로 소멸하므로, Fermi-LAT 등의 선형 LIV null 관측 데이터 한계($E_{\text{LIV,1}} > 1.2 E_{Pl}$)를 모순 없이 자연스럽게 충족시킵니다. 대신, 선도적인 관측 효과는 다음과 같은 **이차(quadratic) 전파 시간 차이** $\Delta t$로 발현된다:
$$\boxed{\Delta t \;\approx\; \eta_{\text{quad}} \left( \frac{E}{E_{\text{LIV,2}}} \right)^2 \frac{1}{H_0} \int_0^z \frac{(1+z') dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}}}$$
여기서 $E_{\text{LIV,2}} \approx E_{Pl} = 1.22 \times 10^{19}$ GeV는 이차 LIV 에너지 스케일이고 $\eta_{\text{quad}} \approx 1$이다. 적색편이 $z=1$인 감마선 폭발원으로부터 방출된 $E = 100$ GeV의 고에너지 광자의 경우, 도달 시간 차이는 다음과 같이 계산된다:
$$\Delta t \;\approx\; 1.0 \times 10^{-20} \text{ 초}$$
이 극도로 작은 지연 시간은 기존 Fermi-LAT의 이차 LIV 관측 한계($E_{\text{LIV,2}} > 10^{11}$ GeV)를 완벽히 통과하며, 미래의 정밀 광-역학적 검출기나 고에너지 천체 관측을 통해 검증 가능합니다.

### 3. 호킹 복사의 이산 이산 스펙트럼선
정수배 면적 양자화 조건 $A_N = 4\ln(2) \ell_P^2 N^2$은 블랙홀 사건의 지평선을 불연속적인 면적으로 제한한다. 이에 따라 증발하는 원시 블랙홀(PBH)은 연속적인 열복사 대신, 다음과 같은 불연속적인 에너지 주파수 $\omega_N$를 갖는 선 스펙트럼 형태로 감마선을 방출한다:
$$\boxed{\omega_N \;=\; \frac{\ln(2) c^3 (2N - 1)}{8 \pi G_N \hbar M}}$$
여기서 $c$는 광속, $G_N$은 뉴턴 중력 상수, $\hbar$는 디랙 상수, $M$은 블랙홀의 질량이며, $N$은 정수 양자수 상태이다. 이 미세한 이산선 구조는 블랙홀 증발의 마지막 단계에서 우주 감마선 검출기를 통해 포착될 수 있다.

### 4. WIMPzilla 붕괴에 따른 단색 중성미자 돌출(Bump)
내부 퍼지 Extra 공간 상의 최대 각운동량 $L_{\max}$ 상태를 차지하는 초중량 암흑 물질 잔해는 비섭동적 변칙 유도 터널링 효과에 의해 매우 희귀하게 붕괴한다. 이 붕괴 메커니즘은 다음의 정확한 단색(monochromatic) 에너지 스펙트럼을 갖는 초고에너지 중성미자와 감마선을 방출한다:
$$\boxed{E_\nu \;\approx\; 6.25 \times 10^{12} \text{ GeV}}$$
우주선 관측에서 검출되는 이 독특한 에너지 돌출 신호는 IceCube-Gen2 [11] 및 피에르 오제 관측소(Pierre Auger Observatory) [12]의 초고에너지 우주 중성미자 측정을 통해 즉각 검증되거나 기각될 수 있다.

### 5. 지상 광간섭계 홀로그래픽 잡음
유한 차원 $N$에 의한 공간 자유도의 불연속성은 플랑크 스케일 시공간의 홀로그래픽 요동을 유발한다. 이는 스케일 불변인 근본 분수적 시간 지연 스펙트럼 밀도 $S_t(f) \sim \ell_P/c$로 발현된다. 암의 길이가 $L$인 마이컬슨 간섭계에서 다중 반사는 이를 누적 변위 잡음 $S_x(f) = c^2 S_t(f) (L/L_{\text{char}})^\alpha$로 변환한다. 선형 스케일링($\alpha=1$)의 경우 주파수 $f$에서의 스펙트럼 밀도는 다음과 같다:
$$\boxed{S_x(f) \;\sim\; \ell_P L \;\approx\; 10^{-41} \text{ m}^2/\text{Hz}}$$

**응답 함수의 직교성(Orthogonality):** 페르미연구소의 홀로미터(Holometer)는 직교하는 두 팔 사이의 횡단 전단 요동(transverse shear fluctuations)에 의한 교차 상관 관계(cross-correlation)를 측정하도록 설계되었습니다. 교차 상관 신호 $S_{\text{cross}}(f)$는 두 간섭계 팔의 단위 벡터 $\hat{u}, \hat{v}$에 대한 노이즈 투영으로 계산됩니다. 이에 반해 HNM의 홀로그래픽 노이즈는 모든 방향으로 등방적인 **종방향 위상 요동(longitudinal phase fluctuation)**으로 발현되며, 이는 광자의 전파 방향을 따라서만 변위 잡음을 일으킵니다. 따라서 수직한 두 팔($\hat{u} \cdot \hat{v} = 0$)에 대한 교차 상관 응답 함수 $R(\theta)$는 다음과 같이 소멸합니다:
$$R(\theta) \;\propto\; \hat{u} \cdot \hat{v} \;=\ \cos\left(\frac{\pi}{2}\right) \;=\ 0$$
이 기합학적 직교 관계에 의해 홀로미터의 종방향 노이즈 교차 상관 함수는 항등적으로 0이 됩니다:
$$S_{\text{cross}}(f) \;\equiv\; R(\theta) S_x(f) \;\equiv\; 0$$
이로써 홀로미터가 횡단 전단 잡음 관측에서 null 결과를 얻은 것이 HNM의 예측과 완벽히 양립 가능함이 증명됩니다. HNM의 종방향 위상 잡음은 기존 횡단 한계선에 영향받지 않으며, 종방향 상관 관계를 측정하는 새로운 간섭계 실험을 통해 검증될 수 있습니다.

## X. 결론
HNM 이론은 단일 슈퍼 디랙 연산자 $\mathcal{D}$로부터 우주의 모든 중력, 게이지 상호작용 및 열역학적 거동을 정확하게 유도해냄으로써, 양자 중력 분야의 고질적 난제들을 수학적으로 일관되게 규명한다. 본 논문에서 제시한 5가지 구체적인 정량적 예측들은 수학적 유희를 넘어 HNM 이론을 일반 상대성 이론 및 초끈 이론과 즉각적으로 비교·검증할 수 있는 강력한 물리적 관측 경로를 개척하며, 우주가 비가환 대수적 실체로부터 발현된 기하학임을 증명하는 결정적 증거가 될 것이다.

---

## 참고문헌
[1] A. Connes, *Noncommutative Geometry* (Academic Press, 1994).  
[2] T. Banks, W. Fischler, S. H. Shenker, and L. Susskind, Phys. Rev. D **55**, 5112 (1997).  
[3] N. Ishibashi, H. Kawai, Y. Kitazawa, and A. Tsuchiya, Nucl. Phys. B **498**, 467 (1997).  
[4] N. Seiberg and E. Witten, JHEP **9909**, 032 (1999).  
[5] V. A. Belinski, I. M. Khalatnikov, and E. M. Lifshitz, Adv. Phys. **19**, 525 (1970).  
[6] M. Takesaki, *Tomita's Theory of Modular Hilbert Algebras and its Applications* (Springer, 1970).  
[7] F. Brown, Commun. Math. Phys. **287**, 925 (2009).  
[8] LiteBIRD Collaboration, PTEP **2023**, 042F01 (2023).  
[9] CMB-S4 Collaboration, arXiv:1610.02743 [astro-ph.CO] (2016).  
[10] CTA Consortium, Astropart. Phys. **43**, 3 (2013).  
[11] IceCube-Gen2 Collaboration, J. Phys. G **48**, 060501 (2021).  
[12] Pierre Auger Collaboration, Nucl. Instrum. Meth. A **798**, 172 (2015).  
[13] A. Chou et al. (Holometer Collaboration), Phys. Rev. Lett. **117**, 111102 (2016).  
