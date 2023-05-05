import "./App.css";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import React, { useEffect, useState } from "react";
import fetchData from "./components/engine/fetchData";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState(null);

  // funcs for start fetching
  const makeData = (newData) => setData(newData);
  const switchLoading = (value) => setLoading(value);

  // funcs for selection
  const selectItem = (newSelectedItem) => setSelectedItem(newSelectedItem);

  useEffect(() => {
    fetchData("users.json", switchLoading, makeData);
  }, []);

  const JSX = (
    <div className="App">
      {(isLoading && (
        <p className="details__preloader">Загружаем данные...</p>
      )) || <List data={data} selectItem={selectItem} />}
      {(selectedItem && <Details info={selectedItem} />) || (
        <p className="details__preloader">Not selected</p>
      )}
    </div>
  );
  return (isLoading && <p className="preloader">Загружаем данные...</p>) || JSX;
}

export default App;
