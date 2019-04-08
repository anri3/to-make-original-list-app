import React from 'react';
import { View } from 'react-native';
import Header from '../elements/Header';
import PaymentCardList from '../components/PaymentCardList';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoList extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <Header>PaymentCard List</Header>
        <PaymentCardList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}
