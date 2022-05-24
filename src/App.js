import "./App.css";
import Main from "./components/main/Main";
import React, { useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import Header from "./components/header/Header";
import { Loading } from "./components/loading/Loading";

function App() {
  const [roadster, setRoadster] = useState();
  const [ships, setShips] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://api.spacexdata.com/v3/roadster").then((value) =>
        value.json()
      ),
      fetch("https://api.spacexdata.com/v3/ships").then((value) =>
        value.json()
      ),
    ]).then((allResponses) => {
      setRoadster(allResponses[0]);
      setShips(allResponses[1]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <DataContext.Provider value={{ roadster, ships }}>
          <Main />
        </DataContext.Provider>
      )}
    </div>
  );
}

export default App;
