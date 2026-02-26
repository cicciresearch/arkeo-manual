# Dark JV

## Scientific Introduction

The Dark JV routine characterizes the electrical behaviour of a photovoltaic or semiconductor device in the absence of illumination. In this measurement, the device is kept in complete darkness while a fine and slow voltage sweep is applied. The resulting current-voltage characteristic provides insight into charge injection, transport mechanisms, trap states, and recombination pathways without the influence of photogenerated carriers.

Because no light-induced current is present, the measured current originates purely from electrically injected carriers. This allows a detailed investigation of  intrinsic transport properties and defect-related phenomena.

Dark JV analysis provides information about:

-   Injection barriers
-   Trap densities
-   Carrier mobility
-   Non-radiative recombination
-   Shunt and leakage pathways

Combined with electroluminescence measurements, Dark JV enables evaluation of radiative efficiency and voltage losses. The reciprocity relation between electroluminescence and photovoltaic operation links EQE$_{EL}$ to the non-radiative voltage loss in solar cells.

Thus, Dark JV with simultaneous EL acquisition is a powerful diagnostic tool to assess material quality, transport limitations, and recombination mechanisms in photovoltaic and optoelectronic devices.

---

## Regimes in the Dark JV Curve

When the current density is plotted on a logarithmic scale as a function of applied voltage, three characteristic regions can typically be distinguished:

<figure markdown="span">
  ![dark-jv-regimes](img/dark-jv/djv3.png){ width="80%" }
  <figcaption>The three typical regimes of a dark JV curve.</figcaption>
</figure>

### 1. Ohmic Region

At low applied voltages, the current increases linearly with voltage:
$$
J \propto V
$$
This regime is dominated by thermally generated free carriers or low-level injection. The slope corresponds to the intrinsic conductivity of the material. In this region, transport is limited by equilibrium carrier density rather than injected carriers.

### 2. Trap-Filled Limit (TFL)

As the voltage increases, injected carriers begin to fill trap states within the material. When the traps are filled, a sudden transition occurs at the trap-filled limit voltage $V_{TFL}$. This transition is typically observed as a sharp increase in current on the logarithmic plot.

The trap-filled limit voltage is related to the trap density $N_t$ by:
$$
V_{TFL} = \frac{e N_t L^2}{2 \varepsilon}
$$
where:

-   $e$ is the elementary charge
-   $L$ is the device thickness
-   $\varepsilon$ is the dielectric permittivity

Determining $V_{TFL}$ allows estimation of the trap density in the active layer.

### 3. Space-Charge-Limited Current (SCLC)

Beyond the trap-filled limit, the current is governed by space-charge-limited conduction. In an ideal trap-free material, the SCLC follows the Mott--Gurney law:
$$
J = \frac{9}{8} \varepsilon \mu \frac{V^2}{L^3}
$$
where:

-   $\mu$ is the carrier mobility

In this regime:
$$
J \propto V^2
$$
Deviation from the quadratic dependence indicates trap-distributed transport or field-dependent mobility.

The SCLC region is particularly useful for extracting:

-   Charge carrier mobility
-   Trap density
-   Transport limitations

---

## Electroluminescence During Dark JV

In the Dark JV routine, electroluminescence (EL) can be acquired simultaneously. Under forward bias, injected electrons and holes recombine radiatively, resulting in photon emission.

The emitted optical power $P_{EL}$ can be measured and compared to the injected electrical current $I$. The total external quantum efficiency of electroluminescence (EQE$_{EL}$) is obtained from:
$$
EQE_{EL} = \frac{\text{Number of emitted photons}}{\text{Number of injected electrons}}
$$
Experimentally, when the total emitted irradiance is divided by the device current, the total EQE can be determined.

---