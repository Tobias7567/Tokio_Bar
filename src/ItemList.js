import React from 'react';
import { Item } from './Item';
import "./Bar.css"

export const ItemList = ({ items }) => {
  return (
    <section className="Container_itemlist">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};