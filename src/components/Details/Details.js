import "./Details.css";
import { useEffect, useState } from "react";
import fetchData from "../engine/fetchData";
import { nanoid } from "nanoid";

export default function Details({ info }) {
  const [cardInfo, setCardInfo] = useState({ details: { id: info.id } });
  const [cardIsLoading, setCardLoading] = useState(true);
  // funcs for card fetching
  const makeCard = (newCardData) => setCardInfo(newCardData);
  const switchLoading = (newCardLoadingStatus) => {
    setCardLoading(newCardLoadingStatus);
  };

  const ShowDetails = () =>
    Array.from(cardInfo.details).map((detail) => (
      <li
        key={nanoid()}
        className="detail"
      >{`${detail.name}: ${detail.value}`}</li>
    ));

  useEffect(() => {
    if (info.id !== cardInfo.details.id) {
      fetchData(`${info.id}.json`, switchLoading, makeCard);
    }
  }, [info.id]);

  return (
    (cardIsLoading && <p style={{ color: "grey" }}>Загружаем данные...</p>) || (
      <article className="details__article">
        <img
          className="details__article_avatar"
          src={cardInfo.avatar}
          alt={`${cardInfo.name} avatar`}
        />
        <h2 className="article__header">{cardInfo.name}</h2>
        <ul className="article_details_list">{ShowDetails()}</ul>
      </article>
    )
  );
}
