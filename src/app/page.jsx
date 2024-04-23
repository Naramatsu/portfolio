import React from "react";
import AppState from "./store/AppState";
import Container from "./Container";
import "animate.css";

const Home = () => {
  return (
    <AppState>
      <Container />
    </AppState>
  );
};

export default Home;
