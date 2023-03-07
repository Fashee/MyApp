import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Profile = ({navigation}) => {
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
        <Text style={styles.Text}>Profile</Text>
        <Icon name="bars" size={20} color={'#000'} />
      </View>
      <View style={styles.innercontainer}>
        <Image
          style={styles.image}
          source={require('../Assets/images/dp.jpg')}
        />
        <Text style={styles.text1}>Shamim Hussain</Text>
        <Text style={styles.text2}>@ShamimGraphics</Text>
      </View>
      <TouchableOpacity style={styles.EProfile}>
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Icon name="setting" size={20} color={'#000'} />
        <Text style={styles.settingtext}>Settings</Text>
        <TouchableOpacity style={styles.righticon}>
          <Icon name="right" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Icon name="notification" size={20} color={'#000'} />
        <Text style={styles.settingtext}>Notifications</Text>
        <TouchableOpacity style={styles.righticon2}>
          <Icon name="right" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Icon name="home" size={20} color={'#000'} />
        <Text style={styles.settingtext}>Home</Text>
        <TouchableOpacity style={styles.righticon3}>
          <Icon name="right" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('logout');
        }}
        style={styles.Logout}>
        <Text style={styles.logouttext}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
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
  image: {
    backgroundColor: 'blue',
    marginTop: 10,
    borderRadius: 5,
  },
  Text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  EProfile: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    padding: 5,
  },
  innercontainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text2: {
    color: '#000',
    fontSize: 10,
  },
  text: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    borderTopWidth: 0.5,
    alignSelf: 'center',
    padding: 10,
  },
  settingtext: {
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  righticon: {
    marginLeft: 180,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  righticon2: {
    marginLeft: 150,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  righticon3: {
    marginLeft: 190,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  Logout: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    padding: 5,
  },
  logouttext: {
    color: '#fff',
  },
});
