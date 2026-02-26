![JV Main](img/jv-main.png)

In the JV routine, a voltage sweep is applied on the device in forward and/or reverse direction. The scan can be automatically repeated at different light intensities and/or scan rates. The device can be preconditioned before starting any measurement to allow for the device to relax to a steady state.

The JV routine follows the following order of operations:

1. Start
2. Turn on illumination (if set)
3. Measure Voc (with optional precondition)
4. Start scan
5. Calculate JV parameters
6. Check next sweep parameter
7. Stop

### Settings

The following settings are available for the JV routine

**Scan Range**

| Parameter  | Description                       | Value                                                                        | Unit |
| ---------- | --------------------------------- | ---------------------------------------------------------------------------- | ---- |
| Start      | Start of the scan                 | -0.2                                                                         | V    |
| End        | End of the scan                   | 1.2                                                                          | V    |
| Step       | Voltage step between points       | 0.02                                                                         | V    |
| Scan rate  | How fast the voltages are applied | 0.2                                                                          | V/s  |
| Scan order | Order of the scans                | Forward then Reverse<br>Reverse then Forward<br>Forward Only<br>Reverse Only |      |
| Auto Voc   | Stop the scan at Voc              | true                                                                         |      |
| Exceed Voc | Overshoot the Voc detection       | 10                                                                           | %    |

**Precondition**

| Parameter      | Description                                   | Value                                      | Unit |
| -------------- | --------------------------------------------- | ------------------------------------------ | ---- |
| Voc Condition  | Wait before measuring Voc                     | None<br>Wait for stable<br>Wait fixed time |      |
| Hold Initial   | Hold the first point before starting the scan | 1                                          | s    |
| Custom Initial | Set a voltage different from the scan start   | false                                      |      |
| Custom Voltage | The voltage to hold before the scan           | -1                                         |      |

**Illumination**

| Parameter  | Description                       | Value                                              | Unit   |
| ---------- | --------------------------------- | -------------------------------------------------- | ------ |
| Source     | Light source                      | None<br>External<br>12 LED<br>Fast LED<br>LED Ring |        |
| Irradiance | Total irradiance at 100%          | 100                                                | mW/cm² |
| Level      | Output Level of the light         | 100                                                | %V%    |

### Parameter Sweep

The Parameter Sweep module allows automated execution of multiple measurements by varying selected parameters.

This module is shared across multiple routines.

See: [Parameter Sweep Module](../../software/parameter-sweep.md){ data-preview }

