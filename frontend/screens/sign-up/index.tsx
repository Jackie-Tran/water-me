import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DismissKeyboard from '../../components/dismiss-keyboard';
import { MaterialIcons } from '@expo/vector-icons';

const SignUpScreen: React.FC = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/login/background.png')}
    >
      <DismissKeyboard>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.signUpContainer}>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="givenName"
                  placeholder="First Name"
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="familyName"
                  placeholder="Last Name"
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="emailAddress"
                  placeholder="Email"
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  placeholder="Confirm Password"
                />
              </View>
            </View>
            <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.buttonText}>Log In</Text>
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
