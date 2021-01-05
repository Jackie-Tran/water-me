import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabsParamList } from '../../NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

type NavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList>,
  StackNavigationProp<RootStackParamList>
>;

const NewPlantButton: React.FC = () => {
  const navigation = useNavigation<NavProp>();

  const handlePress = () => {
    navigation.navigate('Add Plant');
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <MaterialIcons name="add" size={36} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 99,
    backgroundColor: '#52B788',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default NewPlantButton;
