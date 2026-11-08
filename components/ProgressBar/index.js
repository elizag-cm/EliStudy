import { View } from 'react-native';
import { colors } from '../../theme';
import styles from './styles';

/**
 * Barra de progresso reutilizável.
 * percentual: número de 0 a 100   color: cor do preenchimento   height: altura da barra
 */
export default function ProgressBar({ percentual = 0, color = colors.primary, height, style }) {
  return (
    <View style={[styles.track, height && { height }, style]}>
      <View style={[styles.fill, { width: `${percentual}%`, backgroundColor: color }]} />
    </View>
  );
}
