![IPCE Main](img/ipce.png)

In the IPCE routine, monochromatic light is sequentially applied to the device while the generated photocurrent is measured at each wavelength. Using the calibrated lamp power and device current, the Incident Photon-to-Current Efficiency (IPCE), also referred to as External Quantum Efficiency (EQE), is calculated for every wavelength step.

The routine allows precise control over wavelength range, acquisition timing, bias conditions, and hardware configuration. During the scan, the IPCE curve is displayed in real time together with device current and integrated current.

The IPCE routine follows the following order of operations:

1. Start
2. Open shutter
3. Move monochromator to start wavelength
4. Stabilize signal
5. Measure device current
6. Calculate IPCE
7. Move to next wavelength

!!! warning "Lamp Calibration"
    Every time the lamp is turned on, and after each 2 hours, it is recommended to calibrate the lamp power. See [Lamp Calibration](#lamp-calibration).

---

## Settings

The following settings are available for the IPCE routine

### Manual Monochromator Control

Control the monochromator with these controls independent of the measurement. These controls are disabled during a measurement.

| Parameter      | Description                   | Value | Unit |
| -------------- | ----------------------------- | ----- | ---- |
| Set Shutter    | Open or close optical shutter | Open  |      |
| Set Wavelength | Manual wavelength positioning | 550   | nm   |

### Wavelength Range

| Parameter | Description                   | Value | Unit |
| --------- | ----------------------------- | ----- | ---- |
| Start     | Start wavelength of the scan  | 300   | nm   |
| Step      | Step size between wavelengths | 10    | nm   |
| End       | End wavelength of the scan    | 900   | nm   |

### Acquisition Settings

| Parameter        | Description                             | Value | Unit |
| ---------------- | --------------------------------------- | ----- | ---- |
| Acquisition time | Integration time per wavelength         | 1     | s    |
| Averaging        | Number of averaged measurements         | 1     |      |
| Step Delay       | Delay between wavelength steps          | 0     | s    |
| Bias Voltage     | Applied voltage during IPCE measurement | 0     | V    |
| Bias Light       | Configure bias illumination             |       |      |

### Hardware Settings

| Parameter     | Description                         | Value |
| ------------- | ----------------------------------- | ----- |
| Autorange     | Automatically select current range  | true  |
| Current Limit | Maximum allowed measurement current | 1 mA  |

---

## Lamp Calibration
Every time the lamp is turned on, and after each 2 hours, it is recommended to calibrate the lamp power. To calibrate the lamp, check the "Calibrate" checkbox and start the measurement as normal. You are then asked to provide the photodiode calibration file. A default file is selected automatically. 


## Data Display

During the measurement, the interface provides:

* Real-time IPCE curve
* Device current versus wavelength
* Integrated current
* Lamp power monitoring
* Time-domain chopped signal visualization

The lower panel displays the raw chopped photocurrent signal used for lock-in style reconstruction of the IPCE value.


