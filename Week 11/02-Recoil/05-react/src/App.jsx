import { useState } from "react";
import { useRecoilValue } from "recoil";
import { networkAtom } from "./model/atoms/atoms";

import "./App.css";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notification ()</button>
      <button>Me</button>
    </>
  );
}

export default App;
