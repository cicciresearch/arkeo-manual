# Parameter Sweep Module

<div class="grid" markdown>
![Parameter config](../assets/img/software/parameter-sweep.png)
![Parameter progress](../assets/img/software/parameter-progress.png)
</div>

The Parameter Sweep module enables automated execution of multiple measurements by varying one or more selected parameters. Instead of manually repeating measurements with different settings, users can configure a list of values, and the software will automatically execute all possible combinations of those values.

The sweep follows a Cartesian product logic. If more than one parameter contains multiple values, every combination is measured. For example, if the scan rate is set to 100 mV/s, 200 mV/s and the light intensity to 50%, 100%, the software will perform four measurements:

Scan rate 100 -- Light 50%  
Scan rate 100 -- Light 100%  
Scan rate 200 -- Light 50%  
Scan rate 200 -- Light 100%  

In general, if parameter A has *n* values and parameter B has *m* values, the total number of measurements equals *n × m*. When additional parameters are included, the total number increases multiplicatively. The first parameter in the sweep list acts as the outer parameter. This means that all combinations of the subsequent parameters are completed before the first parameter is incremented. 

### Outer / Inner Loop Logic

The execution logic can be visualized as nested loops:

    for ScanRate in [100 mV/s, 200 mV/s]:   ← Outer parameter
        for Light in [50%, 100%]:           ← Inner parameter
            run_measurement(ScanRate, Light)

This produces the following execution sequence:

    ScanRate = 100 mV/s
        Light = 50%
        Light = 100%

    ScanRate = 200 mV/s
        Light = 50%
        Light = 100%

For each parameter combination, a full measurement is executed and
stored as an individual dataset, including its own text file and PDF
summary. All files follow the standard ARKEO data structure, ensuring
traceability and straightforward post-processing.

Users should be aware that total measurement time scales with the number
of parameter combinations, as each sweep is executed independently under
the defined stabilization and delay conditions.
