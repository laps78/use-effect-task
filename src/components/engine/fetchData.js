import axios from "axios";
import { PropTypes } from "prop-types";

// возможно, все запросы можно перенести в одну функцию и переиспользовать ее во всех компонентах?
export default async function fetchData(sufix, switchLoading, makeData) {
  switchLoading(true);
  let loading = true;
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_DATA_URL}${sufix}`
    );
    const data = responce.data;
    makeData(data);
    console.log("fetchData-data: ", data);
    console.log("fetchData-isLoading: ", loading);
    //return data;
  } catch (err) {
    console.error(err);
  } finally {
    switchLoading(false);
  }
}

fetchData.proptypes = {
  sufix: PropTypes.string,
  switchLoading: PropTypes.func,
  makeData: PropTypes.func,
};
