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
            <Tab.Navigator tabBarOptions={{ showLabel: false }}>
                <Tab.Screen name='Dashboard' options={{ tabBarIcon: () => <MaterialIcons name="dashboard" size={24} color="#C4C4C4" /> }} component={DashboardScreen}/>      
                <Tab.Screen name='Calendar' options={{ tabBarIcon: () => <MaterialIcons name="calendar-today" size={24} color="#C4C4C4" /> }} component={CalendarScreen}/>      
            </Tab.Navigator>
        </>
    );
}

export default Tabs;