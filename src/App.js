import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAZ8xNwotb9zGNM7umnS_c6ykVd8-Ee02Y",
      authDomain: "auth-21af9.firebaseapp.com",
      databaseURL: "https://auth-21af9.firebaseio.com",
      projectId: "auth-21af9",
      storageBucket: "auth-21af9.appspot.com",
      messagingSenderId: "726976649194"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
