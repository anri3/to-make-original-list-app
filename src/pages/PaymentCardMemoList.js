import React from 'react';
import { View } from 'react-native';
import PaymentCardList from '../components/PaymentCardList';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoList extends React.Component {
  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardList navigation={this.props.navigation}/>
        <CircleButton>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
