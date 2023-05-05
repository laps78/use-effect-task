import React from "react";
import { PropTypes } from "prop-types";

const ShowDetails = ({ details }) => {
  return (
    <ul className="details__list">
      {Object.keys(details).map((key) => (
        <li key={key} className="details_list_item">{`${
          key.charAt(0).toUpperCase() + key.slice(1)
        }: ${details[key]}`}</li>
      ))}
    </ul>
  );
};

// ShowDetails.proptypes = {
//   details: PropTypes.object,
// };

export default ShowDetails;
