import React, { useRef, useState } from 'react';
import { View, FlatList, SafeAreaView, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors, theme } from '../../theme/AppTheme';
import { OnboardingItem } from '../components/OnboardingItem';
import { styles } from '../styles/onboardingScreenStyles';

interface Props {
    onPress: (isValidateLogin: boolean) => void;
}

const { width, height } = Dimensions.get('window');

//Key-value array for managing our onboarding slides
const slides = [
    {
        id: 1,
        image: require('../../assets/icons/cat_icon.png'),
        title: 'Bienvenido a GitHub-Fake',
        subtitle: 'Empecemos esta aventura juntos, o... \n ¿Tienes miedo?',
    },
    {
        id: 2,
        image: require('../../assets/images/onboarding2.png'),
        title: '¡Busca los repositorios de tu interés!',
        subtitle: 'Encuentra los proyectos que más te ayuden para tu desarrollo profesional.',
    },
    {
        id: 3,
        image: require('../../assets/images/onboarding3.png'),
        title: 'Busca colaboradores',
        subtitle: 'Navega y busca a los desarrolladores y usuarios que suben proyectos a esta plataforma.',
    },
];

export const OnboardingScreen = ({ onPress }: Props) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    //We use the ref hook to store references to be used in the FlatList.
    const ref = useRef<any>(null);

    //Function that updates the index of each onboarding slide.
    const updateCurrentSlideIndex = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
        const contextOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contextOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }

    //Function that manages each onboarding view
    const _renderItem = ({ item }: any) => (
        <OnboardingItem onPress={onPress} item={item} />
    )

    //Function that renders and updates the view of our onboarding indicator.
    const Footer = () => {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.footerContainerButtons}>
                    {slides.map((_, index) => (
                        <View key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: theme.colors.primary }]} />
                    ))}
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={[theme.colors.primary, colors.secondary, colors.black]} style={{ alignItems: 'center', width }}>
                <FlatList
                    ref={ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    data={slides}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={_renderItem}
                />
                <Footer />
            </LinearGradient>
        </SafeAreaView>
    )
}
