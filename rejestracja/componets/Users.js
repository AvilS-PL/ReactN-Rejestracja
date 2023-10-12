import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';
import MyButton from './MyButton';
import settings from "../Settings.json";

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.getUsers()
        this.state = {
            tab: []
        };
    }

    backTo = () => {
        this.props.navigation.navigate("main")
    }

    delUser = async (x) => {
        const adres = "http://" + settings.ip + ":" + settings.port + "/delUser"
        const body = JSON.stringify({ id: x })
        const headers = { "Content-Type": "application/json" }

        let result = await fetch(adres, { method: "PATCH", body, headers })
        let odp = await result.json()
        this.setState({
            tab: odp
        })
    }

    getUser = async (x) => {
        const adres = "http://" + settings.ip + ":" + settings.port + "/getUser?id=" + x
        const headers = { "Content-Type": "application/json" }

        let result = await fetch(adres, { method: "GET", headers })
        let odp = await result.json()
        this.props.navigation.navigate("details", odp)
    }

    getUsers = async () => {
        const adres = "http://" + settings.ip + ":" + settings.port + "/getUsers"
        const headers = { "Content-Type": "application/json" }

        let result = await fetch(adres, { method: "GET", headers })
        let odp = await result.json()
        this.setState({
            tab: odp
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.back}>
                    <MyButton fun={this.backTo} text="Back to login page" color="#8BC34A" tcolor="white" x="20" y="4" />
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={this.state.tab}
                        renderItem={({ item }) => <ListItem getFun={this.getUser} delFun={this.delUser} login={item.login} password={item.password} time={item.time} id={item.id} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    back: {
        backgroundColor: "#689F38",

        alignItems: "center",
        justifyContent: 'center',
        flex: 1,

        elevation: 4,
    },
    list: {
        flex: 10,
        justifyContent: "flex-start",
    }
});