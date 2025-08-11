import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  // Connect WebSocket once
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "chat" || msg.type === "system") {
          setMessages((prev) => [...prev, msg.payload.message]);
        }
      } catch {
        console.error("Invalid message from server:", event.data);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, []);

  const joinRoom = () => {
    if (!roomId.trim()) return;
    if (wsRef.current) {
      wsRef.current.send(
        JSON.stringify({
          type: "join",
          payload: { roomId },
        })
      );
      setMessages([]);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (wsRef.current && inputValue.trim()) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: { message: inputValue },
        })
      );
      setInputValue("");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-600 to-black flex flex-col text-white">
      {!joined ? (
        // Room Join UI
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <h1 className="text-3xl font-bold">Join a Chat Room</h1>
          <input
            className="px-4 py-2 rounded text-white w-64 border-white
          "
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room ID"
            onKeyDown={(e) => e.key === "Enter" && joinRoom()}
          />
          <button
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-lg"
            onClick={joinRoom}
          >
            Join
          </button>
        </div>
      ) : (
        // Chat UI
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-xs ${
                  message.startsWith("You joined") || message.includes("joined")
                    ? "bg-gray-700 text-gray-300 text-sm italic"
                    : "bg-purple-600 text-white"
                }`}
              >
                {message}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="w-full bg-gray-800 flex p-4">
            <input
              className="flex-1 border border-gray-600 px-3 py-2 rounded mr-2 text-black"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
