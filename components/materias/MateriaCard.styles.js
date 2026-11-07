import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 16,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  nome: { color: colors.text, fontSize: 16, fontWeight: '800', flex: 1 },
  categoria: { color: colors.text, fontSize: 11, marginTop: 2, textTransform: 'uppercase' },
  percentual: { color: colors.primary, fontSize: 12, fontWeight: '700' },
  progressoRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  progressoLabel: { color: colors.text, fontSize: 11 },
  progressoValor: { color: colors.title, fontSize: 11, fontWeight: '700' },
  barra: { marginTop: 4 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  prova: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  provaTexto: { color: colors.text, fontSize: 11, marginLeft: 8 },
  ver: { color: colors.primary, fontSize: 11, marginRight: 16 },
  acoes: { flexDirection: 'row', alignItems: 'center' },
});
