# Incident Photon to Current Efficiency (IPCE)

The efficiency of a solar cell is the ratio at which it converts incident photons to charges. This efficiency is often expressed as a single number assuming a standard spectrum (usually AM1.5G). In reality, the efficiency is wavelength dependent.

To understand spectral effects, the external quantum efficiency (EQE) is measured. The device is illuminated with monochromatic light at each wavelength and the ratio of incident photons to generated electrons is determined.

$$
\text{Quantum Efficiency (QE)} =
\frac{\text{Number of Collected Electrons}}
{\text{Number of Incident Photons}} \cdot 100\%
$$

Solar cells absorb only photons with sufficient energy (above the band gap). At lower energies no carriers are generated; at higher energies excess energy is lost as heat. Additional losses occur due to recombination, reflection, transmission, and parasitic absorption.

When considering the entire device, this efficiency is called **External Quantum Efficiency (EQE)**.  
If only the active layer is considered, it is referred to as **Internal Quantum Efficiency (IQE)**.

IQE is defined as the ratio between collected carriers and absorbed photons (not incident photons).
$$
\text{IQE}(\lambda) =
\frac{\text{Number of Collected Electrons}}
{\text{Number of Absorbed Photons}}
$$

The absorbed photons can be obtained by subtracting the reflected ($R$), transmitted ($T$) and parasitically absorbed ($A_{parasitic}$) photons
$$
\text{IQE}(\lambda) = \frac{\text{EQE}(\lambda)} {1 - R(\lambda) - T(\lambda) - A_{parasitic}(\lambda)}
$$

Oftentimes this can be simplified. When a device is opaque, transmitted ($T$) can be considered 0. $A_{parasitic}(\lambda)$ is never exactly 0, it is difficult to measure. By setting it to 0, IQE can be estimated fairly accurately since the reflected photons usually dominate.
$$
\text{IQE}(\lambda) \approx \frac{\text{EQE}(\lambda)} {1 - R(\lambda)}
$$
---

<figure markdown="span">
  ![Typical IPCE curve](img/ipce/QEE.png){ width="70%" }
  <figcaption>Typical IPCE curve of a solar cell. Deviations from ideal behaviour are caused by reflection and recombination losses.</figcaption>
</figure>

---

### Measuring quantum efficiency

A source meter unit (SMU) measures the generated current while the device is illuminated with monochromatic light. A monochromator is typically placed between the device and a broadband lamp (often Xenon).

Because lamp output may drift over time, calibration is required. A calibrated photodiode with known responsivity is used to determine the irradiance at each wavelength: $P(\lambda)$.

The EQE is calculated as:
$$
EQE(\lambda) =
\frac{I(\lambda)/e}
{P(\lambda)/(h\nu)}
=
1240 \cdot \frac{I(\lambda)}{P(\lambda)} \cdot \frac{1}{\lambda}
$$
Where:

- $I(\lambda)$ = measured device current  
- $P(\lambda)$ = incident irradiance  
- $\lambda$ = wavelength  

---

### Calculating $J_{sc}$ from EQE

When the full EQE is known, the $J_{sc}$ under a known light source can be calculated by integrating over all wavelengths:
$$
J_{sc} =
q \int_{\lambda_{min}}^{\lambda_{max}}
\eta_{IPCE} \phi_{ph}^{source}(\lambda) d\lambda
$$
In practice, $J_{sc}$ from EQE and from JV scans may differ due to light-intensity dependence or nonlinear photo-current behaviour.

---

### Bias light and lock-in detection

When using bias light:

- Total current increases significantly.
- Measurement accuracy decreases due to higher SMU range.
- Signal-to-noise ratio drops.

The Arkeo system mitigates this by:

- Introducing a chopper
- Using a software lock-in amplifier
- Extracting the periodic monochromatic signal from steady bias current

For slow devices (e.g. DSSCs), chopping frequency must exceed current settling time.

## Spectral deviation

If a perfect spectral match is not possible, the **Spectral Deviation (SD)** is calculated as:

$$
SD =
\frac{
\int EQE(\lambda)\lambda E_{SIM}(\lambda) d\lambda
}{
\int EQE(\lambda)\lambda E_{REF}(\lambda) d\lambda
}
$$

---

## IPCE measurements on tandem solar cells

Tandem devices combine multiple absorbers (e.g., silicon + perovskite).

To isolate subcells:

- Illuminate one layer with bias light
- Electrically bias to maintain short-circuit condition
- Measure the other layer’s EQE

---

## IQE estimation using transfer matrix modelling

<figure markdown="span">
  ![Transfer Matrix Example](img/ipce/TransferMatrix.png){ width="85%" }
  <figcaption>Example of a transfer matrix calculation showing the reflectance, transmittance and parasitic absorbtion.</figcaption>
</figure>

The Internal Quantum Efficiency (IQE) cannot be measured directly without detailed knowledge of the optical behaviour of the photovoltaic device. Unlike EQE, which relates collected carriers to incident photons, IQE requires normalization to the number of photons absorbed specifically within the active layer. Determining this quantity demands accurate modelling of optical losses throughout the multilayer stack.

The optical properties of each layer are described by their complex refractive index:
$$
\tilde{n}(\lambda) = n(\lambda) + i\kappa(\lambda)
$$
where:
$n(\lambda)$ is the refractive index,
$\kappa(\lambda)$ is the extinction coefficient.

The absorption coefficient is defined as:
$$
\alpha = \frac{4\pi\kappa}{\lambda}
$$
Accurate values of $n$ and $\kappa$ may be obtained from literature or measured experimentally (e.g., via spectroscopic ellipsometry). However, care must be taken, as fabrication conditions, morphology, and aging can significantly affect optical constants.

Using the calculated optical quantities, IQE is obtained from the measured EQE as:
$$
IQE =
\frac{EQE}
{1 - R - T - ABS_{parasitic}}
$$

---
