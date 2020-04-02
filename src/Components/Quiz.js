import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

import { decoder, playerResult, fetchData, quizData } from "../Utils";
import Modal from "./Modal";
import { updateStats } from "../Observable/Store";


const Container = styled.main`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  flex-flow: column;
  .Quiz__container {
    border: 1px solid #4d4d4d;
    border-radius: 0.25rem;
    color: 4d4d4d;
    margin-bottom: 2rem;
    padding: 1rem;

  }
`

export default function Quiz() {

  const [quiz, updateQuiz] = useState([]);
  const [score, updateScore] = useState(0);
  const [answers, updateAnswers] = useState([]);
  const [modal, updateModal] = useState(false);

  const topRef = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
      .then((response) => {
        response = response.data.results;
        response = quizData(response);
        updateQuiz(response);
      })
  }, [])

  function restart() {
    fetchData("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
      .then((response) => {
        response = response.data.results;
        response = quizData(response);
        updateQuiz(response);
        topRef.current.focus();
      })
  }

  function handleSubmit(e) {
    e.preventDefault();
    let score = playerResult(answers, quiz);
    updateScore(score);

    let gameStats = { games: 1, correctAnswers: score, questionsTotal: quiz.length, }

    updateStats(gameStats);
    updateModal(true);
  }

  function handleChange(e) {
    updateAnswers({
      ...answers,
      ...{ [e.target.name]: e.target.value },
    })
  }

  return (
    <Container id="quiz">
      <h3 ref={topRef} tabIndex="0" className="Quiz__title">Answer the questions below, make sure all questions are answered.</h3>
      {quiz.length !== 0 ?
        <form role="form" className="Quiz__form" onSubmit={handleSubmit}>
          {quiz.map((q, i) => {
            return <section role="textbox" className="Quiz__container" key={i}>
              <p tabIndex="0">{`${i + 1}. ${decoder(q.question)}`}</p>
              {q.aswers.map((ans, idx) => {
                return (
                  <div aria-label="answers" className="Quiz__container--answers" key={i, idx}>
                    <input
                      value={decoder(ans)}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      type="radio"
                      name={`${i}`}
                      id={`radio-${i}-${idx}`}
                      checked={answers[`${i}`] === decoder(ans)}
                    />
                    <label htmlFor={`radio-${i}-${idx}`}>{decoder(ans)}</label>
                  </div>
                )
              })}
            </section>
          })
          }
          < input type="submit" value="Submit Quiz" />


        </form>
        : null}
      <Modal
        result={score}
        restart={restart}
        modal={modal}
        updateScore={updateScore}
        toggleModal={updateModal}
      />
    </Container>

  )
}