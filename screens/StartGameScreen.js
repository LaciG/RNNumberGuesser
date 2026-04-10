import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View styles={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063C',
        borderRadius: 8,
        elevation: 4, //Android
        shadowColor: 'black', //iOS
        shadowOffset: { width: 0, height: 2 }, //iOS
        shadowRadius: 6, //iOS
        shadowOpacity: 0.25, //iOS
    }
});