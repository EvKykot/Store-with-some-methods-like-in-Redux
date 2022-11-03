import counterReducer from './counter-reducer';

const { ACTION_TYPES } = counterReducer;

export const incrementCounter = (payload) => (state, dispatch) => dispatch({ type: ACTION_TYPES.INCREMENT, payload });
export const decrementCounter = (payload) => (state, dispatch) => dispatch({ type: ACTION_TYPES.DECREMENT, payload });
export const resetCounter = () => (state, dispatch) => dispatch({ type: ACTION_TYPES.RESET });
