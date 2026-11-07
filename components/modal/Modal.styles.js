import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    paddingBottom: 32,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  titulo: { color: colors.title, fontSize: 20, fontWeight: '800' },
  label: { color: colors.text, fontSize: 13, marginBottom: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 14 },
  erro: { color: colors.danger, fontSize: 12, marginBottom: 10 },
  botoes: { flexDirection: 'row', gap: 12, marginTop: 6 },
  botao: { flex: 1 },
});
