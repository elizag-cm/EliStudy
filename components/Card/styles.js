import { StyleSheet } from 'react-native';
import { colors, radius } from '../../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
  },
});
