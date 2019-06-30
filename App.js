import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import { Constants } from 'expo'
import Constants from 'expo-constants'
import contacts, { compareNames } from './contacts'
import Row from './Row'

import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }

  sort = () => {
    this.setState(prevState => ({ contacts: prevState.contacts.sort(compareNames) }))
  }



  render() {

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (

          <FlatList
            renderItem={(obj) => <Row {...obj.item} />}
            data={this.state.contacts}
          />
        )}
      </View>
    )


  }
}


