import { useEffect } from "react";
import "./Card.css";

export default function Card({ data }) {
  function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }
  function setGradient(color1 = "white", color2 = "black") {
    if (!isColor(color1)) color1 = "white";
    if (!isColor(color2)) color2 = "black";
    const div = document.getElementById(data.id);
    //const div = document.querySelector(".Gradient");
    div.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  }
  useEffect(() => {
    // Split using a and character
    let colors = data.houseColours.split(" and ");
    console.log(colors[0].toLowerCase(), colors[1].toLowerCase());
    setGradient(colors[0].toLowerCase(), colors[1].toLowerCase());
  }, []);
  return (
    <div className="Card">
      <div className="TitleContainer">
        <div className="Title">{data.name}</div>
        <div className="Animal">{data.animal}</div>
      </div>
      <div id={data.id} className="Gradient"></div>
      <div className="FounderContainer">
        Founder:&ensp; <span className="Founder">{data.founder}</span>
      </div>
    </div>
  );
}
