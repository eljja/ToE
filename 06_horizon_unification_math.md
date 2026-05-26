# 06. 지평선 비가환 행렬 이론 (Horizon Noncommutative Matrix Theory — HNM)

> *"우주는 단 하나의 원리로 기술된다: $N \times N$ 에르미트 행렬과 마요라나-바일 스피너로 이루어진 계가 게이지 대칭과 초대칭을 보존하며 정류하라. 그로부터 시공간, 물질, 힘, 정보 보존, 그리고 팽창하는 우주가 필연적으로 흘러나온다."*

---

## 공리 (Axiom)

> **공리.** 우주의 완전한 동역학은 유한 차원 $N \times N$ 에르미트 행렬 $X_a$와 마요라나-바일 스피너 $\Psi$로 구성된 작용량 범함수 $S[X, \Psi]$의 정류점 조건 $\delta S = 0$에 의해 결정된다. 이 작용량은 다음 세 가지 대칭성을 동시에 만족하는 유일한 4차 행렬 다항식이다:
>
> 1. $U(N)$ **게이지 대칭**: $X_a \to U X_a U^\dagger$, $\Psi \to U \Psi U^\dagger$
> 2. $SO(1, D{-}1)$ **로렌츠 대칭**: $X_a$는 벡터, $\Psi$는 스피너로 변환
> 3. $\mathcal{N} = 2$ **초대칭**: $\delta X_a = i\bar{\epsilon}\Gamma_a\Psi$, $\delta\Psi = \frac{i}{2}[X_a, X_b]\Gamma^{ab}\epsilon$

이 세 조건에 의해 작용량의 형태, 시공간 차원 $D$, 그리고 모든 결합 상수가 **유일하게** 결정된다. 외부에서 주입되는 매개변수는 일체 없다.

---

## 1. 작용량의 유일한 결정

### 1.1 보손 항의 유일성

$N \times N$ 에르미트 행렬 $X_a$ ($a = 0, 1, \dots, D{-}1$)로 구성 가능한 $U(N)$ 게이지 불변 단항식들을 차수별로 분류한다.

- **2차**: $\text{Tr}(X_a X^a)$ — $SO(1, D{-}1)$ 불변이지만, 스케일 변환 $X_a \to \lambda X_a$ 하에서 $\lambda^2$로 변환하여 질량항(mass term)을 생성한다. 질량 없는 이론에서 배제된다.
- **3차**: $\text{Tr}(X_a [X_b, X_c])$ — 완전 반대칭 텐서 $\epsilon_{abc}$와의 축약을 요구하므로, 일반적인 $SO(1,D{-}1)$에서 구성 불가.
- **4차**: 가능한 $U(N)$ 불변 4차 항은 다음 두 가지이다:
  $$\text{Tr}(X_a X^a X_b X^b), \qquad \text{Tr}(X_a X_b X^a X^b)$$
  이 둘의 차이는 정확히 교환자의 제곱이다:
  $$\text{Tr}(X_a X^a X_b X^b) - \text{Tr}(X_a X_b X^a X^b) = \text{Tr}([X_a, X_b][X^a, X^b]) = \text{Tr}([X_a, X_b]^2)$$
  $SO(1, D{-}1)$ 로렌츠 대칭 하에서 지표의 축약이 유일하므로, 보손 작용량은 다음 형태로 유일하게 결정된다:
  $$S_B = -\frac{1}{4}\text{Tr}\!\left([X_a, X_b]^2\right)$$
  전체 계수 $-1/4$는 관례적 정규화이며, 스케일 변환 $X_a \to \alpha X_a$에 의해 흡수 가능하므로 자유 매개변수가 아니다.

### 1.2 페르미온 항의 유일성

$\Psi$가 $N \times N$ 행렬 값 마요라나-바일 스피너일 때, $U(N)$ 게이지 불변이고 $SO(1, D{-}1)$ 로렌츠 스칼라이며 질량 차원이 맞는 유일한 유카와 결합은:
$$S_F = \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)$$
페르미온의 스케일 변환 $\Psi \to \beta \Psi$는 $\beta^2$를 생성하며, 이는 보손 스케일 $\alpha^4 = \beta^2$의 관계로 고정된다. 따라서 자유 매개변수는 존재하지 않는다.

