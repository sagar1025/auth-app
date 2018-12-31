import React, {  Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Loader } from './Common';


class LoginForm extends Component {
  // default width and height is 0 for textInput

  state = {
      email: '',
      password: '',
      authError: '',
      loading: false
  };

   onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      authError: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( this.onLoginSuccess.bind(this))
    .catch(() => {
      //create account if the account does not exist
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( this.onLoginSuccess.bind(this) )
        .catch( this.onLoginFail.bind(this) );
    });
  }

  onLoginSuccess() {
    //clear State
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }
  onLoginFail() {
      this.setState({
        authError: 'Auth failed',
        loading: false
      });
  }

  renderButtonOrLoader() {
    if(this.state.loading) {
      return <Loader loaderSize="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
            <Input
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              label="Email"
              placeholder="test@domain.com"
            />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password"
            secureTextEntryProp
          />
        </CardSection>

        <Text style={styles.errorStyle}>{ this.state.authError }</Text>

        <CardSection>
          {this.renderButtonOrLoader()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginTop: 5,
    marginBottom: 5
  }
}

export default LoginForm;
