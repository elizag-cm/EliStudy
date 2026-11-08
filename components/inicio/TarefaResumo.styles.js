import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingVertical: 12 },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  titulo: { flex: 1, color: colors.title, fontSize: 13, fontWeight: '700' },
  tituloFeito: { textDecorationLine: 'line-through', opacity: 0.5 },
  direita: { alignItems: 'flex-end', marginLeft: 10 },
  prazo: { color: colors.text, fontSize: 10, marginTop: 4 },
});
