import counterStore from "./counter-store";

export const incrementCounter = (payload) => counterStore.dispatch({ type: 'INCREMENT', payload });
export const decrementCounter = (payload) => counterStore.dispatch({ type: 'DECREMENT', payload });
export const resetCounter = () => counterStore.dispatch({ type: 'RESET' });
