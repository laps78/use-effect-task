import "./App.css";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import React, { useEffect, useState } from "react";
import fetchData from "./components/engine/fetchData";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const makeData = (newData) => setData(newData);
  const switchLoading = (isLoading) => setLoading(isLoading);

  useEffect(() => {
    console.log("useEfect App.js");
    fetchData("users.json", switchLoading, makeData);
  }, []);
  console.log(data);
  const JSX = (
    <div className="App">
      <List data={data} />
      <Details />
    </div>
  );
  return (isLoading && <p>Загружаем данные...</p>) || JSX;
}

export default App;

//
