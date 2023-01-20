import { View, Image } from 'react-native';
import React from 'react';
import { styles } from '../Collaborators/styles/searchCollaboratorsScreenStyle';

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <Image
                source={require('../assets/icons/cat_icon.png')} style={[styles.image]} />
        </View>
    )
}
