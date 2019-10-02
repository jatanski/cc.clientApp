import React, { Component } from "react";
import PanelsDeck from "../components/MainView/PanelsDeck";
import "../scss/views/mainView.scss";

class MainView extends Component {
  render = () => {
    return (
      <section className="mainView">
        <PanelsDeck history={ this.props.history }/>
      </section>
    );
  };
}

export default MainView;
