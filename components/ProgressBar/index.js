import { View } from 'react-native';
import styles from './styles';

/** Barra de progresso reutilizável. percentual: número de 0 a 100. */
export default function ProgressBar({ percentual = 0, style }) {
  return (
    <View style={[styles.track, style]}>
      <View style={[styles.fill, { width: `${percentual}%` }]} />
    </View>
  );
}
