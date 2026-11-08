import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 160 },
  coluna: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  valor: { color: colors.text, fontSize: 9, marginBottom: 4 },
  barra: { width: 22, borderRadius: 4, backgroundColor: '#1F9D4D' },
  rotulo: { color: colors.text, fontSize: 10, marginTop: 6 },
  rotuloAtivo: { color: colors.primary, fontWeight: '700' },
});
