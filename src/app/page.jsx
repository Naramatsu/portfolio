import React from "react";
import AppState from "./store/AppState";
import Container from "./Container";

const Home = () => {
  return (
    <AppState>
      <Container />
    </AppState>
  );
};

export default Home;
