import React from "react";
import styled from "@emotion/styled";
let icon;
const Icon = (props) => {
  const Container = styled.div`
    text-align: Center;
  `;

  const Image = styled.img`
    width: 45%;
  `;

  switch (props.weather_state) {
    case "Clouds":
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Clear":
      icon = `./img/Mostly Sunny-2x.png`;
      break;
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-2x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2x.png`;
      break;
    case "Dust":
      icon = `./img/Dust-2x.png`;
      break;
    case "Mist":
      icon = `./img/Fog-2x.png`;
      break;
    case "Snow":
      icon = `./img/Snow-2x.png`;
      break;
    case "Rain":
      icon = `./img/Rain-2x.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/Severe Thunderstorm-2x.png`;
      break;
    default:
      icon = `./img/Fog-2x.png`;
      break;
  }
  return (
    <Container>
      <Image src={icon} alt="icon" />
    </Container>
  );
};

export default Icon;
