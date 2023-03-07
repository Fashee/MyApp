import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Appicon = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.lIcon}>
          <Icon name="leftcircleo" size={20} color={'gray'} />
        </TouchableOpacity>
        <Text style={styles.Text}>Icon8 Blogs</Text>
        <TouchableOpacity style={styles.Icon}>
          <Icon style={styles.search} name="search1" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.Image}
          source={require('../Assets/images/icon.jpg')}
        />
      </View>
    </View>
  );
};
export default Appicon;
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
    alignSelf: 'center',
  },
  lIcon: {
    marginLeft: 20,
  },
  Text: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Icon: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    elevation: 6,
    shadowColor: 'black',
    borderColor: '#000',
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  search: {
    alignSelf: 'center',
    marginTop: 3,
  },
  Image: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
