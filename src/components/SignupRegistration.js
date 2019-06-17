import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SignupRegistration extends React.Component {
  state = {
    email: '',
    password: '',
  }


  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'PaymentCardMemoList' })],
      });
      this.props.navigation.dispatch(resetAction);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <TextInput
            value={this.state.email}
            style={styles.input}
            onChangeText={(text) => {this.setState({ email: text })}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="E-mail"
            keyboardType="default"
          />
          <TextInput
            value={this.state.password}
            style={styles.input}
            onChangeText={(text) => {this.setState({ password: text })}}
            autoCapitalize="none"
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </View>

        <TouchableHighlight onPress={this.handleSubmit.bind(this)} underlayColor="transparent">
          <View style={styles.loginItem}>
            <Text style={styles.title}>新規登録する</Text>
          </View>
        </TouchableHighlight>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
    marginTop: 32,
    fontSize: 20,
    color: '#000',
  },
  loginItem: {
    alignSelf: 'center',
    marginTop: 32,
    backgroundColor: '#ff8d14',
    height: 40,
    width: 150,
    borderRadius: 6,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  text: {
    alignSelf: 'center',
    marginTop: 32,
  },
});
