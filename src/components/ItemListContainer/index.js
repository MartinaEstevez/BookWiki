import React, { useState, useEffect } from "react";
import { getItems } from "../../helpers/getItems";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const products = await getItems();
        setItems(products);
      } catch {
        console.error("Couldn't get products :(");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return loading ? <p> Loading... </p> : <ItemList items={items} />;
};
