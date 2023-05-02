// TODO do something with this instance or delete it!
// возможно, все запросы можно перенести в одну функцию и переиспользовать ее во всех компонентах?
export default async function fetchData(
  postfix,
  isLoading,
  setLoading,
  setData
) {
  setLoading(true);
  try {
    const responce = await fetch(`${process.env.REACT_APP_DATA_URL}${postfix}`);
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }
    const data = await responce.json();
    setData(data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
    return;
  }
}
