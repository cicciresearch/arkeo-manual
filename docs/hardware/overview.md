# System Overview

<div align="center">
  <img src="../assets/img/system/Arkeo_Platform_trans.png" alt="ARKEO System" width="400">
</div>

The Arkeo system consists of 2 parts, the main acquisition unit and the measurement stage. They connect to each other through various cables, from shielded BNCs for device signals to standard DB15 like cables for the various accessories.

## Acquisition Unit

The acquisition unit contains all the hardware to acquire the device signals, as well as the hardware to control any connected accessories. This hardware is designed around the eurocard standard format, where boards are slotted into rails mounted in 19" (sub)racks. Each card then slots directly into the rack-wide backplane, allowing any cards to connected directly to the system like a plug&play board. 

The image above shows an example of a fully equipped Arkeo system with 2 racks. The bottom rack is present on all systems and contains a standard Windows PC, giving users a familiar system to work with. 

The top rack contains (from left to right):

1. [Temperature controller](temperature-controller.md)
2. [Light controller](led-controller.md)
3. Function Generator and Oscilloscope ([Fast Probes](probes.md#fast-probes))
4. High-precision Source Meter Unit ([Slow Probes](probes.md#slow-probes))

!!!info "Upgradability"
    Although many slots are empty, the size of the system allows for easy reconfiguration and future upgrades. For example, additional temperature and light controllers can easily be installed, without the need for an on-site visit from a technician.

## Measurement Stage

The measurement stage is where the users work and place their samples. Two probes allow for precise device contacting and can optionally be configured in 4-pin or 2-pin connection. In both cases, 4 shielded BNC cables (2 force and 2 sense) carry the device signal to the Acquisition Unit. The stage feature an aperature below which several components can be placed. Examples include:

* Monochromator light for EQE analysis
* Spectrometer for EL and PL analysis
* Fast LED for transient analysis
* ... and more

Device are placed on a peltier controlled heat stage. This allows for automatic temperature dependent analysis. The system can programmatically set the temperature of the stage and run a sequence of measurements at each temperature, giving even more insight in the works of the device.

For more details, see [Measurement Stage](measurement-stage.md)