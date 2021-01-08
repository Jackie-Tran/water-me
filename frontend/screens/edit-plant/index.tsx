import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { PlantContext } from '../../context/plant-context';
import axios from 'axios';
import * as API from '../../constants/endpoints';
import * as Functions from '../../constants/functions';

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

const timeToDate = (time: string): Date => {
  const timeArr: string[] = time.split(':');
  let date = new Date();
  date.setHours(parseInt(timeArr[0]));
  date.setMinutes(parseInt(timeArr[1]));
  return date;
};

const EditPlantScreen: React.FC<Props> = ({ navigation }) => {
  const { plant } = React.useContext(PlantContext);
  const [waterTime, setWaterTime] = React.useState<Date>(
    timeToDate(plant.waterTime)
  );

  const handleSavePress = () => {
    const { id, name, type, repeat } = plant;
    const time = waterTime.getHours() + ':' + waterTime.getMinutes();
    axios
      .put(API.UPDATE_PLANT(id), { name, type, waterTime: time, repeat })
      .then((res) => {
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeletePress = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this plant?',
      [
        {
          text: 'Delete',
          onPress: () => {
            axios
              .delete(API.DELETE_PLANT(plant.id))
              .then((res) => {
                navigation.pop(2);
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ]
    );
  };

  return (
    <ScreenTemplate
      title="Edit Plant"
      showBack
      showDelete
      onDeletePress={onDeletePress}
    >
      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/dashboard/plant.jpg')}
          />
        </TouchableOpacity>
        <View>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>Time</Text>
            <DateTimePicker
              style={styles.timePicker}
              value={waterTime}
              mode="time"
              display="default"
            />
          </View>
          <PropertyButton
            label="Repeat"
            value={Functions.repeatToString(plant.repeat)}
            route="Repeat"
          />
          <PropertyButton label="Name" value={plant.name} route="Name" />
          <PropertyButton label="Type" value={plant.type} route="Type" />
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
  imageContainer: {},
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
