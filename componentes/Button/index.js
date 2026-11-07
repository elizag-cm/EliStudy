import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import styles from './styles';

/**
 * Botão reutilizável.
 * variant: 'primary' | 'secondary'   size: 'small' | 'large'   shape: 'rounded' | 'pill'
 */
export default function Button({
  title,
  onPress,
  icon,
  variant = 'primary',
  size = 'small',
  shape = 'rounded',
  style,
}) {
  const secondary = variant === 'secondary';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        size === 'large' && styles.large,
        shape === 'pill' && styles.pill,
        secondary && styles.secondary,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={size === 'large' ? 18 : 14}
          color={secondary ? colors.text : colors.primaryText}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.text,
          size === 'large' && styles.textLarge,
          secondary && styles.textSecondary,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
