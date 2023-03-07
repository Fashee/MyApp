import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

export const HandleTextInput = props => {
  return (
    <TextInput
      style={styles.inputstyles}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={props?.secureTextEntry}
      placeholder={props?.placeholder}
      value={props?.value}
      onChangeText={x => props?.onChangeText(x)}
      placeholderTextColor={'gray'}
    />
  );
};
const Login = ({navigation}) => {
  const onLogin = async () => {
    if (email != '@abcd') {
      Alert.alert('Enter correct Number');
    } else if (password != 12345) {
      Alert.alert('Wrong Password');
    } else {
      navigation.navigate('Dashboard');
    }
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.maincontainer}>
      <Image
        style={styles.image}
        source={require('../Assets/images/Logo.png')}
      />
      <Text style={styles.Text}>Login to your Account </Text>
      <HandleTextInput
        style={{color: '#000000'}}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={true}
      />

      <HandleTextInput
        style={{color: '#000000'}}
        placeholder="Enter a Strong passwors"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          onLogin();
        }}
        style={styles.Login}>
        <Text style={styles.Logintext}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.heading}> - or Sign in with</Text>
      <View style={styles.Pictures}>
        <View style={styles.picture}>
          <Icon
            name="google"
            size={20}
            color={'#302D86'}
            style={styles.Icon1}
          />
        </View>
        <View style={styles.picture}>
          <Icon
            name="facebook-square"
            size={20}
            color={'#302D86'}
            style={styles.Icon2}
          />
        </View>
        <View style={styles.picture}>
          <Icon
            name="twitter"
            size={20}
            color={'skyblue'}
            style={styles.Icon3}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>Don't Have an account!</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.Registertext}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    alignSelf: 'center',
    marginTop: 60,
  },
  Text: {
    color: 'gray',
    fontSize: 15,
    paddingTop: 40,
    fontWeight: '500',
    marginLeft: 40,
  },

  inputstyles: {
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    color: '#000000',
    padding: 8,
    elevation: 10,
  },

  Login: {
    backgroundColor: 'darkblue',
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 12,
    borderRadius: 10,
  },
  Logintext: {
    color: '#fff',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 100,
    paddingBottom: 40,
    alignSelf: 'center',
  },
  footertext: {
    color: '#000000',
  },
  Registertext: {
    color: '#1A237E',
  },
  Pictures: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
  },
  Icon1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginLeft: 30,
  },
  Icon2: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
  },
  Icon3: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
  },
  heading: {
    color: 'gray',
    alignSelf: 'center',
    marginTop: 100,
  },
  picture: {
    backgroundColor: '#FFF',
    alignContent: 'space-between',
    width: 80,
    height: 50,
    padding: 15,
    elevation: 6,
    shadowColor: 'black',
    borderRadius: 10,
  },
});
