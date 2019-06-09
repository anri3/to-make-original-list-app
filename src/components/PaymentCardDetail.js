import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

export default class PaymentCardDetail extends React.Component {

  renderMemo({ item }) {
    return (
        <View style={styles.detailListItem}>
          <Text style={styles.date}>{dateString(item.createdOn)}</Text>
          <Text style={styles.contentTitle}>{item.body}</Text>
          <Text style={styles.price}>{`¥${item.number}`}</Text>
          <Text style={styles.month}>{item.option}</Text>
        </View>
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
    right: 64,
  },
  month: {
    fontSize: 14,
    color: '#a2a2a2',
    marginLeft: 'auto',
  },
});
