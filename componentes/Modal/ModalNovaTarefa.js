import { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import Chip from '../Chip';
import { colors } from '../../theme';
import styles from './Modal.styles';

const PRIORIDADES = ['Alta', 'Media', 'Baixa'];

export default function ModalNovaTarefa({ visible, onClose, onSave }) {
  const [titulo, setTitulo] = useState('');
  const [materia, setMateria] = useState('');
  const [prioridade, setPrioridade] = useState('Media');
  const [erro, setErro] = useState('');

  function limpar() {
    setTitulo('');
    setMateria('');
    setPrioridade('Media');
    setErro('');
  }

  function fechar() {
    limpar();
    onClose();
  }

  function salvar() {
    if (!titulo.trim()) return setErro('Informe o título da tarefa.');
    if (!materia.trim()) return setErro('Informe a matéria da tarefa.');

    onSave({ titulo: titulo.trim(), materia: materia.trim(), prioridade, concluida: false });
    limpar();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={fechar}>
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Nova tarefa</Text>
            <Pressable onPress={fechar} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled">
            <Input label="Título" placeholder="Ex: Resolver lista 4" value={titulo} onChangeText={setTitulo} />
            <Input label="Matéria" placeholder="Ex: Cálculo Diferencial" value={materia} onChangeText={setMateria} />

            <Text style={styles.label}>Prioridade</Text>
            <View style={styles.chips}>
              {PRIORIDADES.map((p) => (
                <Chip key={p} label={p} active={prioridade === p} onPress={() => setPrioridade(p)} />
              ))}
            </View>

            {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

            <View style={styles.botoes}>
              <Button title="Cancelar" variant="secondary" size="large" style={styles.botao} onPress={fechar} />
              <Button title="Salvar" size="large" style={styles.botao} onPress={salvar} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
