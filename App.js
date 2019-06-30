import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Constants } from 'expo'
import Constants from 'expo-constants'
import contacts from './contacts'
import Row from './Row'
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';

// Moved to separate Row.js file
// const Row = props => (
//   <View>
//     <Text >{props.name}</Text>
//     <Text >{props.phone}</Text>
//   </View>
// )


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
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }

  render() {

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <ScrollView>
            {contacts.map(contact => <Row {...contact} />)}
          </ScrollView>
        )}
      </View>
    )


  }
}


