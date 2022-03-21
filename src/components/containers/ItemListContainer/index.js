import React, { useState, useEffect } from "react";
import { getItems } from "../../../helpers/getItems";
import { useParams } from 'react-router-dom';
import { ItemList } from "../../ItemList";
import Banner from "../../Banner";

export const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
    getItems()// llamada a la api
    .then((respuesta)=> {
        return respuesta
    })
    .then((resp) => setItems( resp.filter(pro => pro.category===categoryId) ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))      
    
    }else{
    getItems()// llamada a la api
    .then((respuesta)=> {
        return respuesta
    })
    .then((resp) => setItems(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))      

    }

}, [categoryId])

    return (
    <>
    <Banner />

    <h1>{ greeting }</h1> 
    <h1>{ categoryId }</h1>
      
      { loading ? <p> Loading... </p> 
        : 
        <ItemList items={items} />
      }
    </>
    )
};
