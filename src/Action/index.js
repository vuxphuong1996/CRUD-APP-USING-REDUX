import { ACTION } from '../Constant'
import uuidv4 from 'uuid/v4'
import axios from 'axios';

// Action Hien thi du lieu tu sever
const ShowUser = (data) => {
    return {
        type: ACTION.SHOWUSER,
        data
    }
}

// Action thong tin user them vao
const UserInfo = (userif) => ({
    type: ACTION.ADDUSER,
    userif
})

const DelUser = (id) => ({
    type: ACTION.DELETEUSER,
    id
})

const EditUserIf = (userif) => ({
    type: ACTION.EDITUSER,
    userif
})

// Xoa User
export const DeleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
            dispatch(DelUser(id)) 
        })
    }
}

// Them user va day du lieu len server
export const SetUser = (user) => {
    return (dispatch) => {
        const userif = {
            id: uuidv4(),
            ...user
        }
        axios.post(`http://localhost:3000/users`, userif).then((res) => {
            dispatch(UserInfo(userif))
        }
        )
    }
}

// Sua user
export const EditUser = (user, id) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/users/${id}`, user).then((res) => {
            const value = res.data
            dispatch(EditUserIf(value))
        }
        )
    }
}
//Lay du lieu tu server
export const FetchData = () => {
    return (dispatch) => { axios.get(`http://localhost:3000/users`).then((res) => {
            dispatch(ShowUser(res.data))
        })
    }  
}
