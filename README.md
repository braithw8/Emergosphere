# Emergosphere
A Virtual Reality Sphere of Sound
## Introduction
Emergosphere is an explorative universe of sound. Realized using virtual reality apparatus, Emergosphere allows performers to navigate the space and, in doing so, create an emergent performance and composition. This project builds on my experience of creating _[Harmonizer](http://blog.ocad.ca/wordpress/digf6037-fw201702-01/2017/11/harmonizer/)_, _[Danger Zone](https://braithwaite-finlay.format.com/blog/digital-games-blog-003-danger-zone/)_, and _[Junior Jazz Hands](https://braithwaite-finlay.format.com/blog/digital-games-blog-006-jjh-final-submission/)_ as part of my Digital Future MDes at OCAD University.
## Experience
Performances are immersed in a virtual environment, their movement and interactions within the space are mapped to triggers and parameters of sound generators (oscillators, sample playback) as well as audio signal processors (time, amplitude, and spectrum). Primary feedback to the performer will be aural, nurturing a navigation and engagement based on auditory cues rather than visual. There will be visual feedback that corresponds to the aural, but the goal is to have an auditory experience that could exist without the visual.
## Mapped Parameters
### Navigation
Ultimately, navigatory parameters will map to the auditory, shaping the aural experience. The following movement parameters will affect sound:
* rotation (euler angles)
  * x
  * y
  * Z
* trajectory (in relation to rotation)
  * forward
  * backward
  * up
  * down
  * left
  * right
* velocity

Performers will be able to create unique combinations of controllable parameters for performance the rotation, relative trajectory, and velocity of their movement in space.
### Sound
The following is a preliminary list of mappable sound parameters that will be connected the the above navigational parameters:
* Pitch
  * Osc pitch
  * Sample playback rate
* Timbre
  * From simple to complex, single frequency to spectrum rich with overtones
* Filter
  * type
  * cutoff
  * resonance
  * Envelope amount
* Amplitude
  * Level
  * Envelope Amount
* Effect
  * Reverb Effect
    * Size
    * Dry/wet
    * Early reflections amount
  * Distortion
    * Amount
    * Shape
  * Delay
    * Time
    * Dry/wet
 ## Triggers
While the navigation within the space defines the parameters of sound, the buttons on the game controller will trigger the amplitude and filter envelopes and, in the case of sampled sources, playback.
## Development Parameters
The emergosphere will be developed for the HTC Vive VR system using Unity and PureData, connected via OSC. This project will leverage existing libraries for both [Vive](https://assetstore.unity.com/packages/tools/integration/vive-input-utility-64219) and [OSC](https://github.com/jorgegarcia/UnityOSC) integration.
## Inspirations
Three examples of previous work that inspire this project are:
* **Leo Theremin's _Theremin_**
  * This seminal instrument magically translates radio interference to pitch and amplitude with stunning effect.
* **Korg Kaoss Series (_Kaoss Pad, Kaoscillator_)**
  * A simple plotting of effect or oscillator parameters against one another on an xy cartesian plane that creates interesting possibilities of parametric control.
* **_reacTable_**
  * A synthesizer and sequencer that explores the table top space, creating performance and composition through touch and the placement of objects on the surface.
 ## Papers of Interest
* N. Feehan, “Audio orienteering — navigating an invisible terrain,” in Proceedings of the international conference on new interfaces for musical expression, Pittsburgh, PA, United States, 2009, pp. 161-162.
* M. Huberth and C. Nanou, “Notation for 3D motion tracking controllers: a gametrak case study,” in Proceedings of the international conference on new interfaces for musical expression, Brisbane, Australia, 2016, pp. 96-105. 
* A. Sa, “Repurposing video game software for musical expression: a perceptual approach,” in Proceedings of the international conference on new interfaces for musical expression, London, United Kingdom, 2014, pp. 331-334. 
R. Hamilton, “Sonifying game-space choreographies with udkosc,” in Proceedings of the international conference on new interfaces for musical expression, Daejeon, Republic of Korea, 2013, pp. 446-449. 
* C. Ariza, “The dual-analog gamepad as a practical platform for live electronics instrument and interface design,” in Proceedings of the international conference on new interfaces for musical expression, Ann Arbor, Michigan, 2012. 
* K. Headlee, T. Koziupa, and D. Siwiak, “Sonic virtual reality game : how does your body sound ?,” in Proceedings of the international conference on new interfaces for musical expression, Sydney, Australia, 2010, pp. 423-426. 
* A. Dolphin, “Spiralset : a sound toy utilizing game engine technologies,” in Proceedings of the international conference on new interfaces for musical expression, Pittsburgh, PA, United States, 2009, pp. 56-57. 
* L. Kessous, “Bi-manual mapping experimentation, with angular fundamental frequency control and sound color navigation,” in Proceedings of the international conference on new interfaces for musical expression, Dublin, Ireland, 24-26 May, 2002 2002, pp. 113-114. 

  
