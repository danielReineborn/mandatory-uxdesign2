import React from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router-dom"
import { firstLetterCapital } from "../Utils";

const Head = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #4d4d4d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__button {
    display: inline-block;
    background-color: #4d4d4d;
    border: none;
    height: 2rem;
    width: 2rem;
    margin: 0.75rem;
  }
  .header__button--icon {
    color: white;
  }

  .header__h1 {
    margin: 0rem;
    justify-self: center;
  }
`

function Header({ location, toggleSideBar }) {

  function onClick() {
    toggleSideBar();


  }
  return (
    <Head>
      <button tabIndex="0" aria-label="open menu" onClick={onClick} className="header__button">
        <MenuIcon className="header__button--icon" />
      </button>

      <h1 aria-label="title" className="header__h1">{location.pathname.slice(1) ? firstLetterCapital(location.pathname.slice(1)) : "Home"}</h1>

      <div aria-hidden="true" className="header__div--shadowDiv"></div>
    </Head>

  )
}

export default withRouter(Header);