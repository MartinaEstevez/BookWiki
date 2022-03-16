import React, { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail";
import { getItems } from "../../../helpers/getItems";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  // llamada a api
  useEffect(() => {
    setLoading(true);
    getItems()
      .then((resp) => {
        console.log(resp);
        return setProductDetail(resp.find((prod) => prod.id === 1));
      })
      .finally(setLoading(false));
  }, []);

  return loading || !productDetail ? (
    <p> Loading... </p>
  ) : (
    <ItemDetail productDetail={productDetail} />
  );
};

export default ItemDetailContainer;
