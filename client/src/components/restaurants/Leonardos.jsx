// React imports
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Style and Component imports
import "../../App.css";
import Sidebar from "../Sidebar";
import Header from "../Header";
import RestaurantInfo from "../RestaurantInfo";
import LeonardosMap from "../restaurantMaps/LeonardosMap";

// useState and restaurant info declarations
let restInfo;
function Leonardos(props) {
  const [restName, setRestName] = useState("");
  const [restHours, setRestHours] = useState("");
  const [restAddress, setRestAddress] = useState("");
  const [restNoteOne, setRestNoteOne] = useState("");
  const [restNoteTwo, setRestNoteTwo] = useState("");
  const [restPhone, setRestPhone] = useState("");

  // On page load fetches specific restaurant info fom server and stores json in restInfo
  // states are updated with restaurant info
  useEffect(() => {
    fetch("/api/leonardos")
      .then((res) => res.json())
      .then((data) => (restInfo = data))
      .then(() => {
        setRestName(restInfo.name);
        setRestHours(restInfo.hours);
        setRestNoteOne(restInfo.notes[0]);
        setRestNoteTwo(restInfo.notes[1]);
        setRestPhone(restInfo.phone);
        setRestAddress(restInfo.address);
      });
  }, []);

  //renders formatted restaurant sepcific information to page
  return (
    <>
      <div id="main-restaurant-container">
        <Header />

        <div id="restaurant-container">
          <Sidebar />
          <LeonardosMap />
        </div>
        <RestaurantInfo
          restName={restName}
          restHours={restHours}
          restPhone={restPhone}
          restAddress={restAddress}
          restNoteOne={restNoteOne}
          restNoteTwo={restNoteTwo}
        />
        <Link to="/">Back to home</Link>
      </div>
    </>
  );
}

export default Leonardos;
