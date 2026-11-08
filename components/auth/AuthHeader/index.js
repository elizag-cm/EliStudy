import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme';

export default function AuthHeader({ title, subtitle }) {
    return (
        <View style={styles.container}>
            <View style={styles.icone}>
                    <Ionicons name="school-outline" size={40} color={colors.title} />
                    <Text style={styles.logo}>EliStudy</Text>
            </View>
            
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: colors.background,
    },

    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.title,
        marginBottom: 0,
    },

    title: {
        fontSize: 22,
        fontWeight: 'semi-bold',
        color: colors.title,
    },

    subtitle: {
        fontSize: 14,
        color: colors.title,
        marginTop: 6,
    },
    icone: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },  
});