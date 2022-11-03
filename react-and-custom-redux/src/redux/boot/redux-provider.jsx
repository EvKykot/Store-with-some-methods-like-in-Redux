import React, {createContext, useCallback, useEffect, useState} from 'react';

const initialContext = {
  store: () => ({
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {}
  })
};

const ReduxContext = createContext(initialContext);

const useForceUpdate = () => {
  const [, updateState] = useState();
  return useCallback(() => updateState({}), []);
};

const ReduxProvider = ({ store, children }) => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.subscribe(forceUpdate);
  }, []);

  return (
    <ReduxContext.Provider value={{ store }}>
      {children}
    </ReduxContext.Provider>
  );
};

export { ReduxContext, ReduxProvider };
