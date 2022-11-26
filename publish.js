const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {

  setInterval(() => {
    let random = Math.random() * 50;
    console.log(random);

    if(random < 30) {
      client.publish("MMBTest", "Example MQTT using HiveMQ!: " + random);
    }
  }, 30000);

});