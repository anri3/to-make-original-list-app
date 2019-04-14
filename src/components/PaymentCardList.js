import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class PaymentCardList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

      <TouchableHighlight onPress={() => {this.props.navigation.navigate('PaymentCardMemoDetail')}} underlayColor="transparent">
        <View style={styles.cardMemoListItem}>
          <Text style={styles.memoTitle}>三菱UFJ</Text>
        </View>
      </TouchableHighlight>

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

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 16,
  },
  cardMemoListItem: {
    backgroundColor: '#fff',
    margin: 10,
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
