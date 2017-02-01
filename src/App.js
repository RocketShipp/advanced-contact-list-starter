import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedContactIds: [],
      actionLog: [],
      searchText: '',
      contacts: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/contacts')
      .then(resp => {
        this.setState({
          contacts: resp.data
        });
      })
      .catch(err => {
        console.error(`Error! ${err}`);
      });
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  getFilteredContacts() {
    const term = this.state.searchText.trim().toLowerCase();
    const selectedIds = this.state.selectedContactIds;
    return this.state.contacts.filter(
      (contact) => {
        // Each index of a filtered over contact will be returned if the name
        // being iterated over conatins one or more characters in searchText

        // Each index of a contact will be returned if the [contact._id]
        // does not match any of the IDs in [this.state.selectedContactIds]
        return (( contact.name.toLowerCase().indexOf(term) >= 0) &&
        (selectedIds.indexOf(contact._id) < 0));
      });
  }
  getSelectedContacts() {
    return this.state.contacts.filter(
      (contact) => {
        return this.state.selectedContactIds.indexOf(contact._id) >= 0;
      }
    );
  }

  handleSelectContact(id) {
    this.setState({
      selectedContactIds: this.state.selectedContactIds.concat(id)
    });
  }
  handleDeselectContact(id) {
    this.state.selectedContactIds.splice(this.state.selectedContactIds.indexOf(id), 1);
    this.setState({
      selectedContactIds: this.state.selectedContactIds
    })
  }
  render() {
    return (
      <div className="App">
        <p>Contacts</p>
        <SearchBar
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          clickHandle={this.handleSelectContact.bind(this)}
          selectedContacts={this.state.selectedContactIds}
        />
        <hr/>
        <p>Selected Contacts</p>
        <ContactList
          contacts={this.getSelectedContacts()}
          clickHandle={this.handleDeselectContact.bind(this)}
        />
      </div>
    );
  }
}

export default App;
