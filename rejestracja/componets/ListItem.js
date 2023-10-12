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
                    <Text> {this.props.id}: {this.props.name} </Text>
                </View>
                <View style={styles.right}>
                    <MyButton text="Details" color="#8BC34A" tcolor="white" x="8" y="4" />
                    <MyButton text="Delete" color="#8BC34A" tcolor="white" x="8" y="4" />
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

        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 20,
        height: 100,
    },
    left: {
        backgroundColor: "#8BC34A",

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
        elevation: 3,

        flex: 2,
    },
    right: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 5,

    },
    img: {
        width: 100,
        height: 100
    }
});