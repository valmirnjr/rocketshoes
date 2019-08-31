import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/index";
import Routes from "./routes";

import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoclose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
