import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import SectionListContacts from '../SectionListContacts';
import store from '../redux/store.js'

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddContact')}
          color="#a41034"
        />
      ),
    };
  };

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact);
  };

  render() {
    const contacts = store.getState().contacts
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
