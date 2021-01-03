import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    name: string;
}

const PlantCard: React.FC<Props> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/dashboard/plant.jpg')}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: '3%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Text style={styles.text}>Cassia</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 25,
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
  image: {
    width: '100%',
    flex: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 18,
  },
});

export default PlantCard;
