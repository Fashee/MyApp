import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Setting = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.Icon}>
          <Icon name="leftcircleo" size={20} color={'gray'} />
        </TouchableOpacity>
        <Text style={styles.Text}>Settings</Text>
        <Icon name="bars" size={20} color={'#000'} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('todoist');
        }}
        style={styles.body}>
        <Icon name="star" size={20} color={'orange'} />
        <View>
          <Text style={styles.Tptext}>Todoist Premiun</Text>
          <Text style={styles.description}>
            You are Premium via Todoist bussiness
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('account');
        }}
        style={styles.body}>
        <Icon name="user" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('General');
        }}
        style={styles.body}>
        <Icon name="setting" size={20} color={'blue'} />
        <Text style={styles.Tptext}>General</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('tab');
        }}
        style={styles.body}>
        <Icon name="tablet1" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Bottom app bar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('theme');
        }}
        style={styles.body}>
        <Icon name="dropbox" size={20} color={'blue'} />
        <View>
          <Text style={styles.Tptext}>Theme</Text>
          <Text style={styles.description}>Todoist</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('icons');
        }}
        style={styles.body}>
        <Icon name="appstore1" size={20} color={'blue'} />
        <View>
          <Text style={styles.Tptext}>App icons</Text>
          <Text style={styles.description}>Todoist</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('product');
        }}
        style={styles.body}>
        <Icon name="profile" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Productivity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('reminder');
        }}
        style={styles.body}>
        <Icon name="clockcircleo" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Reminder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('notification');
        }}
        style={styles.body}>
        <Icon name="notification" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('support');
        }}
        style={styles.body}>
        <Icon name="questioncircleo" size={20} color={'blue'} />
        <Text style={styles.Tptext}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Setting;
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
  body: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30,
  },
  Tptext: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  description: {
    color: '#000',
    marginLeft: 20,
    fontSize: 8,
  },
});
