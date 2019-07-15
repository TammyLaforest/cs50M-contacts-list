import React from 'react';
import AddContactForm from '../AddContactForm';

import store from '../redux/store'
import { addContact } from '../redux/actions'
import { connect } from 'react-redux'


class AddContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Contact',
  };

  handleSubmit = formState => {
    // this.props.screenProps.addContact(formState);
    // store.dispatch(addContact({ name: formState.name, phone: formState.phone }))
    this.props.addContact({ name: formState.name, phone: formState.phone })
    this.props.navigation.navigate('ContactList');
  };

  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />;
  }
}


export default connect(null, { addContact: addContact })(AddContactScreen)