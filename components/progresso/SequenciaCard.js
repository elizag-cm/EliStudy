import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Card';
import { colors } from '../../theme';
import styles from './SequenciaCard.styles';

/** Cartão laranja com a sequência de dias seguidos de estudo. */
export default function SequenciaCard({ dias }) {
  return (
    <Card style={styles.card}>
      <View style={styles.icone}>
        <Ionicons name="flame" size={28} color={colors.orange} />
      </View>
      <View style={styles.info}>
        <Text style={styles.titulo}>Sequência de Estudos</Text>
        <Text style={styles.dias}>{dias} DIAS SEGUIDOS</Text>
        <Text style={styles.msg}>Mantenha o ritmo para bater a sua meta semanal.</Text>
      </View>
    </Card>
  );
}
