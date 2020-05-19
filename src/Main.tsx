import React, {FC} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Account from './screens/Account';
import Article from './screens/Article';
import ToDoList from './screens/ToDoList';


const Tab = createBottomTabNavigator();   

const Main: FC = props => {
    return ( 
        <Tab.Navigator >
            <Tab.Screen
              name="Account" 
              component={Account} 
              options={{
                tabBarIcon:({color,size}) =>(
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen 
              name="ToDoList" 
              component={ToDoList}
              options={{
                tabBarIcon:({color,size}) =>(
                  <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Article" 
              component={Article} 
              options={{
                tabBarIcon:({color,size}) =>(
                  <MaterialCommunityIcons name="text-subject" color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator> 
    );
};

export default Main;