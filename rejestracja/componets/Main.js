import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

import MyButton from "./MyButton";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
    }


    regi = () => {

        if (this.state.login == "" || this.state.password == "") {
            alert("provide all data")
        } else {
            const body = JSON.stringify({ login: this.state.login, password: this.state.password })
            const headers = { "Content-Type": "application/json" }

            fetch("http://192.168.43.201:3000/register", { method: "POST", body, headers: headers }) // fetch
                .then(response => response.json())
                .then(
                    data => {
                        alert(data)
                    },

                )
        }

    }

    setText1 = (x) => {
        this.setState({
            login: x,
            password: this.state.password
        })
    }
    setText2 = (x) => {
        this.setState({
            login: this.state.login,
            password: x
        })
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <View style={styles.main}>
                    <View style={styles.top}>
                        <Text style={{ fontSize: 50, color: "white", textShadowColor: "#555555", textShadowRadius: 20, }}>Register App</Text>
                    </View>
                    <View style={styles.bottom}>
                        <TextInput
                            style={{ height: 40, marginTop: 20, borderBottomWidth: 1, width: 200, }}
                            placeholder="Login"
                            onChangeText={a => this.setText1(a)}
                        />
                        <TextInput
                            style={{ height: 40, margin: 20, borderBottomWidth: 1, width: 200, }}
                            placeholder="Password"
                            onChangeText={a => this.setText2(a)}
                        />
                        <MyButton text="Register" color="#8BC34A" tcolor="white" fun={this.regi} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#DCEDC8",
    },
    top: {
        flex: 1,
        backgroundColor: "#8BC34A",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
    },
});