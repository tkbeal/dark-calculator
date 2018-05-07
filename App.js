import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import AwesomeAlert from 'react-native-awesome-alerts';

// Import custom components
import ValueScreen from './components/ValueScreen';

var darkGreen = '#61892f';
var lightGreen = '#86c232'; 
var darkGrey = '#222629';
var medGrey = '#474b4f'
var  lightGrey = '#6b6e70';
var {height, width} = Dimensions.get('window');
var padding = 20;
var buttonHeight = (width - 2 * padding) / 5;
const knight = require('./assets/Knight.png');
/* const App = StackNavigator({
   Home: { screen: Calculator },
}); */

export default class Calculator extends Component {
   constructor(props) {
      super(props);
      this.state = {value: 0, showAlert: false};
   }

   processButton = () => {
      Alert.alert( "hello" );
   }

   render() {
      /* const {navigate} = this.props.navigation; */

      return (
         <View style={styles.container}>
            <View style={styles.clockBar}/>
            <View style={styles.title}>
               <Text style={styles.textStyle}>Dark Calculator </Text>
               <Image source={knight} style={{width: 40, height: 40}}/>
            </View>
            <ValueScreen value={this.state.value}/>
            <Grid style={{marginTop: 10, marginLeft: padding, marginRight: padding}}>
               <Col style={styles.numberCol}>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>7</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>4</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>1</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>&plusmn;</Text>
                     </TouchableHighlight>
                  </Row>
               </Col>
               <Col style={styles.numberCol}>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>8</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>5</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>2</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>0</Text>
                     </TouchableHighlight>
                  </Row>
               </Col>
               <Col style={styles.numberCol}>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>9</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>6</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>3</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>.</Text>
                     </TouchableHighlight>
                  </Row>
               </Col>
               <Col style={styles.numberCol}>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>&divide;</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>X</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>&minus;</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>+</Text>
                     </TouchableHighlight>
                  </Row>
               </Col>
               <Col style={styles.numberCol}>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>C</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>n/a</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}>=</Text>
                     </TouchableHighlight>
                  </Row>
                  <Row style={styles.numberRow}>
                     <TouchableHighlight onPress={() => this.processButton} underlayColor={darkGreen} style={styles.numberButton}>
                        <Text style={styles.numberText}></Text>
                     </TouchableHighlight>
                  </Row>
               </Col>
            </Grid>
         </View>
      );         
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#222629',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
   },
   clockBar: {
      backgroundColor: '#86c232',
      width: width,
      height: 20,
   },
   textStyle: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
   },
   title: {
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 10,
   },
   numberButton: {
      width: buttonHeight - 5,
      height: buttonHeight,
      justifyContent: 'center',
      alignItems: 'center',
   },
   numberText: {
      fontSize: 30,
      color: lightGreen,
   },
   numberRow: {
      backgroundColor: medGrey,
      width: buttonHeight - 5,
      height: buttonHeight,
      marginBottom: 5,
   },
   numberCol: {
      height: buttonHeight * 4 + 25,
   },
});
