import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  pill: { borderRadius: radius.pill },
  large: { paddingVertical: 14, borderRadius: radius.md },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: { color: colors.primaryText, fontWeight: '700', fontSize: 13 },
  textLarge: { fontSize: 15 },
  textSecondary: { color: colors.text },
  icon: { marginRight: 4 },
});
