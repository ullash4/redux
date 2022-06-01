// Define constants
const INCREAMENT = 'INCREAMENT';
const DECREAMENT = 'DECREAMENT';
const ADDUSER = 'ADD_USER';
// State 
const initialCounterState={
    count : 0
}

const initialUserState=[{
    name:'Imran Mahmud Ullash'
}]
// Action (object) 2 -type, -payload
const increamentCounter=()=>{
    return{
        type: INCREAMENT,
    }
}
const decreamentCounter=()=>{
    return{
        type: DECREAMENT,
    }
}
const AddUser=()=>{
    return{
        type: ADDUSER,
        payload: {name: 'Ullash'}
    }
}

// nedd things to do redux 
// 1.state
// 2. dispatch Actions
// 3. reducer
// 4. store 