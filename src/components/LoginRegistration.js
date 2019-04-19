import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class LoginRegistration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <TextInput
            value={this.props.email}
            style={styles.input}
            onChangeText={(text) => {this.setState({ email: text })}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="E-mail"
            keyboardType="default"
          />
          <TextInput
            value={this.props.password}
            style={styles.input}
            onChangeText={(text) => {this.setState({ password: text })}}
            autoCapitalize="none"
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </View>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('PaymentCardMemoList')}} underlayColor="transparent">
          <View style={styles.loginItem}>
            <Text style={styles.title}>ログイン</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.text}>メンバー登録お済みでない方はこちら</Text>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Signup')}} underlayColor="transparent">
          <View style={styles.registButton}>
            <Text style={styles.title}>新規登録へ</Text>
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
  registButton: {
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: '#47bd47',
    height: 40,
    width: 150,
    borderRadius: 6,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
  },
});
