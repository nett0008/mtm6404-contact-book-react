// src/components/ContactList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../db';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactsArray);
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
};

export default ContactList;
