import React from 'react';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/NavigationTypes';
import { RouteProp } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

type NavProp = StackNavigationProp<RootStackParamList, 'Camera'>;

type Props = {
  navigation: NavProp;
  route: RouteProp<RootStackParamList, 'Camera'>;
};

const CameraScreen: React.FC<Props> = ({ navigation, route }) => {
  const [image, setImage] = React.useState<string>('');

  React.useEffect(() => {
      (async () => {
          if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                  alert('Sorry, we need camera roll permission to make this work!');
              }
              await ImagePicker.requestCameraPermissionsAsync();
          }
      })();
  }, [])

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
          setImage(result.uri);
      }
  }

  const takePicture = async () => {
      let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
      })

      console.log(result);
      if (!result.cancelled) {
          setImage(result.uri);
      }
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={pickImage}>
              <Text>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
              <Text>Take Picture</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#464545',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bar: {
    backgroundColor: '#464545',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
  captureButton: {
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default CameraScreen;