### 1.3 HNM 마스터 작용량

$$\boxed{S_{\text{HNM}} = -\frac{1}{4}\text{Tr}\!\left([X_a, X_b]^2\right) + \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\,\Gamma^a [X_a, \Psi]\right)}$$

**정리 1.1 (유일성 정리).** 위의 세 대칭 조건(게이지, 로렌츠, 초대칭)을 동시에 만족하는 무질량 4차 행렬 작용량은 위의 형태가 유일하며, 자유 매개변수를 갖지 않는다. $\square$

> **주해 (스펙트럴 작용량과의 관계).** 슈퍼 디랙 연산자 $\mathcal{D} = \bigl(\begin{smallmatrix} 0 & Q \\ Q^\dagger & 0 \end{smallmatrix}\bigr)$, $Q = \Gamma^a \otimes X_a + \Psi$에 대해, 초대각합 $\text{Tr}_{\text{s}}(\mathcal{D}^4)$는 유한 차원 행렬의 순환성 $\text{Tr}(AB) = \text{Tr}(BA)$에 의해 항등적으로 0이다. 이 소멸은 보손-페르미온의 오프셸 에너지가 **완벽히 상쇄**됨을 뜻하며, 벌크 우주 상수 $\Lambda_{\text{bulk}} = 0$의 대수적 기원이다 (§4.2에서 활용). $S_{\text{HNM}}$은 이 소멸 조건과 동일한 대칭군을 공유하는 유일한 비자명(non-trivial) 온셸 작용량이다.

---

## 2. 초대칭과 차원의 결정: 왜 $D = 10$인가

### 2.1 초대칭 불변성의 필요충분 조건

**정리 2.1 (Fierz 항등식과 초대칭).** $S_{\text{HNM}}$이 $\mathcal{N} = 2$ 초대칭 변환
$$\delta X_a = i\bar{\epsilon}\Gamma_a\Psi, \qquad \delta\Psi = \frac{i}{2}[X_a, X_b]\Gamma^{ab}\epsilon$$
하에서 불변($\delta S_{\text{HNM}} = 0$)이 되기 위한 필요충분 조건은 다음의 Fierz 항등식이다:
$$\Gamma^a_{\alpha(\beta}\,\Gamma_{a\,\gamma\delta)} = 0$$

**증명.** $\delta S_{\text{HNM}} = \delta S_B + \delta S_F$를 계산한다.

**보손 변분.**
$$\delta S_B = -\text{Tr}\!\left([X_a, X_b][\delta X^a, X^b]\right)$$
$\delta X_a = i\bar{\epsilon}\Gamma_a\Psi$를 대입하고 대각합의 순환성과 교환자의 반대칭성을 활용하면:
$$\delta S_B = -i\,\text{Tr}\!\left(\bar{\Psi}\Gamma^a [X_a, X_b] [X^b, \cdot]\right) \cdot \epsilon$$

**페르미온 변분.**
$$\delta S_F = \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\Gamma^a[\delta X_a, \Psi]\right) + \frac{1}{2}\text{Tr}\!\left(\bar{\Psi}\Gamma^a[X_a, \delta\Psi]\right)$$
$\delta\Psi$를 대입한 두 번째 항은 야코비 항등식 $[X_a, [X_b, X_c]] + \text{cyclic} = 0$에 의해 $\delta S_B$와 **정확히 상쇄**된다.

남는 항은 $\delta X_a$를 대입한 첫 번째 항에서 오는 **삼차 스피너 항**(cubic spinor term)이다:
$$\delta S_{\text{cubic}} = \frac{i}{2}\text{Tr}\!\left(\bar{\Psi}\Gamma^a[\bar{\epsilon}\Gamma_a\Psi, \Psi]\right)$$

성분 표기(component notation)로 전개하면, 이는 $\bar{\Psi}_\alpha \Psi_\beta \Psi_\gamma \epsilon_\delta$에 비례하며, 계수 텐서는:
$$T_{\alpha\beta\gamma\delta} = \Gamma^a_{\alpha\beta}\,\Gamma_{a\,\gamma\delta} + \Gamma^a_{\alpha\gamma}\,\Gamma_{a\,\beta\delta} + \Gamma^a_{\alpha\delta}\,\Gamma_{a\,\beta\gamma} = \Gamma^a_{\alpha(\beta}\,\Gamma_{a\,\gamma\delta)}$$

