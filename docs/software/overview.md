![Arkeo Main](../assets/img/software/arkeo-main.png)

## General Interface

The ARKEO main window provides a centralized interface for controlling all measurement routines and hardware components. From this window, users can select the measurement category and the specific routine they wish to perform. Routines are grouped according to measurement type (e.g., steady-state, transient, transistor, battery, thermoelectric), for an intuitive navigation and structured workflow.

Before starting a measurement, the user can select their user profile and provide a device name. This information is used to automatically generate the directory structure for data storage, ensuring traceability and proper organization of measurement results.

---

## Temperature Control

![Arkeo Temperature](../assets/img/software/arkeo-temperature.png)

A dedicated temperature control tab allows users to configure the [measurement stage](../hardware/measurement_stage.md) temperature. The desired temperature setpoint can be defined directly within the interface, enabling temperature-dependent characterization without leaving the main software environment. 

The temperature control system operates independently from the selected routine, allowing stabilization before measurement and continuous regulation during experiments. This integration ensures consistent thermal conditions across all characterization techniques.

Here, temperature ramps can also be programmed in two modes:

### Stand-alone ramp

The stand-alone ramp temperature ramp runs in the background independent of the routines. In this way, the temperature can be cycled at different levels. A stability routine (like the [connection test](../routines/connection/software.md) or [MPPT](../routines/mppt/software.md)) can be run in the background to monitor the device performance.

### Routine ramp

In the routine ramp mode, automatic sequences of routines can be performed at different temperatures. For example, the software can set a temperature, perform one or more routines, set the next temperature and cycle as long as required.