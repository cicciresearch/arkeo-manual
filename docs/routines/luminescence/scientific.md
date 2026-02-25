# Photoluminescence (PL)

## Scientific Introduction

Photoluminescence (PL) is a non-contact optical characterization technique used to probe the radiative recombination processes in semiconducting materials and photovoltaic devices. When a material absorbs photons with energy greater than its bandgap, electron-hole pairs are generated. The subsequent recombination of these charge carriers may result in the emission of photons, which is detected as
photoluminescence.

PL measurements provide insight into:

-   Bandgap energy
-   Defect states and trap-assisted recombination
-   Carrier lifetimes
-   Radiative efficiency
-   Quasi-Fermi level splitting (QFLS)

Because PL is directly linked to recombination mechanisms, it is a powerful diagnostic tool for evaluating material quality and device performance.

---

## Fundamental Principle

Upon excitation with photons of energy $h\nu_{exc} > E_g$, electrons are promoted from the valence band to the conduction band, leaving behind holes. The system relaxes toward equilibrium via several recombination pathways:

-   Radiative recombination
-   Shockley-Read-Hall (SRH) recombination
-   Auger recombination

Radiative recombination results in photon emission with energy approximately equal to the bandgap, thus the peak position indicates the effective bandgap:
$$
h\nu_{em} \approx E_g
$$
The measured PL intensity $I_{PL}$ is proportional to the radiative
recombination rate:
$$
I_{PL} \propto B n p
$$
where:

-   $B$ is the radiative recombination coefficient
-   $n$ and $p$ are the electron and hole concentrations

---

## Quasi-Fermi Level Splitting

Under steady-state illumination, separate quasi-Fermi levels for electrons ($E_{F,n}$) and holes ($E_{F,p}$) are established. The splitting between these levels determines the maximum achievable open-circuit voltage:
$$
\Delta E_F = E_{F,n} - E_{F,p}
$$
The emitted PL intensity is exponentially related to the quasi-Fermi
level splitting:
$$
I_{PL} \propto \exp\left(\frac{\Delta E_F}{k_B T}\right)
$$
Thus, absolute PL measurements can be used to determine the implied
open-circuit voltage ($V_{oc}^{implied}$):
$$
q V_{oc}^{implied} = \Delta E_F
$$
