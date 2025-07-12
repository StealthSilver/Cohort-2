import { useState, useEffect } from "react";

// custom hook

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  // loader
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  // re-render only when the url changes
  useEffect(() => {
    getDetails();
  }, [url]);

  // todo -> implement re-fetching if the data changes on the url

  return {
    finalData,
    loading,
  };
}
