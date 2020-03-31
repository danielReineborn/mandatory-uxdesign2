import React, { useState, useEffect } from "react";
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

export default function Quiz({ location }) {

  const [quiz, updateQuiz] = useState([]);
  const [score, updateScore] = useState(0); //Dennna kan jag ta bort när jag har fått ihop nedan.
  const [answers, updateAnswers] = useState([]);
  const [modal, updateModal] = useState(false);


  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
      .then((response) => {
        console.log(response);
        response = response.data.results;
        console.log(quizData(response));
        response = quizData(response);
        updateQuiz(response);
      })
  }, [])

  function restart() {
    fetchData("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
      .then((response) => {
        console.log(response);
        response = response.data.results;
        console.log(quizData(response));
        response = quizData(response);
        updateQuiz(response);
      })
  }

  function handleSubmit(e) {
    e.preventDefault();
    let score = playerResult(answers, quiz);
    updateScore(score);

    let gameStats = { games: 1, correctAnswers: score, questionsTotal: quiz.length, }
    console.log(answers);

    updateStats(gameStats);
    updateModal(true);
  }

  function handleChange(e) {
    console.log(location.pathname)
    updateAnswers({
      ...answers,
      ...{ [e.target.name]: e.target.value },
    })
  }

  return (
    <Container id="quiz">
      <h1>Quiz</h1>
      {quiz.length !== 0 ?
        <form className="Quiz__form" onSubmit={handleSubmit}>
          {quiz.map((q, i) => {
            return <section className="Quiz__container" key={i}>
              <p role="question" aria-label="question">{`${i + 1}. ${decoder(q.question)}`}</p>
              {q.aswers.map((ans, idx) => {
                return (
                  <div role="textbox" className="Quiz__container--answers" key={i, idx}>
                    <input

                      checked={answers[`${i}`] === decoder(ans)}
                      onChange={handleChange}
                      required
                      type="radio"
                      value={decoder(ans)}
                      name={`${i}`}
                      id={`radio-${i}-${idx}`}
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