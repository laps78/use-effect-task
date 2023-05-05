import "./Details.css";
import { useEffect, useState } from "react";
import fetchData from "../engine/fetchData";
import ShowDetails from "../ShowDetails";
import { nanoid } from "nanoid";
import { PropTypes } from "prop-types";

export default function Details({ info }) {
  const [cardInfo, setCardInfo] = useState({ details: { id: info.id } });
  const [cardIsLoading, setCardLoading] = useState(true);

  // funcs for card fetching
  const makeCard = (newCardData) => setCardInfo(newCardData);
  const switchLoading = (newCardLoadingStatus) => {
    setCardLoading(newCardLoadingStatus);
  };

  useEffect(() => {
    if (info.id !== cardInfo.details.id || !cardInfo.name) {
      fetchData(`${info.id}.json`, switchLoading, makeCard);
    }
  }, [info.id]);

  return (
    (cardIsLoading && <p className="preloader">Загружаем данные...</p>) || (
      <article className="article">
        <img
          className="avatar"
          src={cardInfo.avatar}
          alt={`${cardInfo.name} avatar`}
        />
        <h2 className="header">{cardInfo.name}</h2>
        <ShowDetails details={cardInfo.details} />
      </article>
    )
  );
}
