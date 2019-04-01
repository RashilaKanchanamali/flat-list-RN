import React, { Component } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Text } from 'react-native';

class screen1 extends Component {
    static navigationOptions = {
      title: 'Edit User Details',
    //   headerTitleStyle: { 
    //     textAlign:"center", 
    //     flex:1
    // }
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
    render() {
      const { navigate } = this.props.navigation;
      return (
        <KeyboardAvoidingView>
        <View style={styles.container}>

        <Text>hello</Text>
        <Text>{this.state.id}</Text>
        <Text>{this.state.firstName}</Text>
        <Text>{this.state.lastName}</Text>
        <Text>{this.state.email}</Text>
        <Text>{this.state.displayName}</Text>

        <TextInput
          placeholder={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
        ></TextInput>
        
        
        

        </View>
        </KeyboardAvoidingView>
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