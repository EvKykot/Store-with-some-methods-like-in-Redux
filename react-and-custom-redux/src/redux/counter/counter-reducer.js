import {initialState} from "./counter-constants";

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };

    case 'DECREMENT':
      return { count: state.count - action.payload };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default counterReducer;
