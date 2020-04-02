import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.main`
  width: 80%;
  height: 100vh;
  margin: 2rem auto;
  padding: 0 1.5rem 0 1.5rem;
  border: 1px solid #596174;
  display: flex;
  align-items: center;
  flex-flow: column;

  .Main__title {
    margin: 1rem;
  }
`


export default function Main() {



  return (
    <Wrapper role="Main">
      <h3 aria-label="title" className="Main__title">Welcome player</h3>
      <p aria-label="text" className="Main__text">This is a quiz-game that you can enjoy by yourself or in good company. This is a fully accessible quiz which helps players use a screenreader or play with keyboard only, if thats your reference.</p>
      <Link tabIndex="-1" to="/quiz"><button role="button">Start Quiz!</button></Link>
    </Wrapper>

  )
}