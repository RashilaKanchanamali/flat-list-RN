import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
import Button from './Button';

class screen1 extends Component {
    static navigationOptions = {
      title: 'Edit User Details'
    };

    constructor(props){
      
      super(props);
      this.state = {
        id: this.props.navigation.state.params.id,
        user:'',
        details:''
      
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
    
            id: this.state.user.id,
            code: this.state.user.code,
            title:this.state.user.title,
            jobCategoryId:this.state.user.jobCategoryId,
            timeStamp:this.state.user.timeStamp,
            companyId:this.state.user.companyId,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            userName: this.state.userName

        })

    })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState ({
          user:responseJson
        })
      Alert.alert(JSON.stringify(responseJson.firstName));
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

        <Text>
        {this.state.user.firstName}
        </Text>


        <TextInput                      
        placeholder=   {this.state.user.firstName}
        onChangeText={firstName => this.setState({ firstName})}
        underlineColorAndroid='transparent'
        blurOnSubmit={true}
        />

        <TextInput                      
        placeholder=   {this.state.user.lastName}
        onChangeText={lastName => this.setState({ lastName})}
        underlineColorAndroid='transparent'
        blurOnSubmit={true}
        />

        <TextInput                      
        placeholder=   {this.state.user.email}
        onChangeText={email => this.setState({ email})}
        underlineColorAndroid='transparent'
        blurOnSubmit={true}
        />

        <TextInput                      
        placeholder=   {this.state.user.userName}
        onChangeText={userName => this.setState({ userName})}
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
        paddingTop:200

}
    
})
export default screen1 ;