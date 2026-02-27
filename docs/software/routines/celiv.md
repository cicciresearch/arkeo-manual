![Photo-CELIV Main](img/celiv.png)

The Photo-CELIV routine (Charge Extraction by Linearly Increasing Voltage) is used to extract charge carrier mobility in thin film devices. A short light pulse generates charge carriers in the device. After a defined delay, a linear voltage ramp is applied and the resulting extraction current transient is recorded.

The mobility is extracted from the time of the current maximum using the corrected CELIV model. The measurement can be repeated for different delay times to study recombination dynamics.

In Dark-CELIV mode, the light pulse is disabled and only the electrical extraction ramp is applied.

---

## Order of Operation

The Photo-CELIV routine follows the following order of operations:

1. Apply light pulse (unless Dark-CELIV is enabled)
2. Wait defined delay after pulse
3. Apply linear voltage ramp
4. Record extraction current
5. Determine $t_{max}$ and $\Delta J$
6. Calculate mobility
7. Repeat for next delay
8. Stop

---

## Settings

The following settings are available for the Photo-CELIV routine.

---

### Configuration

| Parameter         | Description                                | Unit |
| ----------------- | ------------------------------------------ | ---- |
| Width             | Duration of light pulse                    | s    |
| Start             | Start voltage of extraction ramp           | V    |
| Ramp Duration     | Duration of linear voltage ramp            | s    |
| End               | End voltage of extraction ramp             | V    |
| Delay after Pulse | Time between pulse and ramp                | s    |
| Delay after Ramp  | Time after ramp before next cycle          | s    |
| Dark-CELIV        | Disable light pulse (pure electrical mode) | —    |

The extraction ramp is linear. The slope is calculated automatically from:
$$
A = \frac{V_{end} - V_{start}}{\text{Ramp duration}}
$$

### Delay Sweep

| Parameter | Description                          | Unit |
| --------- | ------------------------------------ | ---- |
| Start     | Initial delay between pulse and ramp | s    |
| Step      | Increment of delay                   | s    |
| End       | Final delay                          | s    |
| Averages  | Number of repetitions per delay      | —    |
| Thickness | Active layer thickness               | µm   |

The measurement is repeated for each delay value. This allows investigation of carrier recombination prior to extraction.

Thickness is required for mobility calculation.

---

## Mobility Extraction

The extraction current transient exhibits a maximum at time $t_{max}$. From this value, the carrier mobility is calculated using the corrected CELIV expression:

$$
\mu = \frac{2 d^2}{3 A t_{max}^2} \cdot \left(\frac{\Delta J}{J_0}\right)
$$

where:

* $d$ is the device thickness
* $A$ is the voltage ramp slope
* $t_{max}$ is the time of maximum current
* $\Delta J$ is the extraction current amplitude
* $J_0$ is the displacement current

The correction factor accounts for non-negligible extraction current relative to the displacement current.

The resulting mobility is displayed as a function of delay time.

---

## Data Display

The interface provides:

* Real-time extraction current transient
* Voltage ramp visualization
* Table with delay, tₘₐₓ, ΔJ, J₀ and μ
* Mobility versus delay plot

This enables quick evaluation of transport properties and recombination dynamics.

---