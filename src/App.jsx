import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetails from './pages/ContactDetails';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        {/* Header Section with logos */}
        <header>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Contact Book App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Contact</Link>
          </nav>
        </header>

        {/* Router Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add" element={<NewContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>

        {/* Footer Section with counter (original Vite demo feature) */}
        <footer>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR.
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
