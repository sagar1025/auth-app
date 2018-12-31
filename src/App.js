import React, {  Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from  './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCaZ9BKkJFEFD1KLBbh-0zB43rULZK8VjI',
        authDomain: 'authentication-567f5.firebaseapp.com',
        databaseURL: 'https://authentication-567f5.firebaseio.com',
        projectId: 'authentication-567f5',
        storageBucket: 'authentication-567f5.appspot.com',
        messagingSenderId: '968582156836'
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
