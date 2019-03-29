import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert,TouchableOpacity} from 'react-native';

class login extends Component {
  
  state = {
    
    lastName: []
  };
 

  componentWillMount() {
    this.fetchData();
  }

   fetchData = async () => { 
  
      fetch('http://192.168.2.23:100/api/employee/getAll')
      .then(response => response.json())
      .then(lastName => this.setState({lastName}));
      
      }; 
    
  render() {

    const { navigate } = this.props.navigation;
    
    console.log("working 3");

    return (

      
      
      <View Style={Styles.container}>
      
        <FlatList
        data={this.state.lastName}
        keyExtractor={(x, i) => i.toString()}
        renderItem={renderListItem = ({ item }) => (
        <View>

        <TouchableOpacity onPress={ () => navigate('screen1', {lastName: item.lastName})} >
          <Text Style={StyleSheet.names}> {item.lastName}</Text> 
        </TouchableOpacity>

        </View> 
        )}
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
  },
  names: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10,
    paddingRight:10,
    paddingLeft:10
  }
});

export default login;