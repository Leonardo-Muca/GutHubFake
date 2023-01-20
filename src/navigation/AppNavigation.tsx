import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { OnboardingScreen } from '../Onboarding/Screens/OnboardingScreen';
import { theme } from '../theme/AppTheme';
import { BottomTabNavigation } from './BottomTabNavigator';

export const AppNavigation = () => {
    const [isValid, setIsValid] = useState<boolean>(false);

    //Validates if the user has successfully passed the Onboarding
    const isEndOnboarding = (isValid: boolean) => setIsValid(isValid);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={theme.colors.primary} />
            {
                isValid ? <BottomTabNavigation /> : < OnboardingScreen onPress={isEndOnboarding} />
            }
        </NavigationContainer>
    );
};
