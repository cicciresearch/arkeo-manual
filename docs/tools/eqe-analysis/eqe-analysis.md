## EQE Analyzer
The short-circuit current density is calculated as
$$
J_{sc} = q \int EQE(\lambda)\Phi_{AM1.5}(\lambda)d\lambda
$$
where  
\(q\) is the elementary charge and  
\(\Phi_{AM1.5}\) is the AM1.5 photon flux.

Paste EQE data (two columns: wavelength (nm) and EQE (%)):

<textarea id="eqe_input" rows="10" style="width:100%"></textarea>

<button onclick="analyzeEQE()">Analyze</button>

### Results

<div id="eqe_results"></div>

<div id="eqe_plot"></div>