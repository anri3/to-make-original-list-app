import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import PaymentCardDetail from '../components/PaymentCardDetail';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page';

export default class PaymentCardMemoDetail extends React.Component {
  state = {
    cardDetailMemo: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const { params } = this.props.navigation.state;
    db.collection(`users/${currentUser.uid}/cardMemos/${params.currentMemo.key}/paymentMemos`)
    .get()
    .then((snapshot) => {
      const cardDetailMemo = [];
      snapshot.forEach((doc) => {
        //cardMemo.push(doc.data()); keyも渡している状態
        //console.log(doc.data());
        cardDetailMemo.push({ ...doc.data(), key: doc.id });
      });
      // { cardDetailMemo: cardDetailMemo }
      this.setState({ cardDetailMemo });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('PaymentCardMemoEdit', { currentMemo: params.currentMemo, refresh: this.componentWillMount.bind(this) })
  }

  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardDetail cardDetailMemo={this.state.cardDetailMemo} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
