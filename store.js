const {createStore} = require('redux');

// Define constants
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";

// State
const initialCounterState = {
  count: 0,
};

// Action (object) 2 -type, -payload
const increamentCounter = () => {
  return {
    type: INCREAMENT,
  };
};
const decreamentCounter = () => {
  return {
    type: DECREAMENT,
  };
};

// Create rudcer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREAMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

// Create store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch actions
store.dispatch(increamentCounter())
store.dispatch(decreamentCounter())
store.dispatch(increamentCounter())
store.dispatch(increamentCounter())
store.dispatch(decreamentCounter())
