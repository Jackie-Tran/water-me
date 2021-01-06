import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/NavigationTypes';
import ScreenTemplate from '../../components/screen-template';
import RepeatToggle from '../../components/repeat-toggle';
import { PlantContext } from '../../context/plant-context';

type NavProp = StackNavigationProp<RootStackParamList, 'Repeat'>;

type RepeatType = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

type Props = {
  navigation: NavProp;
};

const repeatToArray = (repeat: RepeatType): string[] => {
    let arr: string[] = [];
    for (const [day, value] of Object.entries(repeat)) {
        if (value) arr.push(day);
    }
    return arr;
}

const RepeatScreen: React.FC<Props> = ({ navigation }) => {

  const [repeat, setRepeat] = React.useState<RepeatType>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const { plant, setPlant } = React.useContext(PlantContext);

  const onBackPress = () => {
    setPlant({ ...plant, repeat: repeatToArray(repeat) });
  }

  return (
    <ScreenTemplate title="Repeat" showBack onBackPress={onBackPress}>
      <View style={{ marginTop: '5%' }}>
        <RepeatToggle label="monday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="tuesday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="wednesday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="thursday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="friday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="saturday" repeat={repeat} setRepeat={setRepeat} />
        <RepeatToggle label="sunday" repeat={repeat} setRepeat={setRepeat} />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({});

export default RepeatScreen;
