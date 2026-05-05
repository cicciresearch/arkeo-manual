# System Overview
_A modular platform for advanced opto-electronic characterization_

<figure markdown="span">
  <img src="../../assets/img/system/Arkeo_Platform_trans.png" alt="ARKEO System" width="400">
</figure>

---

The ARKEO platform is built as a modular measurement system, combining a high-performance acquisition unit with a flexible measurement stage. Together, these elements provide a customizable environment for advanced opto-electronic characterization.

Both subsystems are tightly integrated through dedicated connections, ranging from shielded BNC cables for sensitive signals to robust multi-pin interfaces for accessory control, ensuring reliable and low-noise operation.

## Acquisition Unit

The acquisition unit forms the core of the ARKEO system, handling signal acquisition, instrument control, and system synchronization. It is built around the Eurocard standard, where individual hardware modules are inserted into rails within 19" rack enclosures. Each module connects directly to a shared backplane, enabling plug-and-play style integration of system components.

This architecture allows ARKEO to function as a scalable hardware platform, where instrumentation can be added, removed, or reconfigured depending on the experimental needs.

The configuration shown above represents a fully equipped system with two racks:

* The lower rack is included in all systems and houses a standard Windows PC, providing a familiar and fully compatible software environment.
* The upper rack hosts the measurement and control modules, for example:
1. [Temperature controller](temperature-controller.md)
2. [Light controller](led-controller.md)
3. Function Generator and Oscilloscope ([Fast Probes](probes.md#fast-probes))
4. High-precision Source Meter Unit ([Slow Probes](probes.md#slow-probes))

!!!info "Upgradability"
  The modular design leaves available space for expansion, allowing new capabilities to be added at any time. Additional controllers, measurement boards, or custom modules can be installed without requiring system redesign or on-site intervention.

## Measurement Stage

The measurement stage is the interaction point between the user and the device under test, designed for precision, flexibility, and reproducibility.

Samples are contacted using two high-precision probes, which can be configured for both 2-wire and 4-wire (Kelvin) measurements. Signal integrity is preserved through shielded BNC connections (force and sense lines) linking the stage to the acquisition unit.

At the center of the stage, an optical aperture allows seamless integration of additional instrumentation below the sample plane. This enables advanced measurement configurations such as:

* Monochromatic light for EQE analysis
* Spectrometers for electroluminescence (EL) and photoluminescence (PL) analysis
* Fast LED for transient analysis
* ... and more

The sample is mounted on a Peltier-controlled stage, enabling precise temperature regulation. ARKEO can automatically control the temperature and execute measurement sequences across defined temperature ranges, giving even more insight in the workings of the device.

For more details, see [Measurement Stage](measurement-stage.md)