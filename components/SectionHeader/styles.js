import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 24,
    marginBottom: 12,
  },
  titulo: { color: colors.title, fontSize: 20, fontWeight: '800' },
  link: { color: colors.primary, fontSize: 13 },
});
