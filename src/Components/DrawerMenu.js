import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AriaModal from "react-aria-modal";

const Sidebar = styled.aside`

  .Sidebar {
    width: 200px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    box-shadow: 7px 0px 17px 0px rgba(0,0,0,0.75); 
    transform: translateX(0);
    transition: all 0.2s linear; 
  }

  .Sidebar--closed {
    box-shadow: none;
    transform: translateX(-200px);
    visibility: hidden;
  }

  .Sidebar__mask {
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    height: 100%;
    box-sizing: border-box;
  }

  .Sidebar__menu {
    list-style: none;
    margin: 0;
    padding: 0;

  }

  .Sidebar__menu-item {
    list-style-type: none;

    width: 100%;
    height: 2rem;
    /* margin: 0.5rem 0 1rem 0; */
    text-align: center;
    font-size: 1.2rem;
    padding: 0.5rem 0 1.8rem 0;

    
  }
  .Sidebar__menu-item-link {
    width: 100%;
    height: 100%;
    margin: 0rem;
    padding: 0.25rem;
    text-decoration: none;
    color: #4d4d4d;

    :hover {
      
      border-bottom: 1px solid #4d4d4d;
    }
  }

  .Sidebar__menu-item__button--invisible {
    background-color: transparent;
    border: none;

  }

`

export default function DrawerMenu({ onClickMask, isOpen }) {

  let className = "Sidebar"
  if (!isOpen) {
    className += " Sidebar--closed";
  }

  function onKeyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      onClickMask();

    }
  }

  return (
    <AriaModal titleText={"menu"} mounted={isOpen} escapeExits={true}>
      <Sidebar role="dialog" onKeyDown={onKeyDown}>
        {isOpen && (
          <label onClick={onClickMask} className="Sidebar__mask">
            <button role="close menu" aria-label="Close menu" className="Sidebar__mask-button"></button>
          </label>
        )}
        <div className={className}>
          <ul role="navigation" className="Sidebar__menu">
            <li aria-label="link" className="Sidebar__menu-item"><Link tabIndex="-1" className="Sidebar__menu-item-link" onClick={onClickMask} to="/"><button className="Sidebar__menu-item__button--invisible" role="button">Home</button></Link></li>
            <li aria-label="link" className="Sidebar__menu-item"><Link tabIndex="-1" className="Sidebar__menu-item-link" onClick={onClickMask} to="/stats"><button className="Sidebar__menu-item__button--invisible" role="button">Stats</button></Link></li>
            <li aria-label="link" className="Sidebar__menu-item"><Link tabIndex="-1" className="Sidebar__menu-item-link" onClick={onClickMask} to="/about"><button className="Sidebar__menu-item__button--invisible" role="button">About</button></Link></li>
          </ul>
        </div>
      </Sidebar>
    </AriaModal>
  )
}