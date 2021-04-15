import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Teste run</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
