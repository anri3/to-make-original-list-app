import React from 'react';
import { View } from 'react-native';
import Header from '../elements/Header';
import PaymentCardDetail from '../components/PaymentCardDetail';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoDetail extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <Header>au</Header>
        <PaymentCardDetail />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}
