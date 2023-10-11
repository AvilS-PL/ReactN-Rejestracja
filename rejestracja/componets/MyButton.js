import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Screen1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.fun()} style={{
                backgroundColor: this.props.color,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                height: 50,
                width: 100,
                elevation: 3,
            }}>
                <Text style={{ fontSize: 16, color: this.props.tcolor, textShadowColor: "#555555", textShadowRadius: 20, }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>

        );
    }
}
