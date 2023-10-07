import { DECREMENT_COUNTER, INCREMENT_COUNTER, MULTIPLY_COUNTER } from "./counterActionTypes"

export const incrementCounterAction = (parameter) =>{
    return{
        type : INCREMENT_COUNTER,
        payload: parameter
    }
}
export const decrementCounterAction = () => {
    return{
        type : DECREMENT_COUNTER,
    }
}
export const multiplyCounterAction = (paramter) => {
    return{
        type: MULTIPLY_COUNTER,
        payload: paramter
    }
}