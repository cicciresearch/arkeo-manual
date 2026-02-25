# Sun JV

## Scientific introduction

The Sun JV test, also known as the current-voltage characteristic measurement, is a fundamental technique to characterize important parameters determining the performance of solar cells and other photovoltaic devices. It provides information about the electrical behaviour and efficiency of these devices under varying conditions. The JV test involves sweeping the voltage across the device and measuring the resulting current.

Having a p-n junction, solar cells behave like a diode, showing a typical exponential response in current when applying a forward voltage bias. When a solar cell is illuminated it converts light energy into electrical energy through the photovoltaic effect.

When the solar cell is illuminated, photons with energy greater than the bandgap of the semiconductor can generate electron-hole pairs (excitons) by moving electrons from the valence band to the conduction band. These carriers are then separated by the electric field of the depletion zone.

Under illumination, the concept of a single Fermi level becomes inadequate, and instead two quasi-Fermi levels are used. The separation between these quasi-Fermi levels under illumination represents the photovoltage ($\mu$). The larger the splitting, the higher the open-circuit voltage ($V_{oc}$).

Extracting the generated charges by applying a potential results in a current. In a JV test the current-voltage characteristic of the device is obtained by sweeping the potential over a range. The current is often inverted when displaying JV results - this is a matter of convention.

---

![Typical JV curve](img/jv-parameters.png){ width="70%" }

*Typical JV curve of a solar cell shown in red. The corresponding power curve is shown in blue.*

---

### Parameter extraction

From a typical JV characteristic, four important parameters can be extracted.

#### Open-circuit voltage ($V_{oc}$)

The open-circuit voltage is a measure of the potential difference due to carrier separation. At $V_{oc}$, the applied voltage equals the built-in potential, resulting in zero current flow.

#### Short-circuit current ($J_{sc}$)

The short-circuit current is the maximum current that flows when the voltage across the device is zero.

#### Efficiency ($\eta$)

At both $V_{oc}$ and $J_{sc}$, useful power is zero because: $P = I \cdot V$  
The maximum power point (MPP) occurs between these extremes.
$$
\eta = \frac{P_{MPP}}{P_{light}}
$$
Where $P_{light}$ is the incident irradiance.

#### Fill Factor (FF)
The fill factor quantifies losses by comparing the JV curve to an ideal diode.
$$
FF = \frac{P_{MPP}}{V_{OC} \cdot J_{SC}}
$$

#### Series Resistance ($R_S$)

Solar cells are often modelled using the one-diode model. The series resistance represents cumulative resistive losses within the device.

It is often extracted from the slope of the I-V curve near open-circuit conditions.

#### Shunt Resistance ($R_{Sh}$)

Shunt resistance represents leakage pathways in the device. It can be estimated from the slope of the JV curve near the short-circuit condition.

---

![One diode model](img/one-diode-model.png){ width="60%" }

*One diode circuit model for solar cells.*

## Light dependency

Current increases approximately linearly with light intensity. The open-circuit voltage scales logarithmically:

$$
V_{oc} = \frac{n_{id} k_B T}{q} \ln(\phi) + b
$$

Where $\phi$ is the light intensity.

The slope allows extraction of the ideality factor $n_{id}$.