import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class PaymentCardDetail extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

      <TouchableHighlight onPress={() => {this.props.navigation.navigate('PaymentCardMemoEdit')}} underlayColor="transparent">
        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/04/02</Text>
          <Text style={styles.contentTitle}>映画</Text>
          <Text style={styles.price}>¥1800</Text>
          <Text style={styles.month}>5月</Text>
        </View>
      </TouchableHighlight>

        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/04/04</Text>
          <Text style={styles.contentTitle}>CD</Text>
          <Text style={styles.price}>¥1624</Text>
          <Text style={styles.month}>5月</Text>
        </View>

        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/04/06</Text>
          <Text style={styles.contentTitle}>コンビニ</Text>
          <Text style={styles.price}>¥777</Text>
          <Text style={styles.month}>5月</Text>
        </View>

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
