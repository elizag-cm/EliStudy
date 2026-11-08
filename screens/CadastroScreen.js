
import { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';

import AuthHeader from '../components/auth/AuthHeader';
import AuthContainer from '../components/auth/AuthContainer';
import AuthInput from '../components/auth/AuthInput';
import AuthFooter from '../components/auth/AuthFooter';
import GoogleButton from '../components/auth/GoogleButton';
import Button from '../components/Button';

import { colors } from '../theme';

export default function CadastroScreen({ onCadastro, onVoltar }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function cadastrar() {
        if (
            !nome.trim() ||
            !email.trim() ||
            !senha.trim() ||
            !confirmarSenha.trim()
        ) {
            Alert.alert('Atenção', 'Preencha todos os campos.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
            return;
        }

        if (senha.length < 8) {
            Alert.alert(
                'Senha inválida',
                'A senha deve possuir pelo menos 8 caracteres.'
            );
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert('Atenção', 'As senhas não coincidem.');
            return;
        }

        onCadastro();
    }

    return (
        <View style={styles.container}>
            <AuthHeader
                title="Criar conta"
                subtitle="Comece a organizar seus estudos!"
            />

            <AuthContainer>
                <AuthInput
                    label="Nome completo"
                    icon="account-outline"
                    placeholder="Digite seu nome"
                    autoCapitalize="words"
                    value={nome}
                    onChangeText={setNome}
                />

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

                <AuthInput
                    label="Senha"
                    placeholder="Mínimo de 8 caracteres"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <AuthInput
                    label="Confirmar senha"
                    placeholder="Digite sua senha novamente"
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <Button
                    style={styles.button}
                    title="Criar conta"
                    onPress={cadastrar}
                />

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <View>
                        <AuthFooter
                            message=""
                            actionText="OU"
                            onPress={() => { }}
                        />
                    </View>
                    <View style={styles.divider} />
                </View>

                <GoogleButton
                    onPress={() =>
                        Alert.alert('Google', 'Cadastro com Google em breve!')
                    }
                />

                <AuthFooter
                    message="Já possui uma conta?"
                    actionText="Entrar"
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

    button: {
        height: 44,
        width: '100%',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
    },
});
