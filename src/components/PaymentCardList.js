import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

//this.props.navigation.navigate('PaymentCardMemoDetail')

export default class PaymentCardList extends React.Component {

//メモのアイテムを押すと、PaymentCardMemoDetailへ
  handlePress() {
   this.props.navigation.navigate('PaymentCardMemoDetail')
  }

  handleAdd() {
    this.props.navigation.navigate('PaymentCardMemoAdd')
  }

  render() {
    console.log(this.props.cardMemo);
    return (
    <View>

      <View style={styles.memoList}>

      <TouchableHighlight onPress={this.handlePress.bind(this)} underlayColor="transparent">
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

        <View style={styles.saveButton}>
        <CircleButton onPress={this.handleAdd.bind(this)}>
          {'\uf067'}
        </CircleButton>
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
  saveButton: {
    marginTop: 716,
  },
});
