import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

import odev3 from './odev3.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "Marmara"},
        { key: "Karadeniz"},
        { key: "Ege"},
        { key: "Akdeniz"},
        { key: "İç Anadolu"},
        { key: "Doğu Anadolu"},
        { key: "Güneydoğu Anadolu"}
      ],
      select: null
    };


  }
 
  render() {
    let list = [];
    if (this.state.select) {
      list = cities.filter(city => city.region === this.state.select);
    }
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) =>
            <View style={styles.GridViewContainer}>
              <TouchableOpacity onPress={() => this.setState({ select: item.key })} activeOpacity={.8}>
                <Text style={styles.GridViewTextLayout}>{item.key}</Text>
              </TouchableOpacity>
            </View>}

          numColumns={1}
          style={{ maxHeight: '50%' }}
          ></FlatList>

        <ScrollView style={styles.secondView}>
          {list.map(city => <View 
            key={city.code}
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
             <Text style={styles.listText}>{city.city}</Text>
             <Text style={styles.listText}>{city.population}</Text> 
             <Text style={styles.listText}>{city.code}</Text>
             </View>)}
        </ScrollView>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray"
  },

  secondView: {
    flex: 1,
    backgroundColor: 'black',
  },


  GridViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 37,
    margin: 5,
    backgroundColor: 'black'
  },
  GridViewTextLayout: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'darkgray',
    padding: 10
  },
  listText: {
    color: 'white',
    minWidth: 85,
    padding: 10
  }
});