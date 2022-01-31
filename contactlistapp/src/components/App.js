import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Rob",
  //     email: "rob@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Shaw",
  //     email: "shaw@gmail.com",
  //   },
  // ];
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id; 
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if(retrieveContacts){
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
      
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </div>
  );
}

export default App;
