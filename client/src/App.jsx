import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import FirstView from "./views/FirstView";
import FirstLogin from "./components/FirstLogin/FirstLogin"
import MainView from "./views/MainView";
import MessagesView from "./views/MessagesView";
import ClientPayments from "./components/Payments/ClientPayments/ClientPayments";
import AdminPanel from "./views/AdminPanel";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
import "./scss/views/appView.scss";

const App = ({ loginStatus, onFakeLogin }) => {
  return (
    <BrowserRouter>
      <Menu />
      <main className="MainContent">
        <Switch>
          <Route path="/" exact component={FirstView} />
          <Route path="/login" component={FirstView} />
          <Route path="/home" component={MainView} />
          <Route path="/messages" component={MessagesView} />
          <Route path="/payment" component={ClientPayments} />
          <Route path="/administration" component={AdminPanel} />
          <Route path="/profile" component={ProfilePage} />
          <Route render={() => <h1>Error 404 - Trzeba coś tu zrobić =</h1>} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
