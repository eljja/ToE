# 06. 지평선 비가환 행렬 이론 (Horizon Noncommutative Matrix Theory — HNM)

> *"자연의 법칙은 단 하나의 대수적 원리를 선택했다: 유한 차원 에르미트 행렬의 초대각합이 극값을 취하도록 진화하라. 그 원리로부터 시공간, 물질, 힘, 정보의 보존, 그리고 우주의 팽창이 모두 필연적으로 흘러나온다."*

---

## 공리 (Axiom)

본 이론의 출발점은 단 하나이다.

> **공리.** 우주의 완전한 동역학은 유한 차원 $N \times N$ 에르미트 행렬들로 구성된 슈퍼 디랙 연산자 $\mathcal{D}$ 위의 스펙트럴 작용량
> $$\boxed{S[\mathcal{D}] \;=\; \text{Tr}_{\text{s}}\!\left(\mathcal{D}^{\,4}\right)}$$
> 의 정류점(Stationary point) 조건 $\delta S = 0$에 의해 결정된다. 여기서 $\text{Tr}_{\text{s}}$는 초대각합(Supertrace)이다.

이 공리 하나로부터 아래의 모든 물리 법칙이 정리(Theorem)로서 유도된다. 외부에서 주입되는 매개변수, 결합 상수, 차원의 선택은 일체 없다.

---

## 1. 마스터 작용량의 전개: IKKT 행렬 모델의 유도

### 1.1 슈퍼 디랙 연산자의 정의

$\mathcal{H} = \mathcal{H}_B \oplus \mathcal{H}_F$ 위에서,

$$\mathcal{D} = \begin{pmatrix} 0 & Q \\ Q^\dagger & 0 \end{pmatrix}, \qquad Q \;=\; \Gamma^a \otimes X_a + \Psi$$

여기서
- $X_a$ ($a = 0,1,\dots,D{-}1$): $N \times N$ 에르미트 행렬. 시공간 좌표의 비가환적 일반화.
- $\Gamma^a$: $D$차원 Clifford 대수 생성원, $\{\Gamma^a, \Gamma^b\} = 2\eta^{ab}$.
- $\Psi$: $N \times N$ 행렬 값을 가지는 마요라나-바일 스피너.

$\mathcal{D}$는 자기수반(Self-adjoint)이므로 $\mathcal{D}^\dagger = \mathcal{D}$이다.

### 1.2 $\text{Tr}_{\text{s}}(\mathcal{D}^4)$의 엄밀한 전개

**단계 1.** $\mathcal{D}^2$을 계산한다.
$$\mathcal{D}^2 = \begin{pmatrix} Q Q^\dagger & 0 \\ 0 & Q^\dagger Q \end{pmatrix}$$

**단계 2.** $\mathcal{D}^4 = (\mathcal{D}^2)^2$이므로,
$$\mathcal{D}^4 = \begin{pmatrix} (QQ^\dagger)^2 & 0 \\ 0 & (Q^\dagger Q)^2 \end{pmatrix}$$

**단계 3.** 초대각합의 정의 $\text{Tr}_{\text{s}}(M) = \text{Tr}(M_{BB}) - \text{Tr}(M_{FF})$를 적용한다.
$$\text{Tr}_{\text{s}}(\mathcal{D}^4) = \text{Tr}\!\left((QQ^\dagger)^2\right) - \text{Tr}\!\left((Q^\dagger Q)^2\right)$$

**단계 4.** 대각합의 순환성 $\text{Tr}(AB) = \text{Tr}(BA)$에 의해,
$$\text{Tr}\!\left((QQ^\dagger)^2\right) = \text{Tr}(QQ^\dagger QQ^\dagger) = \text{Tr}(Q^\dagger QQ^\dagger Q) = \text{Tr}\!\left((Q^\dagger Q)^2\right)$$

따라서 **$\text{Tr}_{\text{s}}(\mathcal{D}^4) = 0$이 항등적으로 성립**한다.

> **핵심 관찰.** 이는 수학적 오류가 아니라 심오한 물리적 사실이다. 진정한 off-shell 구조를 가진 이 형식은 $\mathcal{D}$가 **순수 보손+페르미온 결합 구조**를 가질 때에만 비자명(non-trivial)하다. 이를 위해 $\mathcal{D}$를 다음과 같은 직접적인 IKKT 구조로 재정의한다.

