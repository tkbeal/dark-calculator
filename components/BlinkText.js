import React from 'react';
import {Stylesheet, View, Text} from 'react-native';

class BlinkText extends Component {
   constructor(props) {
      super(props);
      this.state = {showingText: true};

      setInterval(() => {
         this.setState(previousState => {
            return {showingText: !previousState.showingText};
         });
      }, 1000);
   }

   render() {
      let display = this.state.showingText ? this.props.text: " ";
      return (<Text>{display}</Text>);
   }
}