import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  label: string;
};

const InputField: React.FC<Props> = ({ label }) => {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
      <TouchableOpacity style={{ flex: 1 }} onPress={handleClear}>
        <MaterialIcons name="cancel" size={24} color="#A7A7A7" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  textInput: {
    flex: 10,
    padding: '3%',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 28,
  },
});

export default InputField;
