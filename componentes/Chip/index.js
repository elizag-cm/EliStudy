import { Pressable, Text } from 'react-native';
import styles from './styles';

/** Chip usado nos filtros (Todas, Tecnologia...) e nas seleções dos modais. */
export default function Chip({ label, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.active]}>
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </Pressable>
  );
}
