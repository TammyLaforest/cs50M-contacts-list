import React from 'react';
// Added createAppContainer for new version of React-Navigation
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation"
import { Provider } from "react-redux"

import Ionicons from "react-native-vector-icons/Ionicons"

import AddContactScreen from "./screens/AddContactScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from "./screens/LoginScreen";

import { fetchUsers } from './api'
import contacts from './contacts'
import { store, persistor } from "./redux/store"

import { PersistGate } from 'redux-persist/integration/react';

// import { Button, Platform, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
// import Constants from 'expo-constants'

// import contacts, { compareNames } from './contacts'
// import Row from './Row'
// import ContactsList from './ContactsList'
// import AddContactForm from './AddContactForm'

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
  }

  // componentDidMount() {
  //   this.getUsers()
  // }

  // getUsers = async () => {
  //   const results = await fetchUsers()
  //   this.setState({ contacts: results })
  // }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  // Pass AppNavigator props to AppContainer instead
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >

          <AppContainer />
        </PersistGate>
      </Provider >
    )
  }
}