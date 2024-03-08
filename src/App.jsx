import { useState } from "react";

const allItems = [
  { id: "apple", value: "apple" },
  { id: "grape", value: "grape" },
  { id: "orange", value: "orange" },
  { id: "pear", value: "pear" },
];

export const App = () => {
  const [items, setItems] = useState(allItems);

  const deleteItem = (itemDel) => {
    setItems(items.filter((item) => item.id !== itemDel.id));
  };

  const addItems = (items) => {
    if (items.length !== allItems.length) {
      const itemsJustId = items.map((items) => items.id);
      const allItemsJustId = allItems.map((Allitem) => Allitem.id);
      let missingValue = allItemsJustId.filter((e) => !itemsJustId.includes(e));
      setItems([...items,...allItems.filter((allItemsUnique)=>allItemsUnique.id===missingValue[0])])
    }
  };
  return (
    <>
      <h1>RENDERING ARRAYS</h1>

      <div>
        <button
          onClick={() => addItems(items)}
          style={{
            backgroundColor: "green",
            padding: "10px 15px",
            width: "100px",
            borderRadius: "15px",
            border: "none",
          }}
        >
          Add Items
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => deleteItem(item)}
              style={{
                backgroundColor: "purple",
                width: "100px",
                padding: "10px 15px",
                borderRadius: "15px",
                border: "none",
              }}
            >
              Delete item
            </button>
            <label htmlFor="">{item.value}</label>
            <input type="text" defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </>
  );
};
