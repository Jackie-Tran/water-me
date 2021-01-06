import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../constants/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

type NavProp = StackNavigationProp<RootStackParamList>;


type Props = {
    label: string,
    value: string,
    route?: string,
}

const PropertyButton: React.FC<Props> = ({ label, value, route }) => {

    const navigation = useNavigation<NavProp>();

    const handlePress = () => {
        //@ts-ignore
        navigation.push(route);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.text}>{ label }</Text>
            <Text style={styles.text}>{ value }</Text>
            <AntDesign style={{ marginRight: '5%' }} name="caretright" size={24} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderColor: 'gray',
        borderWidth: 1,
    },
    text: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 24,
        padding: '5%',
    }
});

export default PropertyButton;