import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

export default class PaymentCardAdd extends React.Component {
  state = {
      cardName: '',
   }

   handlePress() {
     const { currentUser } = firebase.auth();
     const db = firebase.firestore();
     // db.settings({　timestampsInSnapshots: true　});
     db.collection(`users/${currentUser.uid}/cardMemos`).add({
       body: this.state.cardName,
       createdOn: new Date(),
     })
     .then((docRef) => {
     console.log("Document written with ID: ", docRef.id);
     this.props.navigation.state.params.refresh();
     this.props.navigation.navigate('PaymentCardMemoList')
     })
     .catch((error) => {
     console.error("Error adding document: ", error);
     });
   }


  render() {
    return (
    <View style={styles.container}>

        <Text style={styles.title}>新たに追加するカード名を入力してください。</Text>

        <View style={styles.textContainer}>
          <TextInput
            value={this.state.cardName}
            style={styles.input}
            onChangeText={(text) => {this.setState({ cardName: text })}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="カード名"
            keyboardType="default"
          />
          </View>


        <View style={styles.saveButton}>
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf00c'}
        </CircleButton>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingRight: 24,
    paddingLeft: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
    marginTop: 32,
    fontSize: 20,
    color: '#000',
  },
  title: {
    fontSize: 16,
    marginTop: 32,
    marginLeft: 24,
  },
  saveButton: {
   marginTop: 610,
  },
});
