import React from 'react';
import { View } from 'react-native';
import InputField from '../../components/input-field';
import ScreenTemplate from '../../components/screen-template';
import { PlantContext } from '../../context/plant-context';

const NameScreen: React.FC = () => {
  const { plant, setPlant } = React.useContext(PlantContext);
  const [name, setName] = React.useState<string>(plant.name);  
  const onBackPress = () => {
    // Update the name field in the plant context
    setPlant({ ...plant, name });
  }
  return (
    <ScreenTemplate title="Name" showBack onBackPress={onBackPress}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <InputField label="Name" value={name} setValue={setName} />
      </View>
    </ScreenTemplate>
  );
};

export default NameScreen;
