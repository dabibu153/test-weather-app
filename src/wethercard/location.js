import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const City = styled.h1`
    font-size: 1.6rem;
    padding: 10px;
    padding-left: 20px;
  `;

  const Country = styled.h3`
    font-size: 1rem;
    padding-top 20px;
  `;

  return (
    <Container>
      <City>{props.city_name}</City>
      <Country>{props.country_name}</Country>
    </Container>
  );
};

export default Location;
