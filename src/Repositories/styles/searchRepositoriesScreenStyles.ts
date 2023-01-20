import { StyleSheet } from 'react-native';
import { colors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    avatarImage: {
        borderRadius: 50,
        height: 20,
        marginRight: 10,
        width: 20,
    },
    buttonCircle: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.black,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
        width: 250,
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
        width: 150,
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
        marginTop: 10,
    },
    userListContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
    }
})