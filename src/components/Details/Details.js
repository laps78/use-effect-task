import "./Details.css";
import { useEffect, useState } from "react";
import fetchData from "../engine/fetchData";

export default function Details({ info }) {
  const [cardInfo, setCardInfo] = useState(null);
  const [cardIsLoading, setCardLoading] = useState(false);
  const makeCard = (newCardData) => setCardInfo(newCardData);
  const switchCardLoadingStatus = (newCardLoadingStatus) =>
    setCardLoading(newCardLoadingStatus);
  console.log("Details-info: ", info);
  useEffect(() => {
    console.log("useEffect Details.js!!!");
    fetchData(`${info.id}.json`, switchCardLoadingStatus, makeCard);
    console.log("Details-fetched-data: ", cardInfo);
  }, [info.id]);
  return <article className="details__article">{info.id}</article>;
}
const template = {
  id: 1,
  name: "Dorthy McClure Sr.",
  avatar: "https://i.pravatar.cc/300",
  details: {
    city: "Sipesfort",
    company: "Hilll LLC",
    position: "Regional Identity Supervisor",
  },
};
