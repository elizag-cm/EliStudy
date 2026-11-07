import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    paddingBottom: 14,
  },
  item: { flex: 1, alignItems: 'center' },
  label: { fontSize: 12, marginTop: 4, color: colors.muted },
  labelActive: { color: colors.primary },
});
