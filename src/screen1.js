import React, { Component } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Text, Alert } from 'react-native';
import Button from './Button';

class screen1 extends Component {
    static navigationOptions = {
      title: 'Edit User Details'
    };

    constructor(props){
      
      super(props);
      this.state = {
        id: this.props.navigation.state.params.id,
        firstName: this.props.navigation.state.params.firstName,
        lastName: this.props.navigation.state.params.lastName,
        email: this.props.navigation.state.params.email,
        displayName: this.props.navigation.state.params.displayName
        
      }
    }

    onButtonPress(){

      fetch('http://192.168.2.23:100/api/employee/save/')
      .then(response => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
    }).catch((error) => {
        Alert.alert(error);
    });
    }

    renderButton() {
      return (
          <Button onPress={this.onButtonPress.bind(this)}>
          SAVE
        </Button>
      );

}

    render() {
      console.log("id");
      const { navigate } = this.props.navigation;
      return (
        
        <View style={styles.container}>

        <Text>hello</Text>

        <TextInput
        value= {this.state.id}
        onChangeText={id => this.setState({ id })}/>

        <TextInput>{this.state.firstName}</TextInput>
        <TextInput>{this.state.lastName}</TextInput>
        <TextInput>{this.state.email}</TextInput>
        <TextInput>{this.state.displayName}</TextInput>

        <View style={styles.buttonStyle}>
        {this.renderButton()}
        </View>


        
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
    },
    buttonStyle: {
    marginTop: 5,
    padding: 5,
    borderRadius: 60,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
}
    
})
export default screen1 ;