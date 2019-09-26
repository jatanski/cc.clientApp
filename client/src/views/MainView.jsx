import React, { Component } from "react";
import PanelsDeck from "../components/MainView/PanelsDeck";
import "../scss/views/mainView.scss";

class MainView extends Component {
  state = {
  };

  render = () => {
    return (
      <section className="mainView">
        
        <PanelsDeck />
      </section>
    );
  };
}

export default MainView;
