# HNM 압축 요약본: 풀버전 이론서의 압축 정리

이 문서는 **[06. HNM 풀버전 이론서](#doc=06_horizon_unification_math.md)**의 내용을 웹에서 빠르게 읽을 수 있도록 압축한 요약본이다. 독립적인 별도 이론이나 다른 버전의 주장이 아니라, 풀버전 문서의 핵심 구조, 주요 방정식, 물리적 해석, 실험 예측을 같은 순서와 같은 의미로 정리한 것이다.

---

## 1. 출발점: 지평선 비가환 행렬 이론의 기본 공리

HNM은 시공간을 선험적인 연속 다양체로 두지 않고, 근본적으로는 유한 차원의 비가환 좌표 대수에서 출발한다.

$$\mathcal{A} = \mathrm{Mat}_N(\mathbb{C})$$

이 대수 위의 물리적 정보는 비가환 스펙트럼 삼조

$$
(\mathcal{A}, \mathcal{H}, \mathcal{D}, \gamma_5, J)
$$

로 표현되며, 모든 기하학적·물리적 구조는 하나의 슈퍼 디랙 연산자에서 추출된다.

$$
\mathcal{D} =
\begin{pmatrix}
0 & Q \\
Q^\dagger & 0
\end{pmatrix},
\qquad
Q = \Gamma^a \otimes X_a + \Psi
$$

여기서 $X_a$는 비가환 좌표 행렬이고, $\Psi$는 마요라나-바일 스피너 장이다. 거시적 저에너지 극한에서는 이 순수 행렬 대수의 응집으로부터 유효 좌표 대수가 나타난다.

$$
\mathcal{A}_{\mathrm{eff}}
\cong
\mathcal{C}_0(M^4) \otimes \mathcal{A}_F
$$

따라서 HNM에서 연속 시공간은 근본 공리가 아니라 큰 $N$ 극한에서 보이는 유효 기술이다.

---

## 2. 지평선 해석: 공간, 시간, 정보 한계의 공통 기원

풀버전의 핵심 해석은 “지평선”을 이미 존재하는 시공간 안의 경계가 아니라, 관찰 가능한 정보 용량의 대수적 한계로 보는 것이다. 행렬 액적의 크기와 지평선 면적은 같은 정보량을 표현한다.

$$
N \propto R_H^2
$$

이 관점에서 다음의 물리적 한계들은 같은 구조의 다른 표현이 된다.

- 빛의 유한한 속도: 유한 행렬계의 정보 전달 한계
- 최소 길이: 비가환 좌표의 불확정성
- 중력: 지평선 얽힘 엔트로피의 열역학적 반응
- 시간의 흐름: 행렬 표현 차원의 성장 $N \to N+1$

즉, HNM의 기본 그림은 “우리가 보는 부드러운 시공간은 유한 차원 행렬 대수의 거시적 사영”이라는 것이다.

---

## 3. 2차 양자화된 행렬 포크 공간과 우주 팽창

우주의 팽창은 고정된 배경 공간의 metric expansion이 아니라, 행렬 표현 차원 자체가 동적으로 증가하는 과정으로 정식화된다.

$$
\mathcal{H}_{\mathrm{Fock}}
=
\bigoplus_{N=1}^{\infty} \mathcal{H}_N,
\qquad
\mathcal{H}_N =
L^2(\mathfrak{u}(N)^D)
\otimes
\mathcal{H}_{\mathrm{spinor}}^{(N)}
$$

새로운 좌표 자유도는 생성 연산자에 의해 추가된다.

$$
\hat{\Phi}^\dagger(M)\,|\Psi_N\rangle
=
|\Psi_{N+1}\rangle
$$

이 전이는 전이 해밀토니안으로 표현된다.

$$
\hat{H}_{\mathrm{trans}}
=
\sum_N g_N \int dM\, e^{iS_{\mathrm{WZW}}}
\left(
\hat{\Phi}^\dagger(M)_{N\to N+1}
+
\hat{\Phi}(M)_{N+1\to N}
\right)
$$

풀버전에서 이 구조는 우주 팽창, 시간의 방향성, 지평선 정보 용량 증가를 하나의 대수적 과정으로 묶는 역할을 한다.

---

## 4. 마스터 작용량과 카이랄 동역학

HNM의 기본 동역학은 카이랄 스펙트럼 작용량으로 주어진다.

$$
S_{\mathrm{HNM}}[\mathcal{D}]
=
\mathrm{Tr}\!\left((QQ^\dagger)^2\right)
$$

풀버전은 퍼지 액적 경계 조건

$$
\sum_{a=1}^{D} X_a X^a = R^2 \mathbf{1}
$$

하에서 이 작용량이 IKKT/BFSS형 행렬 작용량으로 환원됨을 보인다.

$$
S_{\mathrm{HNM}}
=
-\frac{1}{4}\mathrm{Tr}([X_a,X_b]^2)
+
\frac{1}{2}\mathrm{Tr}(\bar{\Psi}\Gamma^a[X_a,\Psi])
$$

이 식은 풀버전 전체의 중심 방정식이며, 이후 중력, 게이지 장, 페르미온 방정식의 공통 출발점으로 사용된다.

---

## 5. 초대칭 워드 항등식과 진공 에너지 상쇄

슈퍼 디랙 연산자는 다음의 초대각합 항등식을 가진다.

$$
\mathrm{Tr}_{s}(\mathcal{D}^4)
=
\mathrm{Tr}((QQ^\dagger)^2)
-
\mathrm{Tr}((Q^\dagger Q)^2)
\equiv 0
$$

이 항등식은 카이랄 동역학 자체를 0으로 만드는 것이 아니라, 보손적·페르미온적 스펙트럼 짝지음이 벌크 진공 에너지 항을 상쇄하는 대수적 구속 조건으로 해석된다. 풀버전에서는 이것이 우주 상수 문제를 다루는 UV/IR 이중 상쇄 구조의 한 축으로 제시된다.

---

## 6. 고전 극한: 중력, 양-밀스 이론, 디랙 방정식

행렬 작용량의 변분은 보손 운동 방정식을 준다.

$$
[X^b,[X_b,X_a]]
+
\frac{1}{2}\bar{\Psi}\Gamma_a\Psi
=0
$$

큰 $N$ 극한에서 행렬 교환자는 장세기와 곡률로 해석된다.

$$
[X_\mu,X_\nu]
\to
i\theta_{\mu\nu}\mathbf{1}
+
i\theta_{\mu\rho}\theta_{\nu\sigma}F^{\rho\sigma}
$$

이를 통해 풀버전은 Yang-Mills 방정식, 곡선 시공간의 Dirac 방정식, 그리고 Einstein-Hilbert 작용량이 같은 행렬 동역학의 서로 다른 유효 표현으로 등장한다고 정리한다.

뉴턴 상수는 내부 퍼지 공간의 고정된 표현 차원 $N_{\mathrm{int}}$와 UV 길이 스케일로 표현된다.

$$
\frac{1}{G_N}
=
\frac{2\pi N_{\mathrm{int}}^2}{\ell_{\mathrm{uv}}^2}
$$

여기서 우주 팽창을 나타내는 $N_{\mathrm{cosm}}$과 내부 공간 차원 $N_{\mathrm{int}}$를 분리하여, $G_N$이 시간에 따라 변하지 않는 물리 상수로 유지된다는 해석을 둔다.

---

## 7. $D=10$, 팔원수, 이상 상쇄

풀버전은 초대칭 변환의 일관성을 위해 Fierz 항등식이 필요하다고 본다.

$$
\Gamma^a_{\alpha(\beta}
\Gamma_{a\,\gamma\delta)}
=0
$$

이 조건은 횡단 차원의 노름 나눗셈 대수 구조와 연결된다.

$$
D-2 \in \{1,2,4,8\}
\quad\Rightarrow\quad
D \in \{3,4,6,10\}
$$

마요라나-바일 스피너 조건과 결합하면 $D=10$이 선택되는 구조가 된다. 풀버전은 이를 팔원수, 예외군, 비가환 지수 정리, anomaly cancellation, $E_8$ 계열 대칭성 논의로 확장한다.

---

## 8. 표준모형 게이지군과 퍼지 콤팩트화

10차원 좌표 행렬은 거시 4차원 부문과 내부 6차원 퍼지 공간으로 분해된다.

$$
M^4 \times CP^2_F \times S^2_F
$$

내부 좌표는 $SU(3)$ 및 $SU(2)$ 생성자로 표현되고, 저에너지에서는 거의-가환 대수가 등장한다.

$$
\mathcal{A}_F
\cong
\mathbb{C}
\oplus
\mathbb{H}
\oplus
\mathrm{Mat}_3(\mathbb{C})
$$

단모듈성 조건을 가하면 표준모형 게이지군이 유도된다.

$$
SU(3)\times SU(2)\times U(1)
$$

풀버전은 같은 장에서 퍼지 콤팩트화의 안정성, Hessian 스펙트럼, 3세대의 위상학적 지수, 힉스 장의 스펙트럼 기원, 중성미자 질량, K-이론적 D-브레인 전하 분류까지 연결한다.

---

## 9. 우주론: 자유 확률, 인스턴톤 터널링, 판데르몬데 장벽

행렬 고윳값들의 분포는 자유 확률론적 액적으로 해석된다. 지평선은 이 액적의 스펙트럼 경계이고, 외부 고윳값이 액적으로 터널링하는 과정이 차원 성장과 우주 팽창을 만든다.

터널링률은 인스턴톤 작용량으로 표현된다.

$$
\gamma(N)
\propto
\exp(-S_{\mathrm{inst}}/\hbar)
$$

큰 $N$ 극한에서 이 전이는 점근적으로 de Sitter 팽창을 주는 토이 모델로 정리된다.

$$
q_{\mathrm{vacuum}}=-1
$$

또한 행렬 대각화 측도에서 나오는 판데르몬데 행렬식

$$
dX
=
\prod_{i<j}(\lambda_i-\lambda_j)^2
\prod_i d\lambda_i
$$

은 고윳값 충돌을 억제하는 로그 반발력으로 작용한다. 풀버전은 이를 빅뱅 특이점이 $a\to0$에서 확률적으로 억제되고 빅 바운스로 대체되는 근거로 사용한다.

---

## 10. ER = EPR, 암흑 물질, 정보 역설

풀버전의 7장은 비대각 행렬 자유도를 얽힘 채널로 해석한다. 이 채널은 ER = EPR 관점에서 시공간 연결성의 대수적 기원으로 제시된다.

암흑 물질은 내부 퍼지 공간의 최대 각운동량 Kaluza-Klein 잔존물로 해석된다.

$$
|\Psi_{\mathrm{DM}}\rangle
=
\sum_{M=-L_{\max}}^{L_{\max}}
C_M |L_{\max},M\rangle
\otimes
|\mathrm{vac}_{\mathrm{gauge}}\rangle
$$

거시 극한에서는 압력이 거의 없는 차가운 암흑 물질처럼 거동한다.

$$
\rho_{\mathrm{DM}}(t)\propto a(t)^{-3},
\qquad
p(t)\equiv0
$$

같은 장에서 블랙홀 정보 역설, 페이지 곡선, 양자 오류 정정, fuzzball, MERA, loop quantum gravity spin network와의 대응, 복잡도 가설까지 풀버전의 확장 해석으로 정리된다.

---

## 11. 모듈러 시간, 열역학적 중력, 우주의 파동함수

HNM에서 근본 시간은 외부 매개변수가 아니라 Tomita-Takesaki 모듈러 흐름에서 창발한다.

$$
\sigma_s(A)
=
\Delta^{-is}A\Delta^{is}
$$

KMS 조건과 모듈러 해밀토니안

$$
\hat{K}_V=-\ln\Delta_V
$$

은 지평선 열역학과 연결된다. 얽힘 엔트로피 제1법칙

$$
\delta S_{\mathrm{EE}}
=
\delta\langle \hat{K}_V\rangle
$$

을 국소 인과 다이아몬드에 적용하면, 풀버전은 Einstein 방정식이 행렬 얽힘 진공의 열역학적 상태 방정식으로 창발한다고 해석한다.

$$
R_{\mu\nu}
-
\frac{1}{2}Rg_{\mu\nu}
+
\Lambda g_{\mu\nu}
=
8\pi G_N T_{\mu\nu}
$$

또한 Wheeler-DeWitt형 우주 파동함수

$$
\left[
-\frac{\partial^2}{\partial a^2}
+
V_{\mathrm{eff}}(a)
\right]\Psi(a)
=0
$$

을 통해 판데르몬데 장벽과 암흑 에너지 항을 같은 유효 퍼텐셜 안에 배치한다.

---

## 12. 정량적 예측

풀버전의 10장은 HNM을 기존 중력 이론 및 끈 이론과 구분하기 위한 관측 가능 신호를 정리한다.

| 관측 대상 | HNM 요약 예측 |
| --- | --- |
| 최소 길이 | $\Delta x_{\min}\approx 1.00005\,\ell_P$ |
| 면적 양자화 | $A_N=4\ln(2)\ell_P^2N^2$ |
| 호킹 방출선 | $\omega_N=\frac{\ln(2)c^3(2N-1)}{8\pi G_N\hbar M}$ |
| KK 암흑 물질 질량 | $m_{\mathrm{DM}}\sim10^{13}\,\mathrm{GeV}$ 범주 |
| 원시 중력파 | $n_T=+0.0215\pm0.0005$ |
| 홀로그래픽 노이즈 | 종방향 위상 잡음 $S_x(f)\sim \ell_P L$ |

요약본의 수치와 방정식은 풀버전의 예측 장에서 가져온 것이며, 별도의 독립 예측을 추가하지 않는다.

---

## 13. 끈 이론의 창발과 전체 연역 구조

마지막으로 풀버전은 행렬 경로적분의 't Hooft 전개를 통해 끈 세계면이 행렬 리본 그래프의 큰 $N$ 극한으로 창발한다고 본다.

$$
F(\lambda,N)
=
\sum_{g=0}^{\infty}
N^{2-2g}\mathcal{F}_g(\lambda)
$$

따라서 끈 이론은 HNM의 근본 출발점이 아니라, 행렬 이론의 섭동적 그림자로 해석된다. 전체 문서는 마지막에 하나의 분배함수로 압축된다.

$$
Z_{\mathrm{Universe}}
=
\int \mathcal{D}X\,\mathcal{D}\Psi\,
\exp\!\left(
-\mathrm{Tr}((QQ^\dagger)^2)
\right)
$$

이 요약본은 바로 이 구조를 빠르게 읽기 위한 안내문이며, 세부 계산과 확장 논의는 **[06. HNM 풀버전 이론서](#doc=06_horizon_unification_math.md)**에 있다.
