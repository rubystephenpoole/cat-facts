import React from "react";
import { render } from "react-dom";
import { App } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faRedoAlt,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

// bootstrap icon library
library.add(fas, faRedoAlt, faPaperPlane);

render(<App />, document.getElementById("app"));
