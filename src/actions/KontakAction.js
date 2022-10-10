import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
    // console.log("2. Action")
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload : {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get Api
        axios({
            method: 'GET',
            url: 'http://localhost:3003/kontaks',
            timeout: 120000
        })
        .then((response) => {
            // berhasil get Api
            // console.log("3. berhasil dapat data : ", response.data);
            dispatch({
                type: GET_LIST_KONTAK,
                payload : {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            // console.log("3. gagal dapat data : ", err.message);
            // gagal get Api
            dispatch({
                type: GET_LIST_KONTAK,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })

    }
}

export const addKontak = (data) => {
    console.log("2. Action")
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_KONTAK,
            payload : {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get Api
        axios({
            method: 'POST',
            url: 'http://localhost:3003/kontaks',
            timeout: 120000,
            data: data
        })
        .then((response) => {
            // berhasil get Api
            console.log("3. berhasil dapat data : ", response.data);
            dispatch({
                type: ADD_KONTAK,
                payload : {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            console.log("3. gagal dapat data : ", err.message);
            // gagal get Api
            dispatch({
                type: ADD_KONTAK,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })

    }
}

export const deleteKontak = (id) => {
    console.log("2. Action")
    return (dispatch) => {

        // loading
        dispatch({
            type: DELETE_KONTAK,
            payload : {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get Api
        axios({
            method: 'DELETE',
            url: 'http://localhost:3003/kontaks/'+id,
            timeout: 120000,
        })
        .then((response) => {
            // berhasil get Api
            console.log("3. berhasil dapat data : ", response.data);
            dispatch({
                type: DELETE_KONTAK,
                payload : {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            console.log("3. gagal dapat data : ", err.message);
            // gagal get Api
            dispatch({
                type: DELETE_KONTAK,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })

    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data : data
            }
        })
    }
}

export const updateKontak = (data) => {
    console.log("2. Action")
    return (dispatch) => {

        // loading
        dispatch({
            type: UPDATE_KONTAK,
            payload : {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get Api
        axios({
            method: 'PUT',
            url: 'http://localhost:3003/kontaks/'+data.id,
            timeout: 120000,
            data: data
        })
        .then((response) => {
            // berhasil get Api
            console.log("3. berhasil dapat data : ", response.data);
            dispatch({
                type: UPDATE_KONTAK,
                payload : {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            console.log("3. gagal dapat data : ", err.message);
            // gagal get Api
            dispatch({
                type: UPDATE_KONTAK,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })

    }
}