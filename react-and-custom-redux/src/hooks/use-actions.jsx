import {useContext} from "react";
import {ReduxContext} from "../redux/boot/redux-provider";

export const useActions = (actionsMap) => {
  const { store } = useContext(ReduxContext);
  const { getState, dispatch } = store;

  return Object.keys(actionsMap).reduce((acc, key) => ({
    ...acc, [key]: (payload) => actionsMap[key](payload)(getState(), dispatch)
  }), {});
};
