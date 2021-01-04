import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../NavigationTypes';
import ScreenTemplate from '../../components/screen-template';
import RepeatToggle from '../../components/repeat-toggle';

type NavProp = StackNavigationProp<RootStackParamList, 'Repeat'>;

type Props = {
  navigation: NavProp;
};

const RepeatScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <ScreenTemplate title='Repeat' showBack >
        <View style={{ marginTop: '5%' }}>
            <RepeatToggle label='Every Monday' />
            <RepeatToggle label='Every Tuesday' />
            <RepeatToggle label='Every Wednesday' />
            <RepeatToggle label='Every Thursday' />
            <RepeatToggle label='Every Friday' />
            <RepeatToggle label='Every Saturday' />
            <RepeatToggle label='Every Sunday' />
        </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
});

export default RepeatScreen;
