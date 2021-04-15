import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Produtos extends Component {
    render(){
        return(
            <View style={styles.card}>
                <Text style={{fontSize: 20}}>{this.props.data.description}</Text>
                <Text style={styles.card1}>{this.props.data.categoria}</Text>
            </View>
        )
    }
   
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: "#afeeee",
      padding: 20,
      marginTop: 20,
      alignItems: "flex-end"
    },
    card1: {
        marginTop: 10,
        padding: 5,
        borderRadius:4,
        backgroundColor: "#ff4500"
    }
  
  });