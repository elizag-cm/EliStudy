import { View, Text } from 'react-native';
import { colors } from '../../theme';
import styles from './styles';

const corPrioridade = {
  Alta: colors.danger,
  Media: colors.warning,
  Baixa: colors.primary,
};

const rotulo = { Alta: 'Alta', Media: 'Média', Baixa: 'Baixa' };

/** Selo de prioridade (Alta | Media | Baixa). */
export default function PrioridadeBadge({ prioridade }) {
  return (
    <View style={[styles.badge, { backgroundColor: corPrioridade[prioridade] }]}>
      <Text style={styles.texto}>{rotulo[prioridade]}</Text>
    </View>
  );
}
