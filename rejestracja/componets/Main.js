import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import MyButton from "./MyButton";
import settings from "../Settings.json";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
    }

    regi = async () => {
        if (this.state.login == "" || this.state.password == "") {
            alert("provide all data")
        } else {
            const adres = "http://" + settings.ip + ":" + settings.port + "/register"
            const body = JSON.stringify({ login: this.state.login, password: this.state.password })
            const headers = { "Content-Type": "application/json" }

            let result = await fetch(adres, { method: "POST", body, headers })
            let odp = await result.json()
            if (odp == "USEREXISTS") {
                alert("USEREXISTS")
            } else if (odp == "GUT") {
                this.props.navigation.navigate("users")
            }
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
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.main}>
                        <View style={styles.top}>
                            <Text style={{ fontSize: 50, color: "white" }}>Register App</Text>
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
                            <MyButton text="Register" color="#8BC34A" tcolor="white" fun={this.regi} x="8" y="4" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
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