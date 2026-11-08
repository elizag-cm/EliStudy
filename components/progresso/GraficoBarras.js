import { View, Text } from 'react-native';
import { colors } from '../../theme';
import styles from './GraficoBarras.styles';

const ALTURA_MAX = 110;

const formatar = (n) => n.toFixed(1).replace('.', ',');

/**
 * Gráfico de barras simples.
 * dados: [{ rotulo: 'Seg', valor: 2.5 }, ...]   destaque: índice da barra do dia atual
 */
export default function GraficoBarras({ dados, destaque }) {
  const maior = Math.max(...dados.map((d) => d.valor), 1);
  return (
    <View style={styles.container}>
      {dados.map((d, i) => (
        <View key={d.rotulo} style={styles.coluna}>
          <Text style={styles.valor}>{formatar(d.valor)}</Text>
          <View
            style={[
              styles.barra,
              { height: Math.max((d.valor / maior) * ALTURA_MAX, 4) },
              i === destaque && { backgroundColor: colors.primary },
            ]}
          />
          <Text style={[styles.rotulo, i === destaque && styles.rotuloAtivo]}>{d.rotulo}</Text>
        </View>
      ))}
    </View>
  );
}
