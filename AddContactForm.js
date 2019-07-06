import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
})
export default class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: ''
    }
    handleNameChange = name => {
        this.setState({ name })
    }
    handlePhoneChange = phone => {
        this.setState({ phone })
    }
    handleSubmit = () => {
        this.props.onSubmit(this.state)
        // this.props.onSubmit({ ...this.state })
        // this.props.onSubmit({ name: this.state.name, phone: this.state.phone })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                    placeholder="Name"
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.handlePhoneChange}
                    placeholder="Phone"
                />
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        )
    }
}