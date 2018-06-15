

var osc = require("osc")
var flock = require("flocking")



var synth1 = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: 500,
        id: "osc1",
        mul: .15
    }
});

var synth2 = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: 500,
        id: "osc1",
        mul: .15
    }
});

var synth3 = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: 500,
        id: "osc1",
        mul: .15
    }
});



synth1.play();
synth2.play();
synth3.play();


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

console.log(message);
  if (message.address === "/V-auRal/x"){
    console.log(message.args[0].value);
    synth1.set("osc1.freq", message.args[0].value * 50);
  }
  if (message.address === "/V-auRal/y"){
    console.log(message.args[0].value);
    synth2.set("osc1.freq", message.args[0].value * 500);
  }  if (message.address === "/V-auRal/z"){
      console.log(message.args[0].value);
      synth3.set("osc1.freq", message.args[0].value * 50);
    }


});
