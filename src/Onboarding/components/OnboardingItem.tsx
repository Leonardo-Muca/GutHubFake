import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import React from 'react';
import { styles } from '../styles/onboardingScreenStyles';

const { width, height } = Dimensions.get('window');

interface Props {
    onPress: (isValidateLogin: boolean) => void;
    item: any;
}

export const OnboardingItem = ({ onPress, item }: Props) => {
    return (
        <View style={{ alignItems: 'center', width }}>
            <Image
                source={item?.image}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
                {
                    item.id === 3 && <TouchableOpacity onPress={() => onPress(true)} style={styles.buttonCircle}><Text style={styles.textTitle}>¡Vamos!</Text></TouchableOpacity>
                }
            </View>
        </View>
    )
}
