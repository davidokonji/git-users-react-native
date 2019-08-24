import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    containter: {
        color: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        borderWidth: 2
    },
    profileImage: {
        width: 150,
        height: 150,
        marginTop: "5%",
        borderRadius: 5,
        marginBottom: 10
    },
    text: {
        color: '#000',
        fontFamily: "Courier New",
        fontStyle: 'normal',
        fontSize: 18,
        marginHorizontal: 5
    },
    cardSection: {
        marginVertical: 5,
        alignSelf: 'center',
    },
    textLink: {
        color: '#000',
        fontFamily: "Courier New",
        fontStyle: 'normal',
        fontSize: 18,
        textDecorationLine: 'underline',
        marginVertical: 15
    }
});
