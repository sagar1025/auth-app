import React, {  Component } from 'react';
import { Platform, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './Common';

class LoginForm extends Component {
  // default width and height is 0 for textInput

  state = {
      email: '',
      password: ''
  };

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

        <CardSection>
            <Button>
              Log in
            </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
