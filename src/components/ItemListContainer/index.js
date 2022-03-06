import React, { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import { ItemList } from "../ItemList";

export const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const products = await getFetch();
        setItems(products);
      } catch {
        console.error("Couldn't get products :(");
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  return loading ? <p> Loading... </p> : <ItemList items={items} />;
};
