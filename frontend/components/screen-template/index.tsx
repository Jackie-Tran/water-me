import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  RootStackParamList,
  TabsParamList,
} from '../../constants/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';
import DismissKeyboard from '../dismiss-keyboard';
import { PlantContext } from '../../context/plant-context';
import axios from 'axios';

type NavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
  onDeletePress?: () => void;
};

const ScreenTemplate: React.FC<Props> = ({
  title,
  showBack,
  onBackPress,
  showEdit,
  showDelete,
  onDeletePress,
  children,
}) => {
  const navigation = useNavigation<NavProp>();
  const handleBackPress = () => {
    if (onBackPress) onBackPress();
    navigation.goBack();
  };

  const handleEditPress = () => {
    navigation.push('Edit Plant');
  };

  const handleDeletePress = () => {
    if (onDeletePress) onDeletePress();
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            {showBack && (
              <TouchableOpacity onPress={handleBackPress}>
                <MaterialIcons name="arrow-back" size={32} color="white" />
              </TouchableOpacity>
            )}
            {showEdit && (
              <TouchableOpacity onPress={handleEditPress}>
                <MaterialIcons name="mode-edit" size={32} color="white" />
              </TouchableOpacity>
            )}
            {showDelete && (
              <TouchableOpacity onPress={handleDeletePress}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={32}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {children}
      </SafeAreaView>
    </DismissKeyboard>
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
    marginBottom: '5%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Merriweather_400Regular',
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
  },
  plants: {
    marginTop: '10%',
    paddingBottom: '50%',
  },
});

export default ScreenTemplate;
