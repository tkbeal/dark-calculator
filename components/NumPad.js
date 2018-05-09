import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
   StyleSheet,
   Text, 
   TouchableHighlight,
   Dimensions,
} from "react-native";

var { height, width } = Dimensions.get("window");
var padding = 20;
var buttonHeight = (width - 2 * padding) / 5;
var darkGreen = "#61892f";
var lightGreen = "#86c232";
var darkGrey = "#222629";
var medGrey = "#474b4f";
var lightGrey = "#6b6e70";

class NumPad extends Component {
   constructor(props) {
      super(props);
   }

   testFunction = (val) => {
      console.log("Pressed " + val);
      this.props.onPress(val);
   }

   render() {
      return(
         <Grid style={{ marginTop: 10, marginLeft: padding, marginRight: padding }}>
            <Col style={styles.numberCol}>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "7")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>7</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 4)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>4</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 1)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>1</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>&plusmn;</Text>
                  </TouchableHighlight>
               </Row>
            </Col>
            <Col style={styles.numberCol}>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 8)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>8</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 5)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>5</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 2)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>2</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 0)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>0</Text>
                  </TouchableHighlight>
               </Row>
            </Col>
            <Col style={styles.numberCol}>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 9)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>9</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 6)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>6</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, 3)}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>3</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, '.')}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>.</Text>
                  </TouchableHighlight>
               </Row>
            </Col>
            <Col style={styles.numberCol}>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>&divide;</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>X</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>&minus;</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>+</Text>
                  </TouchableHighlight>
               </Row>
            </Col>
            <Col style={styles.numberCol}>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>C</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>n/a</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText}>=</Text>
                  </TouchableHighlight>
               </Row>
               <Row style={styles.numberRow}>
                  <TouchableHighlight
                     onPress={this.testFunction.bind(this, "You pressed a button")}
                     underlayColor={darkGreen}
                     style={styles.numberButton}
                  >
                     <Text style={styles.numberText} />
                  </TouchableHighlight>
               </Row>
            </Col>
         </Grid>
      );
   }
}

const styles = StyleSheet.create({
   numberButton: {
      width: buttonHeight - 5,
      height: buttonHeight,
      justifyContent: "center",
      alignItems: "center"
   },
   numberText: {
      fontSize: 30,
      color: lightGreen
   },
   numberRow: {
      backgroundColor: medGrey,
      width: buttonHeight - 5,
      height: buttonHeight,
      marginBottom: 5
   },
   numberCol: {
      height: buttonHeight * 4 + 25
   }
});

export default NumPad;