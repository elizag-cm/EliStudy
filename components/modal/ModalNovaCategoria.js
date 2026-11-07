import { useState } from 'react';
import { Modal, View, Text, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import { colors } from '../../theme';
import styles from './Modal.styles';

export default function ModalNovaCategoria({ visible, onClose, onSave, categorias }) {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  function fechar() {
    setNome('');
    setErro('');
    onClose();
  }

  function salvar() {
    const nomeCat = nome.trim();
    if (!nomeCat) return setErro('Informe o nome da categoria.');
    if (categorias.some((c) => c.toLowerCase() === nomeCat.toLowerCase())) {
      return setErro('Essa categoria já existe.');
    }
    onSave(nomeCat);
    setNome('');
    setErro('');
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={fechar}>
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Nova categoria</Text>
            <Pressable onPress={fechar} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <Input
            label="Nome da categoria"
            placeholder="Ex: Concursos, Idiomas, ENEM"
            value={nome}
            onChangeText={setNome}
          />

          {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

          <View style={styles.botoes}>
            <Button title="Cancelar" variant="secondary" size="large" style={styles.botao} onPress={fechar} />
            <Button title="Salvar" size="large" style={styles.botao} onPress={salvar} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
