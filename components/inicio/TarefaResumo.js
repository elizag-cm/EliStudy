import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Card';
import PrioridadeBadge from '../PrioridadeBadge';
import { colors } from '../../theme';
import styles from './TarefaResumo.styles';

/** Linha compacta de tarefa usada na lista "Próximas tarefas". */
export default function TarefaResumo({ tarefa, onToggle }) {
  const { titulo, prioridade, prazo, concluida } = tarefa;
  return (
    <Card style={styles.card}>
      <Pressable onPress={onToggle} hitSlop={8} style={[styles.checkbox, concluida && styles.checkboxOn]}>
        {concluida && <Ionicons name="checkmark" size={13} color={colors.primaryText} />}
      </Pressable>
      <Text style={[styles.titulo, concluida && styles.tituloFeito]} numberOfLines={1}>
        {titulo}
      </Text>
      <View style={styles.direita}>
        <PrioridadeBadge prioridade={prioridade} />
        <Text style={styles.prazo}>{prazo}</Text>
      </View>
    </Card>
  );
}
