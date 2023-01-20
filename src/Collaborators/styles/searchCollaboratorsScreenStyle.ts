import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    appBar: {
        alignItems: 'center',
        backgroundColor: colors.blackBlue,
        flex: 13,
        justifyContent: 'center',
    },
    avatarImage: {
        borderRadius: 50,
        height: 20,
        marginRight: 10,
        width: 20,
    },
    buttonCircle: {
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.black,
        height: 45,
        justifyContent: 'center',
        width: 80,
    },
    container: {
        backgroundColor: colors.black,
        flex: 100,
    },
    helpText: {
        color: colors.red,
        fontSize: 12,
        marginLeft: 15,
        marginTop: 5,
        width: 250,
    },
    image: {
        borderRadius: 50,
        height: 50,
        marginTop: Platform.OS == 'ios' ? 30 : 0,
        width: 50,
    },
    input: {
        backgroundColor: colors.black,
        borderColor: colors.grey,
        borderRadius: 10,
        borderWidth: 0.5,
        color: colors.grey,
        fontSize: 12,
        height: 45,
        marginRight: 10,
        paddingStart: 10,
        width: 220,
    },
    listContainer: {
        backgroundColor: colors.blackBlue,
        borderColor: colors.grey,
        borderRadius: 10,
        borderWidth: 0.5,
        height: 400,
        marginTop: 50,
    },
    searchContainer: {
        alignItems: 'center',
        flex: 90,
    },
    searchNavigator: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
    },
    textButton: {
        color: colors.black,
        fontSize: 14,
        textAlign: 'center',
    },
    textTitle: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
    },
    userListContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
    }
})