import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/elements/Header';
import PaymentCardList from './src/components/PaymentCardList';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Header>PaymentCard List</Header>
        <PaymentCardList />
        <CircleButton>+</CircleButton>

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
});
