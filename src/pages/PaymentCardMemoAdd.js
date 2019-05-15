import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import PaymentCardAdd from '../components/PaymentCardAdd';
import styles from '../common/styles/Page';

export default class PaymentCardMemoAdd extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardAdd navigation={this.props.navigation} />
      </View>
    );
  }
}
