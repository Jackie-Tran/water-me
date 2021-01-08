import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Calendar feature is coming soon!
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontFamily: 'Merriweather_400Regular',
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
    }
});

export default CalendarScreen;