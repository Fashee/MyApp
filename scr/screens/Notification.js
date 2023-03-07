import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Notification = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.Icon}>
          <Icon name="leftcircleo" size={20} color={'gray'} />
        </TouchableOpacity>
        <Text style={styles.Text}>Notification</Text>
        <Icon name="bars" size={20} color={'#000'} />
      </View>
      <Image
        style={styles.image}
        source={require('../Assets/images/profile.jpg')}
      />
      <Text style={styles.text}> GET PUSH NOTIFICATION</Text>
      <Text style={styles.description}>
        For your security, we want to be able to notify you quickly if there any
        unusual activity on your account.we'll also use push notification
      </Text>
      <TouchableOpacity style={styles.Notify}>
        <Text style={styles.Notifytext}>Notify Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('skip');
        }}
        style={styles.skip}>
        <Text style={styles.skipytext}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Notification;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    width: '90%',
    justifyContent: 'space-between',
  },
  Icon: {
    marginLeft: 20,
  },
  Text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    alignSelf: 'center',
    width: '80%',
    height: '50%',
  },
  description: {
    width: '80%',
    color: 'blue',
    alignSelf: 'center',
    marginTop: 40,
  },
  Notify: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 50,
    padding: 5,
  },
  Notifytext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skip: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    padding: 5,
  },
  skipytext: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
