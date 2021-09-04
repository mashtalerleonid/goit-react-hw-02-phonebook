import { v4 as uuidv4 } from "uuid";
import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = { id: uuidv4(), name, number };

    let isAdded = false;

    this.state.contacts.forEach((contact) => {
      if (contact.name === name) {
        isAdded = true;
        return;
      }
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filterChange={this.filterChange} filter={filter} />
        <ContactList
          list={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
