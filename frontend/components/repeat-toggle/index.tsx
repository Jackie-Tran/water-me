import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    label: string;
}

const RepeatToggle: React.FC<Props> = ({ label }) => {
  const [isActive, setActive] = React.useState<boolean>(false);

  const handlePress = () => {
    setActive(!isActive);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{ label }</Text>
      {isActive && <MaterialIcons name="check" size={24} color="#52B788" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
  },
  text: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 24,
    color: 'black',
  },
});

export default RepeatToggle;
