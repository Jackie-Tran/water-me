import React from 'react';
import { View } from 'react-native';
import InputField from '../../components/input-field';
import ScreenTemplate from '../../components/screen-template';
import { PlantContext } from '../../context/plant-context';

const TypeScreen: React.FC = () => {
    const [type, setType] = React.useState<string>('');
    const { plant, setPlant } = React.useContext(PlantContext);
    const onBackPress = () => {
        // Update the type field in the plant context
        setPlant({ ...plant, type });
    }
  return (
    <ScreenTemplate title="Type" showBack onBackPress={onBackPress}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <InputField label="Type" value={type} setValue={setType} />
      </View>
    </ScreenTemplate>
  );
};

export default TypeScreen;
