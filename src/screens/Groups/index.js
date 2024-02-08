import React from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text } from 'react-native';

const GroupsScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => console.log('Group Added!')}>
                <Text style={styles.buttonText}>Add Group</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default GroupsScreen;