import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors, theme } from '../theme/AppTheme';
import { SearchRepositoriesScreen } from '../Repositories/Screens/SearchRepositoriesScreen';
import { RepositorieScreen } from '../Repositories/Screens/RepositorieScreen';

const Stack = createNativeStackNavigator();

export const RepositoriesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={(route) => ({
                headerBackVisible: true,
                headerRightContainerStyle: {
                    marginRight: 20,
                    alignSelf: 'center',
                },
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerBackButtonMenuEnabled: false,
                headerTintColor: colors.white,
            })}
        >
            <Stack.Screen
                name="RepositoriesScreen"
                options={{
                    title: 'Repositories',
                    headerShown: false
                }}
                component={SearchRepositoriesScreen}
            />
            <Stack.Screen
                name="RepositorieScreen"
                options={{
                    title: 'Repositorie',
                }}
                component={RepositorieScreen}
            />
        </Stack.Navigator>
    );
};
