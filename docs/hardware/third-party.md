!!!tip "ARKEO as a platform, not just an instrument"

The ARKEO platform is designed around its native hardware ecosystem, but it is not limited to it. Any instrument that supports programmable control can be integrated into the ARKEO environment, both at the hardware and software level.


This enables ARKEO to act as a central orchestration layer for complex experimental setups.

### Why integrate third-party equipment?

Integrating external instruments into ARKEO allows you to:

* Centralize control of all devices within a single interface
* Automate complex measurement routine involving multiple instruments
* Synchronize data acquisitiom across heterogeneous systems
* Standardize data output regardless of instrument origin
* Simplify post-processing and analysis using ARKEO’s unified data format

All acquired data is stored using ARKEO’s standard structure, ensuring compatibility with existing workflows and tools (see [Data Management](../software/data-management.md)). Once integrated, third-party instruments become native elements of ARKEO routines:

* Included in automated sequences (e.g., JV + PL + environmental control)
* Triggered and synchronized with ARKEO hardware
* Logged using the same metadata-rich file structure
* Fully compatible with analysis and visualization tools

---


ARKEO can interface with third-party equipment via:

* **SCPI-based instruments (USB / GPIB / Ethernet)**
* **Serial communication (UART / RS-232 / RS-485)**
* **Custom APIs (TCP/IP, REST, SDKs)**
* **LabVIEW drivers or custom wrappers**

This flexibility allows integration ranging from simple command-based devices to fully featured measurement systems.

### Examples of integrated instruments

Several third-party devices have already been successfully integrated into ARKEO workflows:

* **Source Measure Units (SMUs)**
  [Keithley](https://www.tek.com/en/products/keithley) and [Keysight](https://www.keysight.com/us/en/products/source-measure-units.html) instruments for steady-state electrical measurements

* **Spectrometers**
  [Ocean Optics](https://www.oceanoptics.com/) and [Stellarnet](https://www.stellarnet.us/spectrometers/) spectrometers for luminescence and spectral analysis

* **Monochromators**
  [Bentham](https://www.bentham.co.uk/) and [ScienceTech](https://sciencetech-inc.com/home) monochromators for IPCE and wavelength-dependent measurements 

---

