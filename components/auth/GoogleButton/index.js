import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../../../theme';

export default function GoogleButton({ onPress, title = 'Continuar com Google' }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <AntDesign name="google" size={20} color="#4285F4" />

            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 44,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        backgroundColor: colors.card,
    },

    text: {
        color: colors.text,
        fontSize: 14,
        fontWeight: '500',
    },
});
