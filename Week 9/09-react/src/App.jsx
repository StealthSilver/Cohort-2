import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

  }, [currentTab]); 

  return (
    <div>
      {[1, 2, 3, 4].map(num => (
        <button
          key={num}
          onClick={() => setCurrentTab(num)}
          style={{ color: currentTab === num ? "red" : "black", margin: "5px" }}
        >
          Todo #{num}
        </button>
      ))}
      
      <br />
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}

export default App;
