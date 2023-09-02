import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LandingPage({navigation}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://sisinty.com/wp-content/uploads/2021/01/HelloMeetsLogo-1.png',
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://assets.awwwards.com/assets/images/pages/webinars/header-faq.png',
          }}
        />
      </View>
      <View style={styles.carousel}>
        <Text style={{fontWeight: 'bold', color: '#00001a'}}>
          Learn from Fintech Product Leaders
        </Text>
        <Text style={{color: 'grey', marginTop: '1.5%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laudantium laborum non qui quas culpa nam nobis adipisci et. Quam ex rem iste natus autem asperiores ut aliquid perferendis officia.</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={()=> {
        navigation.navigate("Feed");
      }}>
            <Text style={{color: 'white'}}>Start Learning</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{
            textAlign: 'center',
            marginTop: '5%',
            marginHorizontal: '10%',
            color: 'grey',
        }}>By signing up, you accept our <Text style={styles.underline}>Privacy Policy</Text> and <Text style={styles.underline}>Terms of Service</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E9EDEE',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: '7.5%',
    height: '7.5%',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: '100%',
    width: '50%',
  },
  imageContainer: {
    marginTop: '5%',
    height: '40%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '40%',
  },
  carousel: {
    marginTop: '5%',
    height: '15%',
    width: '95%',
    alignItems: 'flex-start',
    marginLeft: '2.5%',
    marginRight: '5%',
  },
  buttonContainer: {
    marginTop: '5%',
    height: '7.5%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#003366',
    padding: '2.5%',
    alignItems: 'center',
    borderRadius: 5,
    width: '95%',
  },
  footer: {
    marginTop: '2.5%',
    height: '17.5%',
    width: '100%',
    alignItems: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  }
});
