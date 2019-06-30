import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import { Constants } from 'expo'
import Constants from 'expo-constants'
import contacts, { compareNames } from './contacts'
import Row from './Row'

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

  renderItem = obj => <Row {...obj.item} />

  // Use key extractor to get rid of Key isn't string error
  keyExtractor = (item, index) => index.toString()


  render() {

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (

          <FlatList
            renderItem={this.renderItem}
            data={this.state.contacts}
            keyExtractor={this.keyExtractor}
          />
        )}
      </View>
    )


  }
}


