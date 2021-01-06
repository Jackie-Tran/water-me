import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaView,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/NavigationTypes';
import PropertyButton from '../../components/property-button';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScreenTemplate from '../../components/screen-template';

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

const EditPlantScreen: React.FC<Props> = ({ navigation }) => {

  const handleSavePress = () => {
    navigation.goBack();
  };

  return (
    <ScreenTemplate title="Edit Plant" showBack>
      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/dashboard/plant.jpg')}/>
        </TouchableOpacity>
        <View>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>Time</Text>
            <DateTimePicker
              style={styles.timePicker}
              value={new Date()}
              mode="time"
              display="default"
            />
          </View>
          <PropertyButton label="Repeat" value="Every Monday" route="Repeat" />
          <PropertyButton label="Name" value="Cassia" route="Name" />
          <PropertyButton label="Type" value="Sunflower" route="Type" />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 12,
    paddingBottom: '5%',
  },
  imageContainer: {
  },
  image: {
      width: 300,
      height: 300,
      borderRadius: 15,
      marginBottom: '3%',
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

export default EditPlantScreen;
