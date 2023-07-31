import { useState, useEffect } from "react";

const useStatus = (stat = true) => {
  const [state, setState] = useState<boolean>(stat);
  const onlineHandler = () => setState(true);
  const offlineHandler = () => setState(false);
  useEffect(() => {
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  });
  return state;
};

export default useStatus;
