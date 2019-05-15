import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import PaymentCardDetail from '../components/PaymentCardDetail';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoDetail extends React.Component {

  handlePress() {
    this.props.navigation.navigate('PaymentCardMemoEdit')
  }

  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardDetail navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
