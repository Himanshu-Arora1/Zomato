import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";

import Search from "./components/search_page";
import RestoInfo from "./components/resto_info";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // react is a libray and react-dom is a package and redux is tiny library which deals with react,angular.
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/info" component={RestoInfo} />
          <Route path="/" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
