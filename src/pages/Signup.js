import React from 'react';
import { View } from 'react-native';
import SignupRegistration from '../components/SignupRegistration';
import styles from '../common/styles/Page';

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <SignupRegistration navigation={this.props.navigation}/>
      </View>
    );
  }
}
