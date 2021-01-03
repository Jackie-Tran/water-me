import React from  'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './dashboard';
import CalendarScreen from './calendar';
import { TabsParamList } from '../../NavigationTypes';

const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={DashboardScreen}/>      
            <Tab.Screen name='Calendar' component={CalendarScreen}/>      
        </Tab.Navigator>
    );
}

export default Tabs;