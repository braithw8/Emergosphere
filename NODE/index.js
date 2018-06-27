

var osc = require("osc")
var flock = require("flocking")



var synth = flock.synth({
  synthDef:{
    ugen: "flock.ugen.sum",
    sources: [
      {
        id: "osc0",
        ugen: "flock.ugen.sinOsc",
        mul: {
          ugen:"flock.ugen.sinOsc",
          freq: 3
        },
        freq: {
          ugen: "flock.ugen.lfNoise",
          mul: 0,
          add: 500
        }
      },    {
        id: "osc1",
        ugen: "flock.ugen.sinOsc",
        mul: {
          ugen:"flock.ugen.sinOsc",
          freq: 3
        },
        freq: {
          ugen: "flock.ugen.lfNoise",
          mul: 0,
          add: 500
        }
      },    {
        id: "osc2",
        ugen: "flock.ugen.sinOsc",
        mul: {
          ugen:"flock.ugen.sinOsc",
          freq: 3
        },
        freq: {
          ugen: "flock.ugen.lfNoise",
          mul: 0,
          add: 500
        }
      }
    ]
  }
});


synth.play();



// Create an osc.js UDP Port listening on port 57121.
var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 7400,
  metadata: true
});

// Listen for incoming OSC bundles.


// Open the socket.
udpPort.open();


// When the port is read, send an OSC message to, say, SuperCollider
udpPort.on("ready", function () {
  console.log("ready");


});

udpPort.on("message", function (message) {

  let freqMult = 200;
  let fmMult = 100;
  let amMult = 0.1;

  //console.log(message);
  if (message.address === "/V-auRal/position/x"){
    let freqX = message.args[0].value * freqMult;
    console.log("freqX = " + freqX);
    synth.set("osc0.freq.add", freqX);
  }
  if (message.address === "/V-auRal/position/y"){
    let freqY = message.args[0].value * freqMult;
    console.log("freqY = " + freqY);
    synth.set("osc1.freq.add", freqY);
  }
  if (message.address === "/V-auRal/position/z"){
    let freqZ = message.args[0].value * freqMult;
    console.log("freqZ = " + freqZ);
    synth.set("osc2.freq.add", freqZ);
  }
  if (message.address === "/V-auRal/velocity/x"){
    let fmX = message.args[0].value * fmMult;
    console.log("fmX = " + fmX);
    synth.set("osc0.freq.mul", fmX);
  }
  if (message.address === "/V-auRal/velocity/y"){
    let fmY = message.args[0].value * fmMult;
    console.log("fmY = " + fmY);
    synth.set("osc1.freq.mul", fmY);
  }
  if (message.address === "/V-auRal/velocity/z"){
    let fmZ = message.args[0].value * fmMult;
    console.log("fmZ = " + fmZ);
    synth.set("osc2.freq.mul", fmZ);
  }
  if (message.address === "/V-auRal/rotation/x"){
    let amX = message.args[0].value * amMult;
    console.log("amX = " + amX);
    synth.set("osc0.mul.freq",amX);
  }
  if (message.address === "/V-auRal/rotation/y"){
    let amY = message.args[0].value * amMult;
    console.log("amY = " + amY);
    synth.set("osc0.mul.freq",amY);
  }
  if (message.address === "/V-auRal/rotation/z"){
    let amZ = message.args[0].value * amMult;
    console.log("amZ = " + amZ);
    synth.set("osc0.mul.freq",amZ);
  }



});
