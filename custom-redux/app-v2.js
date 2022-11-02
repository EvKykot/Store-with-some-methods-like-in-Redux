/**
 * REDUX
 */
function createStore(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    callbacks.forEach(callback => callback(action.type));
  };

  const subscribe = (callback) => {
    callbacks.push(callback);
    return () => callbacks = callbacks.filter(cb => cb !== callback);
  }

  return { getState, dispatch, subscribe };
}

/**
 * APP REDUCER INITIAL STATE
 */
const initialState = { count: 0 };

/**
 * APP REDUCER
 */
const appReducer = (state, action) => {
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

/**
 * APP STORE
 */
const store = createStore(appReducer, initialState);

/**
 * ACTIONS
 */
const incrementAction = (payload) => store.dispatch({ type: 'INCREMENT', payload });
const decrementAction = (payload) => store.dispatch({ type: 'DECREMENT', payload });
const resetAction = () => store.dispatch({ type: 'RESET' });

/**
 *
 */
const unsubscribe = store.subscribe((actionType) => console.log(actionType, store.getState()));
store.subscribe((actionType) => console.log(actionType, store.getState()));

/**
 *
 */
incrementAction(5);
unsubscribe();
decrementAction(3);
resetAction();
store.dispatch({});
