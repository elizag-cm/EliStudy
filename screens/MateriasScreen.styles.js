import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  titulo: { color: colors.title, fontSize: 28, fontWeight: '800' },
  subtitulo: { color: colors.text, fontSize: 14, marginTop: 2, marginBottom: 24 },
  filtros: { marginBottom: 18, flexGrow: 0 },
  vazio: { color: colors.text, textAlign: 'center', marginTop: 40 },
});
