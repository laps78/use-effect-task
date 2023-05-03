import "./Details.css";
import { useEffect, useState } from "react";
import fetchData from "../engine/fetchData";

export default function Details({ info = { id: null } }) {
  console.log("Details-incomming info.id: ", info.id);
  const [cardInfo, setCardInfo] = useState(null);
  const [cardIsLoading, setCardLoading] = useState(false);
  const makeCard = (newCardData) => setCardInfo(newCardData);
  const switchCardLoadingStatus = (newCardLoadingStatus) =>
    setCardLoading(newCardLoadingStatus);

  console.log("Details-info: ", info);

  useEffect(() => {
    console.log("useEffect Details.js!!!");
    console.log("useEffect Details.js: cardIsLoading", cardIsLoading);
    fetchData(`${info.id}.json`, switchCardLoadingStatus, makeCard);
    console.log("Details-fetched-data: ", cardInfo);
  }, [info.id]);

  const JSX = (
    <article className="details__article">
      <img
        className="details__article_avatar"
        src={cardInfo.avatar}
        alt={`${cardInfo.name} avatar`}
      />
    </article>
  );

  return (cardIsLoading && <p>Загружаем данные...</p>) || JSX;
}

// data template:

// {
//   id: 1,
//   name: "Dorthy McClure Sr.",
//   avatar: "https://i.pravatar.cc/300",
//   details: {
//     city: "Sipesfort",
//     company: "Hilll LLC",
//     position: "Regional Identity Supervisor",
//   },
// }
