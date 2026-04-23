![PLQY Interface](img/plqy.png)

Compare how many photons are **absorbed from the pump** vs how many photons are **reemitted as PL**.

Spectra are in **W/m² (power density)**, but **PLQY is a photon ratio**, so you must convert **power → photon flux**.
$$
\Phi(\lambda) = \frac{I(\lambda)}{hc/\lambda} = \frac{I(\lambda) \cdot \lambda}{hc}
$$

## 2 step measurement
The simplest PLQY measurements involves 2 steps. 

The first step is to measure the spectrum of the excitation light, without any device. If the same source and setup is used every time, this step can be stored in an external and the measurement can be skipped for subsequent measurement.

The next step is the place the device in the light beam and obtain a new spectrum. It should be observed that the pump signel is reduces due the device absorbing it. It re-emits the absorbed at a longer wavelength as a PL signal.

The PLQY is then obtained as the ratio between the difference of the two signals:
$$
\boxed{
\text{PLQY} = \frac{N_\text{emitted}}{N_\text{absorbed}}
} = 
\boxed{
\text{PLQY} =
\frac{
\sum_{\text{PL}} \left( I_\text{sample} - I_\text{pump} \right) \lambda \Delta\lambda
}{
\sum_{\text{pump}} \left( I_\text{pump} - I_\text{sample} \right) \lambda \Delta\lambda
}
}
$$

<figure markdown="span">
  ![plqy schematic](plqy/schemetic.png){ .on-glb width="100%" }
</figure>

In practice, the obtained spectra (pump and sample) must be split into 2 regions:

* $I_\text{pump}(\lambda)$ = pump-only spectrum
* $I_\text{sample}(\lambda)$ = pump + PL (with reduced pump)

**Absorbed photons**

This measures how much pump light disappeared (absorbed).
$$
N_\text{absorbed} =
\int_{\text{pump region}} \frac{I_\text{pump}(\lambda) - I_\text{sample}(\lambda)}{hc/\lambda} d\lambda
$$

**Emitted photons (PL region)**

(typically longer wavelengths than pump)
$$
N_\text{emitted} =
\int_{\text{PL region}} \frac{I_\text{sample}(\lambda) - I_\text{pump}(\lambda)}{hc/\lambda} d\lambda
$$

---

## 3 step measurement
The above measurement assumes all emission happens in the first pass of the laser on the device. In reality, the diffuse scattering of the laser inside the integrating sphere causes additional emission. The three-step method extends the measurement framework to explicitly account for all photon pathways, including those neglected in the 2MM. It introduces a third configuration that allows separation of direct excitation, indirect excitation, and multiple-scattering contributions.

<figure markdown="span">
  ![plqy 3mm](plqy/2MM%20vs%203MM.png){ .on-glb width="100%" }
</figure>

Three distinct measurements are performed. The first is identical to the 2MM baseline, i.e. the empty sphere, providing the reference excitation intensity. The second measurement places the sample inside the sphere but outside the direct beam, so that excitation occurs only through diffuse scattered photons. The third measurement places the sample directly in the beam path, combining direct and indirect excitation.

!!! warning "incident photon fraction"
    Unlike the 2MM, this method explicitly tracks the multiple-interaction history of photons, removing the approximation that absorption occurs only at first contact. As a consequence, it introduces the need to define the parameter f, representing the fraction of photons directly incident on the sample. This parameter becomes central in separating direct and diffuse contributions.

The resulting expressions for PLQY involve both emission signals (from indirect and direct configurations) and excitation signals, as well as the **absorption coefficient (A)** derived from the excitation measurements:
$$
\eta = \frac{P_c - [f(1-A) + (1-f)] P_b}{f A L_a}
$$
with A:
$$
A = 1 - \frac{L_c-(1-f)L_b}{fL_b}
$$

In the ideal case where **all photons hit the sample directly ($f$ = 1)**, the expression simplifies considerably:
$$
\eta = \frac{P_c - (1-A)P_b}{A L_a}
$$
with absorption obtained from the ratio of excitation signals:
$$
A = 1 - \frac{L_c}{L_b}
$$

