import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import PlantCard from '../../components/plant-card';

const data = [
    {
        name: 'Cassia'
    },
    {
        name: 'Adonis'
    },
    {
        name: 'Zinnia'
    },
    {
        name: 'Poppy'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
    {
        name: 'Marigold'
    },
];

const PlantsScreen: React.FC = () => {
  return (
    <SafeAreaView edges={['right', 'left', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <MaterialIcons name="arrow-back" size={32} color="white" />
        </View>
        <Text style={styles.headerText}>Your Plants</Text>
      </View>
      <FlatList 
        contentContainerStyle={styles.plants}
        columnWrapperStyle={{ paddingHorizontal: '10%', justifyContent: 'space-between' }}
        data={data}
        renderItem={({ item }) => <PlantCard name={item.name} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={
            () => <View style={{ height: 25 }}/>
        }
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
  }
});

export default PlantsScreen;
