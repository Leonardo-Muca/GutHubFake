import { 
    Image, 
    ImageSourcePropType,
    Text, 
    View, 
} from 'react-native'
import React from 'react';
import { KeyboardAvoidingView } from 'native-base';
import { styles } from '../styles/repositorieScreenStyles';

export const RepositorieScreen = ({ route }: any) => {
    //Handling of the object to be received by Porps
    const { repositorie } = route.params;

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    source={{ uri: repositorie!.owner.avatar_url } as ImageSourcePropType | undefined}
                    style={styles.avatarImage}
                />
                <Text style={styles.text}>{repositorie.full_name}</Text>
                <View style={styles.informationContainer}>
                    <Text style={[styles.text, { flex: 33 }]}>Lenguaje dominante: {'\n'}{repositorie.language}</Text>
                    <Text style={[styles.text, { flex: 33 }]}>Seguidores: {'\n'}{repositorie.subscribers_count}</Text>
                    <Text style={[styles.text, { flex: 33 }]}>Visibilidad: {'\n'}{repositorie.visibility.toUpperCase()}</Text>
                </View>
                <View style={styles.linksContainer}>
                    <Text style={styles.linkText}>Link de github: {repositorie.git_url}</Text>
                    <Text style={styles.linkText}>Link SSH: {repositorie.ssh_url}</Text>
                    <Text style={styles.linkText}>Link Clone: {repositorie.clone_url}</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
