import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function VideoCard(props: any) {
  return (
    <>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
      }}
      >
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'white',
                      width: 75, 
                      height: 75,
                      padding: 5,
                      borderRadius: 8}}>
        <Image
          source={{uri: props.thumbnailUrl}}
          style={{width: 65, height: 65, borderRadius: 8}}
        />
        </View>
        <Text style={{color: 'grey'}}>| {props.owner}</Text>
      </View>
      <View style={{flex: 3}}>
        <Text style={{fontWeight: 'bold', color: 'grey'}}
        onPress={() => {
          props.navigation.navigate('Video', {
            title: props.title,
            owner: props.owner,
            thumbnailUrl: props.thumbnailUrl,
            description: props.description,
            videoId: props.videoId,
          });
        }}>{props.title}</Text>
        <Text style={{color: 'grey'}}>{props.description.substring(0, 50)}</Text>
        <Text style={{color: '#ff9933'}}>{props.owner}</Text>
      </View>
    </View>
    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }} />
    </>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};
