The Arkeo probes are used to connect your device to the measuring unit. Each probe contains 1 or 2 spring contacts to place on the device's contact pads. Each probe then carries the force (current) and sense (voltage) signal through seperate shielded wires to the measuring system. They connect through BNC connectors.

<figure markdown="span">
  ![dark-jv-regimes](../assets/img/system/fixture/probe.jpg){ width="80%" }
  <figcaption>An Arkeo eletrical probe placed on the measurement stage.</figcaption>
</figure>

Three types of probes are available for the Arkeo system:

## Slow probes
These probes connect to the high-precision SMU for steady-state that require high-precision, such as JV, MPPT and low frequenct impedance. The source meter has 4 wires with separate force and sense connections. When using the standard probes, the force and sense are shorted together for easy 4-wire measurements. In the case of, for example, an electrochemical cell, when a reference electrode is required, the force and sense can be split and connected as shown below

=== "Standard"
    ![Standard Probe](../assets/img/system/probe-schemetic-pv.png){ width="450" }

=== "Electrochemical"
    ![Electrochemical Probe](../assets/img/system/probe-schemetic-electrochemical.png){ width="450" }

### Performance

**Temporal resolution**  
Up to 1 MS/s input rate  
Up to 80 kS/s output rate  

**Voltage Resolution**  

| Range  | Resolution |
| ------ | ---------- |
| 600 mV | 100 nV     |
| 6 V    | 1 µV       |
| 60 V   | 10 µV      |


**Current Resolution**  

| Range  | Resolution |
| ------ | ---------- |
| 1 µA   | 100 fA     |
| 10 µA  | 1 pA       |
| 100 µA | 10 pA      |
| 10 mA  | 100 pA     |
| 10 mA  | 1 nA       |
| 100 mA | 10 nA      |
| 1 A    | 100 nA     |


## Fast probes
The fast probes are connected to a high-speed oscilloscope to measure signals in the MHz regime. A high-speed function generator can generate arbitrary waveforms at the same speeds.

### Performance

**Temporal resolution**  
Up to 100 MS/s input rate --> up to 20 Vpk-pk  
Up to 200 MS/s output rate --> up to 24 Vpk-pk  

**Voltage Resolution**  

| **Range** | **Resolution** |
|-----------|-----------------|
| 0.2 V | ±(0.65% of input + 1.0 mV) |
| 0.4 V | ±(0.65% of input + 1.0 mV) |
| 1 V   | ±(0.65% of input + 1.2 mV) |
| 2 V   | ±(0.65% of input + 1.6 mV) |
| 4 V   | ±(0.65% of input + 8.0 mV) |
| 10 V  | ±(0.65% of input + 8.0 mV) |
| 20 V  | ±(0.65% of input + 13.0 mV) |

## Resistivity probe

![fourpointprobe](../assets/img/system/probes/fourpointprobe.jpg){ width="400" }

This probe has a special configuration of the 4 spring contacts to measure sheet resistance of thin films. It connects to the same source meter unit of the [slow probes](#slow-probes) and therefore has the same performance.

See the [Resistivity routine](../scientific/scientific-resistivity.md) for more details