import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 18 },
  info: { flex: 1, marginRight: 16 },
  linha: { flexDirection: 'row', alignItems: 'center' },
  rotulo: { color: colors.text, fontSize: 12 },
  percentual: { color: colors.title, fontSize: 40, fontWeight: '800', marginVertical: 4 },
  variacao: { marginTop: 8 },
  variacaoTexto: { color: colors.primary, fontSize: 12 },
  icone: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
