const initialItems = [
  { id: 1, description: "passport", quantiyty: 2, packed: true },
  { id: 2, description: "shirt", quantiyty: 4, packed: false },
  { id: 3, description: "charger", quantiyty: 1, packed: false },
  { id: 4, description: "socks", quantiyty: 5, packed: true },
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
  return (
    <div className="form_wrapper">
      <p>What do you need for your trip?</p>
    </div>
  );
}

// PackingList Component
function PackingList() {
  return (
    <main className="list_container">
      <div className="list_wrapper">
        {initialItems.map((item) => (
          <List item={item} />
        ))}
      </div>
    </main>
  );
}

// component for List
function List({ item }) {
  return (
    <span className="lists">
      <i style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
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