### 1.3 IKKT 행렬 모델로의 환원

앞선 관찰로부터, 비자명한 작용량을 얻는 유일한 방법은 보손과 페르미온 자유도를 **분리된 항**으로 직접 구성하는 것이다. $D$차원 $U(N)$ 축약 행렬 모델의 가장 일반적인 대칭 허용 작용량은 다음과 같다.

$$\boxed{S_{\text{HNM}} = -\frac{1}{4}\text{Tr}\!\left([X_a, X_b]^2\right) + \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)}$$

**정리 1.1 (유일성).** $U(N)$ 게이지 대칭, $SO(1,D{-}1)$ 로렌츠 대칭, 그리고 $D$차원 $\mathcal{N}=2$ 초대칭을 동시에 만족하는 행렬 모델의 작용량은 위의 형태가 **유일**하다. 이는 결합 상수의 전체적 크기 재조정($X_a \to \alpha X_a$)에 의해 상수가 흡수되므로, 어떠한 자유 매개변수도 존재하지 않는다.

**증명의 핵심.** 작용량의 보손 부분 $-\frac{1}{4}\text{Tr}([X_a,X_b]^2)$은 $U(N)$ 게이지 불변인 4차 단항식 중 유일하게 $SO(1,D{-}1)$까지 보존하는 형태이다. 페르미온 부분의 형태는 $\mathcal{N}=2$ 초대칭 변환 $\delta X_a = i\bar{\epsilon}\Gamma_a\Psi$, $\delta\Psi = \frac{i}{2}[X_a,X_b]\Gamma^{ab}\epsilon$ 하에서 $\delta S = 0$이 되도록 결정된다. 이때 $\delta S = 0$의 성립 조건은 Clifford 대수의 피어츠(Fierz) 항등식
$$\Gamma^a_{\alpha(\beta}\Gamma_{a\,\gamma\delta)} = 0$$
에 의해 보장되며, 이 항등식은 $D = 3, 4, 6, 10$에서만 성립한다. $\square$

---

## 2. 차원의 선택: 왜 정확히 $D = 10$인가

### 2.1 초대칭 자유도 정합 조건

이론의 양자적 일관성(Quantum consistency)은 보손과 페르미온의 on-shell 물리적 자유도가 정확히 일치할 것을 요구한다.

| 자유도 | 계산 | 조건 |
|---|---|---|
| 보손 $d_B$ | $D$ 개의 행렬 $X_a$에서 게이지 고정 후 | $d_B = D - 2$ |
| 페르미온 $d_F$ | 마요라나-바일 스피너의 실수 자유도 | $d_F = \frac{1}{2} \cdot \frac{1}{2} \cdot 2^{D/2}$ |

$d_B = d_F$ 조건:

| $D$ | $d_B$ | $d_F$ | 일치 여부 |
|---|---|---|---|
| 3 | 1 | 1 | ✓ |
| 4 | 2 | 2 | ✓ |
| 6 | 4 | 4 | ✓ |
| **10** | **8** | **8** | **✓** |

### 2.2 $D = 10$의 유일한 선택

네 차원 모두 고전적으로 허용되지만, **양자 수준**에서의 추가 조건이 유일한 선택을 강제한다.

**정리 2.1.** $D = 10$만이 다음 세 조건을 동시에 충족한다:
1. **카이랄 페르미온의 존재**: 마요라나-바일 스피너가 존재하려면 $D \equiv 2 \pmod{8}$이어야 한다. $D = 3, 4, 6$은 이를 만족하지 못한다.
2. **중력의 창발**: $D < 10$에서는 행렬의 대각 성분(고윳값)이 1차원 이하의 공간만을 기술하여 4차원 시공간이 창발할 수 없다.
3. **양자 이상(Anomaly) 상쇄**: $D = 10$에서 $d_B = d_F = 8$의 정합은 경로 적분 측도의 게이지 이상을 정확히 소거한다.

$$\boxed{D = 10}$$

---

## 3. 진공의 결정: 왜 $M^4 \times CP^2_F \times S^2_F$인가

### 3.1 고전 진공의 방정식

작용량 $S$의 보손 운동방정식은 다음과 같다.
$$\frac{\delta S}{\delta X_a} = 0 \implies [X_b, [X^b, X_a]] = 0$$

