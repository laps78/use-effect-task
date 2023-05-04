import axios from "axios";
import { PropTypes } from "prop-types";

// возможно, все запросы можно перенести в одну функцию и переиспользовать ее во всех компонентах?
export default async function fetchData(sufix, switchLoading, makeData) {
  switchLoading(true);
  let data = null;
  let loading = true;
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_DATA_URL}${sufix}`
    );
    data = responce.data;

    //return data;
  } catch (err) {
    console.error(err);
  } finally {
    switchLoading(false);
    makeData(data);
    console.log("fetchData-isLoading: ", loading);
    loading = false;
  }
  console.log("fetchData-isloading after: ", loading);
}

fetchData.proptypes = {
  sufix: PropTypes.string,
  switchLoading: PropTypes.func,
  makeData: PropTypes.func,
};
