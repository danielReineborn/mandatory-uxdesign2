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

  .Stats__h2 {
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
      <h2 className="Stats__h2">Game-statistics:</h2>
      <dl className="Stats__div">
        <dt className="Stats__p">Games played:</dt>
        <dd>{zeroOrValue(stats$.value.games)}</dd>

        <dt className="Stats__p">Correct Answers:</dt>
        <dd>{zeroOrValue(stats$.value.correctAnswers)}</dd>

        <dt className="Stats__p">Incorrect Answers:</dt>
        <dd>{zeroOrValue((stats$.value.games * 10) - stats$.value.correctAnswers)}</dd>

        <dt className="Stats__p">Percentage Correct:</dt>
        <dd>{zeroOrValue(Math.round(((stats$.value.correctAnswers / stats$.value.questionsTotal * 100) + Number.EPSILON) * 100) / 100)}%</dd>
      </dl>
    </Wrapper>

  )
}