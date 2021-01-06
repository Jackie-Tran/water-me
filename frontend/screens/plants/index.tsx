import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import PlantCard from '../../components/plant-card';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/NavigationTypes';
import { UserContext } from '../../context/user-context';
import axios from 'axios';
import * as API from '../../constants/endpoints';

type Plant = {
  id: number;
  name: string;
  type: string;
  waterTime: string;
  repeat: string[];
  uid: string;
};

type NavProp = StackNavigationProp<RootStackParamList, 'Your Plants'>;

type Props = {
  navigation: NavProp;
};

const PlantsScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = React.useContext(UserContext);
  const [plants, setPlants] = React.useState<Plant[]>([]);

  useEffect(() => {
    axios
      .get(API.GET_PLANTS(user.uid))
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        </View>
        <Text style={styles.headerText}>Your Plants</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.plants}
        columnWrapperStyle={{
          paddingHorizontal: '10%',
          justifyContent: 'space-between',
        }}
        data={plants}
        renderItem={({ item }) => <PlantCard name={item.name} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
        numColumns={2}
      />
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
  navbar: {},
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

export default PlantsScreen;
