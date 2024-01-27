import "./App.css";
import { useState, useEffect } from "react";
import Card from "./card/Card.js";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/houses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="App">
      {data.map((item) => (
        <Card data={item}></Card>
      ))}
    </div>
  );
}
