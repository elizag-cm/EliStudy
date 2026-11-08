import { View, StyleSheet } from "react-native";
import { colors } from '../../../theme';

export default function AuthContainer({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 20,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        backgroundColor: colors.background,
        gap: 20,
    }
});