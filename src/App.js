import { v4 as uuidv4 } from "uuid";
import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";

// import PhonebookSection from "components/Feedback/FeedbackSection";

class App extends Component {
  state = { contacts: [], name: "" };

  handleAddContact = (e) => {};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onClick={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>

      // <div>
      /* <h1>Phonebook</h1>
         <ContactForm />

         <h2>Contacts</h2>
         <Filter />
         <ContactList /> */
      /* </div> */
      // <div>
      //   <p>Edit and save to {this.state.value} reload</p>
      // </div>
      // <PhonebookSection />
    );
  }
}

export default App;
