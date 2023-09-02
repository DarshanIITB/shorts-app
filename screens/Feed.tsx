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
  View,
} from 'react-native';

import VideoCard from '../components/VideoCard';
import Navbar from '../components/Navbar';

function App(): JSX.Element {
  // Added api key here because .env method is not working
  const api_key: string = "AIzaSyD0gF2y72Idp_nJ3c9-K5VuI7dHVC80H98";
  const playlistId: string = "PLSFQ3Eho2FEBuBqkQmrEOzp2nniXewVyR";
  
  // Define a state variable for items
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPlaylistVideos(api_key, playlistId);
  }, []);

  async function getPlaylistVideos(api_key: string, playlistId: string): Promise<void> {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: 'snippet',
          maxResults: 25,
          playlistId: playlistId,
          key: api_key,
        },
      },
    );

    // store the response data in the state variable
    setItems(response.data.items);
  }

  return (
    <View style ={styles.body}>
      <Navbar user="Darshan" />
      <ScrollView style={styles.playlist}>
        {items.map((item) => {
          return <VideoCard
          title={item.snippet.title}
          owner={item.snippet.videoOwnerChannelTitle}
          thumbnailUrl={item.snippet.thumbnails.default.url}
          description={item.snippet.description.slice(50)}
          key={item.snippet.position}/>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#E9EDEE',
  },
  playlist: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default App;