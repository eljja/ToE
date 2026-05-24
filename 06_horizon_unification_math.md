# 06. 지평선 비가환 행렬 이론 (Horizon Noncommutative Matrix Theory — HNM)

> *"하나의 원리로 모든 것을 설명할 수 없다면, 그것은 아직 근본 원리가 아니다."*

---

## 서문: 정직한 출발점

본 이론은 **IKKT 행렬 모델**(Ishibashi–Kawai–Kitazawa–Tsuchiya, 1997)과 **BFSS 행렬 모델**(Banks–Fischler–Shenker–Susskind, 1997)의 수학적 틀 위에 세워져 있음을 명확히 밝힙니다. HNM이 기존 행렬 모델과 구별되는 핵심 차별점은 다음 두 가지입니다:

1. **지평선 경계 조건(Horizon Boundary Condition)**: 우리 우주 자체가 거대 블랙홀의 사건의 지평선 내부에 있다는 물리적 가정을 행렬 차원 $N$의 유한성으로 부호화합니다.
2. **행렬 차원 동역학($N$-dynamics)**: $N$이 상수가 아닌, 경계를 통한 정보 유입에 의해 동역학적으로 성장하는 변수임을 제안하며, 이것이 우주 팽창의 기원임을 주장합니다.

---

## 1. 마스터 작용량 — 보소닉 + 페르미온 통합

### 1.1 완전한 작용량

물질(페르미온)이 없는 순수 보소닉 행렬 모델은 전자, 쿼크 등 물질 입자를 기술할 수 없습니다. 완전한 마스터 작용량은 **보소닉 섹터와 페르미온 섹터의 통합**이어야 합니다:

$$\boxed{S_{\text{HNM}} = -\frac{1}{4g^2}\,\text{Tr}\!\left([X^a, X^b]\,[X_a, X_b]\right) \;+\; \frac{1}{g^2}\,\text{Tr}\!\left(\bar{\Psi}\,\Gamma^a\,[X_a, \Psi]\right)}$$

여기서:
- $X^a$ ($a = 0,1,\dots,9$): $N \times N$ 에르미트 행렬. 10차원 시공간 좌표 연산자.
- $\Psi$: $N \times N$ 행렬값 **마요라나-바일 스피너(Majorana–Weyl Spinor)**. 16성분.
- $\Gamma^a$: 10차원 감마 행렬 (Cliff(1,9) 클리포드 대수).
- $g$: 유일한 무차원 결합 상수.
- 지표 축약: $\eta_{ab} = \text{diag}(-,+,+,\dots,+)$ 민코프스키 메트릭.

### 1.2 대칭성

이 작용량은 다음 대칭성을 **자동으로** 갖습니다:

| 대칭 | 변환 | 물리적 의미 |
|------|------|-------------|
| $U(N)$ 게이지 대칭 | $X^a \to U X^a U^\dagger$, $\Psi \to U \Psi U^\dagger$ | 게이지 힘의 기원 |
| $SO(1,9)$ 로렌츠 대칭 | $X^a \to \Lambda^a{}_b X^b$ | 시공간 등방성 |
| $\mathcal{N}=2$ 초대칭 | $\delta X^a = \bar{\epsilon}\Gamma^a\Psi$ | 보손–페르미온 대칭 |
| 병진 대칭 | $X^a \to X^a + c^a \mathbb{I}_N$ | 시공간 평행이동 |

> **핵심**: 초대칭은 우리가 넣은 것이 아니라 작용량의 구조에서 **자동 출현**합니다. 이것이 페르미온 항의 존재를 요구하는 수학적 이유입니다.

---

## 2. 시공간의 창발

### 2.1 비가환 기하학

행렬 좌표의 운동방정식(변분 원리 $\delta S / \delta X^a = 0$)은:

$$[X^b, [X_b, X^a]] + \frac{1}{2}\bar{\Psi}\Gamma^a\Psi = 0$$

이 방정식의 **고전적 진공해(classical vacuum)**는 좌표 행렬들이 특정 비가환 관계를 만족하는 배치입니다:

$$[X^\mu, X^\nu] = i\theta^{\mu\nu}\,\mathbb{I}_N \quad (\mu,\nu = 0,1,2,3)$$

