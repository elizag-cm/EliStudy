import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { colors } from '../theme';
import AuthHeader from '../components/auth/AuthHeader';
import AuthFooter from '../components/auth/AuthFooter';
import AuthContainer from '../components/auth/AuthContainer';
import AuthInput from '../components/auth/AuthInput';
import Button from '../components/Button';
import GoogleButton from '../components/auth/GoogleButton';


export default function LoginScreen({
    onLogin,
    onCadastro,
    onRecuperarSenha
}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function login() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert('Email', 'Preencha todos os campos.');
            return;
        }
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
            return;
        }

        onLogin();
    }

    return (
        <View style={styles.container}>
            <AuthHeader
                title="Organize seus estudos"
            />
            <AuthContainer>
                <AuthInput
                    label="E-mail"
                    placeholder="seu@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <AuthInput
                    label="Senha"
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity onPress={onRecuperarSenha}>
                    <Text style={styles.forgotPassword}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                <Button style={styles.button} title="Entrar" onPress={login} />

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OU</Text>
                    <View style={styles.divider} />
                </View>

                <GoogleButton
                    onPress={() => Alert.alert('Google', 'Login com Google em breve!')}
                />

                <AuthFooter
                    message="Ainda não tem uma conta?"
                    actionText="Cadastrar-se"
                    onPress={onCadastro}
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
    },

    forgotPassword: {
        color: colors.indigo,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'right',
    },

    footerText: {
        color: colors.title,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 12,
    },

    cadastrar: {
        color: colors.primary,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 12,
    },

    button: {
        height: 40,
        width: '100%',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 8,
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
    },

    dividerText: {
        color: colors.border,
        fontSize: 12,
        fontWeight: 'bold',
    },

});