"use client"; // when using functions that are on the browser, it needs to be a client component

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter(); 

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
        <TextInput size="small" placeholder="room name" />
        <button
          onClick={() => {
            router.push("/chat/123"); 
          }}
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
