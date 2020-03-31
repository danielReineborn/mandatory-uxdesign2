import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 80%;
  margin: 2rem auto;
  padding: 0 1.5rem 0 1.5rem;
  border: 1px solid #596174;
  display: flex;
  align-items: center;
  flex-flow: column;
`

export default function About() {
  return (
    <Wrapper role="textbox" tabIndex="0">
      <h1>About:</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eaque, sunt totam rem fugiat facilis, excepturi impedit laudantium dicta explicabo nemo culpa perferendis alias quos quis. Voluptas vitae obcaecati nulla.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eaque, sunt totam rem fugiat facilis, excepturi impedit laudantium dicta explicabo nemo culpa perferendis alias quos quis. Voluptas vitae obcaecati nulla.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eaque, sunt totam rem fugiat facilis, excepturi impedit laudantium dicta explicabo nemo culpa perferendis alias quos quis. Voluptas vitae obcaecati nulla.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eaque, sunt totam rem fugiat facilis, excepturi impedit laudantium dicta explicabo nemo culpa perferendis alias quos quis. Voluptas vitae obcaecati nulla.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eaque, sunt totam rem fugiat facilis, excepturi impedit laudantium dicta explicabo nemo culpa perferendis alias quos quis. Voluptas vitae obcaecati nulla.</p>
    </Wrapper>
  )
}

