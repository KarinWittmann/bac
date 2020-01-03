import React from "react";
import "./DogProfile.css";

const baseURL = process.env.MEDIA_URL || "https://targetpractise-3737.restdb.io/media/";

export default function DogProfile({dog, onClick}) {
  return (
    <div className="ProfileButton">
      <img id={dog._id} onClick={() => onClick(dog)} src={baseURL + dog.image} alt={dog.name} />
    </div>
  );
}