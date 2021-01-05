import React from 'react';
import { View } from 'react-native';
import InputField from '../../components/input-field';
import ScreenTemplate from '../../components/screen-template';

const TypeScreen: React.FC = () => {
  return (
    <ScreenTemplate title="Type" showBack>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <InputField label="Type" />
      </View>
    </ScreenTemplate>
  );
};

export default TypeScreen;
