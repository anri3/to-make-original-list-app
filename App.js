import React from 'react';
import { View } from 'react-native';
import PaymentCardMemoDetail from './src/pages/PaymentCardMemoDetail';
import styles from './src/common/styles/Page';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <PaymentCardMemoDetail />

      </View>
    );
  }
}
