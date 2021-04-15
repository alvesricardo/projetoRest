import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import api from './src/services/api';
import Produtos from './src/components/Produtos'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      produtos: []
    }
  }

  async componentDidMount(){
    const response = await api.get('items');
    this.setState({
    produtos: response.data
  })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Produtos data={item} />}>
        </FlatList>

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
