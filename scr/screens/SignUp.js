import React, {useState} from 'react';
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
const SignUp = ({navigation}) => {
  const onpress = () => {
    if (email != '@12345') {
      Alert.alert('Enter correct email');
    } else if (password != confirmpassword) {
      Alert.alert('Wrong Password');
    } else {
      navigation.goBack();
    }
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon style={styles.arrow} name="arrowleft" size={20} color={'blue'} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../Assets/images/Logo.png')}
      />
      <Text style={styles.Text}>Create your Account </Text>
      <HandleTextInput
        style={{color: '#000000'}}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={true}
      />
      <HandleTextInput
        style={{color: '#000000'}}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <HandleTextInput
        style={{color: '#000000'}}
        placeholder="Reenter your passwors"
        value={confirmpassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          onpress();
        }}
        style={styles.SignUp}>
        <Text style={styles.signuptext}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.heading}> - or Sign up with</Text>
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
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  arrow: {
    marginLeft: 40,
    marginTop: 20,
  },
  image: {
    alignSelf: 'center',
    marginTop: 40,
  },
  Text: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 40,
    marginLeft: 40,
  },
  emailtext: {
    color: '#000000',
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputstyles: {
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    color: '#000000',
    padding: 8,
    elevation: 10,
  },
  Passwordtext: {
    color: '#000000',
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  CPasswordtext: {
    color: '#000000',
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  SignUp: {
    backgroundColor: 'darkblue',
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 12,
    borderRadius: 10,
  },
  signuptext: {
    color: '#ffffff',
    fontSize: 12,
  },
  Pictures: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  Icon1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    marginLeft: 15,
  },
  Icon2: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    marginLeft: 15,
  },
  Icon3: {
    width: '100%',
    height: '100%',
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
