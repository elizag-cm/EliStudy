import { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import ProgressBar from '../ProgressBar';
import { calcularProgresso, textoProva } from '../../utils/progresso';
import { colors } from '../../theme';
import modalStyles from './Modal.styles';
import styles from './ModalMateria.styles';

/** Detalhes da matéria: descrição, progresso e checklist de conteúdos. */
export default function ModalDetalheMateria({ materia, onClose, onToggleTopico, onAddTopico }) {
  const [novo, setNovo] = useState('');

  if (!materia) return null;

  const { total, concluidos, percentual } = calcularProgresso(materia.topicos);

  function adicionar() {
    const titulo = novo.trim();
    if (!titulo) return;
    onAddTopico(materia.id, titulo);
    setNovo('');
  }

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={modalStyles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={modalStyles.sheet}>
          <View style={modalStyles.header}>
            <Text style={[modalStyles.titulo, { flex: 1, marginRight: 12 }]}>{materia.nome}</Text>
            <Pressable onPress={onClose} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled">
            <Text style={styles.meta}>
              {materia.categoria} · {textoProva(materia.diasProva)}
            </Text>
            {materia.descricao !== '' && materia.descricao != null && (
              <Text style={styles.descricao}>{materia.descricao}</Text>
            )}

            <View style={styles.progressoRow}>
              <Text style={styles.progressoLabel}>Progresso</Text>
              <Text style={styles.progressoValor}>
                {concluidos}/{total} · {percentual}%
              </Text>
            </View>
            <ProgressBar percentual={percentual} />

            <Text style={styles.secao}>Conteúdos</Text>
            {materia.topicos.length === 0 && (
              <Text style={styles.vazio}>Nenhum conteúdo ainda. Adicione abaixo.</Text>
            )}
            {materia.topicos.map((t) => (
              <Pressable key={t.id} style={styles.item} onPress={() => onToggleTopico(materia.id, t.id)}>
                <View style={[styles.checkbox, t.concluido && styles.checkboxOn]}>
                  {t.concluido && <Ionicons name="checkmark" size={14} color={colors.primaryText} />}
                </View>
                <Text style={[styles.itemTexto, t.concluido && styles.itemFeito]}>{t.titulo}</Text>
              </Pressable>
            ))}

            <View style={[styles.linha, { marginTop: 6 }]}>
              <Input
                style={{ flex: 1 }}
                placeholder="Novo conteúdo"
                value={novo}
                onChangeText={setNovo}
                onSubmitEditing={adicionar}
              />
              <Button title="Adicionar" size="large" style={styles.botaoLinha} onPress={adicionar} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
