const { INCREMENT_COUNTER, DECREMENT_COUNTER, MULTIPLY_COUNTER } = require("./counterActionTypes")

const initialState = {
    counter: 0,
    counter1: 5
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER: return{
            ...state,
            counter: state.counter + action.payload
        }
        case DECREMENT_COUNTER: return{
            ...state,
            counter1: state.counter1 - 1
        }
        case MULTIPLY_COUNTER: return{
            ...state,
            counter: state.counter * action.payload
        }
        default: return state;
    }
}
export default counterReducer;