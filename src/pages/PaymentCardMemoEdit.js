import React from 'react';
import { View } from 'react-native';
import Header from '../elements/Header';
import PaymentCardEdit from '../components/PaymentCardEdit';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoEdit extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <Header>品目</Header>
        <PaymentCardEdit />
        <CircleButton>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}
