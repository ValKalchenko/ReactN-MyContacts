import React from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text } from 'react-native';

const ContactsScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => console.log('Add Contact!')}>
                <Text style={styles.buttonText}>Add Contact</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ContactsScreen;