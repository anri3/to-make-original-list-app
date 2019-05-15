import React from 'react';
import { View } from 'react-native';
import PaymentCardList from '../components/PaymentCardList';
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
      snapshot.forEach((doc) => {
        cardMemo.push(doc.data());
      });
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
      </View>
    );
  }
}
