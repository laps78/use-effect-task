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
    <div>
      <p className="info">
        Это приложение является частью учебного проекта на{" "}
        <strong>React.js.</strong> Любое совпадение указанных данных с данными
        реальных людей является непреднамеренным.
        <br />
        Исходный код приложения и описание учебного задания доступны{" "}
        <a
          href="https://github.com/laps78/use-effect-task"
          target="_blank"
          rel="noreferrer"
        >
          репозитории
        </a>{" "}
        проекта.
      </p>
      <div className="App">
        {(isLoading && (
          <p className="app__preloader">Загружаем данные...</p>
        )) || <List data={data} selectItem={selectItem} />}
        {(selectedItem && <Details info={selectedItem} />) || (
          <p className="details__preloader">Not selected</p>
        )}
      </div>
    </div>
  );
  return (isLoading && <p className="preloader">Загружаем данные...</p>) || JSX;
}

export default App;
