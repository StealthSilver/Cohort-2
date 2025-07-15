import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./model/atoms/atoms";

import "./App.css";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);

  const notificationCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notificationCount})</button>

      {/* increase the messaging count -> will be done by a backend */}
      <button
        onClick={() => {
          setMessageCount(messageCount + 1);
        }}
      >
        Me
      </button>
    </>
  );
}

export default App;
