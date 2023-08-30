import React, { useState } from 'react';
import { View, Modal, StyleSheet, Dimensions, Text } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quam aliquid praesentium perferendis odio, possimus nobis similique nemo ipsum nisi iusto ex repellendus voluptates unde consequatur. Cum molestiae ad eveniet!
            </Text>
          </View>
        </View>
      </Modal>
      <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque excepturi aliquam ducimus! Tenetur alias doloremque aliquam consequatur vero tempore, nisi ipsum, impedit ab illo est ducimus cumque nulla eius.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default App;