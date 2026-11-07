import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 14,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  info: { flex: 1 },
  titulo: { color: colors.text, fontSize: 15, fontWeight: '800' },
  tituloFeito: { textDecorationLine: 'line-through', opacity: 0.5 },
  materia: { color: colors.text, fontSize: 11, marginTop: 2 },
  prioridade: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 10,
  },
  prioridadeTexto: { color: colors.title, fontSize: 12 },
  editar: { marginRight: 12 },
});