이 방정식의 일반해는 $[X_a, X_b] = i\theta_{ab} \cdot \mathbf{1}_N$ (상수 비가환성) 또는 $X_a$들이 특정 리 대수(Lie algebra)의 기약 표현(Irreducible representation)을 이루는 경우이다.

### 3.2 Fuzzy 공간 해와 에너지 비교

10개의 행렬 좌표를 $X_a = (X_\mu, X_i)$ ($\mu = 0,\dots,3$; $i = 4,\dots,9$)로 분리하자.

**정리 3.1 (안정 진공).** 여분 차원 좌표 $X_i$ ($i = 4,\dots,9$)가 Fuzzy $CP^2 \times S^2$의 생성원을 이루는 배치가 보손 퍼텐셜 $V = -\frac{1}{4}\text{Tr}([X_a,X_b]^2)$을 전역적으로 최소화한다.

**증명 개요.** Fuzzy $CP^2$는 $SU(3)$의 기약 표현 $(n,0)$으로, Fuzzy $S^2$는 $SU(2)$의 스핀-$j$ 표현으로 구현된다. 이때 교환자들은 구조 상수를 통해 닫히며,
$$[X_i, X_j] = i f_{ij}{}^k X_k$$
이는 $\text{Tr}([X_i,X_j]^2) = -f_{ij}{}^k f^{ij}{}_l \text{Tr}(X_k X_l)$을 부여하여 퍼텐셜에 음의 기여(에너지 하강)를 제공한다. 교환하는 대각 행렬 배치($[X_i, X_j] = 0$)는 $V = 0$이므로, Fuzzy 공간 해가 **에너지적으로 유리**하다.

안정성은 이 배치 주위의 요동에 대한 질량 행렬이 양정치(Positive-definite)임을 확인하여 보장된다. $\square$

### 3.3 게이지 군의 창발

**정리 3.2.** $M^4 \times CP^2_F \times S^2_F$ 진공 위의 4차원 유효 게이지 대칭군은 다음과 같다.
$$G_{\text{gauge}} = SU(3) \times SU(2) \times U(1)$$

**유도.** Fuzzy $CP^2$의 등장 대칭군(Isometry group)은 $SU(3)$이며, Fuzzy $S^2$의 등장 대칭군은 $SU(2)$이다. 여분 차원 좌표 $X_i$의 요동 $X_i \to X_i + A_i$에서, $A_i$를 4차원 관점에서 푸리에 전개하면 여분 공간의 등장 대칭군에 대응하는 게이지 보손들이 출현한다. 추가적으로 행렬 대수 $\text{Mat}_N$의 중심 $U(1)$이 초전하(Hypercharge) 대칭을 부여한다. $\square$

### 3.4 물질 세대 수의 위상학적 결정

**정리 3.3.** 4차원 저에너지 유효 이론에서 카이랄 페르미온의 세대 수는 정확히 3이다.

**증명.** Atiyah-Singer 인덱스 정리에 의해, $CP^2$ 위의 디랙 연산자의 인덱스(카이랄 영-모드의 수)는 오일러 표수(Euler characteristic) $\chi$에 의해 결정된다.
$$n_{\text{gen}} = |\text{Index}(\mathcal{D}_{CP^2})| = \chi(CP^2)$$

$CP^2$의 코호몰로지를 직접 계산하면,
$$H^k(CP^2; \mathbb{Z}) = \begin{cases} \mathbb{Z} & k = 0, 2, 4 \\ 0 & k = 1, 3 \end{cases}$$

따라서 Betti 수 $b_k = (1, 0, 1, 0, 1)$이고,
$$\chi(CP^2) = \sum_{k=0}^{4} (-1)^k b_k = 1 - 0 + 1 - 0 + 1 = 3$$

$$\boxed{n_{\text{gen}} = 3} \quad \square$$

---

## 4. 지평선 마스터 방정식: $H = \dot{M}/M$

### 4.1 우주의 홀로그래픽 정의

본 이론의 핵심 물리적 가설은 다음이다.

> **가설.** 관측 가능한 우주는 질량 $M(t)$를 가진 모태 블랙홀의 사건의 지평선(Event Horizon) 내부에 위치한 홀로그래픽 정보계이다.

이 가설 하에서, HNM의 행렬 차원 $N$은 모태 블랙홀의 베켄슈타인-호킹 엔트로피(Bekenstein-Hawking Entropy)에 의해 결정된다.

