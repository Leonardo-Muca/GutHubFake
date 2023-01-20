import { Dimensions, StyleSheet } from "react-native";
import { colors, theme } from "../../theme/AppTheme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    buttonCircle: {
        alignSelf: 'center',
        backgroundColor: colors.green,
        borderRadius: 5,
        color: colors.white,
        height: 30,
        justifyContent: 'center',
        marginVertical: 5,
        width: 80,
    },
    container: {
        backgroundColor: theme.colors.primary,
        flex: 1,
    },
    footerContainer: {
        height: height * 0.05,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    footerContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    indicator: {
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 10,
        marginHorizontal: 3,
        width: 10,
    },
    image: {
        borderRadius: 20,
        height: '75%', 
        resizeMode: 'contain', 
        width: width * 0.6, 
    },
    subtitle: {
        color: colors.white,
        fontSize: 13,
        lineHeight: 23,
        marginHorizontal: 40,
        marginTop: 10,
        textAlign: 'center',
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
});