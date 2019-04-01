import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert,TouchableOpacity} from 'react-native';

class login extends Component {
  
  state = {
    scrollEnabled: true,
    firstName: [],
    lastName: [],
    email:[]
  };
 

  componentWillMount() {
    this.fetchData();
  }

   fetchData = async () => { 
  
      fetch('http://192.168.2.23:100/api/employee/getAll')
      .then(response => response.json())
      .then(lastName => this.setState({lastName}))
      .then(email => this.setState({email}))
      .then(firstName => this.setState({firstName}));
      
      }; 
    
  render() {

    const { navigate } = this.props.navigation;
    
    console.log("working 3");

    return (

      
      
      <View Style={Styles.container}>
      
        <FlatList
        scrollEnabled={this.state.scrollEnabled}
        data={this.state.lastName}
        keyExtractor={(x, i) => i.toString()}
        renderItem={renderListItem = ({ item }) => 
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>

        <TouchableOpacity onPress={ () => navigate('screen1', {lastName: item.lastName})} >
          <View style={{ width: '100%', height: 70, alignItems: 'flex-start', flexDirection: 'row', backgroundColor:'#87ceeb',borderRadius: 15 }}>
          <View style={{width: '80%', height: 50, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text Style={{justifyContent: 'center', flexDirection: 'row'}}> {item.firstName}  {item.lastName}     {item.email}</Text>
          </View>
          </View>
           
        </TouchableOpacity>

        </View> 
        }
        scrollEnabled={true}
        value={this.state.lastName}>
        
        </FlatList>
        
        </View>
          
    )
  }

}

const Styles =StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop:10,
    paddingRight:10,
    paddingLeft:10
  }
});

export default login;