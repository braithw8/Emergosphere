

var osc = require("osc")
var flock = require("flocking")

var synth = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: 500,
        id: "flosss",
        mul: .5


    }
});

synth.play();

// Create an osc.js UDP Port listening on port 57121.
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 8338,
    metadata: true
});

// Listen for incoming OSC bundles.
udpPort.on("message", function (message) {
  if (message.address === "/gesture/jaw"){
    console.log(message.args[0].value);
    synth.set("flosss.freq", message.args[0].value * 50);
  }
});

// Open the socket.
udpPort.open();


// When the port is read, send an OSC message to, say, SuperCollider
udpPort.on("ready", function () {
console.log("ready");


});