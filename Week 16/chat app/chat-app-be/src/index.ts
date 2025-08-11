// creating the chat room
// functionality :we chech if the message is join then we join them.
// if the message is something else then jojn tehn we check 
// if the member is part of the room and if yes then we sent the message to all others in teh room except the sender

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type === "join") {
      allSockets.push({
        room: parsedMessage.payload.roomId,
        socket,
      });
    }

    if ((parsedMessage.type = "chat")) {
      // const currentUserRoom = allSockets.find((x) => x.socket == socket).room
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket == socket) {
          currentUserRoom = allSockets[i].room;
        }
      }

      for(let i=0; i<allSockets.length; i++){
        if(allSockets[i].room == currentUserRoom){
          allSockets[i].socket.send(parsedMessage.payload.message)
        }
      }
    }
  });
});
