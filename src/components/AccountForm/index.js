import React from 'react';
import { useState } from "react"
import { useCartContext } from "../CartContext";
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"


const AccountForm = () =>{
    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
      })
      const [id, setId] = useState('')
  
      const { cartList, precioTotal } = useCartContext()
  
      const generarOrden= async (e)=>{
        e.preventDefault();
        let orden = {}      
  
        orden.buyer = dataForm
        orden.total = precioTotal();
  
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.cantidad;
            
            return {id, name, price}   
        })
        console.log(orden)
    
        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, orden)
        .then(resp => setId(resp.id))
        .catch(err => console.error(err))
        .finally(() => console.log('termino '))
      }
  
  
      const handleChange = (e) => {
          setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
      }
  
    return(
        <div className="loginForm">
    <div className="header">
      <h2>Crea tu cuenta</h2>
    </div>
    <form id="form" className="form">
      <div className="form-control">
        <label>Name</label>
        <input type="text"  name='name' 
                   value={dataForm.name}
                    onChange={handleChange} id="username" />                 
        <br></br>
      </div>
      <div className="form-control">
        <label >Email</label>
        <input type="email"  name="email" value={dataForm.email}
                    onChange={handleChange}/>
        <br></br>
      </div>
      <div className="form-control">
        <label >Phone number</label>
        <input type="text" name="phone"  value={dataForm.phone}
                    onChange={handleChange}/>
        <br></br>
      </div>
      <button 
       onSubmit={generarOrden}
      className="btn btn-primary">Enviar</button>
    </form>
  </div>
    )
}

export default AccountForm;