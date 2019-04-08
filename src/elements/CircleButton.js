import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/CircleButton';

export default class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
