import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteKontak, detailKontak, getListKontak } from '../../actions/KontakAction';

const ListKontak = () => {

    const dispatch = useDispatch();
    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer)

    useEffect(() => {
        // get list kontak
        // console.log("1. use effect component didmount")
        dispatch(getListKontak())
    }, [dispatch, deleteKontakResult]);

    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakResult ? (
                getListKontakResult.map((kontak, index) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - 
                            {kontak.nohp} - 
                            <button onClick={() => dispatch(deleteKontak(kontak.id))}> Hapus</button>
                            <button style={{marginLeft: '10px'}} onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
                        </p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>loading...</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListKontak;