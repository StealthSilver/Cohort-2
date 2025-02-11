import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => console.log("Connected to WebSocket server");
    
    socket.onmessage = (event) => {
      setResponse(event.data); // Display received message (pong)
    };

    socket.onclose = () => console.log("Disconnected from WebSocket server");

    setWs(socket);

    return () => socket.close(); // Cleanup on unmount
  }, []);

  function sendMessage() {
    if (ws && message.trim()) {
      ws.send(message);
      setMessage(""); // Clear input after sending
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Ping Pong WebSocket</h2>
      <input
        type="text"
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}

export default App;
