import React, { Component } from 'react'
import {Alert,LogBox, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const Item = (p) => {
    return (
        <View style={styles.center}>
               <TouchableOpacity
                    style={styles.container}>
                    <Text style={styles.text} onPress={() =>p.nav.navigate('Item', { item: p.item })}
                        > {p.item.barcode} </Text>
                </TouchableOpacity>
        </View>
    );
}
class List extends Component {
    state = {
        data: []
    }
    componentDidMount = () => {
        fetch('https://localhost:7085/api/Inventory/-1348982359/detail', {
            method: 'GET',

        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.items,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                {this.state.data.map((item) => (
                    <Item key={item.barcode} item={item} nav={this.props.navigation}></Item>
                ))}
            </View>
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    },
    center: {
        alignItems: 'center'
      }
})
