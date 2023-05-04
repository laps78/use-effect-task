import "./Details.css";
import { useEffect, useState } from "react";
import fetchData from "../engine/fetchData";

export default function Details({ info }) {
  const [cardInfo, setCardInfo] = useState(info);
  const [cardIsLoading, setCardLoading] = useState(true);
  const makeCard = (newCardData) => setCardInfo(newCardData);
  const switchLoading = (newCardLoadingStatus) => {
    setCardLoading(newCardLoadingStatus);
  };

  useEffect(() => {
    console.log("useEffect Details.js!!!");
    console.log("useEffect Details.js: cardIsLoading", cardIsLoading);
    fetchData(`${info.id}.json`, switchLoading, makeCard);
    console.log(
      "useEffect Details.js: cardIsLoading after fetch envoke: ",
      cardIsLoading
    );
    console.log("Details-fetched-data: ", cardInfo);
  }, [info.id]);

  return (
    (cardIsLoading && <p style={{ color: "grey" }}>Загружаем данные...</p>) || (
      <article className="details__article">
        <img
          className="details__article_avatar"
          src={cardInfo.avatar}
          alt={`${cardInfo.name} avatar`}
        />
      </article>
    )
  );
}