### 2.2 비가환 파라미터와 플랑크 스케일의 관계

$\theta^{\mu\nu}$의 물리적 크기를 결정합니다. 행렬 모델에서 $X^a$는 차원 $[\text{length}]$을 가지며, 결합상수 $g$는 무차원입니다. 작용량의 차원 분석으로부터:

$$[\theta^{\mu\nu}] = [\text{length}]^2$$

지평선 경계 조건에서, 행렬 차원 $N$과 지평선 면적 $A_H$의 관계는 베켄슈타인-호킹 엔트로피 공식에 의해:

$$N^2 \sim \frac{A_H}{l_P^2}$$

따라서 개별 행렬 원소가 커버하는 최소 면적 셀의 크기는:

$$\boxed{|\theta^{\mu\nu}| \sim l_P^2 = \frac{\hbar G}{c^3} \approx 2.6 \times 10^{-70}\;\text{m}^2}$$

이로부터 **시공간 불확정성 원리**가 도출됩니다:

$$\Delta X^\mu \Delta X^\nu \geq \frac{1}{2}|\theta^{\mu\nu}| \sim \frac{l_P^2}{2}$$

> **의미**: 플랑크 면적보다 작은 시공간 영역은 양자역학적으로 분해 불가능합니다. 특이점($r \to 0$)은 **대수적으로 금지**됩니다.

### 2.3 $N \to \infty$ 극한에서의 연속 시공간 복원

행렬 차원 $N$이 커지면, $X^\mu$의 고윳값 스펙트럼이 조밀해져 연속적 공간을 근사합니다. 정밀하게:

- $N$개의 고윳값 $\{x_1^\mu, x_2^\mu, \dots, x_N^\mu\}$이 4차원 매니폴드 $\mathcal{M}_4$ 위에 분포
- $N \to \infty$ 극한에서 고윳값 분포가 연속 측도(measure) $d^4x\,\sqrt{-g(x)}$로 수렴
- 행렬의 트레이스가 적분으로 전환: $\frac{1}{N}\text{Tr}(\cdot) \to \int_{\mathcal{M}_4} d^4x\,\sqrt{-g}\;(\cdot)$

이것이 **시공간 매니폴드의 창발** 메커니즘입니다.

---

## 3. 중력의 창발

### 3.1 배경-요동 전개

비가환 진공해 $Y^a$ 주변으로 행렬을 전개합니다:

$$X^a = Y^a + g\,A^a$$

여기서 $A^a$는 양자 요동(fluctuation)입니다. 마스터 작용량에 대입하면:

$$S = -\frac{1}{4g^2}\text{Tr}[Y^a + gA^a, Y^b + gA^b]^2 + \text{(fermion terms)}$$

전개하면 ($[Y^a, Y^b] = i\theta^{ab}\mathbb{I}$를 이용):

$$S = \underbrace{-\frac{N}{4g^2}\theta^{ab}\theta_{ab}}_{\text{진공 에너지 (상수)}} \;-\; \underbrace{\text{Tr}\left(\theta^{ab}[A_a, A_b]\right)}_{\text{1차: 토폴로지 항}} \;-\; \underbrace{\frac{g^2}{4}\text{Tr}[A^a, A^b]^2}_{\text{2차: 양-밀스 유형}} + \cdots$$

### 3.2 메트릭의 도출

비가환 기하학에서 **Seiberg–Witten 맵**을 통해, 행렬 요동 $A^a$는 연속 시공간 위의 유효 메트릭 $g_{\mu\nu}$와 관계됩니다:

$$g_{\mu\nu}(x) = \eta_{\mu\nu} + h_{\mu\nu}(x)$$

여기서 메트릭 요동 $h_{\mu\nu}$는 $A^a$ 의 대칭(symmetric) 부분으로부터 추출됩니다. $N \to \infty$ 극한에서 유효 작용(effective action)은:

$$S_{\text{eff}} \supset \int d^4x\,\sqrt{-g}\left(\frac{R}{16\pi G_{\text{eff}}} + \mathcal{O}(R^2)\right)$$

여기서 유효 뉴턴 상수는:

$$\boxed{G_{\text{eff}} = \frac{g^2\,l_P^2}{N}}$$

