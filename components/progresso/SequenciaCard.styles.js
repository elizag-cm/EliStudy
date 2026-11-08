import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.orange,
    backgroundColor: '#2A1F17',
    padding: 16,
  },
  icone: {
    width: 52,
    height: 52,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  info: { flex: 1 },
  titulo: { color: colors.text, fontSize: 12 },
  dias: { color: colors.title, fontSize: 16, fontWeight: '800', marginVertical: 2 },
  msg: { color: colors.text, fontSize: 11 },
});
