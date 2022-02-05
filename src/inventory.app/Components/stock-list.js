import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
   state = {
      data: []
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   componentDidMount = () => {
      fetch('https://localhost:7085/api/Inventory', {
         method: 'GET',

      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson,
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
         { this.state.data.map((item)=>(
            <TouchableOpacity
            style = {styles.container}>
               <Text style = {styles.text}> { item.name } </Text>
            </TouchableOpacity>
         ))}
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
