import { StyleSheet } from 'react-native';
import { colors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    avatarImage: {
        borderRadius: 50,
        height: 90,
        marginVertical: 10,
        width: 90,
    },
    container: {
        backgroundColor: colors.blackBlue,
        flex: 100,
    },
    linksContainer: {
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    linkText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'justify',
    },
    searchContainer: {
        alignItems: 'center',
        flex: 90,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    informationContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    }
})