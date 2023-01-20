import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/AppTheme';
import { CollaboratorsStack } from './CollaboratorsStack';
import { RepositoriesStack } from './RepositoriesStack';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.grey,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.white,
                },
            })}
        >
            <Tab.Screen
                name="Colaboradores"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icons/collaborators_icon.png')} style={styles.collaboratorsIcon} />
                    )
                }}
                component={CollaboratorsStack} />
            <Tab.Screen
                name="Ranking"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icons/branch_icon.png')} style={styles.branchIcon} />
                    )
                }}
                component={RepositoriesStack} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    branchIcon: {
        height: 30,
        width: 30
    },
    collaboratorsIcon: {
        height: 40,
        width: 40
    },
})