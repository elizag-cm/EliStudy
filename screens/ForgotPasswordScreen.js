
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import AuthHeader from '../components/auth/AuthHeader';
import AuthContainer from '../components/auth/AuthContainer';
import AuthInput from '../components/auth/AuthInput';
import AuthFooter from '../components/auth/AuthFooter';
import Button from '../components/Button';

export default function ForgotPasswordScreen({ onVoltar }) {
    const [email, setEmail] = useState('');

    function recuperarSenha() {
        if (!email.trim()) {
            Alert.alert('Atenção', 'Informe seu e-mail.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
            return;
        }

        Alert.alert(
            'Solicitação enviada',
            'Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.'
        );
    }

    return (
        <View style={styles.container}>

            <AuthHeader
                title="Recuperar senha"
                subtitle="Não se preocupe, vamos ajudar você!"
            />

            <AuthContainer>

                <Text style={styles.description}>
                    Informe o e-mail associado à sua conta.
                    Enviaremos instruções para você recuperar
                    o acesso.
                </Text>

                <AuthInput
                    label="E-mail"
                    icon="email-outline"
                    placeholder="seu@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Button
                    style={styles.button}
                    title="Enviar instruções"
                    onPress={recuperarSenha}
                />

                <AuthFooter
                    message="Lembrou sua senha?"
                    actionText="Voltar ao login"
                    onPress={onVoltar}
                />

            </AuthContainer>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    description: {
        fontSize: 14,
        lineHeight: 21,
        color: '#777',
        marginBottom: 8,
    },

    button: {
        height: 40,
        width: '100%',
    },
});
