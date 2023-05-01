import "./List.css";

export default function List() {
  const clickHandler = (evt) => console.log("click!");
  return (
    <ul className="list">
      <li className="list__item" onClick={clickHandler}>
        list item 1
      </li>
      <li className="list__item" onClick={clickHandler}>
        list item 2
      </li>
      <li className="list__item" onClick={clickHandler}>
        list item 3
      </li>
    </ul>
  );
}