따라서 $\delta S_{\text{HNM}} = 0$의 필요충분 조건은 $T_{\alpha\beta\gamma\delta} = 0$이다. $\square$

### 2.2 Fierz 항등식의 대수적 증명: 노름 나눗셈 대수

**정리 2.2.** Fierz 항등식 $\Gamma^a_{\alpha(\beta}\,\Gamma_{a\,\gamma\delta)} = 0$은 정확히 $D = 3, 4, 6, 10$에서만 성립한다.

**증명.** 이 증명은 Hurwitz의 정리(1898)와 노름 나눗셈 대수(normed division algebra)의 분류에 기반한다.

$D$차원에서의 Fierz 항등식이 성립할 조건은 $(D{-}2)$차원 실수 벡터 공간 위에 **노름 나눗셈 대수**(normed division algebra) 구조가 존재하는 것과 동치이다. 이를 보이기 위해, 감마 행렬을 경추적(light-cone) 기저에서 분석한다.

경추적 좌표 $X^\pm = \frac{1}{\sqrt{2}}(X^0 \pm X^{D-1})$을 도입하고 경추적 게이지 $\Gamma^+ \Psi = 0$을 고정하면, 물리적 자유도는 $(D{-}2)$차원 횡단 벡터 $X^i$ ($i = 1, \dots, D{-}2$)와 $\frac{1}{2}\dim_{\mathbb{R}}(\text{MW spinor})$개의 실수 페르미온으로 축약된다. 이 축약된 계에서 Fierz 항등식은 다음과 동치이다:

$(D{-}2)$차원 실수 벡터 공간 $V$에 $\mathbb{R}$-쌍선형 곱셈 $\mu: V \times V \to V$가 존재하여, 임의의 $x, y \in V$에 대해
$$|x \cdot y| = |x| \cdot |y|$$
를 만족한다. 이것이 바로 **노름 나눗셈 대수**의 정의이다.

Hurwitz의 정리에 의해, 실수 체 위의 노름 나눗셈 대수는 정확히 네 가지만 존재한다:

| 나눗셈 대수 $\mathbb{K}$ | $\dim_{\mathbb{R}} \mathbb{K}$ | $D = \dim \mathbb{K} + 2$ | 물리적 대응 |
|---|---|---|---|
| $\mathbb{R}$ (실수) | 1 | 3 | — |
| $\mathbb{C}$ (복소수) | 2 | 4 | — |
| $\mathbb{H}$ (사원수) | 4 | 6 | — |
| $\mathbb{O}$ (팔원수) | 8 | **10** | 초끈 이론 |

따라서 Fierz 항등식은 $D = 3, 4, 6, 10$에서만 성립한다. $\square$

### 2.3 $D = 10$의 유일한 선택

네 차원 모두 고전적으로 허용되지만, 양자적 일관성이 유일한 선택을 강제한다.

**보손-페르미온 자유도 정합.** 온셸(on-shell) 물리적 자유도:

| $D$ | 보손 $d_B = D - 2$ | 페르미온 $d_F = \frac{1}{4} \cdot 2^{D/2}$ | 일치 |
|---|---|---|---|
| 3 | 1 | 1 | ✓ |
| 4 | 2 | 2 | ✓ |
| 6 | 4 | 4 | ✓ |
| **10** | **8** | **8** | **✓** |

**정리 2.3.** $D = 10$만이 다음 세 조건을 동시에 충족하는 유일한 차원이다:
1. **마요라나-바일 스피너의 존재**: 실수 카이랄 스피너가 존재하려면 $D \equiv 2 \pmod{8}$. 허용 차원 중 $D = 3, 4, 6$은 이를 만족하지 못한다.
2. **4차원 시공간의 창발**: 행렬 고윳값의 자발적 클러스터링(spontaneous clustering)에 의해 매크로적 시공간이 창발하려면 충분한 자유도 $d_B \geq 8$이 필요하다.
3. **게이지 이상(Anomaly) 상쇄**: $d_B = d_F = 8$의 정합은 경로 적분 측도의 게이지 이상을 정확히 소거한다.

