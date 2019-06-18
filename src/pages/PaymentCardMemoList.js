import React from 'react';
import { View } from 'react-native';
import PaymentCardList from '../components/PaymentCardList';
import CircleButton from '../elements/CircleButton';
import styles from '../common/styles/Page'
import firebase from 'firebase';

export default class PaymentCardMemoList extends React.Component {
  state = {
    cardMemo: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/cardMemos`)
    .get()
    .then((snapshot) => {
      const cardMemo = [];
      snapshot.forEach((doc, key) => {
        //cardMemo.push(doc.data()); keyも渡している状態
        cardMemo.push({ ...doc.data(), key: doc.id });
      });
      // { cardMemo: cardMemo }
      this.setState({ cardMemo });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.pagesCommon}>
        <PaymentCardList cardMemo={this.state.cardMemo} navigation={this.props.navigation}/>
        <CircleButton onPress={() => {this.props.navigation.navigate('PaymentCardMemoAdd', { refresh: this.componentWillMount.bind(this)})}}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
