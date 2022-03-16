import React from 'react'
import { Item } from "../Item";

export const ItemList = ({ items }) =>
  items.map((item) => <Item key={item.id} {...item} />);
