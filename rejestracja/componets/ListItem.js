import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MyButton from './MyButton';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.left}>
                    <Image style={styles.img} source={require('../default.png')}></Image>
                    <Text style={{ color: "#212121", }}> {this.props.id}: {this.props.login} </Text>
                </View>
                <View style={styles.right}>
                    <MyButton fun={() => this.props.getFun(this.props.id)} text="Details" color="#8BC34A" tcolor="white" x="8" y="4" />
                    <MyButton fun={() => this.props.delFun(this.props.id)} text="Delete" color="#FF5722" tcolor="white" x="8" y="4" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#DCEDC8",

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',

        borderRadius: 12,

        margin: 20,
        height: 100,
    },
    left: {
        backgroundColor: "#8BC34A",

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
        elevation: 3,

        flex: 3,
        height: 120,
    },
    right: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 5,

    },
    img: {
        width: 80,
        height: 80
    }
});