import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';
import firebase from 'firebase';

export default class PaymentCardList extends React.Component {

  renderCardMemo(memo, i) {
    return (

      <View key={i} style={styles.memoList}>
       <TouchableHighlight onPress={() => {this.props.navigation.navigate('PaymentCardMemoDetail', { currentMemo: memo })}} underlayColor="transparent">
         <View style={styles.cardMemoListItem}>
           <Text style={styles.memoTitle}>{memo.body.substring(0, 14)}</Text>
         </View>
       </TouchableHighlight>
      </View>

    );
  }

//メモのアイテムを押すと、PaymentCardMemoDetailへ
  handlePress() {
   this.props.navigation.navigate('PaymentCardMemoDetail')
  }


  render() {
    const list = [];

    this.props.cardMemo.forEach((memo, i) => {
      list.push(this.renderCardMemo(memo, i));
    });

    return (
    <View>

      <View style={styles.container}>
        {list}
      </View>


    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  memoList: {
    marginTop: 16,
    marginLeft: 16,
    height: 96,
    width: 96,
  },
  cardMemoListItem: {
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    height: 96,
    width: 96,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  memoTitle: {
    fontSize: 16,
    color: '#ff8d14',
  },
});
