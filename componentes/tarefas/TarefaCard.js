import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import styles from './TarefaCard.styles';

const corPrioridade = {
  Alta: colors.danger,
  Media: colors.warning,
  Baixa: colors.primary,
};

export default function TarefaCard({ tarefa, onToggle, onDelete }) {
  const { titulo, materia, prioridade, concluida } = tarefa;
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggle} hitSlop={8} style={[styles.checkbox, concluida && styles.checkboxOn]}>
        {concluida && <Ionicons name="checkmark" size={13} color={colors.primaryText} />}
      </Pressable>

      <View style={styles.info}>
        <Text style={[styles.titulo, concluida && styles.tituloFeito]} numberOfLines={1}>
          {titulo}
        </Text>
        <Text style={styles.materia}>{materia}</Text>
      </View>

      <View style={[styles.prioridade, { borderColor: corPrioridade[prioridade] }]}>
        <Text style={styles.prioridadeTexto}>{prioridade}</Text>
      </View>

      <Pressable onPress={onDelete} hitSlop={8}>
        <Ionicons name="trash-outline" size={22} color={colors.text} />
      </Pressable>
    </View>
  );
}
