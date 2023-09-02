import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Video(props: any) {
  console.log(props);
  const params = props.route.params;
  return (
    <View style={styles.container}>
      <YoutubePlayer height={250} play={true} videoId={params.videoId} />
      <View
        style={{
          height: 80,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            marginLeft: 10,
            flex: 1,
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Image
            source={{uri: params.thumbnailUrl}}
            style={{width: 50, height: 50, borderRadius: 8}}
          />
          <Text style={{color: 'grey'}}>{params.owner}</Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontWeight: 'bold', color: 'grey'}}>
            {params.title}
          </Text>
          <Text style={{color: 'grey'}}>
            {params.description.substring(0, 40)}
          </Text>
          <Text style={{color: '#ff9933'}}>{params.owner}</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: 100,
        }}>
        <View style={{flex: 2}} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            borderColor: 'grey',
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
          }}>
          <Image
            source={{
              uri: 'https://freepngimg.com/save/62568-button-computer-facebook-like-icons-hq-image-free-png/512x512',
            }}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={{flex: 2}} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            borderColor: 'grey',
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
          }}>
          <Image
            source={{
              uri: 'https://www.pngplay.com/wp-content/uploads/2/Share-PNG-HD-Quality.png',
            }}
            style={{width: 30, height: 30, borderRadius: 8}}
          />
        </View>
        <View style={{flex: 2}} />
      </View>
      <View style = {{height: 30}}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 5,
            fontSize: 20,
            color: 'grey',
          }}>
          Related Videos..
        </Text>
      </View>
      <ScrollView style={styles.related}>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
        <Text style={{marginLeft: 5}}>{params.title}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EDEE',
  },
  related: {
    color: "grey",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: windowHeight - 460,
  },
});
