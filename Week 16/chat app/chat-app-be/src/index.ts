// creating the chat room
// functionality :we chech if the message is join then we join them.
// if the message is something else then jojn tehn we check 
// if the member is part of the room and if yes then we sent the message to all others in teh room except the sender

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (message) => {
    let parsedMessage: any;
    try {
      parsedMessage = JSON.parse(message.toString());
    } catch (e) {
      console.error("Invalid JSON:", message.toString());
      return;
    }

    if (parsedMessage.type === "join") {
      const roomId = parsedMessage.payload?.roomId;
      if (!roomId) return;

      allSockets.push({ socket, room: roomId });
      console.log(`User joined room: ${roomId}`);

      socket.send(JSON.stringify({
        type: "system",
        payload: { message: `You joined room: ${roomId}` }
      }));
    }

    if (parsedMessage.type === "chat") {
      const currentUser = allSockets.find((x) => x.socket === socket);
      if (!currentUser) return;

      const currentUserRoom = currentUser.room;
      const chatMessage = parsedMessage.payload?.message;

      if (!chatMessage) return;

      // Broadcast to everyone in the same room
      allSockets.forEach((user) => {
        if (user.room === currentUserRoom) {
          user.socket.send(JSON.stringify({
            type: "chat",
            payload: { message: chatMessage }
          }));
        }
      });
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
    allSockets = allSockets.filter((user) => user.socket !== socket);
  });
});

console.log("WebSocket server running on ws://localhost:8080");
