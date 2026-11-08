import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Card';
import { colors } from '../../theme';
import styles from './CronogramaItem.styles';

/** Item da seção "Hoje": horário, matéria, assunto e botão de iniciar/pausar. */
export default function CronogramaItem({ item, emAndamento, onToggle }) {
  const { hora, materia, assunto, cor } = item;
  return (
    <Card accent={cor} style={styles.card}>
      <View style={styles.info}>
        <Text style={[styles.hora, { color: cor }]}>{hora}</Text>
        <Text style={styles.materia}>{materia}</Text>
        <Text style={styles.assunto}>{assunto}</Text>
      </View>
      <Pressable
        onPress={onToggle}
        hitSlop={8}
        style={[styles.botao, emAndamento && styles.botaoAtivo]}
      >
        <Ionicons
          name={emAndamento ? 'pause' : 'play'}
          size={16}
          color={emAndamento ? colors.primaryText : colors.primary}
        />
      </Pressable>
    </Card>
  );
}
