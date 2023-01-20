import {
    Alert,
    Image,
    ImageSourcePropType,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/searchCollaboratorsScreenStyle';
import { useFormik } from 'formik';
import { colors, theme } from '../../theme/AppTheme';
import { searchUser } from '../services/collaboratorsScreenService';
import { User } from '../../interfaces/interfaces';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const SearchCollaboratorsScreen = () => {
    //Navigation statement for communication control

    const navigation = useNavigation();

    //Management and incorporation of hook for state management
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>();

    //We use the Hook "useFormik" for form handling.
    const { values, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            if (isValid) {
                handledOnSearchUser();
            }
        },
        validate: values => {
            values.search.length > 0 ? setIsValid(true) : setIsValid(false);
        }
    });

    //Functionality to search for and request users
    const handledOnSearchUser = async () => {
        setIsLoading(true);
        const response = await searchUser(values.search);
        if (response !== null) {
            if (response.message) {
                Alert.alert(
                    "Error",
                    "Usuario no encontrado",
                    [
                        { text: "OK", onPress: () => { } }
                    ]
                );
            } else {
                setUser(response);
            }
        }
        setIsLoading(false);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.appBar}>
                <Image
                    source={require('../../assets/icons/cat_icon.png')} style={styles.image} />
            </View>
            <LinearGradient colors={[theme.colors.primary, colors.secondary, colors.black]} style={styles.searchContainer}>
                <Text style={styles.textTitle}>Colaboradores</Text>
                <View style={styles.listContainer}>
                    <View style={styles.searchNavigator}>
                        <TextInput
                            autoCapitalize='none'
                            keyboardType="email-address"
                            onChangeText={text => setFieldValue('search', text)}
                            placeholder="Buscar colaborador..."
                            style={styles.input}
                            placeholderTextColor={colors.grey}
                            value={values.search}
                        />
                        <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonCircle}>
                            <Text style={styles.textButton}>Buscar</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        !isValid && <Text style={styles.helpText}>Ingresa el nombre de algun colaborador</Text>
                    }
                    {
                        !isLoading &&
                        <TouchableOpacity style={styles.userListContainer} onPress={() => navigation.navigate('CollaboratorScreen' as never, { user } as never)}>
                            <Image
                                source={{ uri: user!.avatar_url } as ImageSourcePropType | undefined}
                                style={styles.avatarImage}
                            />
                            <Text style={{ color: colors.white }}>{user?.login}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
