import { incrementClick, decrementClick } from "./actionTypes"

const initialState = {
    count : 0
}

const reducer = (state = initialState, {type}) => {
 switch(type) {
    case incrementClick: 
        return {...state, count:state.count + 1}
    case decrementClick: 
        return {...state, count:state.count - 1}
    default:
      return state      
 }
}

export default reducer;