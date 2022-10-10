import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/KontakAction';

const AddKontak = () => {
    
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");
    
    const dispatch = useDispatch();
    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer)

    const handleSubmit = (event) => {
        console.log("1. use effect component didmount")
        event.preventDefault();

        if(id){
            // update kontak
            dispatch(updateKontak({id: id, nama: nama, nohp: nohp}));
        }else{
            // add Kontak
            dispatch(addKontak({nama: nama, nohp: nohp}));
        }

    }

    useEffect(() => {
        if(addKontakResult){
            dispatch(getListKontak());
            setNama('');
            setNohp('');
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if(detailKontakResult){
            setNama(detailKontakResult.nama);
            setNohp(detailKontakResult.nohp);
            setId(detailKontakResult.id);
        }
    }, [detailKontakResult])

    useEffect(() => {
        dispatch(getListKontak());
        setNama('');
        setNohp('');
        setId('');
    }, [updateKontakResult])

  return (
    <div>
        <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" name="nama" placeholder='Nama.....' value={nama} onChange={(event) => setNama(event.target.value)} />
            <input type="text" name="nohp" placeholder='0812...' value={nohp} onChange={(event) => setNohp(event.target.value)} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddKontak