import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
const init = (): void => {
  ReactDOM.render(<div> Hello Walrus </div>, document.querySelector(`#app`));
};

init();
