import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

export default class PaymentCardDetail extends React.Component {

  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('PaymentCardMemoEdit')}} underlayColor="transparent">
        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/04/02</Text>
          <Text style={styles.contentTitle}>{item.body}</Text>
          <Text style={styles.price}>¥1800</Text>
          <Text style={styles.month}>5月</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
      <FlatList data={this.props.cardDetailMemo} renderItem={this.renderMemo.bind(this)} />
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
    right: 72,
  },
  month: {
    fontSize: 14,
    color: '#a2a2a2',
    marginLeft: 'auto',
  },
});