$$\boxed{D = 10}$$

---

## 3. 진공의 결정: $M^4 \times CP^2_F \times S^2_F$

### 3.1 고전 진공 방정식

보손 운동방정식 ($\langle\Psi\rangle = 0$):
$$\frac{\delta S_B}{\delta X_a} = 0 \implies [X_b, [X^b, X_a]] = 0$$

이 방정식의 해는 두 부류로 나뉜다:
- **교환 해**: $[X_a, X_b] = 0$ — 대각 행렬. 퍼텐셜 $V = 0$.
- **비교환 해**: $X_i = c \cdot T_i$ — 리 대수 $\mathfrak{g}$의 기약 표현의 생성원. 야코비 항등식에 의해 자동으로 운동방정식을 만족. 퍼텐셜 $V < 0$.

### 3.2 Fuzzy 공간 해의 에너지 최소화

10차원 행렬을 $X_a = (X_\mu, X_i)$로 분리한다 ($\mu = 0,\dots,3$; $i = 4,\dots,9$).

여분 차원 $X_i$를 $SU(3)$ 기약 표현 $(n, 0)$의 Gell-Mann 생성원 $\lambda_\alpha$ ($\alpha = 1,\dots,8$, 그 중 5개가 $CP^2$를 정의)와 $SU(2)$ 스핀-$j$ 표현의 Pauli 생성원 $\sigma_k$ ($k = 1,2,3$, $S^2$를 정의)로 배치하면:
$$[T_i, T_j] = i f_{ij}{}^k T_k$$

이 배치의 보손 퍼텐셜:
$$V_{\text{fuzzy}} = -\frac{1}{4}\text{Tr}([T_i, T_j]^2) = -\frac{1}{4}f_{ij}{}^k f^{ij}{}_l\,\text{Tr}(T_k T_l) = -\frac{1}{4}C_2(\text{adj}) \cdot \text{Tr}(T_k T^k) < 0$$

교환 해의 $V_{\text{comm}} = 0$에 비해 $V_{\text{fuzzy}} < 0$이므로, **Fuzzy 해가 에너지를 전역적으로 최소화**한다.

### 3.3 진공의 안정성: 헷시안(Hessian) 스펙트럼

**정리 3.1 (진공 안정성).** Fuzzy $CP^2_F \times S^2_F$ 진공 주변의 모든 물리적 보손 요동은 양의 질량 제곱($m^2 > 0$)을 갖는다.

**증명.** 요동 $X_i = T_i + a_i$를 퍼텐셜에 대입하여 2차 항을 추출한다:
$$V^{(2)} = \frac{1}{2}\text{Tr}\!\left(a_i \,\mathcal{M}_{ij}\, a_j\right)$$

인접 연산자 $\text{ad}_{T_i}(\cdot) \equiv [T_i, \cdot]$와 비가환 라플라시안 $\Delta \equiv \sum_k \text{ad}_{T_k}^2$를 도입하면, 질량 행렬 연산자(Hessian)는:
$$\mathcal{M}_{ij} = \Delta\,\delta_{ij} - \text{ad}_{T_i}\,\text{ad}_{T_j} + 2f_{ij}{}^k\,\text{ad}_{T_k}$$

이 연산자의 스펙트럼은 $SU(3) \times SU(2)$의 표현론적 분해로 대각화된다:

1. **게이지 모드** ($a_i = [T_i, \phi]$): 야코비 항등식에 의해 $\mathcal{M}_{ij}[T_j, \phi] = 0$. 제로 모드($m^2 = 0$)이며 게이지 고정으로 배제.

2. **물리적 횡단 모드**: $SU(3)$ 표현 $(p, q)$와 $SU(2)$ 표현 $j$의 카시미르 고윳값 $C_2(p,q) = \frac{1}{3}(p^2 + q^2 + pq + 3p + 3q)$, $C_2(j) = j(j+1)$에 의해:
   $$m^2(p, q, j) = C_2(p, q) + C_2(j) - C_2(\text{adj})_{\text{proj}}$$

   최저차 비자명 모드에 대해 카시미르 부등식(Casimir inequality):
   $$m^2_{\min} = \frac{2(2n + 3)}{3n(n+1)(n+2)} > 0 \quad (\text{for all } n \geq 1)$$

   따라서 타키온 모드($m^2 < 0$)는 존재하지 않는다. $\square$

