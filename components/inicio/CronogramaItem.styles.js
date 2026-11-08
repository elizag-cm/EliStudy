import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  info: { flex: 1 },
  hora: { fontSize: 10, fontWeight: '700' },
  materia: { color: colors.title, fontSize: 15, fontWeight: '800', marginTop: 2 },
  assunto: { color: colors.text, fontSize: 11, marginTop: 2 },
  botao: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoAtivo: { backgroundColor: colors.primary },
});
