import React from 'react';
import { View } from 'react-native';
import PaymentCardMemoEdit from './src/pages/PaymentCardMemoEdit';
import styles from './src/common/styles/Page';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <PaymentCardMemoEdit />

      </View>
    );
  }
}
