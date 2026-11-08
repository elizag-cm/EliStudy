import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import styles from './styles';

/**
 * Botão reutilizável.
 * variant: 'primary' | 'secondary' | 'outline'   size: 'small' | 'large'   shape: 'rounded' | 'pill'
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
  const outline = variant === 'outline';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        size === 'large' && styles.large,
        shape === 'pill' && styles.pill,
        secondary && styles.secondary,
        outline && styles.outline,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={size === 'large' ? 18 : 14}
          color={secondary ? colors.text : outline ? colors.primary : colors.primaryText}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.text,
          size === 'large' && styles.textLarge,
          secondary && styles.textSecondary,
          outline && styles.textOutline,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
