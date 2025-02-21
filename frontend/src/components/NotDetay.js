import React from "react";
import { useNotContext } from "../hooks/useNotContext";
import moment from 'moment'
import 'moment/locale/tr'
import { useAuthContext } from "../hooks/useAuthContext";

export default function NotDetay({ not }) {

  const {dispatch} = useNotContext();
  const {kullanici} = useAuthContext();

  const handleClick = async () => {

    if(!kullanici){
      return
    }

    const response = await fetch('/api/notlar/' + not._id, {
      method: "DELETE",
      headers:{
        'Authorization':`Bearer ${kullanici.token}`
      }
    });

    const json = await response.json();

    if (response.ok) {
      // state den temizle
      dispatch({ type: "NOT_SIL", payload: json });
    }
  };

  return (
    <div className="not-detay">
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <p>{moment(new Date(not.createdAt)).fromNow()}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
}
