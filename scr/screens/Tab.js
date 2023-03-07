import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = ({navigation}) => {
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
        <Text style={styles.Text}>Bottom Tab Bar</Text>
        <Icon name="bars" size={20} color={'#000'} />
      </View>
      <Image
        style={styles.Image}
        source={require('../Assets/images/tab.png')}
      />
      <Image
        style={styles.Image}
        source={require('../Assets/images/tab2.jpg')}
      />
      <Image
        style={styles.Image}
        source={require('../Assets/images/tab3.jpg')}
      />
    </View>
  );
};
export default Tab;
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
  Image: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 60,
  },
});