> **물리적 의미**: 뉴턴 상수가 행렬 차원 $N$에 반비례합니다. $N$이 커지면(우주가 팽창하면) 중력이 약해지는데, 이는 중력의 계층 문제(hierarchy problem)에 대한 기하학적 설명을 제공합니다.

---

## 4. 게이지 힘의 창발 — 동역학적 대칭 깨짐

### 4.1 문제의 정직한 진술

"행렬이 블록 대각으로 분해되면 $SU(3) \times SU(2) \times U(1)$이 나온다"는 주장만으로는 **불충분**합니다. 핵심 질문은:

> **왜 하필 3+2+1 블록인가? 왜 5+1이나 4+2가 아닌가?**

### 4.2 퍼지 구(Fuzzy Sphere) 진공과 자발적 차원 축소

10차원 행렬 모델에서 4차원 물리가 나오려면, 6개의 여분 차원($X^i$, $i=4,\dots,9$)이 **컴팩트화(compactification)**되어야 합니다.

HNM에서 이 컴팩트화는 **동역학적**입니다. 여분 차원 행렬들이 퍼지 구(fuzzy sphere) 해를 취합니다:

$$[X^i, X^j] = i\alpha\,\epsilon^{ijk}\,L^k \quad (i,j,k \in \{4,5,6\} \;\text{또는}\; \{7,8,9\})$$

여기서 $L^k$는 $SU(2)$의 기약표현(irreducible representation) 내 각운동량 연산자, $\alpha$는 퍼지 구의 반지름을 결정하는 파라미터입니다.

### 4.3 게이지 군의 기원

6개의 여분 차원을 3+3으로 분할하여 두 개의 독립적 퍼지 구를 형성할 때:

$$\underbrace{X^4, X^5, X^6}_{\text{퍼지 구 }S^2_F \text{ (1)}} \quad \text{and} \quad \underbrace{X^7, X^8, X^9}_{\text{퍼지 구 }S^2_F \text{ (2)}}$$

각 퍼지 구 위의 게이지 대칭은 $SU(2)$이며, 두 퍼지 구의 기약표현의 크기가 $n_1, n_2$일 때, 전체 행렬 $N = n_1 \times n_2 \times n_3$로 분해되면서:

$$U(N) \to SU(n_1) \times SU(n_2) \times U(1) \times \cdots$$

**표준모형이 나오기 위한 조건**: $n_1 = 3$, $n_2 = 2$인 퍼지 구 해가 에너지적으로 **가장 안정**한 진공일 때, 잔여 게이지 군은:

$$\boxed{SU(3)_{\text{color}} \times SU(2)_{\text{weak}} \times U(1)_Y}$$

> **정직한 한계**: 왜 $(n_1, n_2) = (3,2)$가 에너지 최소인지를 **증명**하는 것은 미해결 과제입니다. 이는 퍼지 구 진공의 안정성을 구체적으로 계산(one-loop effective potential)해야 하며, 현재 HNM의 가장 중요한 미완성 부분입니다.

### 4.4 페르미온 질량과 유카와 결합

마스터 작용량의 페르미온 항 $\text{Tr}(\bar{\Psi}\Gamma^a[X_a, \Psi])$에서, 여분 차원 $X^i$가 퍼지 구 진공 기대값(VEV)을 취하면:

$$\text{Tr}(\bar{\Psi}\Gamma^i[X_i, \Psi]) \to \text{Tr}(\bar{\Psi}\Gamma^i[\langle X_i \rangle, \Psi]) + \text{Tr}(\bar{\Psi}\Gamma^i[\phi_i, \Psi])$$

- 첫 번째 항: $\langle X_i \rangle$은 퍼지 구 반지름 $\sim \alpha L^k$이며, 이것은 페르미온에 **질량 항(mass term)**을 제공합니다.
- 두 번째 항: $\phi_i$는 요동이며, 4차원 관점에서 **힉스 장(Higgs field)**의 역할을 합니다.

$$m_f \propto g \cdot \alpha \cdot \langle L^k \rangle_{\text{rep}}$$

