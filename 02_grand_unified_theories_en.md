# 02. Grand Unified Theories (GUT)

This document analyzes **Grand Unified Theories (GUTs)**, attempts to unify electromagnetism, the weak interaction, and the strong interaction into a single mathematical gauge symmetry. It focuses on core hypotheses, gauge structures, and experimental limitations.

---

## 1. Motivation and Running Coupling Constants

In quantum field theory, coupling strengths vary with energy due to vacuum polarization. This scale dependence is described by renormalization group equations.

* **Behavior of the couplings:**
  * Electromagnetic coupling $g_1$ ($U(1)$): increases at high energy.
  * Weak coupling $g_2$ ($SU(2)$): decreases at high energy.
  * Strong coupling $g_3$ ($SU(3)$): decreases rapidly at high energy due to asymptotic freedom.

```
   Coupling Strength
     ^
     |      / g1
     |     /
     |    /----------- g2
     |   /
     |  /___________________ g3
     |
     +-----------------------------------> Energy Scale (GeV)
                            GUT Scale (~10^16 GeV)
```

Extrapolating the Standard Model couplings to high energy shows that the three couplings nearly converge around $10^{15}$ to $10^{16}$ GeV, but they do not meet at exactly one point. This suggests that new high-energy physics may be needed.

---

## 2. The Minimal Georgi-Glashow $SU(5)$ Model

The first simple GUT was proposed by Howard Georgi and Sheldon Glashow in 1974. It uses the smallest simple gauge group that contains the Standard Model gauge group:

$$SU(3)_C \times SU(2)_L \times U(1)_Y \subset SU(5)$$

### Gauge Bosons

$SU(5)$ has $5^2 - 1 = 24$ generators.

* **Standard Model gauge bosons:** 12 total: photon, $W^\pm$, $Z^0$, and eight gluons.
* **New heavy gauge bosons:** 12 total: the $X$ and $Y$ bosons, which connect quarks and leptons and carry both color and electroweak quantum numbers.

### Fermion Embedding

In the $SU(5)$ model, the 15 fermions of one generation, excluding a right-handed neutrino, fit into the $\bar{5}$ and $10$ representations:

$$\psi_{\bar{5}} = \begin{pmatrix} d^R_1 \\ d^R_2 \\ d^R_3 \\ e^- \\ -\nu_e \end{pmatrix}_L$$

$$\chi_{10} = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 & u^C_3 & -u^C_2 & u_1 & d_1 \\ -u^C_3 & 0 & u^C_1 & u_2 & d_2 \\ u^C_2 & -u^C_1 & 0 & u_3 & d_3 \\ -u_1 & -u_2 & -u_3 & 0 & e^+ \\ -d_1 & -d_2 & -d_3 & -e^+ & 0 \end{pmatrix}_L$$

### Charge Quantization

In the Standard Model, charge quantization is inserted through representation choices. In $SU(5)$, quarks and leptons belong to common multiplets, and the tracelessness condition of the generator implies:

$$3Q(d) + Q(e^-) = 0 \implies Q(d) = -\frac{1}{3}Q(e^-)$$

This naturally explains why the down-type quark charge is one third of the electron charge.

---

## 3. The Failure of Minimal $SU(5)$: Proton Decay

The critical prediction of minimal $SU(5)$ is that the proton is not absolutely stable.

```
       X/Y boson exchange
  u -------\             /------ e+
            \           /
             ======== X/Y (~10^15 GeV)
            /           \
  u -------/             \------ anti-u
  d ---------------------------- d
  proton p                       neutral pion pi0
```

Heavy $X$ and $Y$ bosons mediate transitions between quarks and leptons:

$$p \rightarrow e^+ + \pi^0$$

The predicted proton lifetime in minimal $SU(5)$ is roughly:

$$\tau_p \approx \frac{M_X^4}{\alpha_{GUT}^2 m_p^5} \sim 10^{30\sim31} \text{ years}$$

Experiments such as Super-Kamiokande have placed much stronger lower bounds on the proton lifetime, excluding the minimal $SU(5)$ model.

---

## 4. More Advanced GUT Frameworks

### $SO(10)$

$SO(10)$ extends $SU(5)$ and has 45 generators. One full fermion generation, including a right-handed neutrino, fits into a single 16-dimensional spinor representation.

Advantages:

* It naturally incorporates the seesaw mechanism for tiny neutrino masses.
* It allows richer symmetry-breaking chains, which can raise the proton lifetime.

### Supersymmetric GUTs

Supersymmetric GUTs combine grand unification with supersymmetry.

Advantages:

* Supersymmetric particles modify the renormalization group flow, allowing gauge couplings to meet more accurately near $M_{GUT} \approx 2 \times 10^{16}$ GeV.
* Heavy $X$ and $Y$ boson masses can be pushed higher, helping evade proton decay limits.

Limitations:

* No superpartners have been observed at the LHC so far, weakening the empirical support for low-energy supersymmetry.

---

## 5. Unresolved Problems

1. **Doublet-Triplet Splitting:**  
   In $SU(5)$, the Higgs multiplet contains both the light electroweak Higgs doublet and a heavy color triplet. Explaining why one remains near 125 GeV while the other must be near the GUT or Planck scale is difficult.

2. **Magnetic Monopoles:**  
   GUT symmetry breaking generically predicts heavy magnetic monopoles in the early universe. None have been observed.

3. **Experimental Inaccessibility:**  
   The GUT scale is far beyond the reach of terrestrial accelerators. Tests must rely on indirect signatures such as proton decay, neutrino physics, or cosmological relics.
