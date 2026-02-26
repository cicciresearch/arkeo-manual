![Dark JV Main](img/dark-jv.png)

In the Dark JV routine, a voltage sweep is applied on the device in forward and/or reverse direction. The scan can be automatically repeated at different scan rates. The device can be preconditioned before starting any measurement to allow for the device to relax to a steady state.

In addition, a spectrometer or photodiode can measure the electroluminescence in parallel. By dividing this signal by the current at which the signal was applied, the total EQE can be calculated.

The Dark JV routine follows the following order of operations:

1. Start
2. Turn on illumination (if set)
3. Measure Voc (with optional precondition)
4. Start scan
5. Check next sweep parameter
6. Stop

### Settings

The following settings are available for the Dark JV routine

**Scan Range**

| Parameter  | Description                       | Value                                                                        | Unit |
| ---------- | --------------------------------- | ---------------------------------------------------------------------------- | ---- |
| Start      | Start of the scan                 | -0.2                                                                         | V    |
| End        | End of the scan                   | 1.2                                                                          | V    |
| Step       | Voltage step between points       | 0.02                                                                         | V    |
| Scan rate  | How fast the voltages are applied | 0.2                                                                          | V/s  |
| Scan order | Order of the scans                | Forward then Reverse<br>Reverse then Forward<br>Forward Only<br>Reverse Only |      |

**Precondition**

| Parameter      | Description                                   | Value                                      | Unit |
| -------------- | --------------------------------------------- | ------------------------------------------ | ---- |
| Hold Initial   | Hold the first point before starting the scan | 1                                          | s    |
| Initial Voltage | The voltage to hold before the scan           | -1                                         |      |

### Parameter Sweep

The Parameter Sweep module allows automated execution of multiple measurements by varying selected parameters.

This module is shared across multiple routines.

See: [Parameter Sweep Module](../../software/parameter-sweep.md){ data-preview }

