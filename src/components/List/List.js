import "./List.css";
import { PropTypes } from "prop-types";

export default function List({ data }) {
  console.log(data);
  const clickHandler = (evt) => console.log("click!");
  const showItems = (data) =>
    data.map((item) => {
      console.log("item: ", item);
      return (
        <li key={item.id} className="list__item" onClick={clickHandler}>
          {item.name}
        </li>
      );
    });
  showItems.propTypes = {
    data: PropTypes.objt,
  };
  return <ul className="list">{showItems(data)}</ul>;
}

List.propTypes = {
  data: PropTypes.array,
};