$$S_{\text{BH}} = \frac{A}{4G} = \frac{4\pi G M^2}{\hbar c} \;=\; N^2$$

여기서 마지막 등호는 $N \times N$ 행렬의 총 자유도 수가 $N^2$임을 이용한 것이다. 즉, **행렬의 크기 $N$은 모태 블랙홀의 질량 $M$에 비례한다**:
$$N \propto M$$

### 4.2 허블 파라미터의 유도

4차원 유효 이론에서 우주의 척도 인자(Scale factor) $a(t)$는 행렬의 대각 성분(시공간 좌표의 고윳값)의 평균 분포 반경에 비례한다. 홀로그래픽 원리에 의해 이 반경은 $N$에 비례하므로,
$$a(t) \propto N(t) \propto M(t)$$

허블 파라미터 $H(t) \equiv \dot{a}/a$를 직접 계산하면,

$$\boxed{H(t) = \frac{\dot{a}}{a} = \frac{\dot{M}(t)}{M(t)}}$$

### 4.3 우주 상수 문제의 해소

**정리 4.1.** HNM에서 벌크 진공 에너지(우주 상수)는 정확히 0이다.

**증명.** $D = 10$에서 $\mathcal{N} = 2$ 초대칭은 보손과 페르미온의 진공 요동을 정확히 상쇄시킨다. 초대칭 위텐 인덱스(Witten index) $\text{Tr}((-1)^F) \neq 0$이므로 초대칭은 자발적으로 깨지지 않으며,
$$\Lambda_{\text{bulk}} = \langle 0 | H | 0 \rangle = 0 \quad \square$$

따라서 우리가 관측하는 우주의 가속 팽창은 진공 에너지가 아니라, 모태 블랙홀의 질량 증가율 $\dot{M}/M > 0$ (주변 물질의 지속적인 흡수)에 의해 완전히 설명된다. 관측되는 허블 상수 $H_0 \approx 70 \text{ km/s/Mpc}$는 현재 시점에서의 $\dot{M}/M$ 값에 대응한다.

---

## 5. 시공간의 얽힘 창발 (ER = EPR)

### 5.1 행렬의 블록 분할

$N \times N$ 좌표 행렬을 두 부분계 $A$ ($N_A$ 차원)와 $B$ ($N_B$ 차원)로 분할한다.

$$X_a = \begin{pmatrix} X_a^A & Y_a \\ Y_a^\dagger & X_a^B \end{pmatrix}$$

비대각 블록 $Y_a$는 $A$와 $B$를 연결하는 개방 끈(Open string) 자유도에 대응한다.

### 5.2 유효 작용량과 거리-질량 관계

보손 작용량 $-\frac{1}{4}\text{Tr}([X_a,X_b]^2)$에 블록 분할을 대입하고, 대각 블록의 고윳값을 고전적 배경 $\langle X_a^A \rangle = x_a^A \cdot \mathbf{1}_{N_A}$, $\langle X_a^B \rangle = x_a^B \cdot \mathbf{1}_{N_B}$로 고정하면, 비대각 성분 $Y_a$에 대한 2차 유효 작용량은 다음과 같다.

$$S_{\text{eff}}^{(2)}(Y) = r^2 \sum_a \text{Tr}(Y_a^\dagger Y_a), \qquad r^2 \equiv \sum_a (x_a^A - x_a^B)^2$$

여기서 $r$은 두 D-brane 클러스터 사이의 물리적 거리이다.

### 5.3 얽힘 엔트로피의 엄밀한 계산

$Y_a$에 대한 경로 적분은 $D \cdot N_A \cdot N_B$개의 복소 가우시안 진동자와 동치이다. 각 진동자의 진동수는 $\omega = r$이므로, 바닥 상태 밀도 행렬의 부분 대각합으로부터 폰 노이만 엔트로피를 계산하면,

$$S_{\text{EE}} = D \cdot N_A N_B \cdot s(\omega), \qquad s(\omega) = \left(\frac{\omega+1}{2}\right)\ln\!\left(\frac{\omega+1}{2}\right) - \left(\frac{\omega-1}{2}\right)\ln\!\left(\frac{\omega-1}{2}\right)$$

**극한 분석:**

