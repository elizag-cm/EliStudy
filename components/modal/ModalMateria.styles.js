import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  linha: { flexDirection: 'row', alignItems: 'flex-start' },
  botaoLinha: { marginLeft: 10 },
  remover: { marginLeft: 10, marginTop: 13 },
  ajuda: { color: colors.muted, fontSize: 12, marginBottom: 10 },

  meta: { color: colors.text, fontSize: 12, textTransform: 'uppercase', marginBottom: 8 },
  descricao: { color: colors.text, fontSize: 14, lineHeight: 20, marginBottom: 16 },
  progressoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressoLabel: { color: colors.text, fontSize: 12 },
  progressoValor: { color: colors.primary, fontSize: 12, fontWeight: '700' },
  secao: { color: colors.title, fontSize: 16, fontWeight: '800', marginTop: 20, marginBottom: 10 },
  vazio: { color: colors.text, fontSize: 13, marginBottom: 12 },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  itemTexto: { flex: 1, color: colors.title, fontSize: 14 },
  itemFeito: { textDecorationLine: 'line-through', opacity: 0.5 },
});
