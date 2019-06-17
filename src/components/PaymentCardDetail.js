import React from 'react';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import firebase from 'firebase';

export default class PaymentCardDetail extends React.Component {

  deleteDocument() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const { params } = this.props.navigation.state;
    const projectRef= firebase.database().ref(`users/${currentUser.uid}/cardMemos/${params.currentMemo.key}/paymentMemos`);
    projectRef.remove();
  }

  renderMemo({ item }) {
    const swipeSetting = [{
      text: '削除',
      backgroundColor: '#83BAE9',
      underlayColor: '#FCFCFC',
      onPress: () => {
              Alert.alert(
                "削除しますか？",
                "",
                [
                  {
                    text: "いいえ",
                    style: "cancel"
                  },
                  {
                    text: "はい",
                    onPress: () => {
                      //this.deleteDocument(item.key)
                      this.deleteDocument()
                    }
                  }
                ],
                { cancelable: false }
              );
            },
    }];

    const dateString = (date) => {
      const str = date.toDate().toISOString();
      return str.split('T')[0];
    };

    return (
      <Swipeout
        right={swipeSetting}
        autoClose={true}
        backgroundColor='transparent' >
        <View style={styles.detailListItem}>
          <Text style={styles.date}>{dateString(item.createdOn)}</Text>
          <Text style={styles.contentTitle}>{item.body}</Text>
          <Text style={styles.price}>{`¥${item.number}`}</Text>
          <Text style={styles.month}>{item.option}</Text>
        </View>
      </Swipeout>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
      <FlatList data={this.props.cardDetailMemo} renderItem={this.renderMemo.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
  },
  detailListItem: {
    backgroundColor: '#fff',
    padding: 16,
    height: 64,
    width: '100%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentTitle: {
    fontSize: 20,
    color: '#ff8d14',
    marginLeft: 16,
  },
  date: {
    fontSize: 14,
    color: '#a2a2a2',
  },
  price: {
    fontSize: 18,
    color: '#47bd47',
    position: 'absolute',
    right: 64,
  },
  month: {
    fontSize: 14,
    color: '#a2a2a2',
    marginLeft: 'auto',
  },
});
