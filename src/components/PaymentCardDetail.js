import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PaymentCardDetail extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/4/02</Text>
          <Text style={styles.contentTitle}>映画</Text>
          <Text style={styles.price}>¥1800</Text>
          <Text style={styles.month}>5月</Text>
        </View>

        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/4/0４</Text>
          <Text style={styles.contentTitle}>fortune</Text>
          <Text style={styles.price}>¥1624</Text>
          <Text style={styles.month}>5月</Text>
        </View>

        <View style={styles.detailListItem}>
          <Text style={styles.date}>2019/4/06</Text>
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
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  contentTitle: {
    fontSize: 16,
    color: '#ff8d14',
  },
  date: {

  },
  price: {

  },
  month: {

  },
});
