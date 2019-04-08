import React from 'react';
import { View } from 'react-native';
import PaymentCardMemoList from './src/pages/PaymentCardMemoList';
import styles from './src/common/styles/Page';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <PaymentCardMemoList />

      </View>
    );
  }
}
