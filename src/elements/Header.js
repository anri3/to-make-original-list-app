import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Header';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}
