import { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import Chip from '../Chip';
import { colors } from '../../theme';
import styles from './Modal.styles';

const CATEGORIAS = ['Tecnologia', 'Exatas', 'Humanas', 'BNCC'];

export default function ModalNovaMateria({ visible, onClose, onSave }) {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [totalTopicos, setTotalTopicos] = useState('');
  const [diasProva, setDiasProva] = useState('');
  const [erro, setErro] = useState('');

  function limpar() {
    setNome('');
    setCategoria(CATEGORIAS[0]);
    setTotalTopicos('');
    setDiasProva('');
    setErro('');
  }

  function fechar() {
    limpar();
    onClose();
  }

  function salvar() {
    const total = parseInt(totalTopicos, 10);
    if (!nome.trim()) return setErro('Informe o nome da matéria.');
    if (!total || total < 1) return setErro('Informe o total de tópicos (mínimo 1).');

    onSave({
      nome: nome.trim(),
      categoria,
      totalTopicos: total,
      topicosConcluidos: 0,
      diasProva: diasProva === '' ? null : parseInt(diasProva, 10),
    });
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
            <Text style={styles.titulo}>Nova matéria</Text>
            <Pressable onPress={fechar} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled">
            <Input label="Nome da matéria" placeholder="Ex: Banco de Dados" value={nome} onChangeText={setNome} />

            <Text style={styles.label}>Categoria</Text>
            <View style={styles.chips}>
              {CATEGORIAS.map((c) => (
                <Chip key={c} label={c} active={categoria === c} onPress={() => setCategoria(c)} />
              ))}
            </View>

            <Input
              label="Total de tópicos"
              placeholder="Ex: 20"
              keyboardType="numeric"
              value={totalTopicos}
              onChangeText={setTotalTopicos}
            />
            <Input
              label="Prova em quantos dias? (opcional)"
              placeholder="Ex: 7"
              keyboardType="numeric"
              value={diasProva}
              onChangeText={setDiasProva}
            />

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
