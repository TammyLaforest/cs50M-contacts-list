import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import contacts, { compareNames } from './contacts'
import Row from './Row'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts
  }
  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
  }
  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }


  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }


  showForm = () => {
    this.setState({ showForm: true })
  }

  // Fix array so that props change, so sort reloads page
  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

  render() {
    // console.error('full page alert')

    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
    return (
      <View style={styles.container}>

        <Button title="Toggle Contacts" onPress={this.toggleContacts} />

        <Button title="Add Contact" onPress={this.showForm} />

        {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
      </View>
    )


  }
}


