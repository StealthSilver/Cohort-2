import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;

interface User{
  socket: WebSocket;
  room: string;
}

let allSockets : User[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);

  userCount = userCount + 1;
  console.log("user connected" + " " + userCount);

  socket.on("message", (message) => {
    console.log("message recieved " + message.toString());
    // broadcasting the message to all the sockets
    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      s.send(message.toString() + ": sent from the server");
    }
  });
  // disconnected the offline sockets
  socket.on("disconnect", () => {
    allSockets = allSockets.filter(x => x != socket);
  })
});
