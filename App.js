import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
// import { Constants } from 'expo'
import Constants from 'expo-constants'
import contacts, { compareNames } from './contacts'
import Row from './Row'
import ContactsList from './ContactsList'

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
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }
  // Fix array so that props change, so sort reloads page
  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

  // renderItem = obj => <Row {...obj.item} />

  // renderSectionHeader = obj => <Text>{obj.section.title}</Text>


  render() {

    return (
      <View style={styles.container}>

        <Button title="toggle contacts" onPress={this.toggleContacts} />

        <Button title="sort" onPress={this.sort} />

        {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
      </View>
    )


  }
}


