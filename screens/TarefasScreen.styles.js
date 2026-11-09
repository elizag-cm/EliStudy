import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginRight: 28 },
  titulo: { color: colors.title, fontSize: 28, fontWeight: '800' },
  subtitulo: { color: colors.text, fontSize: 14, marginTop: 2, marginBottom: 24 },
  filtros: { flexDirection: 'row', marginBottom: 18 },
  vazio: { color: colors.text, textAlign: 'center', marginTop: 40 },
});
