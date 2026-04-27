# Light controller

<figure markdown="span">
  <img src="assets/img/system/led-driver.png" alt="ARKEO System" width="400">
</figure>

The Arkeo light controller constists of a eurocard board containing 12 independent, current controlled, light channels. They are controlled by a digital microcontroller. While the microntroller outputs a PWM signal to control the intensity, this signal is filter to output a truly DC current to each of the channels.

<figure markdown="span">
  <img src="assets/img/software/multiled-control.png" alt="MultiLED Control" width="400">
</figure>

The board is controlled by the MultiLED control software. Here, users can freely control the intensity of each light channel. In practice, a configuration is calibrated once to the desired spectrum, and the configuration is then saved. Either locally to a file, or the memory of the microcontroller as a preset.

In addition to the manual control, the light can accept any custom waveform as output. Users can pregenerate and output sequence, upload it to microcontroller and run it in the background. This is useful for day-night analysis, light cycling or light-dependent performance.