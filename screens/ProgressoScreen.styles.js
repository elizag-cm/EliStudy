import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40 },
  titulo: { color: colors.title, fontSize: 28, fontWeight: '800' },
  subtitulo: { color: colors.text, fontSize: 14, marginTop: 2, marginBottom: 20 },
  card: { marginTop: 16, padding: 16 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  cardTitulo: { color: colors.text, fontSize: 11, fontWeight: '700' },
  cardTituloEspaco: { marginBottom: 14 },
  total: { color: colors.primary, fontSize: 11, fontWeight: '700' },
  botao: { marginTop: 20 },
});
