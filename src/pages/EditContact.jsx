// pages/EditContact.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, doc, getDoc, updateDoc } from '../db';

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState({ firstName: '', lastName: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      }
    };
    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'contacts', id);
    await updateDoc(docRef, { ...contact });
    navigate(`/contact/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={contact.firstName}
        onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
      />
      <input
        type="text"
        value={contact.lastName}
        onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
      />
      <input
        type="email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <button type="submit">Update Contact</button>
    </form>
  );
}

export default EditContact;
