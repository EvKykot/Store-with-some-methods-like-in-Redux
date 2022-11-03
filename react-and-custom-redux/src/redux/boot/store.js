import createStore from "./redux";
import counterReducer from "../counter/counter-reducer";

const store = createStore(counterReducer.reducer, counterReducer.initialState);

export default store;
