import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Productivity = ({navigation}) => {
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
        <Text style={styles.Text}>Productivity</Text>
        <Icon name="bars" size={20} color={'#000'} />
      </View>
      <Image
        style={styles.image}
        source={require('../Assets/images/image1.jpg')}
      />
      <Text style={styles.blog}>Productivity Blogs</Text>
    </View>
  );
};
export default Productivity;
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
  image: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  blog: {
    color: '#000',
    alignSelf: 'center',
    marginTop: 80,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
