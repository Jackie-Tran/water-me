import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type RepeatType = {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

type Props = {
    label: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    repeat: RepeatType;
    setRepeat: React.Dispatch<React.SetStateAction<RepeatType>>;
}

const RepeatToggle: React.FC<Props> = ({ label, repeat, setRepeat }) => {

  const handlePress = () => {
      setRepeat({ ...repeat, [label]: !repeat[label] });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>Every { label[0].toUpperCase() + label.substr(1) }</Text>
      {repeat[label] && <MaterialIcons name="check" size={24} color="#52B788" />}
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
