// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../db';
import { Link } from 'react-router-dom';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredContacts.sort((a, b) => a.lastName.localeCompare(b.lastName)).map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Contact</Link>
    </div>
  );
}

export default Home;
