import { View, Text, Pressable } from 'react-native';
import styles from './styles';

/** Título de seção com link opcional à direita (ex.: "Ver todas >"). */
export default function SectionHeader({ titulo, link, onPressLink }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {link && (
        <Pressable onPress={onPressLink} hitSlop={8}>
          <Text style={styles.link}>{link}</Text>
        </Pressable>
      )}
    </View>
  );
}
