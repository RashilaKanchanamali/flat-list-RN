import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import Button from './Button';
//import {parseString} from "react-native-xml2js";

class screen1 extends Component {
    static navigationOptions = {
      title: 'Edit User Details'
    };

    constructor(props){
      
      super(props);
      this.state = {
        id: this.props.navigation.state.params.id,
        code: this.props.navigation.state.params.code,
        title:this.props.navigation.state.params.title,
        firstName: this.props.navigation.state.params.firstName,
        lastName: this.props.navigation.state.params.lastName,
        jobCategoryId:this.props.navigation.state.params.jobCategoryId,
        email: this.props.navigation.state.params.email,
        userName: this.props.navigation.state.params.userName,
        state:this.props.navigation.state.params.state,
        companyId:props.navigation.state.params.companyId
        
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
            id: this.state.id,
            code: this.state.code,
            title:this.state.title,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            jobCategoryId:this.state.jobCategoryId,
            userName: this.state.userName,
            state:this.state.state,
            companyId:this.companyId
        })

    })
      .then(response => response.json())
      .then((responseJson) => {
      Alert.alert(JSON.stringify(responseJson));
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
      //const parseString = require('react-native-xml2js').parseString;
      return (
        
        <View style={styles.container}>

        <TextInput
        value= {this.state.id}
        onChangeText={id => this.setState({ id })}
        />
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
        <TextInput
        value= {this.state.state}
        onChangeText={state => this.setState({ state })}
        />
        <TextInput
        value= {this.state.jobCategoryId}
        onChangeText={jobCategoryId => this.setState({ jobCategoryId })}
        />
        <TextInput
        value= {this.state.userName}
        onChangeText={userName => this.setState({ userName })}
        />

        <TextInput
          value={this.state.companyId}
          onChangeText={companyId => this.setState({companyId})}
        />

        <View style={styles.buttonStyle}>
        {this.renderButton()}
        <Text></Text>
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