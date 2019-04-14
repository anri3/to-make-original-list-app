import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import PaymentCardMemoList from './src/pages/PaymentCardMemoList';
import PaymentCardMemoDetail from './src/pages/PaymentCardMemoDetail';
import PaymentCardMemoEdit from './src/pages/PaymentCardMemoEdit';



const Stack = createStackNavigator(
  {
    PaymentCardMemoList: {
      screen: PaymentCardMemoList,
      navigationOptions: () => ({
      title: `PaymentCard List`,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#ff8d14',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
      },
      headerBackTitle: null
    }),
     },
    PaymentCardMemoDetail: {
      screen: PaymentCardMemoDetail,
      navigationOptions: () => ({
      title: `三菱UFJ`,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#ff8d14',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
      },
      headerBackTitle: null
    }),
    },
    PaymentCardMemoEdit: {
      screen: PaymentCardMemoEdit,
      navigationOptions: () => ({
      title: `品目`,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#ff8d14',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 18,
      },
      headerBackTitle: null
    }),
    },
  },
  {
    initialRouteName: 'PaymentCardMemoList'
  }
);

const AppContainer = createAppContainer(Stack);


export default class App extends React.Component {
  render() {
    return (
     <AppContainer
     ref={nav => {
        this.navigator = nav;
     }}
     />
    );
  }
}
