# Photo-CELIV

## Scientific Introduction

Photo-CELIV (Charge Extraction by Linearly Increasing Voltage) is a transient electrical technique used to determine charge carrier mobility and recombination dynamics in thin film semiconductors. The method combines optical excitation with electrical charge extraction.

In Photo-CELIV, a short light pulse generates excess charge carriers in the device. After a controlled delay time, a linearly increasing voltage ramp is applied. The resulting extraction current transient contains information about carrier transport and recombination processes.

Because the technique probes charge transport under controlled non-equilibrium conditions, it is particularly suited for organic semiconductors, perovskites, and other low-mobility thin film materials.

---

## Measurement Principle

The measurement sequence consists of three steps:

1. Optical generation of charge carriers by a short light pulse
2. Delay period allowing partial recombination
3. Application of a linear voltage ramp to extract remaining carriers

The applied voltage ramp is linear:
$$
V(t) = A t
$$
where the slope $A$ is given by:
$$
A = \frac{dV}{dt}
$$
The increasing electric field extracts carriers toward the electrodes. The measured current consists of two contributions:

* Displacement current $J_0$ due to the changing electric field
* Extraction current $\Delta J$ caused by mobile charge carriers

The transient typically exhibits a pronounced maximum at time $t_{max}$, which is directly related to carrier mobility.

---

## Mobility Extraction

![CELIV Parameters](img/celiv/CELIVschematic.png){ width=500 }

In the ideal case (low carrier density compared to displacement current), the mobility can be approximated by:
$$
\mu = \frac{2 d^2}{3 A t_{max}^2}
$$
where:

* $d$ is the active layer thickness
* $A$ is the voltage ramp slope
* $t_{max}$ is the time of maximum extraction current

However, when the extraction current is not negligible compared to the displacement current, a correction must be applied. The corrected mobility expression becomes:
$$
\mu = \frac{2 d^2}{3 A t_{max}^2} \cdot \frac{\Delta j}{j_0}
$$
where $\Delta j$ is the extraction peak amplitude and $j_0$ is the displacement current. The correction function accounts for high carrier densities and improves accuracy.

Accurate knowledge of the active layer thickness is therefore essential for reliable mobility extraction.

---

## Delay Dependence and Recombination

By varying the delay time between the light pulse and the voltage ramp, the carrier density at the moment of extraction can be controlled.

At short delays:

* Carrier density is high
* Extraction peak is strong
* Mobility reflects high-injection conditions

At longer delays:

* Carriers recombine before extraction
* Peak amplitude decreases
* Mobility may change due to trap filling or recombination effects

Analyzing mobility as a function of delay provides insight into recombination kinetics and carrier lifetime.

---

## Dark-CELIV

In Dark-CELIV mode, the light pulse is omitted and only the voltage ramp is applied. This configuration allows investigation of intrinsic electrical behavior, injection effects, and background currents without photogenerated carriers.

---

## Practical Considerations

* The voltage ramp must be sufficiently fast to extract carriers before significant recombination occurs during extraction.
* The light pulse should be short compared to the delay and ramp times.
* Accurate determination of $t_{max}$is critical for reliable mobility calculation.
* Noise filtering and averaging improve precision, especially for low-mobility materials.

Photo-CELIV provides a direct and robust method to determine charge carrier mobility and to study recombination dynamics in thin film semiconductor devices.
