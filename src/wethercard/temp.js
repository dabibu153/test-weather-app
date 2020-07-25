import React from "react";
import styled from "@emotion/styled";

const Temp = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const Sky = styled.h1`
    font-size: 1.6rem;
    padding-top: 10px;

    padding-right: 20px;
  `;
  const Degrees = styled.h1`
    font-size: 1.6rem;
    padding: 10px;
    padding-right: 20px;
  `;

  return (
    <Container>
      <Sky>{props.weather_state}</Sky>
      <Degrees>{props.temp}°C</Degrees>
    </Container>
  );
};

export default Temp;
