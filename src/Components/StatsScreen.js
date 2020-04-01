import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { stats$ } from "../Observable/Store";

import { zeroOrValue } from "../Utils"

const Wrapper = styled.section`
  width: 80%;
  height: 100vh;
  margin: 2rem auto;
  border: 1px solid #596174;
  display: flex;
  align-items: center;
  flex-flow: column;

  .Stats__p {
    color: #4d4d4d;
    text-align: left;
  }

  .Stats__h1 {
    margin-top: 1rem;
    color: #4d4d4d;
  }
`

export default function StatsScreen() {
  const [gameStats, updateGameStats] = useState(stats$.value)
  useEffect(() => {
    const subscription = stats$.subscribe(updateGameStats);
    return () => subscription.unsubscribe();
  }, [])

  return (
    <Wrapper role="textbox" tabIndex="0">
      <h2 className="Stats__h1">Game-statistics:</h2>
      <div className="Stats__div">
        <p className="Stats__p">Games played: {zeroOrValue(stats$.value.games)}</p>
        <p className="Stats__p">Correct Answers: {zeroOrValue(stats$.value.correctAnswers)}</p>
        <p className="Stats__p">Incorrect Answers: {zeroOrValue((stats$.value.games * 10) - stats$.value.correctAnswers)}</p>
        <p className="Stats__p">Percentage correct: {zeroOrValue(Math.round(((stats$.value.correctAnswers / stats$.value.questionsTotal * 100) + Number.EPSILON) * 100) / 100)}%</p>


      </div>
    </Wrapper>

  )
}