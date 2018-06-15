## V-Aural Production Update June 15, 2018
## Status
To this point, I've successfully created the base technical framework for V-auRal including:
* HTC vive
  * Physical installation
  * Software installation
  * Integration with Unity
* Unity
  * Integrated Vive with SteamVR assets
  * Integrated Unity to OSC translation using * Uni-Osc *
  * Created simple scene
  * Used simple 'rollerball' element as movement mockup.
  * Translated xyz position of player to OSC
* Node.js
  * Successfully set up node.js environments in Windows & OSX
  * Installed *OSC* and *Flocking.js* into node.
  * Created a script to accept OSC via UDP
  * Mapped income xyz OSC to three Flocking oscillators.

## Next Steps
With the work done, I've created a framework to translate navigational movement in VR to parameters in a synthesizer. The next steps are to finesse the interactions and mappings between these elements in order to make V-auRal a more expressive and engaging interface.

With the VR rig installed and integrated with Unity I'll explore the navigation parameters available in VR. For example, I will map the player's bearing to OSC in addition to the player's current position. Following that, I'll explore adding the players trajectory (not necessarily the same as bearing) and velocity to the OSC mapping. Also of interest, the ability to jump from point to point may yield interesting results.

## Documentation

This video demonstrates the connection from Unity to Flocking.js via OSC and node.js. The background music is *Grillwalker* by Modselektor.

https://www.youtube.com/watch?v=L8C2jTxxn8M&feature=youtu.be
