import React, { useEffect, useState } from 'react';
import './ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data.slice(0, 5)); // Limit to first 5 items for simplicity
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul className="items">
        {items.map(item => (
          <li key={item.id} className="item">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
