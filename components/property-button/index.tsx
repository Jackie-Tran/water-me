import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    label: string,
    value: string,
}

const PropertyButton: React.FC<Props> = ({ label, value }) => {
    return (
        <TouchableOpacity style={styles.container}>
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