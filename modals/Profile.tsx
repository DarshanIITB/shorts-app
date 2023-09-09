import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = (props: any) => {
  const user = auth().currentUser;
  const currName = user?.displayName;
  const [name, setName] = useState(currName);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const handleChange = (text: string) => {
    setPhoneNumber(text);
  };
  const handleNameChange = (text: string) => {
    setName(text);
  }
  const handleSubmit = () => {
    user?.updateProfile({
      displayName: name,
    }).then(() => {
      console.log("Updated Successfully");
    });
    props.toggleModal();
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={props.toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.toggleModal} style={{flex: 6}}>
              <Text style={{color: 'black', fontSize: 15}}>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                flex: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Your Profile
            </Text>
          </View>
          <Text style={{marginTop: 50, color: 'gray', fontWeight: 'bold'}}>
            Name
          </Text>
          <TextInput
            value={name}
            onChangeText={handleNameChange}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              marginTop: 10,
              color: 'grey',
            }}
          />
          <Text style={{marginTop: 10, color: 'gray', fontWeight: 'bold'}}>
            Phone Number
          </Text>
          <TextInput
            value={phoneNumber}
            onChangeText={handleChange}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              marginTop: 10,
              color: 'grey',
            }}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: '#003366',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 30,
              marginBottom: 0,
            }}>
            <Text style={{color: 'white'}}>Update Credentials</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>{
              auth().signOut();
            }}
            style={{
              backgroundColor: '#003366',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 200,
            }}>
            <Text style={{color: 'white'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to dim the screen
  },
  modalBox: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
});

export default Profile;
