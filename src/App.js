import { useState } from "react";

const initialItems = [
  { id: 1, description: "passport", quantity: 2, packed: true },
  { id: 2, description: "shirt", quantity: 4, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
  { id: 4, description: "socks", quantity: 5, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// COMPONENTS

// logo Component
function Logo() {
  return (
    <header className="logo_warapper">
      <h1>FAR AWAY</h1>
    </header>
  );
}

// form Component
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target) return;

    const newItems = { description, quantity, id: Date.now(), packed: "false" };
    console.log(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="form_wrapper" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="inputField"
        type="text"
        placeholder="Enter an item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btnAdd">ADD</button>
    </form>
  );
}

// PackingList Component
function PackingList() {
  return (
    <main className="list_container">
      <div className="list_wrapper">
        {initialItems.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}

// component for List
function List({ item }) {
  return (
    <span className="lists">
      <input className="checkBox" type="checkbox" />
      <i style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </i>
      <span>&times;</span>
    </span>
  );
}

// Statstic Component
function Stats() {
  return (
    <footer className="footer_wrapper">
      <p>You have "" items on your lists,and you already packed "".</p>
    </footer>
  );
}
