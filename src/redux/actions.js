import getDb from "../controllers/getDb"

export const GET_DATA_DB = 'GET_DATA_DB'
export const CLEAR_DATA = 'CLEAR_DATA'
export const GET_ADMIN = 'GET_ADMIN'

export function getDataDb(){
    return async function(dispatch){
        let res = await getDb()
        dispatch({
            type: GET_DATA_DB,
            payload: res.data
        })
        dispatch({
            type: GET_ADMIN,
            payload: res.dataAdmin
        })
    }
}