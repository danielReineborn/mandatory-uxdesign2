import React, { useState } from "react";
import styled from "styled-components";
import AriaModal from "react-aria-modal";

import { Redirect } from "react-router-dom";


const ModalContainer = styled.main`
  background-color: white;
  color: black;
  padding: 2rem;
  border: 2px solid #303A52;
`
export default function Modal({ modal, result, toggleModal, updateScore, restart }) {

  const [redirect, updateRedirect] = useState(false);

  function onRestart() {
    toggleModal(false);
    updateScore(0);
    restart();
  }
  function onClose() {
    toggleModal(false);
    updateRedirect(true);

  }

  function getNode() {
    return document.getElementById("quiz");
  }

  if (redirect) {
    return <Redirect to="/" />;
  }


  return (


    <AriaModal
      titleText={"dialog"}
      mounted={modal}
      underlayClickExits={false}
      escapeExits={false}
      verticallyCenter={true}
      getApplicationNode={getNode}
    >
      <ModalContainer tabIndex="0">
        <header>
          <p>Congratulations!</p>
        </header>
        <div>
          <p >Your result is {result}/10</p>
        </div>
        <div>
          <footer>
            <button role="button" onClick={onRestart}>Restart</button>

            <button role="button" onClick={onClose}> Close</button>

          </footer>
        </div>
      </ModalContainer>

    </AriaModal>

  )
}
