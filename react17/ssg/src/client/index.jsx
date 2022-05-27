import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import "./index.css";

hydrate(<App />, document.getElementById("root"));
