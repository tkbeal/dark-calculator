// The screen that things get displayed on
import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

var {height, width} = Dimensions.get('window');
var padding = 20;

class ValueScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value};
    }

    setValue(val) {
        this.setState({ value: val });
    }

    render() {
        const {value} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d0d1d3',
        borderColor: '#6b6e70',
        borderStyle: 'solid',
        borderWidth: 2,
        width: width - (2 * padding),
        height: 50,
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 40,
        textAlign: 'right',
    },
});

export default ValueScreen;