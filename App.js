import React from 'react';
import { Button, Platform, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

// Added createAppContainer for new version of React-Navigation
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

import AddContactScreen from "./screens/AddContactScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from "./screens/LoginScreen";

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


const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen
  },
  {
    initialRouteName: "ContactList",
    navigationOptions: {
      headerTintColor: "#a41034",
      headerStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contact`}
      size={25}
      color={tintColor}
    />
  )
};

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#a41034"
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs
});

// App Container required for V3
const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  state = {
    contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  // Pass AppNavigator props to AppContainer instead
  render() {
    return (

      <AppContainer
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact
        }}
      />

    );
  }
}


// Old Code Below


// export default class App extends React.Component {
//   state = {
//     showContacts: true,
//     showForm: false,
//     contacts: contacts
//   }
//   addContact = newContact => {
//     this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
//   }
//   toggleContacts = () => {
//     this.setState(prevState => ({ showContacts: !prevState.showContacts }))
//   }

//   toggleForm = () => {
//     this.setState(prevState => ({ showForm: !prevState.showForm }))
//   }

//   showForm = () => {
//     this.setState({ showForm: true })
//   }

//   // Fix array so that props change, so sort reloads page
//   sort = () => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts].sort(compareNames)
//     }))
//   }

//   render() {
//     // console.error('full page alert')
//     // console.warn('this is a less harsh warning')
//     if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
//     return (
//       <View style={styles.container}>

//         <Button title="Toggle Contacts" onPress={this.toggleContacts} />

//         <Button title="Add Contact" onPress={this.showForm} />

//         {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
//       </View>
//     )


//   }
// }