import { View, Text } from 'react-native';
import ProgressBar from '../ProgressBar';
import styles from './ConclusaoArea.styles';

/** Linha "área + percentual + barra colorida". */
export default function ConclusaoArea({ nome, percentual, cor }) {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={[styles.percentual, { color: cor }]}>{percentual}%</Text>
      </View>
      <ProgressBar percentual={percentual} color={cor} height={5} />
    </View>
  );
}
