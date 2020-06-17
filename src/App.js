import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./css/styles.css";

const anchors = ["firstPage", "secondPage", "3rdPage", "4thPage"];

const App = () => (
  <ReactFullpage
    menu={"#menu"}
    scrollingSpeed={800}
    easingCss3={"cubic-bezier(0.785, 0.135, 0.15, 0.86)"}
    anchors={anchors}
    navigation={true}
    navigationPosition={"right"}
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Menu />
          <Home />
          <About />
          <Skills />
          <Contact />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
