# 01. 전기약작용 이론 (Electroweak Theory)

본 문서는 대통일장 이론으로 나아가는 첫 번째 이정표이자 물리학 역사상 가장 성공적인 통합 사례 중 하나인 **전기약작용 이론(Electroweak Theory, GWS 모형)**의 수학적 구조, 대칭성 깨짐 메커니즘, 그리고 이론적 한계를 상세히 분석합니다.

---

## 1. 수학적 기초 및 게이지 대칭성

전기약작용 이론은 양자 전기역학(QED)의 $U(1)_{EM}$ 게이지 대칭성과 약한 상호작용의 $SU(2)_L$ 게이지 대칭성을 결합한 **$SU(2)_L \times U(1)_Y$** 군 구조를 기본 대칭성으로 취합니다.

* **$SU(2)_L$ (약한 아이소스핀, Weak Isospin)**:
  * 왼손잡이(Left-handed) 페르미온들만 결합하는 대칭성입니다. (우주는 약력에 대해 패리티 대칭성을 최대로 위배함)
  * 이 대칭성을 매개하기 위해 3개의 게이지장 $W_\mu^a \, (a=1,2,3)$가 존재합니다.
* **$U(1)_Y$ (약한 하이퍼차지, Weak Hypercharge)**:
  * 전하 $Q$와 약한 아이소스핀의 3성분 $T_3$ 사이에는 다음과 같은 겔만-니시지마(Gell-Mann-Nishijima) 관계식이 성립합니다.
    $$Q = T_3 + \frac{Y}{2}$$
  * 이 대칭성을 매개하기 위해 1개의 게이지장 $B_\mu$가 존재합니다.

---

## 2. 전기약작용 라그랑지안 (Lagrangian)

전기약작용을 기술하는 전체 라그랑지안은 크게 네 가지 항으로 나뉩니다.

$$\mathcal{L}_{EW} = \mathcal{L}_{gauge} + \mathcal{L}_{fermion} + \mathcal{L}_{Higgs} + \mathcal{L}_{Yukawa}$$

### ① 게이지항 ($\mathcal{L}_{gauge}$)
게이지장의 운동에너지와 자체 상호작용을 결정하는 항입니다. $SU(2)$는 비아벨 군(Non-Abelian Group)이므로 매개입자들끼리 상호작용할 수 있습니다.
$$\mathcal{L}_{gauge} = -\frac{1}{4}W_{\mu\nu}^a W^{\mu\nu a} - \frac{1}{4}B_{\mu\nu}B^{\mu\nu}$$
여기서 장강도 텐서(Field Strength Tensor)는 다음과 같이 정의됩니다.
$$W_{\mu\nu}^a = \partial_\mu W_\nu^a - \partial_\nu W_\mu^a + g \epsilon^{abc} W_\mu^b W_\nu^c$$
$$B_{\mu\nu} = \partial_\mu B_\nu - \partial_\nu B_\mu$$

### ② 페르미온항 ($\mathcal{L}_{fermion}$)
기본 입자(쿼크와 경입자)들과 게이지장 사이의 동역학적 상호작용을 기술합니다. 공변 도함수(Covariant Derivative) $D_\mu$를 도입하여 게이지 불변성을 보장합니다.
$$\mathcal{L}_{fermion} = \bar{\psi}_L i \gamma^\mu D_\mu \psi_L + \bar{\psi}_R i \gamma^\mu D_\mu \psi_R$$
$$D_\mu = \partial_\mu - i g T^a W_\mu^a - i g' \frac{Y}{2} B_\mu$$
* 왼손잡이 페르미온 이중항($\psi_L$)과 오른손잡이 페르미온 단일항($\psi_R$)의 공변 도함수 형태가 다른 것이 핵심입니다.

---

## 3. 자발적 대칭성 깨짐과 힉스 메커니즘 (Higgs Mechanism)

게이지 불변성을 유지하면서 질량이 없는 게이지 보손들과 페르미온들에게 질량을 부여하기 위해 **힉스 메커니즘**이 도입됩니다.

### ① 힉스 포텐셜 (Higgs Potential)
힉스 장은 복소 이중항(Complex Doublet) 스칼라 장 $\Phi$로 나타내며, 포텐셜 $V(\Phi)$는 타코야키/멕시코 모자 모양의 대칭성을 가집니다.
$$\mathcal{L}_{Higgs} = (D_\mu \Phi)^\dagger (D^\mu \Phi) - V(\Phi)$$
$$V(\Phi) = \mu^2 \Phi^\dagger \Phi + \lambda (\Phi^\dagger \Phi)^2 \quad (\mu^2 < 0, \, \lambda > 0)$$

```
          V(Φ)
           |
         _.-.-._     <-- 원점(Φ=0)은 불안정함
       .'   |   '.
      /     |     \  
     |    __|__    |
     |   /  |  \   |
  ---|--|---|---|--|----> |Φ|
      \  '. | .'  /
       '.__\|/__.'   <-- 최저 에너지 상태 (진공기댓값 v)
```

원점 $\Phi = 0$은 극대점이 되어 불안정하므로, 실제 진공은 기댓값 $v$를 가지는 바닥 상태 중 하나를 무작위로 선택하게 됩니다. (자발적 대칭성 깨짐)
$$\langle \Phi \rangle_0 = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ v \end{pmatrix}, \quad v = \sqrt{\frac{-\mu^2}{\lambda}} \approx 246 \text{ GeV}$$

