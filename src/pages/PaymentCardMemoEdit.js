import React from 'react';
import { View } from 'react-native';
import PaymentCardEdit from '../components/PaymentCardEdit';
import styles from '../common/styles/Page';

export default class PaymentCardMemoEdit extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardEdit navigation={this.props.navigation}/>
      </View>
    );
  }
}
