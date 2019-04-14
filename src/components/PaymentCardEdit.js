import React, {Component} from 'react';
import { DatePickerIOS, StyleSheet, View, Text, TextInput, Picker } from 'react-native';

export default class PaymentCardEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      job: '',
      chosenDate: new Date(),
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  render() {
    return (
      <View>

        <View style={styles.pickerContainer}>
        <Text style={styles.dateTitle}>購入日</Text>
        <DatePickerIOS
          style={styles.date}
          itemStyle={styles.dateItem}
          date={this.state.chosenDate}
          mode="date"
          local={"ja"}
          onDateChange={this.setDate}
        />
        </View>

        <View style={styles.otherContainer}>
        <Text style={styles.otherTitle}>名称</Text>
        <TextInput value="映画" style={styles.input} />
        <Text style={styles.otherTitle}>金額</Text>
        <TextInput value="¥1800" style={styles.input} />
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.paymentMonthTitle}>支払い月</Text>
        <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.job}
          onValueChange={(itemValue) => this.setState({job: itemValue})}
        >
          <Picker.Item label="1月" value={1} />
          <Picker.Item label="2月" value={2} />
          <Picker.Item label="3月" value={3} />
          <Picker.Item label="4月" value={4} />
          <Picker.Item label="5月" value={5} />
          <Picker.Item label="6月" value={6} />
          <Picker.Item label="7月" value={7} />
          <Picker.Item label="8月" value={8} />
          <Picker.Item label="9月" value={9} />
          <Picker.Item label="10月" value={10} />
          <Picker.Item label="11月" value={11} />
          <Picker.Item label="12月" value={12} />
        </Picker>
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
    fontSize: 24,
    color: '#ff8d14',
  },
});
