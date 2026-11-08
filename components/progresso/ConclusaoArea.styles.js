import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: { marginBottom: 14 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  nome: { color: colors.title, fontSize: 12 },
  percentual: { fontSize: 12, fontWeight: '700' },
});
