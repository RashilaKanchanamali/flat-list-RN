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
        code: this.props.navigation.state.params.code,
        title:this.props.navigation.state.params.title,
        firstName: this.props.navigation.state.params.firstName,
        isActive: this.props.navigation.state.params.isActive,
        jobCategoryId:this.props.navigation.state.params.jobCategoryId,
        email: this.props.navigation.state.params.email,
        displayName: this.props.navigation.state.params.displayName
        
      }
    }

    onButtonPress(){
      
      console.log("abcd");

      fetch('http://192.168.2.23:100/api/employee/save/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: this.state.code,
            title:this.state.title,
            firstName:this.state.firstName,
            isActive:this.state.isActive,
            jobCategoryId:this.state.jobCategoryId,
            displayName: this.state.displayName
        })

    })
      .then(response => response.text())
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

        <TextInput
        value= {this.state.code}
        onChangeText={code => this.setState({ code })}/>
        <TextInput
        value= {this.state.title}
        onChangeText={title => this.setState({ title })}
        />
        <TextInput
        value= {this.state.firstName}
        onChangeText={firstName => this.setState({ firstName })}
        />
        {/* <TextInput
        value= {this.state.isActive}
        onChangeText={isActive => this.setState({ isActive })}
        /> */}
        <TextInput
        value= {this.state.jobCategoryId}
        onChangeText={jobCategoryId => this.setState({ jobCategoryId })}
        />
        <TextInput
        value= {this.state.displayName}
        onChangeText={displayName => this.setState({ displayName })}
        />

        <View style={styles.buttonStyle}>
        {this.renderButton()}
        </View>
        </View>
      
      );

      
    }
  }

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft:50,
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    buttonStyle: {
        borderRadius: 60,
        flexDirection: 'row',
        position: 'relative',
        paddingRight:100,
        paddingLeft:100,

}
    
})
export default screen1 ;