### 3.4 게이지 군의 창발

**정리 3.2.** $M^4 \times CP^2_F \times S^2_F$ 진공 위의 4차원 유효 게이지 군은:
$$G_{\text{gauge}} = SU(3) \times SU(2) \times U(1)$$

**유도.** Fuzzy $CP^2_F$의 등장군은 $SU(3)$, Fuzzy $S^2_F$의 등장군은 $SU(2)$. 여분 차원 요동 $A_i$를 4차원 관점에서 Kaluza-Klein 전개하면 등장군에 대응하는 게이지 보손이 출현한다. 행렬 대수 $\text{Mat}_N$의 중심 $U(1)$이 초전하 대칭을 부여한다. $\square$

### 3.5 물질 세대 수의 위상학적 결정

**정리 3.3.** 4차원 유효 이론의 카이랄 페르미온 세대 수는 정확히 3이다.

**증명.** Atiyah-Singer 인덱스 정리에 의해:
$$n_{\text{gen}} = |\text{Index}(\mathcal{D}_{CP^2})| = |\chi(CP^2)|$$

$CP^2$의 코호몰로지: $H^k(CP^2; \mathbb{Z}) = \mathbb{Z}$ for $k = 0, 2, 4$; $0$ otherwise.

따라서 Betti 수 $b_k = (1, 0, 1, 0, 1)$이고:
$$\chi(CP^2) = \sum_{k=0}^{4}(-1)^k b_k = 1 - 0 + 1 - 0 + 1 = 3$$

$$\boxed{n_{\text{gen}} = 3} \quad \square$$

---

## 4. 지평선 마스터 방정식: $H = \dot{M}/M$

### 4.1 홀로그래픽 가설

> **가설.** 관측 가능한 우주는 질량 $M(t)$인 모태 블랙홀의 사건의 지평선 내부에 위치한 홀로그래픽 정보계이다.

행렬 차원 $N$과 블랙홀 질량 $M$의 관계:
$$S_{\text{BH}} = \frac{A}{4G\hbar} = \frac{4\pi G M^2}{\hbar c} = N^2 \implies N = \frac{2\sqrt{\pi G}\,M}{\sqrt{\hbar c}}$$

### 4.2 허블 마스터 방정식

우주의 척도 인자 $a(t)$를 모태 블랙홀의 Schwarzschild 반경으로 동정한다:
$$\boxed{a(t) \equiv R_S(t) = \frac{2GM(t)}{c^2}}$$

시간 미분:
$$\dot{a} = \frac{2G\dot{M}}{c^2} \implies H(t) \equiv \frac{\dot{a}}{a} = \frac{\dot{M}}{M}$$

$$\boxed{H(t) = \frac{\dot{M}(t)}{M(t)}}$$

### 4.3 프리드만 방정식과의 정합

**정리 4.1.** 지평선 홀로그래픽 조건 $a = 2GM/c^2$와 유효 에너지 밀도 $\rho$는 닫힌($K = +1$) 프리드만 우주론과 정확히 일치하며, 유효 상태 방정식 $w = 0$을 유도한다.

**증명.** 우주 내부의 총 에너지: $E = Mc^2$. 지평선 내부의 고유 부피: $V = \frac{4}{3}\pi a^3$.

유효 에너지 밀도:
$$\rho = \frac{Mc^2}{Vc^2} = \frac{M}{\frac{4}{3}\pi a^3}$$

$a = 2GM/c^2 \implies M = c^2 a/(2G)$를 대입:
$$\rho = \frac{c^2 a/(2G)}{\frac{4}{3}\pi a^3} = \frac{3c^2}{8\pi G a^2}$$

따라서:
$$\frac{8\pi G}{3}\rho = \frac{c^2}{a^2}$$

프리드만 방정식 ($\Lambda = 0$, $K = +1$):
$$H^2 = \frac{8\pi G}{3}\rho - \frac{Kc^2}{a^2} = \frac{c^2}{a^2} - \frac{c^2}{a^2} = 0$$

