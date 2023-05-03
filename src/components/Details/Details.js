import "./Details.css";
import { useEffect } from "react";

export default function Details({ info = "" }) {
  //console.log("Details-info: ", info);
  useEffect(
    () => {
      console.log("useEffect Details.js!!!");
    },
    [
      /*info.id*/
    ]
  );
  return <article className="details__article">{info}</article>;
}