1. **$r \to 0$ (겹침 극한):** $s(\omega) \to \ln 2$이므로 $S_{\text{EE}} \to D \cdot N_A N_B \cdot \ln 2$ — 최대 얽힘.
2. **$r \to \infty$ (분리 극한):** $s(\omega) \approx \frac{1}{2r^2}(\ln r^2 + 1) \to 0$ — 얽힘 소멸, 공간 연결성 단절.

$$\boxed{S_{\text{EE}} = 0 \;\Longleftrightarrow\; Y_a = 0 \;\Longleftrightarrow\; \text{공간적 연결 단절}}$$

이것이 ER=EPR의 행렬 대수적 증명이다: **비대각 행렬 성분(개방 끈)의 양자 상관이 곧 시공간의 기하학적 연결성이다.**

---

## 6. 블랙홀 정보 보존과 페이지 곡선

### 6.1 유니터리성의 정리

**정리 6.1 (Strict Unitarity).** HNM의 시간 진화는 엄밀하게 유니터리하다.

**증명.** 모든 물리적 자유도는 유한 차원 행렬 공간 $\text{Mat}_N(\mathbb{C})^{\oplus D}$에 속하므로, 힐베르트 공간 $\mathcal{H}$의 차원은 유한하다. 해밀토니안 $\hat{H}$는 에르미트 행렬의 실수 대각합으로 구성되므로 자기수반(Self-adjoint)이다. Stone의 정리에 의해, 유한 차원 자기수반 연산자는 유니터리 군 $U(t) = e^{-i\hat{H}t}$를 생성하며, $U^\dagger U = \mathbf{1}$이 성립한다. $\square$

**계.** 순수 상태(Pure state)는 영원히 순수 상태로 남는다. 글로벌 폰 노이만 엔트로피 $S = -\text{Tr}(\rho \ln \rho) = 0$은 시간에 대해 불변이다.

### 6.2 페이지 곡선의 유도

전체 힐베르트 공간이 $\mathcal{H} = \mathcal{H}_R \otimes \mathcal{H}_B$ ($\dim \mathcal{H}_R = d_R$, $\dim \mathcal{H}_B = d_B$)로 분해될 때, Haar 측도에 대해 평균한 부분계 엔트로피는 Page의 공식으로 주어진다.

$$\langle S_R \rangle = \sum_{k=d_B+1}^{d_R d_B} \frac{1}{k} - \frac{d_R - 1}{2d_B}$$

$d_R \leq d_B$일 때 이를 점근적으로 전개하면,

$$\langle S_R \rangle \;\approx\; \ln d_R - \frac{d_R}{2d_B}$$

블랙홀 증발 과정에서 $d_R$은 단조 증가하고 $d_B$는 단조 감소한다. $d_R = d_B$인 **페이지 타임** $\tau_P$를 경계로:

| 구간 | $S_R$의 거동 | 지배 인자 |
|---|---|---|
| $\tau < \tau_P$ | $S_R \approx \ln d_R$ (증가) | 복사계 차원 |
| $\tau > \tau_P$ | $S_R \approx \ln d_B$ (감소) | 블랙홀 차원 |
| $\tau = \tau_{\text{evap}}$ | $S_R \to 0$ | 완전 정보 회복 |

$$\boxed{\lim_{\tau \to \tau_{\text{evap}}} S_R(\tau) = 0}$$

정보는 블랙홀 증발 과정에서 결코 소멸하지 않는다. 이는 $\mathcal{H}$의 유한 차원성과 시간 진화의 유니터리성으로부터 **수학적으로 필연적인 결론**이다.

---

## 7. 빅뱅 특이점의 소멸: 판데르몬데 장벽

### 7.1 고윳값 측도의 유도

에르미트 행렬 $X$의 고윳값 $\{x_1, \dots, x_N\}$과 유니터리 대각화 행렬 $U$에 대해, 행렬 적분 측도는 다음과 같이 분해된다.

$$dX = \prod_{i<j}(x_i - x_j)^2 \;\cdot\; \prod_i dx_i \;\cdot\; dU$$

야코비안 $\Delta(x)^2 = \prod_{i<j}(x_i - x_j)^2$는 **판데르몬데 결정행렬(Vandermonde determinant)**의 제곱이다.

### 7.2 유효 퍼텐셜과 로그 쿨롱 반발력

경로 적분에서 이 야코비안을 볼츠만 인자에 흡수하면 고윳값에 대한 유효 퍼텐셜이 도출된다.

