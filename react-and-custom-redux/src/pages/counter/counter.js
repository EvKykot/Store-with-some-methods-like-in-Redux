import React, {useCallback, useEffect, useState} from 'react';

import styles from './counter.module.css';
import {incrementCounter, decrementCounter} from "../../redux/counter/counter-actions";
import counterStore from "../../redux/counter/counter-store";

const useForceUpdate = () => {
  const [, updateState] = useState();
  return useCallback(() => updateState({}), []);
}

const Counter = () => {
  const state = counterStore.getState();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    counterStore.subscribe((actionType) => {
      console.log(actionType, counterStore.getState());
      forceUpdate();
    });
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrementCounter(1)}
        >
          -
        </button>
        <span className={styles.value}>{state.count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => incrementCounter(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
