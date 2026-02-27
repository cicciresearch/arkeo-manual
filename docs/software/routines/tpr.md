![Transient Main](img/tpr.png)

The Transient routine is used to perform Transient Photovoltage (TPV) and Transient Photocurrent (TPC) measurements. A user-defined light pulse is applied to the device and the resulting voltage or current transient is recorded with high temporal resolution.

The pulse duration is typically in the millisecond range or faster. To improve signal-to-noise ratio, the pulse is repeated hundreds of times and the measured response is averaged. The full measurement can then be repeated at different light intensities.

* **TPV** measurements are performed under open-circuit conditions.
* **TPC** measurements are performed under short-circuit conditions.

The transient response provides information about recombination dynamics and charge extraction behavior.

---

## Order of Operation

The Transient routine follows the following order of operations:

1. Apply light pulse
2. Record transient response
3. Repeat pulse and average
4. Extract decay parameters
5. Repeat at next light intensity
6. Stop

---

## Settings

The following settings are available for the Transient (TPV / TPC) routine.

### **Light Pulse**

| Parameter    | Description                                        | Unit |
| ------------ | -------------------------------------------------- | ---- |
| Duration     | Total duration of one pulse cycle                  | s    |
| Duty Cycle   | Fraction of time the pulse is at maximum amplitude | %    |
| Delay        | Time delay before pulse onset                      | s    |
| Averaging    | Number of repeated pulses for averaging            | —    |
| Points/Pulse | Number of sampling points per pulse                | —    |

The pulse duration defines the full time window of the measurement. The duty cycle determines the fraction of this window during which the pulse remains at its maximum amplitude. The delay defines the time offset before the pulse rise begins.

To improve signal-to-noise ratio, the pulse is repeated multiple times and averaged.

![Light Pulse Parameters](img/Light Pulse Parameter info.png)

---

### **Light Intensity**

| Parameter    | Description                                        | Unit |
| ------------ | -------------------------------------------------- | ---- |
| Enable Ramp  | Enable automatic sweep of pulse amplitude          | —    |
| Start        | Starting pulse amplitude                           | a.u. |
| End          | Final pulse amplitude                              | a.u. |
| Steps        | Number of amplitude steps                          | —    |
| Include Dark | Include measurement without pulse                  | —    |
| Bias Factor  | Ratio between bias light level and pulse amplitude | —    |

The pulse is applied on top of a constant bias illumination. The **Bias Factor** defines the ratio between the pulse amplitude and the bias light level. The bias light scales proportionally with the pulse amplitude, ensuring a constant relative perturbation when the pulse intensity is increased.

If ramp is enabled, the full transient measurement (including averaging and parameter extraction) is repeated for each defined pulse amplitude step.

---

### **Additional**

| Parameter  | Description                                  | Unit |
| ---------- | -------------------------------------------- | ---- |
| Step Delay | Delay between intensity steps                | s    |
| High Ref   | Upper threshold for timing extraction        | %    |
| Mid Ref    | Mid threshold for timing extraction          | %    |
| Low Ref    | Lower threshold for timing extraction        | %    |

The reference levels define the percentage thresholds used to determine rise and fall times of the transient signal.

---

## Transient Photovoltage (TPV)

In TPV mode, the device is kept under open-circuit conditions. After the light pulse, the decay of the photovoltage is recorded.

The decay curve is fitted to a mono-exponential function:
$$
V(t) = V_0 · exp(−t / \tau)
$$
The extracted time constant $\tau$ represents the effective carrier lifetime.

By plotting the recombination rate ($1/\tau$) as a function of maximum voltage, recombination mechanisms can be analyzed.

---

## Transient Photocurrent (TPC)

In TPC mode, the device is kept under short-circuit conditions. After the light pulse, the transient photocurrent decay is recorded.

The decay curve is numerically integrated to extract the total extracted charge:
$$
Q = \int I(t) dt
$$
The extracted charge is analyzed as a function of maximum current to investigate carrier density and transport behavior.

---

## Data Display

The interface provides:

* Real-time transient waveform
* Separate rise and fall plots
* Extracted rise/fall times
* Charge versus current plot (TPC)

This enables quick assessment of signal stability, fitting quality, and carrier dynamics.
