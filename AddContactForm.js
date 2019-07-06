import React from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
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
        justifyContent: 'center'
    },
})
export default class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    // getHandler = key => val => {
    //     this.setState({ [key]: val })
    // }

    // handleNameChange = this.getHandler('name')
    // handlePhoneChange = this.getHandler('phone')

    handleNameChange = name => {
        this.setState({ name })
    }

    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
            this.setState({ phone })
        }
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10
            && this.state.name.length >= 2) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
        // this.props.onSubmit({ ...this.state })
        // this.props.onSubmit({ name: this.state.name, phone: this.state.phone })
    }

    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </KeyboardAvoidingView>
        )
    }
}