import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appBar}>
          <View>
            <Text style={styles.appBarTitle}>PaymentCard Memo</Text>
          </View>
        </View>

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

        <View>
          <Text>+</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 30,
    backgroundColor: '#ff8d14',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    zIndex: 10,
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  memoList: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 16,
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
