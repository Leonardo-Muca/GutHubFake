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
import { styles } from '../styles/searchRepositoriesScreenStyles';
import { useFormik } from 'formik';
import { colors, theme } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { searchUserRepositorie } from '../services/repositoriesServices';
import { AppBar } from '../../components/AppBar';
import LinearGradient from 'react-native-linear-gradient';

export const SearchRepositoriesScreen = () => {
    //Navigation statement for communication control
    const navigation = useNavigation();

    //Management and incorporation of hook for state management
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [repositorie, setRepositorie] = useState<any>();

    //We use the Hook "useFormik" for form handling.
    const { values, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            collaborator: '',
            repositorie: '',
        },
        onSubmit: values => {
            if (isValid) {
                handledOnSearchRepositorie();
            }
        },
        validate: values => {
            values.repositorie && values.collaborator !== null ? setIsValid(true) : setIsValid(false);
        }
    });

    //Functionality to search for and request repositories
    const handledOnSearchRepositorie = async () => {
        setIsLoading(true);
        const response = await searchUserRepositorie(values.collaborator, values.repositorie);
        if (response !== null) {
            if (response.message) {
                Alert.alert(
                    "¡ Mala suerte :( !",
                    "Repositorio no encontrado",
                    [
                        { text: "OK", onPress: () => { } }
                    ]
                );
            } else {
                setRepositorie(response);
            }
        }
        setIsLoading(false);
    }

    return (
        <KeyboardAvoidingView style={styles.container} >
            <AppBar />
            <LinearGradient colors={[theme.colors.primary, colors.secondary, colors.black]} style={styles.searchContainer}>
                <Text style={styles.textTitle}>Repositorios</Text>
                <View style={styles.listContainer}>
                    <View style={styles.searchNavigator}>
                        <TextInput
                            autoCapitalize='none'
                            keyboardType="email-address"
                            onChangeText={text => setFieldValue('collaborator', text)}
                            placeholder="Colaborador"
                            style={styles.input}
                            placeholderTextColor={colors.grey}
                            value={values.collaborator}
                        />
                        <TextInput
                            autoCapitalize='none'
                            keyboardType="email-address"
                            onChangeText={text => setFieldValue('repositorie', text)}
                            placeholder="Nombre del repositorio"
                            style={styles.input}
                            placeholderTextColor={colors.grey}
                            value={values.repositorie}
                        />
                    </View>
                    {
                        !isValid && <Text style={styles.helpText}>Llena todos los campos</Text>
                    }
                    <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonCircle}>
                        <Text style={styles.textButton}>Buscar</Text>
                    </TouchableOpacity>
                    {
                        !isLoading &&
                        <TouchableOpacity style={styles.userListContainer} onPress={() => navigation.navigate('RepositorieScreen' as never, { repositorie } as never)}>
                            <Image
                                source={{ uri: repositorie?.owner.avatar_url } as ImageSourcePropType | undefined}
                                style={styles.avatarImage}
                            />
                            <Text style={{ color: 'white' }}>{repositorie?.full_name}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}