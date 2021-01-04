import React from  'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './dashboard';
import CalendarScreen from './calendar';
import { TabsParamList } from '../../NavigationTypes';
import AddPlantScreen from './add-plant';
import { MaterialIcons } from '@expo/vector-icons';
import NewPlantButton from '../../components/new-plant-button';

const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs: React.FC = () => {
    return (
        <>
            <NewPlantButton />
            <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#52B788', inactiveTintColor: '#C4C4C4' }}>
                <Tab.Screen name='Dashboard' options={{ tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={24} color={color}/> }} component={DashboardScreen}/>      
                <Tab.Screen name='Calendar' options={{ tabBarIcon: ({ color }) => <MaterialIcons name="calendar-today" size={24} color={color} /> }} component={CalendarScreen}/>      
            </Tab.Navigator>
        </>
    );
}

export default Tabs;