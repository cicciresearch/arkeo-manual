# Data Management

## File Storage

Each measurement routine generates one or more text files that are automatically saved according to the following directory structure:
```
[…]\Arkeo\Results\[User Name]\[Date]\[Device Name]\[Test Name]\
``` 
This hierarchical structure ensures that:

-   Measurement data from different users are stored in separate folders
-   Measurements are grouped by date
-   Data are organized per device and per test type

In addition to the raw data files, a PDF file is generated for every measurement. The PDF contains a screenshot of the routine window at the end of the measurement. This allows quick inspection of the measurement results without manually reloading or plotting the data.

---

## File Structure

To make data processing easier, all files have the same general structure, independent of the measurement type. Each file starts with a header section, indicated by the `## Header ##` tag, containing all measurement settings. Settings are further subdivided in categories by labels in square brackets. Every file contains the `[General info]` category containing basic information (see [Example File](#example-file)). Other categories depend on the performed routine.

!!! note
	As the software evolves, settings may be added, modified or deleted. When this happens ensure that any post-processing script can handle this.

Some routines may include a `## Parameter ##` section. For example, the JV routine has this section to include the JV parameters.  
**Note**: If a routine doesn't require any parameters to be saved, this section is omitted.

The `## Data ##` tag indicates where the actual measurement result begins. Data is always stored in a tab-delimited 2D array of values, always containing a row with column headers describing each data column. This format ensures compatibility with common data processing tools such as MATLAB, Python, Origin, and spreadsheet software.

---

By enforcing a consistent file architecture across all routines, the
ARKEO system enables streamlined automated analysis, robust data
archiving, and straightforward integration into external data processing
pipelines.

---

## Example File
Below you can find an example file of a Dark JV measurement

```
## Header ##
[General info]
User	Cicci Research
Device	Sample
Cell area (cm2)	1
Test	Dark JV
Date	2024-10-01
Time	12:45:46
Note	

[JV Settings]
Vmin (V)	-0.100
Vmax (V)	1.000
Voltage Step (mV)	20.000
Scan Rate (mV/s)	100.000
Auto-detect Voc	Yes
Scan direction	FW then RV

[Cell Settings]
Tipology	Cell
Cell Area (cm2)	1.00
#Cells	1.00

## Data ##
V_FW (V)	J_FW (A)	V_RV (V)	J_RV (A)						
-3.187902E+0	7.089213E+0	6.761269E+0	-1.309565E+1
-6.326601E+0	1.234149E+1	8.817806E+0	-1.625949E+1
-8.570556E+0	1.588318E+1	9.645930E+0	-1.715583E+1
...
```

