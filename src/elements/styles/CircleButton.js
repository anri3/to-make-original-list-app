import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    fontSize: 40,
    lineHeight: 40,
    color: '#fff',
  },
});
