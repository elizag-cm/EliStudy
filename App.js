import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNav from './components/BottomNav';
import InicioScreen from './screens/InicioScreen';
import ProgressoScreen from './screens/ProgressoScreen';
import MateriasScreen from './screens/MateriasScreen';
import TarefasScreen from './screens/TarefasScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import { colors } from './theme';

export default function App() {
  const [aba, setAba] = useState('inicio');
  const [logado, setLogado] = useState(false);
  const [telaAuth, setTelaAuth] = useState('login');

  function renderTela() {
    if (!logado) {
      if (telaAuth === 'cadastro') {
        return (
          <CadastroScreen
            onVoltar={() => setTelaAuth('login')}
            onCadastro={() => setLogado(true)}
          />
        );
      }
      if (telaAuth === 'recuperarSenha') {
        return (
            <ForgotPasswordScreen
                onVoltar={() => setTelaAuth('login')}
            />
        );
      }

      return (
        <LoginScreen
          onLogin={() => setLogado(true)}
          onCadastro={() => setTelaAuth('cadastro')}
          onRecuperarSenha={() => setTelaAuth('recuperarSenha')}
          />
      )
    }
    if (aba === 'materias') return <MateriasScreen />;
    if (aba === 'tarefas') return <TarefasScreen />;
    if (aba === 'inicio') return <InicioScreen onNavegar={setAba} />;
    return <ProgressoScreen />;
  }

  return (
    <View style={styles.container}>

        <StatusBar style="light" />

        <View style={styles.tela}>
          {renderTela()}
        </View>

        {logado && (
          <BottomNav
            abaAtiva={aba}
            onChange={setAba} 
          />
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  tela: { flex: 1 },
});
