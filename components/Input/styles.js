import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { color: colors.text, fontSize: 13, marginBottom: 6 },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: 48,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, color: colors.title, fontSize: 15 },
});
