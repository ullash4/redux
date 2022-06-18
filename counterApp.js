// 1. Initial State - count 0
// 2. Action - increament, decrement, reset
// 3. Reducer
// 4. store

const { createStore } = require("redux");

const INCREAMENT = 'INCREAMENT';
const DECREAMENT = 'DECREAMENT';
const RESET = "RESET";

// part 1
const initialState = {
    count : 0
}

// part 2
const increamentCounterAction = () =>{
    return {
        type: INCREAMENT
    }
}

const decreamentCounterAction = () =>{
    return {
        type: DECREAMENT
    }
}

const resetCounterAction = () =>{
    return {
        type: RESET
    }
}


// Creating reducer aka logic

const counterReducer = (state = initialState, action) =>{
    switch (action.type) {
        case INCREAMENT:
            
            return{
                ...state,
                count: state.count + 1
            }
        case DECREAMENT:
            
            return{
                ...state,
                count: state.count - 1
            }
        case RESET:
            
            return{
                ...state,
                count: state.count * 0
            }
    
        default:
            state;
    }
}


// store

const store = createStore(counterReducer);
store.subscribe (()=>{
    console.log(store.getState());
})

store.dispatch(increamentCounterAction())
store.dispatch(increamentCounterAction())
store.dispatch(increamentCounterAction())
store.dispatch(increamentCounterAction())
store.dispatch(decreamentCounterAction())
store.dispatch(decreamentCounterAction())
store.dispatch(decreamentCounterAction())
store.dispatch(resetCounterAction())