import { View } from 'react-native';
import styles from './styles';

/** Cartão reutilizável. accent: cor opcional da faixa lateral esquerda. */
export default function Card({ children, accent, style }) {
  return (
    <View style={[styles.card, accent && { borderLeftColor: accent, borderLeftWidth: 3 }, style]}>
      {children}
    </View>
  );
}
