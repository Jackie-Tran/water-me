import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../NavigationTypes';
import { MaterialIcons } from '@expo/vector-icons';

type NavProp = StackNavigationProp<RootStackParamList, 'Your Plants'>;

type Props = {
  navigation: NavProp;
};
const PlantScreen: React.FC<Props> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialIcons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="mode-edit" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Plant Name</Text>
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
});

export default PlantScreen;
