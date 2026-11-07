import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  chip: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 8,
  },
  active: { backgroundColor: colors.primary, borderColor: colors.primary },
  text: { color: colors.title, fontSize: 12 },
  textActive: { color: colors.primaryText, fontWeight: '700' },
});
