import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/PaymentCardList';

export default class PaymentCardList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

        <View style={styles.cardMemoListItem}>
          <Text style={styles.memoTitle}>三菱UFJ</Text>
        </View>

        <View style={styles.cardMemoListItem}>
          <Text style={styles.memoTitle}>yahoo</Text>
        </View>

        <View style={styles.cardMemoListItem}>
          <Text style={styles.memoTitle}>au</Text>
        </View>

        <View style={styles.cardMemoListItem}>
          <Text style={styles.memoTitle}>プリペイド(Visa)</Text>
        </View>

      </View>
    );
  }
}
