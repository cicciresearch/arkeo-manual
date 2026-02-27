![4-Point Resistivity Main](img/resistivity.png)

The 4-Point Resistivity routine is used to determine the sheet resistance of conductive thin films using a four-probe configuration. A controlled current is applied through the outer probes while the voltage drop is measured between the inner probes. From the measured voltage and applied current, the sheet resistance (Ω/sq) is calculated in real time.

The routine allows direct visualization of voltage, current, resistance, and corrected resistance as a function of time. Geometrical correction factors can be applied based on device dimensions.

The 4-Point Resistivity routine follows the following order of operations:

1. Start
2. Apply selected current
3. Measure voltage between inner probes
4. Calculate resistance
5. Apply geometrical correction (if enabled)
6. Display real-time resistance values

**Note**  
The current can be changed during the measurement. 

!!! info "Measurement accuracy"
    If the current is too low, any resistances present in the system can dominate the measurement. It is recommended to start at a low current (~100 nA), then slowly increase it until the resistance doesn't change with changeing current. At this point the device is ohmic and the sheet resistance is accurately measured.

---

## Settings

The following settings are available for the 4-Point Resistivity routine

### Output Current

| Parameter   | Description                          | Value  | Unit |
| ----------- | ------------------------------------ | ------ | ---- |
| Output      | Applied current through outer probes | 100 µ  | A    |
| Max         | Maximum allowed output current       | 100 m  | A    |
| Min         | Minimum allowed output current       | 100 n  | A    |

The applied current determines the measurable voltage range and signal-to-noise ratio. Care should be taken to avoid excessive current that may heat or damage the sample.

### Measurement Display

| Parameter        | Description                           |
| ---------------- | ------------------------------------- |
| Voltage          | Measured voltage between inner probes |
| Current          | Applied current                       |
| Resistance       | Calculated sheet resistance (Ω/sq)    |
| Corr. Resistance | Geometry-corrected sheet resistance   |

### Device Dimensions

| Parameter      | Description                       | Value | Unit |
| -------------- | --------------------------------- | ----- | ---- |
| Film Thickness | Thickness of the conductive layer | 100   | µm   |
| Length (a)     | Sample length                     | 100   | mm   |
| Width (b)      | Sample width                      | 25    | mm   |

## Data Display

The main graph shows resistance as a function of time. Simultaneously, voltage and current values are monitored to verify stable measurement conditions.

This time-resolved view allows users to detect:

* Contact instability
* Thermal drift
* Probe misalignment
* Noise or fluctuation

---
