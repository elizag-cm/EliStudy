import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export default function AuthFooter({ message, actionText, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {message}
            </Text>

            <TouchableOpacity onPress={onPress}>
                <Text style={styles.action}>
                    {actionText}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 12,
    },

    message: {
        fontSize: 13,
        color: colors.title,
    },

    action: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.primary,
    },
});
