import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import { colors } from '../../theme';
import styles from './MateriaCard.styles';

function textoProva(dias) {
  if (dias === null || dias === undefined) return 'Sem prova marcada';
  if (dias === 0) return 'Prova hoje';
  if (dias === 1) return 'Prova amanhã';
  return `Prova em ${dias} dias`;
}

export default function MateriaCard({ materia, onAddTopico, onDelete }) {
  const { nome, categoria, topicosConcluidos, totalTopicos, diasProva } = materia;
  const percentual = totalTopicos > 0 ? Math.round((topicosConcluidos / totalTopicos) * 100) : 0;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.categoria}>{categoria}</Text>
        </View>
        <Text style={styles.percentual}>{percentual}%</Text>
      </View>

      <View style={styles.progressoRow}>
        <Text style={styles.progressoLabel}>Progresso de tópicos</Text>
        <Text style={styles.progressoValor}>
          {topicosConcluidos}/{totalTopicos}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentual}%` }]} />
      </View>

      <View style={styles.footer}>
        <View style={styles.prova}>
          <Ionicons name="timer-outline" size={18} color={colors.primary} />
          <Text style={styles.provaTexto}>{textoProva(diasProva)}</Text>
        </View>
        <View style={styles.acoes}>
          <Button title="+1 Tópico" shape="pill" onPress={onAddTopico} />
          <Pressable onPress={onDelete} style={styles.lixeira} hitSlop={8}>
            <Ionicons name="trash-outline" size={22} color={colors.text} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