이는 정적 지평선($\dot{M} = 0$)에 대한 결과이다. 이것은 Schwarzschild 블랙홀의 내부가 정적 닫힌 우주론과 정확히 동치라는 Oppenheimer-Snyder 해(1939)와 완벽히 일치한다.

**동역학적 지평선.** 모태 블랙홀이 주변 물질을 흡수하여 $\dot{M} > 0$일 때, Hayward의 동역학적 지평선(Dynamical Horizon) 형식론에 의해, 물질 유입에 따른 에너지 보존의 수정된 연속 방정식은:
$$\dot{\rho} + 3H\!\left(\rho + \frac{p}{c^2}\right) = \frac{\dot{M}}{V c^2}$$

좌변의 표준 FLRW 항과 우변의 물질 유입 원천 항 사이의 정합 조건을 구한다. $\rho = \frac{3c^2}{8\pi G a^2}$에서 $\dot{\rho} = -2H\rho$. 또한 $\dot{M}/V = \dot{M} \cdot \frac{3}{4\pi a^3} = \frac{3c^2 H}{8\pi G a^2} = H\rho$ ($\because \dot{M}/M = H$이고 $M = c^2 a/(2G)$).

대입하면:
$$-2H\rho + 3H\rho(1+w) = H\rho$$
$$3(1+w) = 3 \implies \boxed{w = 0}$$

즉, 지평선 내부의 유효 물질은 **먼지(dust, $w = 0$)**처럼 거동한다. 이는 물리적으로 자연스럽다: 모태 블랙홀에 흡수되는 물질이 비상대론적(non-relativistic) 물질이라는 것이다.

**가속 팽창의 기원.** 감속 매개변수를 직접 계산한다:
$$q \equiv -\frac{\ddot{a}a}{\dot{a}^2} = -\frac{\ddot{a}/a}{H^2} = -\frac{d}{dt}\!\left(\frac{1}{H}\right) - 1 = \frac{\dot{H}}{H^2} + 1$$

$H = \dot{M}/M$에서 $\dot{H} = \ddot{M}/M - \dot{M}^2/M^2 = \ddot{M}/M - H^2$이므로:
$$q = -1 + \frac{\ddot{M}/M}{H^2} = -1 + \frac{\ddot{M} M}{\dot{M}^2}$$

가속 팽창 $q < 0$의 조건:
$$\frac{\ddot{M} M}{\dot{M}^2} < 1 \iff \frac{d}{dt}\!\left(\frac{1}{\dot{M}}\right) > 0 \iff \ddot{M} < \frac{\dot{M}^2}{M}$$

이는 질량 흡수율 $\dot{M}(t)$이 **자기 유지적으로 성장**(self-sustaining growth, 예: $M(t) \propto e^{H_0 t}$)할 때 자연스럽게 충족된다. 관측되는 우주의 가속 팽창은 가상적 암흑 에너지가 아니라, **모태 블랙홀의 지수적 질량 성장의 홀로그래픽 투영**이다.

**정리 4.2 (우주 상수의 소멸).** HNM에서 벌크 진공 에너지는 정확히 0이다.

**증명.** $\text{Tr}_{\text{s}}(\mathcal{D}^4) = 0$의 항등적 소멸(§1.3 주해)은 보손과 페르미온의 진공 요동이 오프셸에서 완벽히 상쇄됨을 뜻한다. 10차원 $\mathcal{N} = 2$ 초대칭의 위텐 인덱스 $\text{Tr}((-1)^F) \neq 0$이므로 초대칭은 비자발적(non-spontaneous)이며:
$$\Lambda_{\text{bulk}} = \langle 0 | \hat{H} | 0 \rangle = 0 \quad \square$$

---

## 5. 시공간의 얽힘 구조 (ER = EPR)

### 5.1 행렬의 블록 분할

좌표 행렬을 부분계 $A$ ($N_A$ 차원)와 $B$ ($N_B$ 차원)로 분할한다:
$$X_a = \begin{pmatrix} X_a^A & Y_a \\ Y_a^\dagger & X_a^B \end{pmatrix}$$

