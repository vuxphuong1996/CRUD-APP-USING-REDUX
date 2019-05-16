import { ACTION } from '../Constant/index'

let initialState = []
// Object.assign([], state, action.data)
const data = (state = initialState, action) => {
    switch(action.type) {
        case ACTION.SHOWUSER:
        console.log(action)
            return [
                ...state,
                ...action.data
            ]
        case ACTION.ADDUSER:
            return [
                ...state,
                action.userif                
            ]
        case ACTION.EDITUSER:
            return state.map((ttin) => {
                if(ttin.id === action.userif.id) {
                    return {
                        ...ttin,
                        fullname: action.userif.fullname,
                        email: action.userif.email,
                        address: action.userif.address
                    }
                }
                return ttin
            })
        case ACTION.DELETEUSER:
            return state.filter((ndung) => ndung.id !== action.id)  
        default: 
            return state
    }
}

export default data