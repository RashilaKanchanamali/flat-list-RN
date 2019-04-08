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
        user:'',
        details:'',
        firstName:''
      
      }
    }

    componentWillMount(){
      this.fetchData();
    }

    fetchData = async () => {


      fetch('http://192.168.2.23:100/api/employee/getById/'+this.state.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          user:responseJson
        })
      })
      
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
            firstName:this.state.firstName,
            // id: this.state.user.id,
            // code: this.state.user.code,
            // title:this.state.user.title,
            // firstName:this.state.user.firstName,
            // lastName:this.state.user.lastName,
            // jobCategoryId:this.state.user.jobCategoryId,
            // userName: this.state.user.userName,
            // state:this.state.user.state,
            // companyId:this.state.user.companyId
          
        })

    })
      .then(response => response.json())
      .then((responseJson) => {
        // this.setState({
        //   details:responseJson
        // })
      //Alert.alert(JSON.stringify(responseJson));
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
                                
            placeholder=   {this.state.user.firstName}
            onChangeText={firstName => this.setState({ firstName})}
            //value={this.state.user.firstName}
            underlineColorAndroid='transparent'
            blurOnSubmit={true}
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