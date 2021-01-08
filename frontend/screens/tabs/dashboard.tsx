import React, { useCallback, useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import PlantCard from '../../components/plant-card';
import {
  CompositeNavigationProp,
  useFocusEffect,
} from '@react-navigation/native';
import {
  RootStackParamList,
  TabsParamList,
} from '../../constants/NavigationTypes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../context/user-context';
import axios from 'axios';
import * as API from '../../constants/endpoints';
import { Plant } from '../../context/plant-context';

const data = [
  {
    name: 'Cassia',
  },
  {
    name: 'Adonis',
  },
  {
    name: 'Zinnia',
  },
  {
    name: 'Poppy',
  },
  {
    name: 'Marigold',
  },
];

type NavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, 'Dashboard'>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: NavProp;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [upComingPlants, setUpcomingPlants] = React.useState<Plant[]>([]);

  // Fetch user's plants and water soon
  useFocusEffect(
    useCallback(() => {
      // TODO: Fetch water soon plants
      axios
        .get(API.GET_PLANTS(user.uid))
        .then((res) => {
          setPlants(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(API.GET_UPCOMING_PLANTS(user.uid))
        .then((res) => {
          setUpcomingPlants(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
  );

  const handleSeeAll = () => {
    navigation.push('Your Plants');
  };

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Welcome,</Text>
          <Text style={styles.headerText}>{user.firstName}</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require('../../assets/dashboard/temp-avatar.png')}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Plants</Text>
          <TouchableOpacity style={styles.button} onPress={handleSeeAll}>
            <Text style={styles.buttonText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginLeft: '5%', marginTop: '5%', paddingBottom: 25 }}
          data={plants}
          renderItem={({ item }) => (
            <PlantCard
              id={item.id}
              name={item.name}
              type={item.type}
              waterTime={item.waterTime}
              repeat={item.repeat}
              uid={item.uid}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
          ListFooterComponent={() => <View style={{ width: 25 }} />}
          horizontal
        />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Water Soon</Text>
        </View>
        <FlatList
          style={{ marginLeft: '5%', marginTop: '5%', paddingBottom: 25 }}
          data={upComingPlants}
          renderItem={({ item }) => (
            <PlantCard
              id={item.id}
              name={item.name}
              type={item.type}
              waterTime={item.waterTime}
              repeat={item.repeat}
              uid={item.uid}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
          ListFooterComponent={() => <View style={{ width: 25 }} />}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#40916C',
    height: 205,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '5%',
  },
  headerText: {
    fontFamily: 'Merriweather_400Regular',
    color: 'white',
    fontSize: 42,
  },
  avatar: {
    width: 125,
    height: 125,
  },
  section: {},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  sectionTitle: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 36,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#52B788',
    width: 115,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
  buttonText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 18,
    color: 'white',
  },
});

export default DashboardScreen;
