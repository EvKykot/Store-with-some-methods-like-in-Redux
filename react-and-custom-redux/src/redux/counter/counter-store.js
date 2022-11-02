import createStore from "../redux";
import counterReducer from "./counter-reducer";
import {initialState} from "./counter-constants";

const counterStore = createStore(counterReducer, initialState);

export default counterStore;