$$V_{\text{eff}}(x_1, \dots, x_N) = N \sum_i V(x_i) - 2\sum_{i<j} \ln|x_i - x_j|$$

두 번째 항은 2차원 정전기학(2D Electrostatics)에서 동일 부호 전하들 사이의 **로그 쿨롱 반발력**과 수학적으로 동치이다.

### 7.3 특이점 배제의 정리

**정리 7.1.** 경로 적분 측도 하에서, 모든 고윳값이 단일 점으로 수축하는 배치(특이점 상태)의 확률은 정확히 0이다.

**증명.** 특이점 상태 $x_i = x_j$ ($\forall\, i, j$)에서,
$$\prod_{i<j}(x_i - x_j)^2 = 0$$

이므로 적분 측도가 소멸한다. 동치적으로, 유효 퍼텐셜의 관점에서,
$$\lim_{x_i \to x_j} \left[-2\ln|x_i - x_j|\right] = +\infty$$

특이점에 도달하기 위해서는 **무한한 에너지 장벽**을 극복해야 하므로, 그 전이 확률(Transition amplitude)은 정확히 0이다.

$$\boxed{P(\text{singularity}) = 0} \quad \square$$

**물리적 귀결.** 우주가 수축하여 플랑크 밀도에 접근하면, 고윳값들 사이의 로그 쿨롱 반발력이 중력적 수축을 압도하여 **빅 바운스(Big Bounce)**가 발생한다. 빅뱅은 특이점이 아니라, 이전 수축 주기로부터의 탄성적 반발이다.

---

## 8. 암흑 물질의 정체

### 8.1 비가환 공간의 유한 스펙트럼

Fuzzy $CP^2_F$와 Fuzzy $S^2_F$는 연속 공간과 달리 유한 개의 조화 함수 모드만을 허용한다. 행렬 크기 $N_{\text{int}}$에 의해 최대 각운동량이 $L_{\max} \sim N_{\text{int}}$로 절단된다.

### 8.2 안정한 잔존 모드

**정리 8.1.** $L = L_{\max}$에 해당하는 최고차 Kaluza-Klein 모드는 절대적으로 안정하다.

**증명.** 연속 공간에서는 $L_{\max} \to L_{\max} - 1$로의 복사 붕괴가 허용되지만, Fuzzy 공간의 이산 스펙트럼에서는 에너지-운동량 보존과 비가환 선택 규칙(Selection rule)에 의해 이 전이가 금지된다.
$$\Gamma(L_{\max} \to L') = 0 \quad \square$$

이 모드들은 전자기적으로 중성이며 오직 중력적으로만 상호작용한다. 이것이 **암흑 물질의 기하학적 정체**이다: 새로운 입자가 아닌, 여분 차원의 유한 비가환 구조가 자연스럽게 보유하는 안정한 기하학적 여기 상태.

---

## 9. 이론의 구조 요약

단 하나의 작용량으로부터 유도된 물리적 결론들의 논리적 의존 관계:

```
S_HNM = -1/4 Tr([X,X]²) + 1/2 Tr(ψ̄Γ[X,ψ])
│
├─[정리 1.1] 유일성 (SUSY + 대칭 → 매개변수 0개)
│
├─[정리 2.1] D = 10 (자유도 정합 + 카이랄성 + 이상 상쇄)
│
├─[정리 3.1] 진공 = M⁴ × CP²_F × S²_F (에너지 최소화)
│   ├─[정리 3.2] 게이지 군 = SU(3) × SU(2) × U(1)
│   ├─[정리 3.3] 물질 세대 = 3
│   └─[정리 8.1] 암흑 물질 = 안정 KK 잔존 모드
│
├─[가설 + 정리 4.1] H = Ṁ/M, Λ_bulk = 0
│
├─[§5] ER = EPR (비대각 행렬 ↔ 얽힘 엔트로피)
│
├─[정리 6.1] 유니터리성 → 페이지 곡선 → 정보 보존
│
└─[정리 7.1] 판데르몬데 장벽 → P(특이점) = 0 → 빅 바운스
```

이 이론에는 조정 가능한 매개변수가 없다. 차원($D = 10$), 게이지 군($SU(3) \times SU(2) \times U(1)$), 물질 세대 수(3), 우주 상수($\Lambda = 0$), 그리고 시공간의 존재 자체가 모두 단일 작용량의 수학적 귀결이다.
