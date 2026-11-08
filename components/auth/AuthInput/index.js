import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';

export default function AuthInput({
    label,
    icon,
    size = 'small',
    variant = 'primary',
    ...inputProps
}) {
    const [focused, setFocused] = useState(false);

    const secondary = variant === 'secondary';
    const outline = variant === 'outline';

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={[
                styles.inputContainer,
                focused && styles.inputFocused,
            ]}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#999"
                    underlineColorAndroid="transparent"
                    selectionColor="#22C55E"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...inputProps}
                />

                {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={size === 'large' ? 20 : 16}
                        color={
                            colors.title
                        }
                        style={styles.icon}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 6,
    },

    label: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.text,
    },

    inputContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        backgroundColor: colors.card,
    },

    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 14,
        fontSize: 14,
        color: colors.text,
    },

    inputFocused: {
        borderColor: '#22C55E',
        borderWidth: 1.5,
    },

    icon: {
        marginHorizontal: 14,
    },
});