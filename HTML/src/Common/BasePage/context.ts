import React from "react";
import { IPageContextState } from "./types";

const contextPage = React.createContext<IPageContextState>({
  dispatch: function () { },
  title: "nieustawiony tytuł"
});

export default contextPage;