/**
 * STORE CLASS
 */
class Store {
	constructor(updateState, state) {
		this._state = state;
		this._updateState = updateState;
		this._callbacks = [];
	}

	get state() {
		return this._state;
	}

	update(action) {
		this._state = this._updateState(this._state, action);
		this._callbacks.forEach(callback => callback(action.type));
	}

	subscribe(callback) {
		this._callbacks.push(callback);
		return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
	}
}

/**
 *
 */
const initialState = { count: 0 };

/**
 * REDUCER
 */
const updateState = (state, action) => {
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
const store = new Store(updateState, initialState);

/**
 * ACTIONS
 */
const incrementAction = (payload) => store.update({ type: 'INCREMENT', payload });
const decrementAction = (payload) => store.update({ type: 'DECREMENT', payload });
const resetAction = () => store.update({ type: 'RESET' });

/**
 *
 */
const unsubscribe = store.subscribe((actionType) => console.log(actionType, store.state));
store.subscribe((actionType) => console.log(actionType, store.state));

/**
 *
 */
incrementAction(5);
unsubscribe();
decrementAction(3);
store.update({});
resetAction();
