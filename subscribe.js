const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {

  client.subscribe("MMBTest");
  console.log("Client has subscribed successfully!")
  
  client.on("message", (topic, message) => {
    console.log(message.toString());
  });

});