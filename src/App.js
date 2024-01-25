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
      <h3>FORM</h3>
    </div>
  );
}

// PackingList Component
function PackingList() {
  return (
    <main className="list_wrapper">
      <h3>LISTS</h3>
      <h3>LISTS</h3>
      <h3>LISTS</h3>
    </main>
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
