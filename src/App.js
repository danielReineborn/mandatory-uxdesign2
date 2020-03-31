import React, { useState } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import styled from "styled-components";

import Main from "./Components/Main";
import Quiz from "./Components/Quiz";
import GlobalStyle from "./Styles/GlobalStyle";
import Header from "./Components/Header";
import DrawerMenu from "./Components/DrawerMenu";
import About from "./Components/About";
import StatsScreen from "./Components/StatsScreen";


const Container = styled.section`
  box-sizing: border-box;
  margin: 0rem;
`

function App() {

  const [openSideBar, toggleSideBar] = useState(false);

  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header toggleSideBar={() => toggleSideBar(true)} />
        <DrawerMenu onClickMask={() => toggleSideBar(false)} isOpen={openSideBar} />

        <Route exact path="/" component={Main} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
        <Route path="/stats" component={StatsScreen} />

      </Container>

    </Router>
  );
}

export default App;