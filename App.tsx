/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import {
  Button,
  SafeAreaView,
  ScrollView,
  ScrollViewComponent,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import VideoCard from './components/VideoCard';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Feed from './screens/Feed';
import LandingPage from './screens/LandingPage';
import Video from './screens/Video';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [firstLaunch, setFirstLaunch] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setFirstLaunch(true);
        AsyncStorage.setItem('alreadyLaunched', 'true');
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#E9EDEE',
  },
  playlist: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default App;
