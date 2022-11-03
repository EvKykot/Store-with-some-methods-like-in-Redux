const initialState = { count: 0 };

const ACTION_TYPES = {
  'INCREMENT': 'counter/INCREMENT',
  'DECREMENT': 'counter/DECREMENT',
  'RESET': 'counter/RESET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + action.payload };

    case ACTION_TYPES.DECREMENT:
      return { count: state.count - action.payload };

    case ACTION_TYPES.RESET:
      return initialState;

    default:
      return state;
  }
};

const counterReducer = { initialState, reducer, ACTION_TYPES };

export default counterReducer;
