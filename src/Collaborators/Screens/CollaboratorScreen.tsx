import { 
  Image, 
  ImageSourcePropType,
  Text, 
  View, 
} from 'react-native';
import React from 'react';
import { KeyboardAvoidingView } from 'native-base';
import { styles } from '../styles/collaboratorsScreenStyle';

export const CollaboratorScreen = ({ route }: any) => {
  //Handling of the object to be received by Porps
  const { user } = route.params;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={{ uri: user!.avatar_url } as ImageSourcePropType | undefined}
          style={styles.avatarImage}
        />
        <Text style={styles.text}>{user.login}</Text>
        <View style={styles.informationContainer}>
          <Text style={[styles.text, { flex: 33 }]}>Repositorios: {'\n'}{user.public_repos}</Text>
          <Text style={[styles.text, { flex: 33 }]}>Seguidores: {'\n'}{user.followers}</Text>
          <Text style={[styles.text, { flex: 33 }]}>Seguidos: {'\n'}{user.following}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
