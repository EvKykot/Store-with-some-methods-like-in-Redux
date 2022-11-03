import React from 'react';

import { selectCount } from "../../redux/counter/counter-selectors";
import { incrementCounter, decrementCounter, resetCounter } from "../../redux/counter/counter-actions";

import {useActions} from "../../hooks/use-actions";
import {useSelectors} from "../../hooks/use-selectors";

import styles from './counter.module.css';

const useCounterSelectors = () => useSelectors({
  count: selectCount,
});

const useCounterActions = () => useActions({
  onReset: resetCounter,
  onIncrementCounter: () => incrementCounter(1),
  onDecrementCounter: () => decrementCounter(1),
});

const Counter = () => {
  const { count } = useCounterSelectors();
  const { onReset, onIncrementCounter, onDecrementCounter  } = useCounterActions();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={onDecrementCounter}
        >
          -
        </button>
        <span className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          onClick={onIncrementCounter}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
