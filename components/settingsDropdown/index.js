
import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    Modal,
    Alert,
    StyleSheet,
    Platform
} from 'react-native';
import { colors } from '../../theme';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function SettingsDropdown({ onLogout }) {
    const [visivel, setVisivel] = useState(false);

    function sair() {
        setVisivel(false);

        if (Platform.OS === 'web') {
            const confirmar = window.confirm(
                'Deseja realmente sair do aplicativo?'
            );

            if (confirmar) {
                onLogout();
            }

            return;
        }

        Alert.alert(
            'Sair da conta',
            'Deseja realmente sair do aplicativo?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: onLogout,
                },
            ]
        );
    }

    return (
        <>
            <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => setVisivel(true)}
                activeOpacity={0.7}
            >
                <MaterialCommunityIcons
                    name="cog-outline"
                    size={25}
                    color="#FFFFFF"
                />
            </TouchableOpacity>

            <Modal
                visible={visivel}
                transparent
                animationType="fade"
                onRequestClose={() => setVisivel(false)}
            >
                <View style={styles.modalContainer}>
                    <Pressable
                        style={styles.overlay}
                        onPress={() => setVisivel(false)}
                    />

                    <View style={styles.dropdown}>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={sair}
                            activeOpacity={0.7}
                        >
                            <MaterialCommunityIcons
                                name="logout"
                                size={20}
                                color="#EF4444"
                            />

                            <Text style={styles.logoutText}>
                                Sair da conta
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        position: 'absolute',
        top: 18,
        right: 8,
        zIndex: 10,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.border,
    },

    modalContainer: {
        flex: 1
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
    },

    dropdown: {
        position: 'absolute',
        top: 75,
        right: 20,
        width: 175,
        padding: 6,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 12,
    },

    logoutText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '500',
    },
});
