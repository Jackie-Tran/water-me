import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaView,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../NavigationTypes';
import PropertyButton from '../../components/property-button';
import DateTimePicker from '@react-native-community/datetimepicker';

type NavProp = StackNavigationProp<RootStackParamList, 'Add Plant'>;

type Props = {
  navigation: NavProp;
};

const generateImage = () => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Text>Click to add an image</Text>
    </TouchableOpacity>
  );
};

const AddPlantScreen: React.FC<Props> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSavePress = () => {
      navigation.goBack();
  }

  return (
    <SafeAreaView
      style={{ alignItems: 'center', flex: 1 }}
      edges={['right', 'left', 'bottom']}
    >
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialIcons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Add Plant</Text>
      </View>
      <View style={styles.content}>
        <View>{generateImage()}</View>
        <View>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>Time</Text>
            <DateTimePicker style={styles.timePicker} value={new Date()} mode='time' display='default' />
          </View>
          <PropertyButton label="Repeat" value="Every Monday" route='Repeat' />
          <PropertyButton label="Name" value="Cassia" />
          <PropertyButton label="Type" value="Sunflower" />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#40916C',
    width: '100%',
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
    flex: 1,
  },
  navbar: {},
  headerText: {
    fontFamily: 'Merriweather_400Regular',
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 12,
    paddingBottom: '5%',
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 24,
    padding: '5%',
  },
  timePicker: {
      width: '30%',
      fontSize: 24,
      marginRight: '5%',
  },
  button: {
    backgroundColor: '#52B788',
    width: 200,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 24,
    color: 'white',
  },
});

export default AddPlantScreen;
