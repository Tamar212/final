import axios from '../axiosDefulte'

export const ADD_SONG = (song) => {
    return dispatch => {
        dispatch({ type:"LOAD" })
        axios.post("/api/song", song).then(x => {
            dispatch({ type: "ADD_SONG", payload: x.data })
        }).finally(() => {
            dispatch({ type:"UN_LOAD" })
        })
    }
}
export const EDIT_SONG = (song) => {
    return dispatch => {
        dispatch({ type:"LOAD" })
        axios.put("/api/song", song).then(x => {
            dispatch({ type: "UPDATE_SONG", payload: x.data })
        }).finally(() => {
            dispatch({ type:"UN_LOAD" })
        })
    }
}

export const DELETE_SONG = (song) => {
    return dispatch => {
        dispatch({ type:"LOAD" })
        axios.delete("/api/song", song).then(x => {
            dispatch({ type: "DELET_SONG", payload: x.data })
        }).finally(() => {
            dispatch({ type:"UN_LOAD" })
        })
    }
}
export const GET = () => {
    return dispatch => {
        console.log("ddddddddddddddddddd")
        dispatch({ type:"LOAD" })
        axios.get("/api/song").then(x => {
dispatch({type:"ALLSONG",payload:x.data})
            console.log(x)
        }).finally(() => {
            dispatch({ type:"UN_LOAD" })
        })
    }
}