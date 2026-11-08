import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';

export default function AuthInput({
    label,
    icon,
    secureTextEntry = false,
    ...inputProps
}) {
    const [focused, setFocused] = useState(false);
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const isPassword = secureTextEntry;
    const esconderSenha = isPassword && !senhaVisivel;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View
                style={[
                    styles.inputContainer,
                    focused && styles.inputFocused,
                ]}
            >
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#999"
                    underlineColorAndroid="transparent"
                    selectionColor="#22C55E"
                    secureTextEntry={esconderSenha}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...inputProps}
                />

                {isPassword ? (
                    <TouchableOpacity
                        onPress={() => setSenhaVisivel(!senhaVisivel)}
                        style={styles.iconButton}
                        activeOpacity={0.7}
                    >
                        <MaterialCommunityIcons
                            name={senhaVisivel ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color={colors.title}
                        />
                    </TouchableOpacity>
                ) : (
                    icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.title}
                            style={styles.icon}
                        />
                    )
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

    iconButton: {
        height: '100%',
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
