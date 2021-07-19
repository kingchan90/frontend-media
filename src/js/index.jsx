import React from "react";
import { hydrate } from "react-dom";
import App from "./App.jsx";
import "@assets/scss/main.scss";
import store from 'store';

function main() {
  hydrate(<App store={store} />, document.getElementById("app"));
}
main()