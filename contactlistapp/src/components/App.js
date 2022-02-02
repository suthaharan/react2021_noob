import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from '../api/contacts';
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  //const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = async (contact) => {
    console.log(contact);

    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  }

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // const retrieveSpecificContact = async (id) => {
  //   console.log(">>>>>>>>>>>>>>>",id)
  //   const response = await api.get(`/contacts/${id}`);
  //   console.log("retrieve specific contact ", response.data);
  //   return response.data;
  // }

  const updateContactHandler = async (contact) => {
    console.log("update contact handler in app >>> ", contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    //const {id, name, email } = response.data;
    console.log("Response update ", response.data);
    setContacts(
      contacts.map((contact) => {
        return (contact.id === response.data.id ? { ...response.data }: contact);
      })
    )

  };
  const searchHandler = async (searchTerm) => {
    //console.log("Search handler > ", searchTerm);
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }
  }
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id; 
    })
    setContacts(newContactList);
    setSearchResults(contacts);
  }

  const NoMatch = () => {
    return (<p>There's nothing here: 404!</p>);
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    // if(retrieveContacts){
    //   setContacts(retrieveContacts);
    // }

    const getAllContacts = async() => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }

    getAllContacts();

  }, []);

  // useEffect(() => {
  //   //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts: searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyword={ searchHandler } />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </div>
  );
}

export default App;
