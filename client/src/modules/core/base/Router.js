import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store';
import ProfileComponent from "../profile/ProfileComponent";

// Components

export default () => {

    console.log(store);

    return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={ProfileComponent} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
    );
  };