import React, {  Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Loader } from  './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  state = {
    userLoggedIn: null
  }

  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCaZ9BKkJFEFD1KLBbh-0zB43rULZK8VjI',
        authDomain: 'authentication-567f5.firebaseapp.com',
        databaseURL: 'https://authentication-567f5.firebaseio.com',
        projectId: 'authentication-567f5',
        storageBucket: 'authentication-567f5.appspot.com',
        messagingSenderId: '968582156836'
      });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({userLoggedIn: true});
      }
      else {
        this.setState({userLoggedIn: false});
      }
    });
  }

  showLoginOrLogOut() {
    switch(this.state.userLoggedIn) {
      case true:
              return (
                <CardSection>
                  <Button onPress={ () => firebase.auth().signOut() }>
                    Log Out
                  </Button>
                </CardSection>
              );
      case false:
            return <LoginForm />;
      default:
        return(
          <CardSection>
            <Loader loaderSize='large' />
          </CardSection>
        );
    }


  }

    render() {
      return (
        <View>

          <Header headerText="Authentication" />
          <View>
            { this.showLoginOrLogOut() }
          </View>

        </View>
      );
    }
}

export default App;
