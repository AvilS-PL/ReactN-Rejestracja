import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Image style={styles.img} source={require('../default.png')}></Image>
                <Text style={styles.sLet}>Login:</Text>
                <Text style={styles.bLet}> {this.props.route.params.login} </Text>
                <Text style={styles.sLet}>Password:</Text>
                <Text style={styles.bLet}> {this.props.route.params.password} </Text>
                <Text style={styles.sLet}>When created:</Text>
                <Text style={styles.bLet}> {this.props.route.params.time.slice(0, -5).replace("T", " ")} </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    img: {
        width: 200,
        height: 200,
    },
    sLet: {
        fontSize: 16,
        color: "#212121",
    },
    bLet: {
        fontSize: 20,
        marginBottom: 10,
        color: "#8BC34A",
    },
});