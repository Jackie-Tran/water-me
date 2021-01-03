import React, { ReactElement } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DismissKeyboard from '../../components/dismiss-keyboard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../NavigationTypes';

const generateEyeIcon = (isHidden: boolean): ReactElement => {
  if (isHidden) {
    return <MaterialCommunityIcons name="eye-off" size={24} color="#A7A7A7" />;
  }
  return <MaterialIcons name="remove-red-eye" size={24} color="#A7A7A7" />;
};

type NavProps = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: NavProps;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isHidden, setHidden] = React.useState<boolean>(true);

  const handleLoginPress = () => {
    navigation.push('Tabs');
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/login/background.png')}
    >
      <DismissKeyboard>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Water.me</Text>
            <View style={styles.loginContainer}>
              <View style={styles.textInput}>
                <MaterialIcons name="email" size={28} color="#52B788" />
                <TextInput
                  style={styles.input}
                  textContentType="emailAddress"
                  placeholder="email"
                />
              </View>
              <View style={styles.textInput}>
                <MaterialIcons name="lock" size={28} color="#52B788" />
                <TextInput
                  style={styles.input}
                  textContentType="password"
                  secureTextEntry={isHidden}
                  placeholder="password"
                />
                <TouchableOpacity
                  style={{ marginRight: '3%' }}
                  onPress={() => setHidden(!isHidden)}
                >
                  {generateEyeIcon(isHidden)}
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.text,
                    { color: '#0066FF', alignSelf: 'flex-end' },
                  ]}
                >
                  Forgot your password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={[styles.text, { color: '#0066FF' }]}>
                    Create an account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
  loginContainer: {},
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
  text: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 14,
    color: 'white',
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

export default LoginScreen;
