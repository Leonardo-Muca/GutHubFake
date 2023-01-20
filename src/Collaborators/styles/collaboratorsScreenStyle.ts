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
    searchContainer: {
        alignItems: 'center',
        flex: 80,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    informationContainer: {
        flexDirection: 'row',
        height: 50,
        marginTop: 10,
    }
})