import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors, theme } from '../theme/AppTheme';
import { SearchCollaboratorsScreen } from '../Collaborators/Screens/SearchCollaboratorsScreen';
import { CollaboratorScreen } from '../Collaborators/Screens/CollaboratorScreen';

const Stack = createNativeStackNavigator();

export const CollaboratorsStack = () => {
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
                name="CollaboratorsScreen"
                options={{
                    title: 'Collaborators',
                    headerShown: false
                }}
                component={SearchCollaboratorsScreen}
            />
            <Stack.Screen
                name="CollaboratorScreen"
                options={{
                    title: 'Collaborator',
                }}
                component={CollaboratorScreen}
            />
        </Stack.Navigator>
    );
};