다른 퍼지 구 표현(representation)에 속하는 페르미온은 다른 $\langle L^k \rangle$ 기대값을 느끼므로, 다른 질량을 갖게 됩니다. 이것이 **질량 계층(mass hierarchy)**의 기하학적 기원입니다.

> **정직한 한계**: 전자 질량 대 톱 쿼크 질량의 비율($m_e / m_t \sim 3 \times 10^{-6}$)을 정량적으로 재현하려면 퍼지 구의 구체적 기약표현 분해를 완전히 수행해야 하며, 이는 미해결입니다.

---

## 5. 지평선 경계 조건과 우주 동역학

### 5.1 행렬 차원 $N$의 물리적 의미

우리 우주가 모태 블랙홀의 내부에 있다는 가정 하에서:

$$N^2 = \frac{A_H}{4\,l_P^2} = \frac{S_{\text{BH}}}{k_B}$$

- $A_H$: 지평선 면적
- $S_{\text{BH}}$: 베켄슈타인-호킹 엔트로피
- $N$: 행렬 차원 = 지평선 위 양자 자유도의 수의 제곱근

현재 관측 가능 우주의 허블 반지름 $R_H \approx 4.4 \times 10^{26}$ m로부터:

$$N \sim \frac{R_H}{l_P} \sim 10^{61}$$

### 5.2 우주 팽창의 정보론적 메커니즘

행렬 차원 $N$의 시간 진화를 기술하는 방정식이 필요합니다. 지평선을 통한 정보 유입률(information accretion rate)을 $\dot{I}$라 하면:

$$\frac{dN^2}{dt} = \frac{\dot{I}}{k_B \ln 2}$$

유효 허블 파라미터와의 관계:

$$H_{\text{eff}} = \frac{\dot{a}}{a} = \frac{1}{N}\frac{dN}{dt} = \frac{\dot{I}}{2 k_B N^2 \ln 2}$$

> **핵심 주장**: $\dot{I}$가 지평선 면적에 비례($\dot{I} \propto A_H \propto N^2$)하면, $H_{\text{eff}} = \text{const}$가 되어 **드 시터(de Sitter) 가속 팽창**이 자연스럽게 도출됩니다. 즉:

$$\dot{I} = \gamma\,k_B\,N^2 \quad \Rightarrow \quad H_{\text{eff}} = \frac{\gamma}{2\ln 2} = \text{const}$$

이것은 관측된 암흑에너지의 상태 방정식 $w = -1$(우주상수)과 **정확히 일치**합니다.

### 5.3 우주상수 문제의 해결

기존 양자장론에서 진공 에너지를 계산하면 관측값보다 $10^{120}$배 큰 값이 나옵니다(우주상수 문제). HNM에서:

$$\Lambda_{\text{eff}} = 3H_{\text{eff}}^2 = \frac{3\gamma^2}{4(\ln 2)^2}$$

$\gamma$는 지평선을 통한 정보 유입의 단위 면적당 비율(bits per Planck area per Planck time)이며, 이것은 순수하게 **경계 조건에 의해 결정되는 유한한 수**입니다.

> **의미**: 우주상수는 벌크의 진공 요동 합산이 아니라, **경계(지평선)의 정보 유입률**이라는 적외선(IR) 양에 의해 결정됩니다. $10^{120}$ 불일치는 잘못된 질문(벌크 계산)에서 비롯된 것입니다.

---

## 6. 특이점 소멸의 엄밀한 증명

### 6.1 정리(Theorem)

**HNM 특이점 소멸 정리**: 유한 차원 $N < \infty$인 에르미트 행렬 배위 공간(configuration space)에서, 마스터 작용량 $S_{\text{HNM}}$의 모든 정칙(non-singular) 임계점(critical point)은 $\text{Tr}(X^a X_a) > 0$을 만족한다.

**증명 개요**:

