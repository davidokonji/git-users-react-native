import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './style';

const UserCard = ({name, image, bio, count, url}) => (
    <View style={styles.containter}>
        <View>
        <Image
            source={{uri: image}}
            style={styles.profileImage}
        />
        </View>
        <View style={styles.cardSection}>
            <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.cardSection}>
            <Text style={styles.text}>{bio}</Text>
        </View>
        <View style={styles.cardSection}>
            <Text style={styles.text}>
                {name} has {count} repos currently
            </Text>
        </View>
        <View style={styles.cardSection}>
            <Text 
                style={styles.textLink}
                onPress={() => Linking.openURL(url)}
            >
                View More
            </Text>
        </View>
    </View>
);

export default UserCard;