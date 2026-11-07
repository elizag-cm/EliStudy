import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import styles from './styles';

/** Campo de texto reutilizável (com label e ícone opcionais). */
export default function Input({ label, icon, style, ...props }) {
  return (
    <View style={[styles.wrapper, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.box}>
        {icon && (
          <Ionicons name={icon} size={20} color={colors.text} style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.text}
          {...props}
        />
      </View>
    </View>
  );
}
