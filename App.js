import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomNav from './components/BottomNav';
import MateriasScreen from './screens/MateriasScreen';
import TarefasScreen from './screens/TarefasScreen';
import { colors } from './theme';

function EmConstrucao({ nome }) {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTexto}>{nome} em construção</Text>
    </View>
  );
}

export default function App() {
  const [aba, setAba] = useState('materias');

  function renderTela() {
    if (aba === 'materias') return <MateriasScreen />;
    if (aba === 'tarefas') return <TarefasScreen />;
    if (aba === 'inicio') return <EmConstrucao nome="Início" />;
    return <EmConstrucao nome="Progresso" />;
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
  placeholder: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  placeholderTexto: { color: colors.text, fontSize: 16 },
});
