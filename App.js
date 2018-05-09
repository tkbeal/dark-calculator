import React, { Component } from "react";
import {
   StyleSheet,
   View,
   Text,
   Dimensions,
   Image,
   TouchableHighlight,
   Alert
} from "react-native";
import { StackNavigator } from "react-navigation";
import AwesomeAlert from "react-native-awesome-alerts";

// Import custom components
import ValueScreen from "./components/ValueScreen";
import NumPad from "./components/NumPad";

var darkGreen = "#61892f";
var lightGreen = "#86c232";
var darkGrey = "#222629";
var medGrey = "#474b4f";
var lightGrey = "#6b6e70";
var { height, width } = Dimensions.get("window");
const b_knight = require("./assets/b_knight.png");
const w_knight = require("./assets/w_knight.jpg");
/* const App = StackNavigator({
   Home: { screen: Calculator },
}); */

export default class Calculator extends Component {
   constructor(props) {
      super(props);
      this.screenRef = React.createRef();
      this.state = {
         value: "10"
      };
   }

   updateValue = (value) => {
      console.log("Received press");
      if (value === "") {
         this.setState({ value });
      }
      else {
         this.setState({ value: (this.state.value + value) });
      }
   }

   render() {
      const value = this.state.value;

      return (
         <View style={styles.container}>
            <View style={styles.clockBar} />
            <View style={styles.title}>
               <Text style={styles.textStyle}>Dark Calculator </Text>
               <Image source={b_knight} style={{ width: 40, height: 40 }} />
            </View>
            <ValueScreen value={this.state.value} />
            <NumPad onPress={this.updateValue}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#222629",
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
   },
   clockBar: {
      backgroundColor: "#86c232",
      width: width,
      height: 20
   },
   textStyle: {
      color: "white",
      fontSize: 30,
      textAlign: "center"
   },
   title: {
      flexDirection: "row",
      paddingTop: 5,
      paddingBottom: 10
   },
});
