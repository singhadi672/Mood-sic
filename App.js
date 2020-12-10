import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const Motivated = [
    { song: "Titanium Ft. Sia", duration: "3:40" },
    { song: "Champion", duration: "2:30" },
    { song: "Remember the name", duration: "3:00" },
    { song: "Best of Me", duration: "3:10" }
  ];

  const Night = [
    { song: "Six Feet Under", duration: "3:09" },
    { song: "Ride Slow", duration: "2:30" },
    { song: "Shallo-Radio Edit", duration: "3:37" },
    { song: "Location", duration: "3:39" }
  ];
  const LofiCoding = [
    { song: "Eternal Youth", duration: "3:25" },
    { song: "idfc", duration: "4:05" },
    { song: "Affection", duration: "4:20" },
    { song: "Can't take my Eyes off you", duration: "4:00" }
  ];
  const Tashan = [
    { song: "Satisfya", duration: "3:40" },
    { song: "Bandook", duration: "3:30" },
    { song: "G.O.A.T", duration: "3:43" },
    { song: "Old Skool", duration: "4:13" }
  ];

  const [userInput, setUserInput] = useState("");
  const genre = ["Motivated", "Night", "Low-fi Coding", "Gedi-da-Tashan"];

  function showPlaylist(item) {
    var temp = "";
    if (item === "Motivated") {
      temp = Motivated;
    } else if (item === "Night") {
      temp = Night;
    } else if (item === "Low-fi Coding") {
      temp = LofiCoding;
    } else if (item === "Gedi-da-Tashan") {
      temp = Tashan;
    }
    setUserInput(
      temp.map((it) => {
        return (
          <div className="list">
            <span>{it["song"]}</span>
            <br></br>
            <small>{it["duration"]}</small>
          </div>
        );
      })
    );
  }

  return (
    <div className="App">
      <header>
        <h1>🎶 Mood-sic</h1>
      </header>
      <h3>Select any Genre to get your music-mood onn!!</h3>
      <div>
        {genre.map((item) => {
          return (
            <span id="btn-genre">
              <button onClick={() => showPlaylist(item)}>{item}</button>
            </span>
          );
        })}
      </div>
      <div>
        <ul className="ul-list">{userInput}</ul>
      </div>
    </div>
  );
}
