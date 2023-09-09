import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Login = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('+91');
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState<string>('');
  const [message, setMessage] = useState<string>('Enter the OTP sent to your phone');
  const [success, setSucess] = useState<boolean>(false);
  const [vis, setVis] = useState<boolean>(false);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [modalVis, setModalVis] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const handleChange = (text: string) => {
    setPhoneNumber(text);
  };
  const handleOtpChange = (text: string) => {
    setOtp(text);
  }
  const handleNameChange = (text: string) => {
    setName(text);
  }
  const toggleModal = () => {
    setVis(!vis);
  };
  const toggleModalVis = () => {
    setModalVis(!modalVis);
  };
  const handleContinue = () => {
    props.toggleModal();
    props.setModalVisible(false);
    signInWithPhoneNumber(phoneNumber);
    setVis(true);
  };
  const handleOtpContinue = () => {
    confirmOtp();
    if(success) {
      toggleModal();
      if(fetchData(phoneNumber) === undefined) {
        toggleModalVis();
      } else {
        props.navigation.navigate('Feed');
      }
    } else {
      console.log("Invalid OTP");
    }
  };
  const handleNameContinue = async() => {
    await auth().currentUser?.updateProfile({
      displayName: name,
    })
    toggleModalVis();
  };
  
  const fetchData = async (phoneNumber: string) => {
    const catRef = firestore().collection('users');
    const querySnapshot = await catRef.doc(phoneNumber).get();
    // console.log(querySnapshot.data());
    return querySnapshot.data();
  };
  // const addUser = async (phoneNumber: string) => {
  //   console.log("Adding user");
  //   console.log(phoneNumber);
  //   const user: any = await fetchData(phoneNumber);
  //   if (user !== undefined) {
  //     setIsNewUser(false);
  //     AsyncStorage.setItem('user', JSON.stringify(user));
  //   } else {
  //     setIsNewUser(true);
  //     firestore()
  //       .collection('users')
  //       .doc(phoneNumber)
  //       .set({
  //         phone: phoneNumber,
  //         name: 'newUser',
  //       })
  //       .then(() => {
  //         AsyncStorage.setItem(
  //           'user',
  //           JSON.stringify(fetchData(phoneNumber)),
  //         );
  //         console.log('New user added');
  //       });
  //   }
  // };
  function onAuthStateChanged(user: JSON | null) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
      console.log('Thanks for signing in!');
    }
    else {
      props.navigation.navigate('LandingPage');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button pressz
  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmOtp() {
    try {
      await confirm?.confirm(otp);
      setSucess(true);
      console.log('Phone authentication successful');
    } catch (error) {
      setMessage('Invalid OTP!! Please try again');
      console.log('Invalid code.');
    }
  }
  return (
    <>
    {/* Modal for taking phone number as input */}
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={props.toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.toggleModal} style={{flex: 5}}>
              <Text style={{color: 'black', fontSize: 15}}>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                flex: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Log in or Sign Up
            </Text>
          </View>
          <Text style={{marginTop: 50, color: 'gray', fontWeight: 'bold'}}>
            Enter Phone Number
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
          <Text style={{color: 'gray'}}>Don't worry, We won't spam you!</Text>
          <TouchableOpacity
            onPress={handleContinue}
            style={{
              backgroundColor: '#003366',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 30,
              marginBottom: 200,
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    {/* Modal for OTP verification */}
    <Modal
      transparent={true}
      animationType="fade"
      visible={vis}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.toggleModal} style={{flex: 5}}>
              <Text style={{color: 'black', fontSize: 15}}>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                flex: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Log in or Sign Up
            </Text>
          </View>
          <Text style={{marginTop: 50, color: 'gray', fontWeight: 'bold'}}>
            {message}
          </Text>
          <TextInput
            value={otp}
            onChangeText={handleOtpChange}
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
            onPress={handleOtpContinue}
            style={{
              backgroundColor: '#003366',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 30,
              marginBottom: 200,
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    {/* Modal for asking for name */}
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVis}
      onRequestClose={toggleModalVis}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.toggleModal} style={{flex: 5}}>
              <Text style={{color: 'black', fontSize: 15}}>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                flex: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              
            </Text>
          </View>
          <Text style={{marginTop: 50, color: 'gray', fontWeight: 'bold'}}>
            What should we call you?
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
          <TouchableOpacity
            onPress={handleNameContinue}
            style={{
              backgroundColor: '#003366',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 30,
              marginBottom: 200,
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </>
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

export default Login;
