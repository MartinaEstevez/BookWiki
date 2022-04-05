import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../../ItemList";
import Banner from "../../Banner";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    if (categoryId) {
        const queryColection = collection(db, 'products')
        const queryFilter = query( queryColection, where('category', '==', categoryId), limit(7) )
        getDocs(queryFilter)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    }else{
        const queryColection = collection(db, 'products')
        getDocs(queryColection)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))             
    }

}, [categoryId])


  return (
    <>
      <Banner />

      <h1>{greeting}</h1>
      <h1>{categoryId}</h1>

      {loading ? <p> Loading... </p> : <ItemList items={items} />}
    </>
  );
};
