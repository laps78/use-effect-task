import "./App.css";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEfect App.js");
  }, []);
  const JSX = (
    <div className="App">
      <List />
      <Details />
    </div>
  );
  return (isLoading && <p>Загружаем данные...</p>) || JSX;
}

export default App;
