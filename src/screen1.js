import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class screen1 extends Component {
    static navigationOptions = {
      title: 'log',
    };

    constructor(props){
      super(props);
      this.state = {
        lastName: this.props.navigation.state.params.lastName,
        
      }
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>

        <Text>hello</Text>
        <Text>{this.state.lastName}</Text>

        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        paddingRight:5,
        paddingTop: 5,
        paddingLeft: 250,
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
    
})
export default screen1 ;