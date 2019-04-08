import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
