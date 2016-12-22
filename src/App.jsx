let state = 0;

function updateState(state, action) {
	if (action === 'INCREMENT') {
		return state + action.amount;
	} else if (action === 'DECREMENT') {
		return state - action.amount;
	} else {
		return state;
	}
}

class Store {
	constructor(updateState, state) {
		this._updateState = updateState;
		this._state = state;
	}

	get State() {
		return this._state;
	}

	update(action) {
		this._state = this._updateState(this._state, action);
	}
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 };
const decrementAction = { type: 'DECREMENT', amount: 3 };

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);