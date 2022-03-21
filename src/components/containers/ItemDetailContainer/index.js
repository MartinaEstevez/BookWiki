import React, { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail";
import { getFetchDetails } from "../../../helpers/getItems";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { detailId } = useParams()

  // llamada a api
  useEffect(() => {
    setLoading(true);
    getFetchDetails(detailId)
      .then(resp=> setProduct(resp))
      .finally(setLoading(false));
  }, []);

  return (loading || !product) ? <p> Loading... </p> : <ItemDetail product={product} />
  
};

export default ItemDetailContainer;
