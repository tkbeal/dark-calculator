import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableHighlight, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import AwesomeAlert from "react-native-awesome-alerts";

// Import custom components
import ValueScreen from "./components/ValueScreen";
import NumPad from "./components/NumPad";
import { first } from "rxjs/operator/first";

var darkGreen = "#61892f";
var lightGreen = "#86c232";
var darkGrey = "#222629";
var medGrey = "#474b4f";
var lightGrey = "#6b6e70";
var { height, width } = Dimensions.get("window");
const b_knight = require("./assets/b_knight.png");
const w_knight = require("./assets/w_knight.jpg");
var firstNum = "";
/* const App = StackNavigator({
   Home: { screen: Calculator },
}); */

export default class Calculator extends Component {
   constructor(props) {
      super(props);
      this.screenRef = React.createRef();
      this.state = {
         value: "0",
         func: "",
         mode: 1
      };
   }

   updateValue = arg => {
      if (arg === "c") {
         this.setState({ value: "0", func: "", mode: 1 });
         firstNum = "";
      } else if (arg === "+") {
         this.setState({ func: "add" });
         firstNum = parseInt(this.state.value);
      } else if (arg === "-") {
         this.setState({ func: "sub" });
         firstNum = parseInt(this.state.value);
      } else if (arg === "x") {
         this.setState({ func: "mul" });
         firstNum = parseInt(this.state.value);
      } else if (arg === "/") {
         this.setState({ func: "div" });
         firstNum = parseInt(this.state.value);
      } else if (arg === "=") {
         this.setState({ mode: 1 });
         switch (this.state.func) {
            case "add":
               this.setState({
                  value: parseInt(firstNum) + parseInt(this.state.value)
               });
               break;
            case "sub":
               this.setState({
                  value: parseInt(firstNum) - parseInt(this.state.value)
               });
               break;
            case "mul":
               this.setState({
                  value: parseInt(firstNum) * parseInt(this.state.value)
               });
               break;
            case "div":
               this.setState({
                  value: parseInt(firstNum) / parseInt(this.state.value)
               });
               break;
            default:
               break;
         }
      } else if (arg === ".") {
         if (this.state.value.toString().indexOf(".") == -1) {
            this.setState({ value: this.state.value + arg });
         }
      } else {
         if (this.state.value === "0" && this.state.func === "") {
            //No num and no function picked yet
            this.setState({ value: arg });
         } else if (this.state.value === "0" && !(this.state.func === "")) {
            //Function picked but no num
            this.setState({ value: arg });
         } else if (!(this.state.value === "0") && this.state.func === "") {
            //No function picked yet, num in progress
            this.setState({ value: this.state.value.toString() + arg });
         } else if (!(this.state.value === "0") && !(this.state.func === "")) {
            if (this.state.mode == 1) {
               //Function picked and firstNum finished, switch to secondSum
               this.setState({ value: arg, mode: 2 });
            } else {
               //Function picked, second sum in progress
               this.setState({ value: this.state.value.toString() + arg });
            }
         }
      }
   };

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
            <NumPad onPress={this.updateValue} />
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
   }
});
