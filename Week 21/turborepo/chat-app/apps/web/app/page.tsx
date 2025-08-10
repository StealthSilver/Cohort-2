import {TextInput} from "@repo/ui/text-input";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px", 
        }}
      >
        <TextInput placeholder = "room name"></TextInput>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4cafef",
            color: "white",
            cursor: "pointer",
          }}
        >
          Join room
        </button>
      </div>
    </div>
  );
}
