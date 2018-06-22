

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
    },{
      id: "osc1",
      ugen: "flock.ugen.sinOsc",
      mul: 0,
      freq: {
        ugen: "flock.ugen.lfNoise",
        mul: 0,
        add: 400
      }
    },{
      id: "osc2",
      ugen: "flock.ugen.sinOsc",
      mul: 0,
      freq: {
        ugen: "flock.ugen.lfNoise",
        mul: 0,
        add: 300
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

//console.log(message);
  if (message.address === "/V-auRal/position/x"){
    //console.log("/V-auRal/position/x" + message.args[0].value);
    synth.set("osc0.freq.add", message.args[0].value * 50);
  }
  if (message.address === "/V-auRal/position/y"){
    //console.log("/V-auRal/position/y" + message.args[0].value);
    synth.set("osc1.freq.add", message.args[0].value * 500);
  }  if (message.address === "/V-auRal/position/z"){
      //console.log("/V-auRal/position/z" + message.args[0].value);
      synth.set("osc2.freq.add", message.args[0].value * 50);
    }

    if (message.address === "/V-auRal/velocity/x"){
        //console.log("/V-auRal/velocity/x" + message.args[0].value);
        synth.set("osc0.freq.mul", message.args[0].value * 100);
      }
      if (message.address === "/V-auRal/velocity/y"){
          //console.log("/V-auRal/velocity/y" + message.args[0].value);
          synth.set("osc1.freq.mul", message.args[0].value * 100);
        }
        if (message.address === "/V-auRal/velocity/z"){
            //console.log("/V-auRal/velocity/z" + message.args[0].value);
            synth.set("osc2.freq.mul", message.args[0].value * 100);
          }
          if (message.address === "/V-auRal/rotation/x"){
              console.log("/V-auRal/rotation/x " + (message.args[0].value * 0.1));
              synth.set("osc0.mul.freq", message.args[0].value * 0.1);
            }



});
