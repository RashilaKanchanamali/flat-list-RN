import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native';

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

  renderListItem = ({ item }) => (
    
    <View>
      <Text> { item.lastName}</Text> 
    </View> 
  )
    
  
  render() {
    console.log("working 3");

    return (

      <ScrollView>
      <View Style={Styles.container}>
        <FlatList
        data={this.state.lastName}
        keyExtractor={(x, i) => i.toString()}
        renderItem={this.renderListItem}
        //onChangeText={id => this.setState({ id })}
        value={this.state.lastName}
        />

        </View>
    </ScrollView>

      
    )
  }

}

const Styles =StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"

  }
});

export default login;