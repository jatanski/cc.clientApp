import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { allActions } from './redux/store';

import Menu from './components/Menu/Menu';
import FirstView from "./views/FirstView";
import MessagesView from './views/MessagesView';
import AdminPanel from './views/AdminPanel';

import "./scss/views/appView.scss";

const App = ({loginStatus, onFakeLogin}) => {
  return (
      <BrowserRouter>
        <Menu />
        <main className="MainContent">
            <Switch>
                <Route path="/" exact component={FirstView} />
                <Route path="/login" component={FirstView} />
                <Route path="/messages" component={MessagesView} />
                <Route path="/payment" component={FirstView} />
                <Route path="/administration" component={AdminPanel} />
                <Route render={() => (<h1>Error 404 - Trzeba coś tu zrobić =]</h1>)} />
            </Switch>
        </main>
        <button onClick={allActions.logIn}>FAKE LOGIN</button>
    </BrowserRouter>
  );
};

export default App;
