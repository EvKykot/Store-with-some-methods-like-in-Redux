import {useContext} from "react";
import {ReduxContext} from "../redux/boot/redux-provider";

export const useSelectors = (selectorsMap) => {
  const { store } = useContext(ReduxContext);

  return Object.keys(selectorsMap).reduce((acc, key) => ({
    ...acc, [key]: selectorsMap[key](store.getState())
  }), {});
};
