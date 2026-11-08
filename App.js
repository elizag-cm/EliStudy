import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNav from './components/BottomNav';
import InicioScreen from './screens/InicioScreen';
import ProgressoScreen from './screens/ProgressoScreen';
import MateriasScreen from './screens/MateriasScreen';
import TarefasScreen from './screens/TarefasScreen';
import { colors } from './theme';

export default function App() {
  const [aba, setAba] = useState('inicio');

  function renderTela() {
    if (aba === 'materias') return <MateriasScreen />;
    if (aba === 'tarefas') return <TarefasScreen />;
    if (aba === 'inicio') return <InicioScreen onNavegar={setAba} />;
    return <ProgressoScreen />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.tela}>{renderTela()}</View>
      <BottomNav abaAtiva={aba} onChange={setAba} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  tela: { flex: 1 },
});
