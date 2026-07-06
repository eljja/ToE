# 01. Electroweak Theory

This document analyzes the **Electroweak Theory** (the Glashow-Weinberg-Salam model), one of the most successful unification frameworks in modern physics and the first milestone toward grand unification. It focuses on the mathematical structure, gauge symmetry, spontaneous symmetry breaking, and theoretical limitations of the theory.

---

## 1. Mathematical Foundation and Gauge Symmetry

Electroweak theory combines quantum electrodynamics (QED) and the weak interaction through the gauge group:

$$SU(2)_L \times U(1)_Y$$

* **$SU(2)_L$ (Weak Isospin):**
  * This symmetry acts only on left-handed fermions, reflecting the maximal parity violation of the weak interaction.
  * It is mediated by three gauge fields $W_\mu^a$ with $a=1,2,3$.
* **$U(1)_Y$ (Weak Hypercharge):**
  * Electric charge $Q$ and weak isospin $T_3$ are related by the Gell-Mann-Nishijima relation:
    $$Q = T_3 + \frac{Y}{2}$$
  * This symmetry is mediated by one gauge field $B_\mu$.

---

## 2. Electroweak Lagrangian

The electroweak Lagrangian is decomposed into four main sectors:

$$\mathcal{L}_{EW} = \mathcal{L}_{gauge} + \mathcal{L}_{fermion} + \mathcal{L}_{Higgs} + \mathcal{L}_{Yukawa}$$

### Gauge Sector

The gauge sector determines the kinetic energy and self-interactions of the gauge fields. Since $SU(2)$ is non-Abelian, its gauge bosons self-interact:

$$\mathcal{L}_{gauge} = -\frac{1}{4}W_{\mu\nu}^a W^{\mu\nu a} - \frac{1}{4}B_{\mu\nu}B^{\mu\nu}$$

The field strength tensors are:

$$W_{\mu\nu}^a = \partial_\mu W_\nu^a - \partial_\nu W_\mu^a + g \epsilon^{abc} W_\mu^b W_\nu^c$$
$$B_{\mu\nu} = \partial_\mu B_\nu - \partial_\nu B_\mu$$

### Fermion Sector

The fermion sector describes the dynamics of quarks and leptons coupled to the gauge fields. Gauge invariance is maintained through the covariant derivative:

$$\mathcal{L}_{fermion} = \bar{\psi}_L i \gamma^\mu D_\mu \psi_L + \bar{\psi}_R i \gamma^\mu D_\mu \psi_R$$
$$D_\mu = \partial_\mu - i g T^a W_\mu^a - i g' \frac{Y}{2} B_\mu$$

The key feature is that left-handed fermions form weak doublets, while right-handed fermions are weak singlets.

---

## 3. Spontaneous Symmetry Breaking and the Higgs Mechanism

Gauge bosons and fermions cannot receive explicit mass terms without breaking gauge invariance. The Higgs mechanism solves this by introducing a complex scalar doublet $\Phi$.

### Higgs Potential

The Higgs field is represented by a complex doublet with the potential:

$$\mathcal{L}_{Higgs} = (D_\mu \Phi)^\dagger (D^\mu \Phi) - V(\Phi)$$
$$V(\Phi) = \mu^2 \Phi^\dagger \Phi + \lambda (\Phi^\dagger \Phi)^2 \quad (\mu^2 < 0, \, \lambda > 0)$$

The point $\Phi=0$ is unstable, so the vacuum selects a nonzero expectation value:

$$\langle \Phi \rangle_0 = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ v \end{pmatrix}, \quad v = \sqrt{\frac{-\mu^2}{\lambda}} \approx 246 \text{ GeV}$$

### Gauge Boson Masses

The symmetry is broken as:

$$SU(2)_L \times U(1)_Y \rightarrow U(1)_{EM}$$

Three gauge degrees of freedom are absorbed into longitudinal components of massive gauge bosons.

1. **Charged gauge bosons:**
   $$W_\mu^\pm = \frac{1}{\sqrt{2}}(W_\mu^1 \mp i W_\mu^2) \implies M_W = \frac{1}{2}gv$$

2. **Neutral gauge bosons:**
   $$\begin{pmatrix} A_\mu \\ Z_\mu \end{pmatrix} = \begin{pmatrix} \cos\theta_W & \sin\theta_W \\ -\sin\theta_W & \cos\theta_W \end{pmatrix} \begin{pmatrix} B_\mu \\ W_\mu^3 \end{pmatrix}$$

Here $\theta_W$ is the Weinberg angle. The masses are:

$$M_Z = \frac{1}{2}\sqrt{g^2+g'^2}v, \qquad M_A = 0$$

The photon remains massless, so electromagnetism remains a long-range force.

---

## 4. Yukawa Couplings and Fermion Masses

Direct fermion mass terms of the form $m\bar{\psi}\psi$ violate electroweak gauge symmetry because left- and right-handed fermions transform differently. Fermions therefore acquire mass through Yukawa couplings to the Higgs field.

After spontaneous symmetry breaking,

$$\Phi \rightarrow \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ v+h \end{pmatrix}$$

and the Yukawa terms generate fermion masses. Each fermion mass is proportional to its Yukawa coupling $y_f$.

---

## 5. Experimental Validation

* **Discovery of the weak bosons (1983, CERN):** The UA1 and UA2 experiments discovered the $W$ and $Z$ bosons with masses consistent with electroweak predictions.
* **Discovery of the Higgs boson (2012, CERN LHC):** A scalar boson near 125 GeV was observed, validating the spontaneous symmetry breaking mechanism.

---

## 6. Major Limitations

### Gauge Hierarchy Problem

The Higgs mass squared receives quantum corrections proportional to the square of the cutoff scale. If the cutoff is near the Planck scale, the correction is of order $10^{38}\text{ GeV}^2$, while the observed Higgs mass is around $10^2\text{ GeV}$. Maintaining the observed value requires extreme fine-tuning.

### Arbitrary Yukawa Parameters

The Standard Model does not explain why fermion masses differ so dramatically. It simply inserts Yukawa couplings by hand to match experiments.

### Neutrino Masses

In the original Standard Model, neutrinos are massless because right-handed neutrinos are absent. Neutrino oscillation experiments show that neutrinos have small but nonzero masses, indicating physics beyond the Standard Model.
