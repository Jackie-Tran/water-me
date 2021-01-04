import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

type Props = {
    title: string,
    showBack?: true,
    showEdit?: false,
}

const ScreenTemplate: React.FC<Props> = ({ title, showBack, showEdit, children }) => {
  const navigation = useNavigation<NavProp>();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.navbar}>
            {
                showBack && (
                    <TouchableOpacity onPress={handleBackPress}>
                      <MaterialIcons name="arrow-back" size={32} color="white" />
                    </TouchableOpacity>
                )
            }
            {
                showEdit && (
                    <TouchableOpacity>
                      <MaterialIcons name="mode-edit" size={32} color="white" />
                    </TouchableOpacity>
                )
            }
        </View>
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </SafeAreaView>
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
