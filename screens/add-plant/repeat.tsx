import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../NavigationTypes';
import ScreenTemplate from '../../components/screen-template';

type NavProp = StackNavigationProp<RootStackParamList, 'Your Plants'>;

type Props = {
  navigation: NavProp;
};

const RepeatScreen: React.FC<Props> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScreenTemplate title='Repeat' showBack >

    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#40916C',
    height: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: '10%',
    paddingHorizontal: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  navbar: {},
  headerText: {
    fontFamily: 'Merriweather_400Regular',
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
  },
});

export default RepeatScreen;
