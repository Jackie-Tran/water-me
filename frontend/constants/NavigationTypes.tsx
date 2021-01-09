import { CameraCapturedPicture } from "expo-camera"

export type RootStackParamList = {
    Login: undefined;
    "Sign Up": undefined;
    Tabs: undefined;
    'Add Plant': undefined;
    Repeat: undefined;
    Name: undefined;
    Type: undefined;
    'Your Plants': undefined;
    Plant: undefined;
    'Edit Plant': undefined;
    Camera: { setImage: React.Dispatch<React.SetStateAction<CameraCapturedPicture | undefined>> };
}

export type TabsParamList = {
    Dashboard: undefined;
    'Add Button': undefined;
    Calendar: undefined;
}