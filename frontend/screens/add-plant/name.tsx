import React from 'react';
import { View } from 'react-native';
import InputField from '../../components/input-field';
import ScreenTemplate from '../../components/screen-template';

const NameScreen: React.FC = () => {
  return (
    <ScreenTemplate title="Name" showBack>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <InputField label="Name" />
      </View>
    </ScreenTemplate>
  );
};

export default NameScreen;
