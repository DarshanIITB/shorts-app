import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { Input } from 'react-native-elements';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for: ', searchQuery);
    // Add your search logic here
  };
  return (
    <>
      <View style={styles.nav}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://sisinty.com/wp-content/uploads/2021/01/HelloMeetsLogo-1.png',
          }}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/022/101/124/original/whatsapp-logo-transparent-free-png.png',
              }}
              style={{height: 20, width: 20}}
            />
            <Text style={{color: 'white'}}>Share Feedback</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.user}>{props.user}</Text>
      </View>
      <View style={{ flexDirection: 'row',
                     margin: 10, 
                     alignItems: 'center', 
                     borderWidth: 1, 
                     borderColor: 'gray',
                     borderRadius: 30,
                    }}>
      <Image
        source={{ uri: 'https://cdn.icon-icons.com/icons2/1509/PNG/512/systemsearch_104123.png' }}
        style={{ width: 20, height: 20, marginLeft: 10 }}
      />
      <TextInput
        style={{ flex: 1, marginLeft: 10 }}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search..."
      />
    </View>
    </>
  );
}

Navbar.propTypes = {
  user: PropTypes.string,
};

Navbar.defaultProps = {
  user: 'Guest',
};

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: 25,
    marginTop: 15,
    marginBottom: 20,
  },
  logo: {
    flex: 1.5,
  },
  buttonContainer: {
    flex: 2,
    marginLeft: 30,
    alignItems: 'center',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#33cc33',
    color: 'white',
    padding: 5,
    height: 30,
    alignItems: 'center',
    borderRadius: 5,
  },
  user: {
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    width: '20%',
  },
});
