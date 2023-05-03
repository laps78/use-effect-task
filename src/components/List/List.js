import "./List.css";
import { PropTypes } from "prop-types";

export default function List({ data, selectItem }) {
  const clickHandler = (evt) => {
    const selectedItemData = {
      id: evt.target.dataset.id,
      name: evt.target.dataset.name,
    };
    selectItem(selectedItemData);
    console.log("selected item data: ", selectedItemData);
  };
  const showItems = (data) =>
    data.map((item) => {
      return (
        <li
          key={item.id}
          className="list__item"
          onClick={clickHandler}
          data-id={item.id}
          data-name={item.name}
        >
          {item.name}
        </li>
      );
    });
  showItems.propTypes = {
    data: PropTypes.object,
  };
  return <ul className="list">{showItems(data)}</ul>;
}

List.propTypes = {
  data: PropTypes.array,
  selectItem: PropTypes.func,
};