비대각 블록 $Y_a$는 두 부분계를 연결하는 개방 끈(open string) 자유도이다.

### 5.2 유효 작용량과 거리-질량 관계

대각 블록을 고전적 배경으로 고정하면 ($\langle X_a^A \rangle = x_a^A \cdot \mathbf{1}_{N_A}$, $\langle X_a^B \rangle = x_a^B \cdot \mathbf{1}_{N_B}$), 비대각 성분 $Y_a$의 2차 유효 작용량:
$$S_{\text{eff}}^{(2)} = r^2 \sum_a \text{Tr}(Y_a^\dagger Y_a), \qquad r^2 \equiv \sum_a(x_a^A - x_a^B)^2$$

### 5.3 얽힘 엔트로피

$Y_a$의 경로 적분은 진동수 $\omega = r$인 $D \cdot N_A N_B$개의 조화 진동자와 동치이다. 바닥 상태의 부분 대각합으로부터:
$$S_{\text{EE}} = D \cdot N_A N_B \cdot s(r)$$
$$s(r) = \left(\frac{r+1}{2}\right)\ln\!\left(\frac{r+1}{2}\right) - \left(\frac{r-1}{2}\right)\ln\!\left(\frac{r-1}{2}\right)$$

**극한 분석:**
- $r \to 0$: $S_{\text{EE}} \to D \cdot N_A N_B \cdot \ln 2$ — 최대 얽힘.
- $r \to \infty$: $S_{\text{EE}} \to 0$ — 얽힘 소멸.

$$\boxed{S_{\text{EE}} = 0 \;\Longleftrightarrow\; Y_a = 0 \;\Longleftrightarrow\; \text{시공간 연결 단절}}$$

비대각 행렬 성분의 양자 상관 $\equiv$ 시공간의 기하학적 연결: **ER = EPR의 행렬 대수적 실현.**

---

## 6. 정보 보존과 페이지 곡선

### 6.1 유니터리성

**정리 6.1.** HNM의 시간 진화는 엄밀하게 유니터리하다.

**증명.** 모든 자유도는 유한 차원 공간 $\text{Mat}_N(\mathbb{C})^{\oplus D}$에 속한다. 해밀토니안 $\hat{H}$는 에르미트이므로 자기수반(self-adjoint). Stone 정리에 의해 $U(t) = e^{-i\hat{H}t}$는 유니터리: $U^\dagger U = \mathbf{1}$. $\square$

**계.** 글로벌 폰 노이만 엔트로피 $S = -\text{Tr}(\rho \ln \rho)$는 시간 불변이다.

### 6.2 페이지 곡선

$\mathcal{H} = \mathcal{H}_R \otimes \mathcal{H}_B$ ($\dim \mathcal{H}_R = d_R$, $\dim \mathcal{H}_B = d_B$)일 때, Haar 평균 부분계 엔트로피(Page 공식):
$$\langle S_R \rangle = \sum_{k=d_B+1}^{d_R d_B}\frac{1}{k} - \frac{d_R - 1}{2d_B} \;\approx\; \ln d_R - \frac{d_R}{2d_B} \quad (d_R \leq d_B)$$

블랙홀 증발 시 $d_R$ 증가, $d_B$ 감소. 페이지 타임 $\tau_P$ ($d_R = d_B$)을 경계로:

| 구간 | $S_R$의 거동 | 물리적 의미 |
|---|---|---|
| $\tau < \tau_P$ | $\approx \ln d_R$ (증가) | 열적 복사 |
| $\tau > \tau_P$ | $\approx \ln d_B$ (감소) | 정보 회수 |
| $\tau = \tau_{\text{evap}}$ | $\to 0$ | 완전 정보 복원 |

$$\boxed{\lim_{\tau \to \tau_{\text{evap}}} S_R(\tau) = 0}$$

유한 차원 힐베르트 공간과 유니터리 진화의 **수학적 필연**.

---

## 7. 빅뱅 특이점의 소멸: 판데르몬데 장벽

### 7.1 고윳값 측도

에르미트 행렬 $X$의 고윳값 $\{x_1, \dots, x_N\}$에 대해, 행렬 적분 측도:
$$dX = \prod_{i<j}(x_i - x_j)^2 \cdot \prod_i dx_i \cdot dU$$

