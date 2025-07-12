import { useState, useEffect } from "react";

// custom hook

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  // re-render only when the url changes
  useEffect(() => {
    getDetails();
  }, [url]);

  return {
    finalData,
  };
}
