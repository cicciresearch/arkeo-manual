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

## Photoluminescence Quantum Yield (PLQY)

Photoluminescence Quantum Yield (PLQY) quantifies the fraction of absorbed photons that are re-emitted radiatively. It is a direct measure of the radiative efficiency of a material and provides critical insight into non-radiative recombination losses.

PLQY is defined as:
$$
\text{PLQY} = \frac{\text{Number of emitted photons}}{\text{Number of absorbed photons}}
$$

In terms of recombination rates, PLQY can be expressed as:
$$
\text{PLQY} = \frac{R_{rad}}{R_{rad} + R_{nonrad}}
$$
where:

* $R_{rad}$ is the radiative recombination rate
* $R_{nonrad}$ is the non-radiative recombination rate

A PLQY of 1 (or 100%) indicates purely radiative recombination, whereas lower values indicate increasing dominance of non-radiative processes such as defect-assisted (Shockley–Read–Hall) recombination or Auger recombination.

---

### Relation to Carrier Lifetime

PLQY can also be related to carrier lifetimes:
$$
\text{PLQY} = \frac{\tau_{nonrad}}{\tau_{rad} + \tau_{nonrad}} = \frac{\tau_{eff}}{\tau_{rad}}
$$
where:

* $\tau_{rad}$ is the radiative lifetime
* $\tau_{nonrad}$ is the non-radiative lifetime
* $\tau_{eff}$ is the effective lifetime

High PLQY corresponds to long non-radiative lifetimes and low defect densities.

---

### Absolute PLQY Measurement

Absolute PLQY measurements are typically performed using an integrating sphere. The integrating sphere allows simultaneous measurement of:

* Total emitted photon flux
* Total absorbed photon flux

The absorbed photon flux is determined from the difference between incident excitation light and transmitted/reflected excitation light.

By accounting for reflection and scattering losses, the absolute PLQY can be determined without requiring knowledge of detector collection efficiency.

---

### Relevance for Photovoltaic Devices

In photovoltaic materials, PLQY is directly related to voltage losses. The quasi-Fermi level splitting under illumination is linked to radiative efficiency through:
$$
\Delta E_F = \Delta E_{F,rad} - k_B T \ln\left(\frac{1}{\text{PLQY}}\right)
$$
Low PLQY indicates strong non-radiative recombination and therefore increased voltage losses relative to the radiative limit.
