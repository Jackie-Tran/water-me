import React from 'react';
import {
    Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DismissKeyboard from '../../components/dismiss-keyboard';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/NavigationTypes';
import * as API from '../../constants/endpoints';
import axios from 'axios';

type NavProp = StackNavigationProp<RootStackParamList, 'Sign Up'>;

type Props = {
  navigation: NavProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {

    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [confirm, setConfirm] = React.useState<string>('');

    const handleSignUpPress = () => {
        // Check if there are any empty fields
        if (!firstName || !lastName || !email || !password) {
            return Alert.alert('Sign Up Error', 'Please check that you have filled all required fields.')
        }
        axios.post(API.CREATE_USER, { firstName, lastName, email, password })
        .then(res => {
            Alert.alert('Account Created!', 'You can now sign into your new accout.');
            navigation.goBack();
        })
        .catch(err => {
            Alert.alert('Error', 'Could not create account at this time. Please try again later.')
            console.log(err);
        });
    }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/login/background.png')}
    >
      <DismissKeyboard>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Water.me</Text>
              <Text style={styles.subtitle}>Account Creation</Text>
            </View>
            <View style={styles.signUpContainer}>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="givenName"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.nativeEvent.text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="familyName"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.nativeEvent.text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="emailAddress"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.nativeEvent.text)}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirm(e.nativeEvent.text)}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </DismissKeyboard>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(167, 167, 167, 0.7)',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 72,
    color: 'white',
  },
  subtitle: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 28,
    color: 'white',
  },
  signUpContainer: {},
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 50,
    paddingLeft: '3%',
    marginBottom: '5%',
  },
  input: {
    marginLeft: '3%',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 24,
    flex: 1,
    color: '#A7A7A7',
  },
  button: {
    backgroundColor: '#52B788',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 55,
    marginVertical: '5%',
  },
  buttonText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 36,
    color: 'white',
  },
});

export default SignUpScreen;
