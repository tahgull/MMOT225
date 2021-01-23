import React, { Component } from 'react';
import Firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../image/image.png'

class App extends Component {

  state = {
    loggedIn: null
  }




  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDDdCgfEXvUbbfK5TT7ZfyRv7vE1ffstBw",
    authDomain: "fir-reactnative-d6a69.firebaseapp.com",
    databaseURL: "https://fir-reactnative-d6a69-default-rtdb.firebaseio.com",
    projectId: "fir-reactnative-d6a69",
    storageBucket: "fir-reactnative-d6a69.appspot.com",
    messagingSenderId: "473389217743",
    appId: "1:473389217743:web:cee9772247eae6eabb44ba"
    };
    // Initialize Firebase
    Firebase.initializeApp(firebaseConfig);


    firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;