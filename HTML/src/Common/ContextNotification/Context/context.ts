import React from "react";
import { INotificationContextState } from "./types";

export const contextNotification = React.createContext<INotificationContextState>({
  dispatch: function () { },
});