야코비안 $\Delta(x)^2 = \prod_{i<j}(x_i - x_j)^2$는 판데르몬데 결정행렬(Vandermonde determinant)의 제곱이다.

### 7.2 유효 퍼텐셜

경로 적분에서 야코비안을 볼츠만 인자에 흡수하면:
$$V_{\text{eff}} = N\sum_i V(x_i) - 2\sum_{i<j}\ln|x_i - x_j|$$

두 번째 항은 2차원 정전기학의 **로그 쿨롱 반발력**과 동치이다.

### 7.3 특이점 배제

**정리 7.1.** 경로 적분 측도 하에서, 모든 고윳값이 한 점으로 수축할 확률은 정확히 0이다.

**증명.** $x_i = x_j$ ($\forall\, i, j$)에서 $\prod_{i<j}(x_i - x_j)^2 = 0$이므로 측도가 소멸한다. 유효 퍼텐셜의 관점:
$$\lim_{x_i \to x_j}\left[-2\ln|x_i - x_j|\right] = +\infty$$

무한 에너지 장벽.

$$\boxed{P(\text{singularity}) = 0} \quad \square$$

**물리적 귀결.** 우주 수축 시 고윳값 간 로그 반발력이 중력 수축을 압도하여 **빅 바운스(Big Bounce)**가 발생한다. 빅뱅은 특이점이 아닌 이전 수축 주기의 탄성적 반발이다.

---

## 8. 암흑 물질의 기하학적 정체

### 8.1 비가환 공간의 유한 스펙트럼

Fuzzy $CP^2_F$와 $S^2_F$는 유한 개의 조화 함수 모드만을 허용한다. 행렬 크기 $N_{\text{int}}$에 의해 최대 각운동량 $L_{\max} \sim N_{\text{int}}$로 절단된다.

### 8.2 안정한 잔존 모드

**정리 8.1.** $L = L_{\max}$ 최고차 Kaluza-Klein 모드는 절대적으로 안정하다.

**증명.** 연속 공간에서 허용되는 $L_{\max} \to L_{\max} - 1$ 복사 붕괴는 Fuzzy 공간의 이산 스펙트럼에서 에너지-운동량 보존 및 비가환 선택 규칙에 의해 금지된다.
$$\Gamma(L_{\max} \to L') = 0 \quad \square$$

이 모드들은 전자기 중성이며 중력적으로만 상호작용한다. 이것이 **암흑 물질의 기하학적 정체**이다: 여분 차원의 유한 비가환 구조가 보유하는 안정한 기하학적 여기 상태.

---

## 9. 이론의 논리적 구조

단일 작용량 $S_{\text{HNM}}$으로부터의 연역 의존 관계:

```
            공리: U(N) + SO(1,D-1) + N=2 SUSY 불변 유일 작용량
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
     [정리 1.1]      [정리 2.1-2.3]    [Tr_s(D⁴) = 0]
     S_HNM 유일       D = 10 유일      Λ_bulk = 0
            │               │               │
            └───────┬───────┘               │
                    ▼                       │
             [정리 3.1-3.3]                 │
      진공 = M⁴ × CP²_F × S²_F            │
        ├─ G = SU(3)×SU(2)×U(1)           │
        ├─ n_gen = 3                       │
        └─ [정리 8.1] 암흑 물질            │
                    │                       │
                    └───────┬───────────────┘
                            ▼
                  [가설 + 정리 4.1-4.2]
                   H = Ṁ/M,  w = 0
                   가속팽창 ← Ṁ 성장
                            │
               ┌────────────┼────────────┐
               ▼            ▼            ▼
           [§5]        [정리 6.1]   [정리 7.1]
          ER=EPR      페이지 곡선   빅 바운스
       얽힘 = 시공간   정보 보존    P(특이점)=0
```

이 이론에는 조정 가능한 매개변수가 없다. 차원($D = 10$), 게이지 군($SU(3) \times SU(2) \times U(1)$), 물질 세대 수(3), 우주 상수($\Lambda = 0$), 그리고 시공간의 존재 자체가 모두 단일 작용량의 수학적 귀결이다.
