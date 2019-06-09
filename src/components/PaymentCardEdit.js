import React, {Component} from 'react';
import { DatePickerIOS, StyleSheet, View, Text, TextInput, Picker } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

export default class PaymentCardEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      job: '',
      chosenDate: new Date(),
      content: '',
      price: '',
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

//this.props.navigation.goBack()
  handleSubmit() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const { params } = this.props.navigation.state;
    // db.settings({　timestampsInSnapshots: true　});
    db.collection(`users/${currentUser.uid}/cardMemos/${params.currentMemo.key}/paymentMemos`).add({
      createdOn: this.state.chosenDate,
      body: this.state.content,
      number: this.state.price,
      option: this.state.job,
    })
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    this.props.navigation.goBack()
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
    });
  }


  render() {
    return (
      <View>

        <View style={styles.pickerContainer}>
        <Text style={styles.dateTitle}>購入日</Text>
        <DatePickerIOS
          dateFormat="yyyy/MM/dd"
          style={styles.date}
          itemStyle={styles.dateItem}
          date={this.state.chosenDate}
          mode="date"
          local={"ja"}
          onDateChange={this.setDate}
        />
        </View>

        <View style={styles.otherContainer}>
        <Text style={styles.otherTitle}>名称(分割・リボ内容)</Text>
        <TextInput
          value={this.props.content}
          style={styles.input}
          onChangeText={(text) => {this.setState({ content: text })}}
          autoCapitalize="none"
          maxLength={9}
          placeholder="9文字以内"
          keyboardType="default"
        />
        <Text style={styles.otherTitle}>金額</Text>
        <TextInput
          value={this.props.price}
          style={styles.input}
          onChangeText={(text) => {this.setState({ price: text })}}
          autoCapitalize="none"
          maxLength={6}
          keyboardType="numbers-and-punctuation"
        />
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.paymentMonthTitle}>支払い月</Text>
        <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.job}
          onValueChange={(itemValue) => this.setState({job: itemValue})}
        >
          <Picker.Item label="次回" value="次回" />
          <Picker.Item label="次々回" value="次々回" />
          <Picker.Item label="未記入" value="" />
        </Picker>
        </View>

        <View style={styles.saveButton}>
        <CircleButton onPress={this.handleSubmit.bind(this)}>
          {'\uf00c'}
        </CircleButton>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  dateTitle: {
    fontSize: 16,
    marginTop: 16,
    marginLeft: 24,
    color: '#a2a2a2',
  },
  otherTitle: {
    fontSize: 16,
    color: '#a2a2a2',
    marginTop: 24,
    marginBottom: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
  },
  otherContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 24,
    marginTop: 24,
  },
  picker: {
    width: 72,
    height: 20,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  pickerItem: {
    color: 'black',
    fontSize: 16,
  },
  paymentMonthTitle: {
    fontSize: 16,
    marginTop: 64,
    marginLeft: 24,
    color: '#a2a2a2',
  },
  date: {
    height: 150,
    width: 250,
  },
  dateItem: {
    color: '#ff8d14',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
    fontSize: 20,
    color: '#ff8d14',
  },
  saveButton: {
    marginTop: 336,
  },
});
