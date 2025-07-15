import { useRecoilValue, useRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./model/atoms/atoms";

import "./App.css";
function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

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

      {/* Increment messaging count */}
      <button onClick={() => setMessageCount(messageCount + 1)}>Me</button>

      {/* Now this shows separately */}
      <button>Total: {totalNotificationCount}</button>
    </>
  );
}
export default App;
