import React from 'react';
import { View } from 'react-native';
import PaymentCardDetail from '../components/PaymentCardDetail';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoDetail extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardDetail navigation={this.props.navigation} />
        <CircleButton onPress={() => {this.props.navigation.navigate('PaymentCardMemoEdit')}}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
