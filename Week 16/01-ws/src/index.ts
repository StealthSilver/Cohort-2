import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// event handler, when there is a new connection sent it to the socket function
wss.on("connection", function (socket) {
    console.log("User connected");

    const interval = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send("Current price of Solana is: " + Math.random());
        }
    }, 500);

    socket.on("message", (e) => {
        console.log("Received message:", e.toString());
    });

    socket.on("close", () => {
        console.log("User disconnected");
        clearInterval(interval);
    });

    socket.on("error", (err) => {
        console.error("WebSocket error:", err.message);
        clearInterval(interval);
    });
});
