import { GET_DATA_DB } from "./actions";

const initialState = {
    data: ''
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATA_DB:
            console.log('datos DB: ', action.payload)
            return {
                ...state, data: action.payload
            }
    
        default:
            return state
    }
}
