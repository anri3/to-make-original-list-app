import React from 'react';
import { View } from 'react-native';
import LoginRegistration from '../components/LoginRegistration';
import styles from '../common/styles/Page';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <LoginRegistration navigation={this.props.navigation}/>
      </View>
    );
  }
}
