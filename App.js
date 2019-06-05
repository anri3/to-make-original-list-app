import React from 'react';
import firebase from 'firebase';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import PaymentCardMemoList from './src/pages/PaymentCardMemoList';
import PaymentCardMemoAdd from './src/pages/PaymentCardMemoAdd';
import PaymentCardMemoDetail from './src/pages/PaymentCardMemoDetail';
import PaymentCardMemoEdit from './src/pages/PaymentCardMemoEdit';
import ENV from './env.json';

require("firebase/firestore");

const config = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_MSG_ID,
  };
  firebase.initializeApp(config);


const Stack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
      title: `Login`,
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
     Signup: {
       screen: Signup,
       navigationOptions: () => ({
       title: `新規登録`,
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
     PaymentCardMemoAdd: {
       screen: PaymentCardMemoAdd,
       navigationOptions: () => ({
       title: `PaymentCard Add`,
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
      title: `支払い内容`,
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
    initialRouteName: 'Login'
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