### ② 대칭성 깨짐의 결과: 게이지 보손의 질량 획득
대칭성이 $SU(2)_L \times U(1)_Y \rightarrow U(1)_{EM}$으로 물리적으로 깨지면서 4개의 게이지 자유도 중 3개가 게이지 보손의 종파(Longitudinal) 성분으로 흡수되어 질량을 가지게 됩니다.

1. **전하를 띤 게이지 보손 ($W^\pm$)**:
   $$W_\mu^\pm = \frac{1}{\sqrt{2}}(W_\mu^1 \mp i W_\mu^2) \implies M_W = \frac{1}{2}gv$$
2. **중성 게이지 보손 ($Z^0, A_\mu$)**:
   $W_\mu^3$와 $B_\mu$가 혼합(Mixing)되어 물리적인 무거운 보손 $Z^0$와 질량이 없는 광자(Photon, $A_\mu$)를 형성합니다.
   $$\begin{pmatrix} A_\mu \\ Z_\mu \end{pmatrix} = \begin{pmatrix} \cos\theta_W & \sin\theta_W \\ -\sin\theta_W & \cos\theta_W \end{pmatrix} \begin{pmatrix} B_\mu \\ W_\mu^3 \end{pmatrix}$$
   * 여기서 $\theta_W$는 **와인버그 각(Weinberg Angle)**입니다.
   * 질량: $M_Z = \frac{1}{2}\sqrt{g^2+g'^2}v$, $M_A = 0$ (전자기력은 여전히 장거리 힘으로 남음)

---

## 4. 유카와 결합과 페르미온 질량 (Yukawa Coupling)

페르미온(쿼크, 렙톤)의 경우 직접적인 질량항($m\bar{\psi}\psi = m(\bar{\psi}_L\psi_R + \bar{\psi}_R\psi_L)$)을 라그랑지안에 넣으면 게이지 대칭성을 정면으로 위배하게 됩니다. 따라서 힉스 장과의 **유카와 상호작용**을 통해 간접적으로 질량을 획득합니다.
$$\mathcal{L}_{Yukawa} = -y_f \left( \bar{\psi}_L \Phi \psi_R + \bar{\psi}_R \Phi^\dagger \psi_L \right)$$
자발적 대칭성 깨짐 이후 $\Phi \rightarrow \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ v+h \end{pmatrix}$를 대입하면 다음과 같은 페르미온 질량항이 생성됩니다.
$$m_f = \frac{y_f v}{\sqrt{2}}$$
* 각 입자의 질량은 유카와 결합 상수 $y_f$의 크기에 비례합니다.

---

## 5. 실험적 검증 및 성공 사례

* **약력 매개입자 발견 (1983년, CERN)**: UA1 및 UA2 실험을 통해 $W$와 $Z$ 보손의 존재 및 예측된 질량이 정확히 측정되었습니다.
* **힉스 보손 발견 (2012년, CERN LHC)**: 약 125 GeV 질량 영역에서 힉스 스칼라 보손이 발견되며 자발적 대칭성 깨짐 메커니즘의 실재성이 증명되었습니다.

---

## 6. 전기약작용 이론의 치명적 한계점

이론적 성공에도 불구하고 GWS 전기약 이론은 상위 통합 이론(GUT, ToE)을 필요로 하는 심각한 내부적 문제를 내포하고 있습니다.

### ① 게이지 계층 문제 (Gauge Hierarchy Problem)
- **개념**: 힉스 보손의 질량 제곱($m_H^2$)은 양자 보정(Quantum Correction)을 받는데, 이 보정값은 이론의 차단 에너지(Cut-off Energy, 예: 플랑크 에너지 $\Lambda_{Pl} \sim 10^{19}$ GeV)의 제곱에 비례합니다.
  $$m_{H,\text{phys}}^2 = m_{H,\text{bare}}^2 + \delta m_H^2 \approx m_{H,\text{bare}}^2 + \mathcal{O}(1)\Lambda_{Pl}^2$$
- **모순**: 실제 측정된 힉스 질량은 $\sim 10^2$ GeV인데, 양자 보정은 $\sim 10^{38}$ GeV$^2$에 달합니다. 물리적 질량을 $125$ GeV로 유지하려면 맨 질량($m_{H,\text{bare}}^2$)이 소수점 아래 34자리까지 **미세 조정(Fine-tuning)**되어 보정값과 정밀하게 상쇄되어야 합니다. 이는 물리학적으로 매우 부자연스럽습니다(Naturalness 결여).

### ② 유카와 질량 파라미터의 자의성
- 표준모형은 페르미온들의 질량 차이(예: 탑 쿼크는 전자에 비해 약 34만 배 무거움)가 왜 발생하는지 설명하지 못합니다. 단지 각 입자의 유카와 결합 상수($y_f$) 값을 실험값에 맞추어 임의로 대입할 뿐입니다.

### ③ 중성미자 질량 문제
- 표준모형 원래의 정식화에서는 오른손잡이 중성미자가 존재하지 않아 중성미자 질량이 정확히 0이어야 하지만, 실험적으로 **중성미자 진동 변환(Neutrino Oscillation)**이 발견되어 미세하지만 중성미자가 질량을 가지고 있음이 입증되었습니다. 이는 표준모형 외부의 새로운 물리가 필요함을 강력히 시사합니다.
