const { Manager } = require("socket.io-client");

const manager = new Manager("http://localhost:3000");

const socket = manager.socket("/");
socket.on("test", (latency) => {
    console.log("test", latency);
});
socket.io.on("ping", () => {
    console.log("ping");
});