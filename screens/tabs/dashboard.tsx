import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlantCard from '../../components/plant-card';

const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText} >Welcome,</Text>
                    <Text style={styles.headerText} >Jackie</Text>
                </View>
                <Image style={styles.avatar} source={require('../../assets/dashboard/temp-avatar.png')}/>
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Plants</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <PlantCard />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#40916C',
        height: 205,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '5%',
    },
    headerText: {
        fontFamily: 'Merriweather_400Regular',
        color: 'white',
        fontSize: 42
    },
    avatar: {
        width: 125,
        height: 125,
    },
    section: {

    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    sectionTitle: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 36,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#52B788',
        width: 115,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 10,
    },
    buttonText: {
        fontFamily: 'WorkSans_400Regular',
        fontSize: 18,
        color: 'white',
    }
});

export default DashboardScreen;