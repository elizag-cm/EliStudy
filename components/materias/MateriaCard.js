import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from '../ProgressBar';
import { calcularProgresso, textoProva } from '../../utils/progresso';
import { colors } from '../../theme';
import styles from './MateriaCard.styles';

/** Toque no card abre os detalhes (checklist). A lixeira remove a matéria. */
export default function MateriaCard({ materia, onPress, onDelete }) {
  const { nome, categoria, topicos, diasProva } = materia;
  const { total, concluidos, percentual } = calcularProgresso(topicos);

  return (
    <Pressable style={styles.card} onPress={onPress}>
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
          {concluidos}/{total}
        </Text>
      </View>
      <ProgressBar percentual={percentual} style={styles.barra} />

      <View style={styles.footer}>
        <View style={styles.prova}>
          <Ionicons name="timer-outline" size={18} color={colors.primary} />
          <Text style={styles.provaTexto}>{textoProva(diasProva)}</Text>
        </View>
        <View style={styles.acoes}>
          <Text style={styles.ver}>Ver conteúdos</Text>
          <Pressable onPress={onDelete} hitSlop={8}>
            <Ionicons name="trash-outline" size={22} color={colors.text} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
