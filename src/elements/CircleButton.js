import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

export default class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.circleButton}>
        {
        this.state.fontLoaded ? (
          <Text style={styles.circleButtonText}>
            {this.props.children}
          </Text>
        ) : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 112,
    right: 32,
    width: 56,
    height: 56,
    backgroundColor: '#47bd47',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonText: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 40,
    color: '#fff',
  },
});