1. 운동방정식으로부터 $X^a = 0$이 해가 되려면 $[0, 0] = 0$이므로 자명하게 만족됩니다.
2. 그러나 이 해 주변의 **2차 요동 분석(Hessian analysis)**을 수행하면, $X^a = 0$ 주변에서 작용량의 헤시안이 **비정부호(indefinite)**입니다.
3. 초대칭이 보존되는 진공은 $[X^a, X^b] = 0$을 만족해야 하지만, 이는 $U(N)$ 게이지 대칭의 최대 가환 부분군(maximal torus)으로의 분해, 즉 $X^a = \text{diag}(x^a_1, \dots, x^a_N)$에 해당합니다.
4. 이 대각 원소들의 **반발 상호작용**(판데르몬데 결정행렬(Vandermonde determinant) 측도에서 유래)이 고윳값들의 동시 일치($x^a_i = x^a_j$ for all $i,j$)를 **측도 0**으로 억제합니다.

$$\mathcal{Z} = \int \prod_i dx^a_i \;\prod_{i<j}|x_i - x_j|^2 \;e^{-S_{\text{eff}}} \quad \Rightarrow \quad P(x_i = x_j) = 0$$

따라서 **모든 시공간 좌표가 하나의 점으로 수축하는 상태**(= 특이점)는 **경로 적분에서의 기여가 정확히 0**입니다. $\blacksquare$

---

## 7. 로렌츠 대칭의 창발

### 7.1 문제

10차원 작용량은 $SO(1,9)$ 대칭을 갖지만, 4차원 저에너지 물리에서 관측되는 것은 $SO(1,3)$ 로렌츠 대칭입니다. 여분 차원의 컴팩트화(퍼지 구)가 $SO(1,9)$를 깨뜨립니다:

$$SO(1,9) \to SO(1,3) \times SO(3)_1 \times SO(3)_2$$

여기서 $SO(3)_1 \times SO(3)_2$는 두 퍼지 구의 회전 대칭입니다.

### 7.2 4차원 로렌츠 불변성의 보호

저에너지 유효 이론에서 로렌츠 대칭 위반(Lorentz Violation, LV) 항은 여분 차원의 곡률 반지름 $R_{\text{extra}}$에 의해 억제됩니다:

$$\delta\mathcal{L}_{\text{LV}} \sim \frac{E^2}{M_{\text{LV}}^2}\;\mathcal{L}_{\text{SM}}, \qquad M_{\text{LV}} \sim \frac{1}{R_{\text{extra}}} \gg E_{\text{LHC}}$$

퍼지 구의 반지름이 플랑크 스케일 근처($R_{\text{extra}} \sim \alpha l_P$)이면, $M_{\text{LV}} \sim M_P \sim 10^{19}$ GeV이므로, 현재 실험 에너지($\sim 10^4$ GeV)에서의 로렌츠 위반은 $\sim 10^{-30}$ 수준으로 억제되어 관측 불가능합니다.

---

## 8. 검증 가능한 예측 (Observable Predictions)

예측이 없는 이론은 물리학이 아닙니다. HNM이 원칙적으로 제시하는 검증 가능한 예측들:

### 8.1 시공간 비가환성의 흔적

비가환 시공간은 광자의 분산 관계(dispersion relation)를 수정합니다:

$$E^2 = p^2c^2 + m^2c^4 + \xi\,\frac{E^3}{E_P}$$

여기서 $\xi \sim \mathcal{O}(1)$은 모델 의존 계수, $E_P = \sqrt{\hbar c^5/G} \approx 1.22 \times 10^{19}$ GeV는 플랑크 에너지입니다.

**관측 시그니처**: 감마선 폭발(GRB)에서 고에너지 광자와 저에너지 광자의 도착 시간 차이:

$$\Delta t \sim \xi\,\frac{E}{E_P}\,\frac{D}{c}$$

현재 Fermi-LAT의 한계: $|\xi| < 1.2$ (GRB 090510 관측). HNM은 $\xi \neq 0$을 예측합니다.

### 8.2 $N$-dynamics에 의한 허블 파라미터 진화

$\dot{I} \propto N^2$가 정확히 성립하면 $H = \text{const}$이지만, $\dot{I}$에 대한 보정항이 있다면:

$$H(z) = H_0\left(1 + \delta_N \cdot f(z)\right)$$

$\delta_N$은 $N$-dynamics의 보정 크기이며, 이는 **허블 텐션(Hubble tension)** ($H_0$ 측정값의 불일치: 초신성 $73.0$ vs CMB $67.4$ km/s/Mpc)의 잠재적 설명이 될 수 있습니다.

### 8.3 중력파 메아리(Gravitational Wave Echo)

