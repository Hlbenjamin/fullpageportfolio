import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./css/styles.css";

const anchors = ["Home", "About", "Skills", "Contact"];

const App = () => (
  <ReactFullpage
    menu={"#menu"}
    scrollingSpeed={1200}
    easing={"easeInOutQuart"}
    scrollBar={true}
    bigSectionsDestination={"top"}
    anchors={anchors}
    navigation={false}
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
