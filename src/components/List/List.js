import "./List.css";
import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";

export default function List({ data }) {
  console.log(data);
  const clickHandler = (evt) => console.log("click!");
  const showItems = (data) =>
    data.map((item) => {
      console.log("item: ", item);
      return (
        <li key={item.id} className="list__item" onClick={clickHandler}>
          {item}
        </li>
      );
    });
  showItems.propTypes = {
    data: PropTypes.objt,
  };
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
      {showItems(data)}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.object,
};
