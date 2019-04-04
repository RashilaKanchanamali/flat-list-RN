import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert,TouchableOpacity} from 'react-native';

class login extends Component {
  static navigationOptions = {
    title: 'Users',
  //   headerTitleStyle: { 
  //     textAlign:"center", 
  //     flex:1
  // }
  };
  
  state = {
    scrollEnabled: true,
    id:[],
    code:[],
    title:[],
    firstName: [],
    lastName: [],
    email:[],
    userName:[],
    jobCategoryId:[],
    state:"modify",
    companyId:[]
  };
 

  componentWillMount() {
    this.fetchData();
  }

   fetchData = async () => { 
  
      fetch('http://192.168.2.23:100/api/employee/getAll')
      .then(response => response.json())
      .then(id => this.setState({id}))
      .then(email => this.setState({email}))
      .then(firstName => this.setState({firstName}))
      .then(userName => this.setState({userName}))
      .then(title => this.setState({title}))
      .then(jobCategoryId => this.setState({jobCategoryId}))
      .then(state => this.setState({state}))
      .then(companyId => this.setState({companyId}))
      .then(lastName => this.setState({lastName}))
      .then(code => this.setState({code}));
      
      }; 
    
  render() {

    const { navigate } = this.props.navigation;
    
    console.log("working 3");

    return (

      
      
      <View Style={Styles.container}>
      
        <FlatList
        scrollEnabled={this.state.scrollEnabled}
        data={this.state.id}
        keyExtractor={(x, i) => i.toString()}
        renderItem={renderListItem = ({ item }) => 
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>

        <TouchableOpacity onPress={ () => navigate('screen1',{id:item.id, firstName:item.firstName, lastName:item.lastName, email:item.email, code:item.code, userName:item.userName, title:item.title, jobCategoryId:item.jobCategoryId, state:item.state, companyId:item.companyId})} >
          <View style={{ width: '100%', height: 70, alignItems: 'flex-start', flexDirection: 'row', backgroundColor:'#87ceeb',borderRadius: 15 }}>
          <View style={{width: '100%', height: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Text Style={{flexDirection: 'row', alignItems: "center"}}> {item.id}{"\n"}{item.firstName}</Text>
          </View>
          </View>
           
        </TouchableOpacity>

        </View> 
        }
        scrollEnabled={true}
        value={this.state.id}>
        
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
    backgroundColor: "#F5FCFF"
  }
});

export default login;