import { GET_DATA_DB, CLEAR_DATA, GET_ADMIN } from "./actions";


const initialState = {
    data: [],
    dataAdmin: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATA_DB:
            console.log('datos DB: ', action.payload)
            return {
                ...state, data: action.payload
            }
        
        case CLEAR_DATA:
            console.log('limpiando estado')
            return {
                data: ''
            }
        
        case GET_ADMIN:
            return {
                ...state, dataAdmin: action.payload
            }
    
        default:
            return state
    }
}
