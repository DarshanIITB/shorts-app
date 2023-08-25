/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    getDatabase();
  }, []);
  const getDatabase =async () => {
    try{
      const data = firestore().collection("test").doc("PqKGFN3B9a1ePiPOvxSS").get();
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }
  return (
    <View>
      <Text style={{fontSize:30}}>Hello</Text>
      <Button title='button'/>
    </View>
  );
}
export default App;
