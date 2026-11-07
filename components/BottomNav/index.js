import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import styles from './styles';

const ABAS = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'materias', label: 'Matérias', icon: 'book-outline' },
  { id: 'tarefas', label: 'Tarefas', icon: 'checkbox-outline' },
  { id: 'progresso', label: 'Progresso', icon: 'bar-chart-outline' },
];

export default function BottomNav({ abaAtiva, onChange }) {
  return (
    <View style={styles.container}>
      {ABAS.map((aba) => {
        const ativa = aba.id === abaAtiva;
        return (
          <Pressable key={aba.id} style={styles.item} onPress={() => onChange(aba.id)}>
            <Ionicons name={aba.icon} size={26} color={ativa ? colors.primary : colors.muted} />
            <Text style={[styles.label, ativa && styles.labelActive]}>{aba.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