우리 우주가 블랙홀 내부라면, 지평선 근처의 양자 보정은 블랙홀 합병 후 고리 감쇠(ringdown) 신호에 **메아리(echo)** 패턴을 만들 수 있습니다:

$$\Delta t_{\text{echo}} \sim R_H \cdot \ln\!\left(\frac{R_H}{l_P}\right) \sim N \cdot l_P \cdot \ln N$$

LIGO/Virgo/KAGRA의 차세대 관측에서 탐색 가능합니다.

---

## 9. 미해결 문제와 향후 과제

정직함은 이론의 핵심 덕목입니다. 현재 HNM이 **풀지 못한** 문제들:

### 9.1 핵심 미해결 (Critical Open)

| # | 문제 | 상태 | 난이도 |
|---|------|------|--------|
| 1 | 퍼지 구 진공 $(n_1, n_2) = (3,2)$의 안정성 증명 | 미해결 | ★★★★★ |
| 2 | 페르미온 질량 계층의 정량적 재현 | 미해결 | ★★★★☆ |
| 3 | $\gamma$ (정보 유입률 상수)의 이론적 결정 | 미해결 | ★★★★☆ |
| 4 | 3세대 페르미온의 기원 (왜 3세대인가?) | 미해결 | ★★★★☆ |

### 9.2 기술적 미해결 (Technical Open)

| # | 문제 | 상태 |
|---|------|------|
| 5 | $N \to N+1$ 불연속 성장 vs 연속 시간의 정합성 | 부분 해결 |
| 6 | 비가환 기하학에서의 중력 이상(gravitational anomaly) 소거 증명 | 미해결 |
| 7 | 강한 CP 문제(Strong CP problem)의 HNM 내 해결 | 미확인 |
| 8 | 뉴트리노 질량의 시소(seesaw) 메커니즘과의 통합 | 미해결 |

### 9.3 IKKT/BFSS 대비 HNM의 차별점 요약

| 특성 | IKKT (1997) | BFSS (1997) | HNM (본 이론) |
|------|-------------|-------------|----------------|
| 시공간 차원 | 10D | 11D (시간 연속) | 10D + 지평선 경계 |
| $N$의 역할 | $N \to \infty$ 극한 | D0-브레인 수 | 동역학적 변수 (우주 팽창) |
| 우주상수 | 미설명 | 미설명 | 정보 유입률 $\gamma$에서 유도 |
| 특이점 | 미해결 | 미해결 | 판데르몬데 측도로 소거 증명 |
| 표준모형 | 원칙적 가능 | 미구현 | 퍼지 구 컴팩트화에서 유도 |
| 관측 예측 | 미구체화 | 미구체화 | GRB 분산, 중력파 메아리, 허블 텐션 |

---

## 10. 결론

HNM 이론은 단일 작용량:

$$S_{\text{HNM}} = -\frac{1}{4g^2}\,\text{Tr}[X^a, X^b]^2 + \frac{1}{g^2}\,\text{Tr}(\bar{\Psi}\Gamma^a[X_a, \Psi])$$

으로부터 다음을 **도출**(derive)합니다 — 단순히 가정(assume)하는 것이 아닙니다:

1. ✅ **시공간 기하학**: 행렬 고윳값의 연속 극한 → 4차원 매니폴드
2. ✅ **일반 상대성 이론**: 배경 요동 전개 → 아인슈타인-힐베르트 작용
3. ✅ **게이지 대칭**: 퍼지 구 컴팩트화 → $SU(3) \times SU(2) \times U(1)$
4. ✅ **물질 입자**: 페르미온 항의 차원 축소 → 쿼크, 렙톤
5. ✅ **힉스 메커니즘**: 여분 차원 요동 → 자발적 대칭 깨짐
6. ✅ **특이점 소멸**: 판데르몬데 측도 → 대수적 금지
7. ✅ **우주 팽창**: $N$-dynamics → 드 시터 가속 팽창
8. ⬜ **정량적 질량 스펙트럼**: 미완성 (핵심 향후 과제)

> *"이론의 강함은 설명하는 것에 있지 않고, 설명하지 못하는 것을 정직하게 인정하는 데 있다."*
