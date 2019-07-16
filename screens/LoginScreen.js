import React from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logInUser } from '../redux/actions'

class LoginScreen extends React.Component {
    static propTypes = {
        err: PropTypes.string,
        token: PropTypes.string,
        logInUser: PropTypes.func
    }
    state = {
        username: "",
        password: ""
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.token) {
            this.props.navigation.navigate('Main')
        }
    }

    _login = async () => {
        this.props.logInUser(this.state.username, this.state.password)
    }

    handleUsernameUpdate = username => {
        this.setState({ username })
    }

    handlePasswordUpdate = password => {
        this.setState({ password })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.props.err}</Text>
                <View style={styles.textBox}>
                    <TextInput
                        placeholder='username'
                        value={this.state.username}
                        onChangeText={this.handleUsernameUpdate}
                        autoCapitalize="none" />
                    <TextInput placeholder='password'
                        value={this.state.password}
                        onChangeText={this.handlePasswordUpdate}
                        autoCapitalize="none"
                        secureTextEntry={true} />
                </View>
                <Button title="Press to Log In" onPress={this._login} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    textBox: {

    },
    text: {
        textAlign: "center"
    },
    error: {
        color: 'red',
        textAlign: "center"
    }
});

const mapStateToProps = state => ({
    err: state.user.loginErr,
    token: state.user.token
})
export default connect(mapStateToProps, { logInUser })(LoginScreen)