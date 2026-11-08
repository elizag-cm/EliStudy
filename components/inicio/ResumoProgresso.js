import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../Card';
import ProgressBar from '../ProgressBar';
import { colors } from '../../theme';
import styles from './ResumoProgresso.styles';

/** Cartão "Seu progresso" da tela Início. */
export default function ResumoProgresso({ percentual, variacao }) {
  return (
    <Card style={styles.card}>
      <View style={styles.info}>
        <View style={styles.linha}>
          <Ionicons name="trending-up" size={12} color={colors.text} />
          <Text style={styles.rotulo}> Seu progresso</Text>
        </View>
        <Text style={styles.percentual}>{percentual}%</Text>
        <ProgressBar percentual={percentual} height={8} />
        <View style={[styles.linha, styles.variacao]}>
          <Ionicons name="arrow-up" size={12} color={colors.primary} />
          <Text style={styles.variacaoTexto}> +{variacao}% esta semana</Text>
        </View>
      </View>
      <View style={styles.icone}>
        <Ionicons name="school-outline" size={36} color={colors.primary} />
      </View>
    </Card>
  );
}
