import { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import Input from '../Input';
import Chip from '../Chip';
import { colors } from '../../theme';
import modalStyles from './Modal.styles';
import styles from './ModalMateria.styles';

export default function ModalNovaMateria({ visible, onClose, onSave, categorias, onAddCategoria }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState(categorias[0]);
  const [diasProva, setDiasProva] = useState('');
  const [conteudos, setConteudos] = useState(['']);
  const [criandoCategoria, setCriandoCategoria] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [erro, setErro] = useState('');

  function limpar() {
    setNome('');
    setDescricao('');
    setCategoria(categorias[0]);
    setDiasProva('');
    setConteudos(['']);
    setCriandoCategoria(false);
    setNovaCategoria('');
    setErro('');
  }

  function fechar() {
    limpar();
    onClose();
  }

  // Sempre que o último campo é preenchido, aparece um novo campo vazio.
  function alterarConteudo(index, texto) {
    setConteudos((atual) => {
      const novos = [...atual];
      novos[index] = texto;
      if (index === novos.length - 1 && texto.trim() !== '') novos.push('');
      return novos;
    });
  }

  function removerConteudo(index) {
    setConteudos((atual) => atual.filter((_, i) => i !== index));
  }

  function confirmarCategoria() {
    const nomeCat = novaCategoria.trim();
    if (!nomeCat) return;
    const existente = categorias.find((c) => c.toLowerCase() === nomeCat.toLowerCase());
    if (existente) {
      setCategoria(existente);
    } else {
      onAddCategoria(nomeCat);
      setCategoria(nomeCat);
    }
    setNovaCategoria('');
    setCriandoCategoria(false);
  }

  function salvar() {
    if (!nome.trim()) return setErro('Informe o nome da matéria.');

    const dias = parseInt(diasProva, 10);
    const titulos = conteudos.map((c) => c.trim()).filter((c) => c !== '');

    onSave({
      nome: nome.trim(),
      descricao: descricao.trim(),
      categoria,
      diasProva: Number.isNaN(dias) ? null : dias,
      topicos: titulos.map((titulo, i) => ({ id: Date.now() + i, titulo, concluido: false })),
    });
    limpar();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={fechar}>
      <KeyboardAvoidingView
        style={modalStyles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={modalStyles.sheet}>
          <View style={modalStyles.header}>
            <Text style={modalStyles.titulo}>Nova matéria</Text>
            <Pressable onPress={fechar} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView keyboardShouldPersistTaps="handled">
            <Input label="Nome da matéria" placeholder="Ex: Banco de Dados" value={nome} onChangeText={setNome} />
            <Input
              label="Descrição (opcional)"
              placeholder="Ex: Conteúdo da prova 2"
              value={descricao}
              onChangeText={setDescricao}
            />

            <Text style={modalStyles.label}>Categoria</Text>
            <View style={modalStyles.chips}>
              {categorias.map((c) => (
                <Chip key={c} label={c} active={categoria === c} onPress={() => setCategoria(c)} />
              ))}
              <Chip label="+ Nova" active={criandoCategoria} onPress={() => setCriandoCategoria((v) => !v)} />
            </View>

            {criandoCategoria && (
              <View style={styles.linha}>
                <Input
                  style={{ flex: 1 }}
                  placeholder="Nome da nova categoria"
                  value={novaCategoria}
                  onChangeText={setNovaCategoria}
                />
                <Button title="Adicionar" size="large" style={styles.botaoLinha} onPress={confirmarCategoria} />
              </View>
            )}

            <Input
              label="Prova em quantos dias? (opcional)"
              placeholder="Ex: 7"
              keyboardType="numeric"
              value={diasProva}
              onChangeText={setDiasProva}
            />

            <Text style={modalStyles.label}>Conteúdos</Text>
            <Text style={styles.ajuda}>Um novo campo aparece conforme você preenche. Não há limite.</Text>
            {conteudos.map((c, i) => (
              <View key={i} style={styles.linha}>
                <Input
                  style={{ flex: 1 }}
                  placeholder={`Conteúdo ${i + 1}`}
                  value={c}
                  onChangeText={(texto) => alterarConteudo(i, texto)}
                />
                {i !== conteudos.length - 1 && (
                  <Pressable style={styles.remover} onPress={() => removerConteudo(i)} hitSlop={8}>
                    <Ionicons name="close-circle-outline" size={22} color={colors.text} />
                  </Pressable>
                )}
              </View>
            ))}

            {erro !== '' && <Text style={modalStyles.erro}>{erro}</Text>}

            <View style={modalStyles.botoes}>
              <Button title="Cancelar" variant="secondary" size="large" style={modalStyles.botao} onPress={fechar} />
              <Button title="Salvar" size="large" style={modalStyles.botao} onPress={salvar} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
