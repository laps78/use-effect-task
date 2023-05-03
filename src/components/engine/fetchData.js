import axios from "axios";

// TODO do something with this instance or delete it!
// возможно, все запросы можно перенести в одну функцию и переиспользовать ее во всех компонентах?
export default async function fetchData(postfix, switchLoading, makeData) {
  switchLoading(true);
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_DATA_URL}${postfix}`
    );
    const data = responce.data;
    makeData(data);
    console.log("fetchData-data: ", data);
    //return data;
  } catch (err) {
    console.error(err);
  } finally {
    switchLoading(false);
  }
}
