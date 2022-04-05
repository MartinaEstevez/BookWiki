import React, { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { detailId } = useParams();

  // llamada a api
  useEffect(() => {
    setLoading(true)
      const db = getFirestore()
      const queryDb = doc(db, 'products', detailId)
      getDoc(queryDb)
      .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
      .catch(err => console.log(err))
      .finally(() =>setLoading(false))
  }, [detailId]);

  return loading || !product ? (
    <p> Loading... </p>
  ) : (
    <ItemDetail product={product} />
  );
};

export default ItemDetailContainer;
