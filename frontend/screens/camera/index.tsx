import React from 'react';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CameraScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = React.useState<boolean>();
  const [type, setType] = React.useState(Camera.Constants.Type.front);
  const camera = React.useRef<Camera>(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFlipCameraPress = () => {
      if (type === Camera.Constants.Type.front) {
          setType(Camera.Constants.Type.back);
      } else {
          setType(Camera.Constants.Type.front);
      }
  }

  const handleCapture = () => {
      camera.current?.takePictureAsync({ quality: 0.5 })
      .then(picture => {
        console.log(picture);
        camera.current?.pausePreview();
        Alert.alert('Confirm Image', 'Would you like to use this image?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        camera.current?.resumePreview();
                    }
                },
                {
                    text: 'Retake',
                    onPress: () => {
                        camera.current?.resumePreview();
                    }
                }
            ]
        );
      })
      .catch(err => {
          console.log(err);
      })
  }

  if (hasPermission === null) {
    return <SafeAreaView />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Camera style={styles.camera} type={type} autoFocus ref={camera}>
          <View></View>
          <View style={styles.bar}>
            <View style={{ width: 50 }} />
            <TouchableOpacity style={styles.captureButton} onPress={handleCapture}></TouchableOpacity>
            <TouchableOpacity onPress={handleFlipCameraPress}>
              <MaterialIcons name="swap-vert" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
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
