import React from "react";
import styled from "@emotion/styled";
import Location from "./location.js";
import Icon from "./icon.js";
import Temp from "./temp.js";

let bottom;
let top;
const WeatherCard = (props) => {
  if (props.temp > 30) {
    bottom = "#F97C00";
    top = "#FE3F02";
  } else if (props.temp <= 30 && props.temp > 20) {
    bottom = "#FBD400";
    top = "#FB9E00";
  } else if (props.temp <= 20 && props.temp > 10) {
    bottom = "#A4FFEC";
    top = "#1677C5";
  } else {
    bottom = "#A4FFEC";
    top = "#1677C5";
  }

  const Card = styled.div`
    color: White;
    padding: 0px;
    margin: 0 auto;
    text-shadow: 1px 1px 1px grey;
    background-image: linear-gradient(to top, ${bottom}, ${top});
    width: 500px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location city_name={props.city_name} country_name={props.country_name} />
      <Icon weather_state={props.weather_state} />
      <Temp temp={props.temp} weather_state={props.weather_state} />
    </Card>
  );
};

export default WeatherCard;
