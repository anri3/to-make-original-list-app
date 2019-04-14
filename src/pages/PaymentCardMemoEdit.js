import React from 'react';
import { View } from 'react-native';
import PaymentCardEdit from '../components/PaymentCardEdit';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoEdit extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardEdit />
        <CircleButton onPress={() => {this.props.navigation.goBack()}}>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}
