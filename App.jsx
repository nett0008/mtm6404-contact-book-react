import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router
import ContactList from "./components/ContactList"; // Component for listing contacts
import AddContact from "./components/AddContact"; // Component for adding contacts
import EditContact from "./components/EditContact"; // Component for editing contacts

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
