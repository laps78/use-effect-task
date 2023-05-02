import "./App.css";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import React, { useEffect, useState } from "react";
import fetchData from "./components/engine/fetchData";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEfect App.js");
    fetchData("user.json", isLoading, setLoading, setData);
  }, []);
  const JSX = (
    <div className="App">
      <List data={data} />
      <Details />
    </div>
  );
  return (isLoading && <p>Загружаем данные...</p>) || JSX;
}

export default App;
