import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Chip from '../components/Chip';
import TarefaCard from '../components/tarefas/TarefaCard';
import ModalNovaTarefa from '../components/modal/ModalNovaTarefa';
import styles from './TarefasScreen.styles';

// Padrão: só as pendentes. Concluídas somem da lista principal.
const FILTROS = ['Pendentes', 'Concluídas', 'Todas'];

const TAREFAS_INICIAIS = [
  { id: 1, titulo: 'Resolver Lista 4 de Cálculo', materia: 'Cálculo Diferencial', prioridade: 'Alta', concluida: false },
  { id: 2, titulo: 'Estudar Banco de dados', materia: 'Banco de Dados', prioridade: 'Alta', concluida: false },
  { id: 3, titulo: 'Terminar Tarefa de Jogos', materia: 'Redes de computadores', prioridade: 'Media', concluida: false },
];

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState(TAREFAS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Pendentes');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const tarefasFiltradas = tarefas.filter((t) => {
    const passaFiltro =
      filtro === 'Todas' ||
      (filtro === 'Pendentes' && !t.concluida) ||
      (filtro === 'Concluídas' && t.concluida);
    const termo = busca.toLowerCase();
    const passaBusca =
      t.titulo.toLowerCase().includes(termo) || t.materia.toLowerCase().includes(termo);
    return passaFiltro && passaBusca;
  });

  function abrirNova() {
    setTarefaEditando(null);
    setModalVisivel(true);
  }

  function abrirEdicao(tarefa) {
    setTarefaEditando(tarefa);
    setModalVisivel(true);
  }

  function fecharModal() {
    setModalVisivel(false);
    setTarefaEditando(null);
  }

  function salvarTarefa(dados) {
    if (tarefaEditando) {
      setTarefas((atual) => atual.map((t) => (t.id === tarefaEditando.id ? { ...t, ...dados } : t)));
    } else {
      setTarefas((atual) => [...atual, { ...dados, id: Date.now(), concluida: false }]);
    }
    fecharModal();
  }

  function alternarTarefa(id) {
    setTarefas((atual) => atual.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)));
  }

  function removerTarefa(id) {
    setTarefas((atual) => atual.filter((t) => t.id !== id));
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.titulo}>Tarefas e Metas</Text>
          <Button title="Tarefa" icon="add" onPress={abrirNova} />
        </View>
        <Text style={styles.subtitulo}>Organize sua rotina acadêmica</Text>

        <Input icon="search" placeholder="Buscar Matéria" value={busca} onChangeText={setBusca} />

        <View style={styles.filtros}>
          {FILTROS.map((f) => (
            <Chip key={f} label={f} active={filtro === f} onPress={() => setFiltro(f)} />
          ))}
        </View>

        {tarefasFiltradas.length === 0 && (
          <Text style={styles.vazio}>Nenhuma tarefa encontrada.</Text>
        )}

        {tarefasFiltradas.map((t) => (
          <TarefaCard
            key={t.id}
            tarefa={t}
            onToggle={() => alternarTarefa(t.id)}
            onEdit={() => abrirEdicao(t)}
            onDelete={() => removerTarefa(t.id)}
          />
        ))}
      </ScrollView>

      <ModalNovaTarefa
        visible={modalVisivel}
        tarefa={tarefaEditando}
        onClose={fecharModal}
        onSave={salvarTarefa}
      />
    </View>
  );
}
