import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ResumoProgresso from '../components/inicio/ResumoProgresso';
import CronogramaItem from '../components/inicio/CronogramaItem';
import TarefaResumo from '../components/inicio/TarefaResumo';
import SectionHeader from '../components/SectionHeader';
import { colors } from '../theme';
import styles from './InicioScreen.styles';

const USUARIO = 'Gilberto';

const CRONOGRAMA = [
  { id: 1, hora: '10:00', materia: 'Banco de Dados', assunto: 'Consultas SQL', cor: colors.primary },
  { id: 2, hora: '16:00', materia: 'Desenvolvimento Web', assunto: 'Revisar Django', cor: colors.blue },
];

const TAREFAS_INICIAIS = [
  { id: 1, titulo: 'Trabalho de Banco de Dados', prioridade: 'Alta', prazo: 'Amanhã', concluida: false },
  { id: 2, titulo: 'Exercícios do Python', prioridade: 'Media', prazo: '10/11', concluida: false },
  { id: 3, titulo: 'Revisar conteúdo de Redes', prioridade: 'Baixa', prazo: '12/11', concluida: false },
];

/** Tela Início. onNavegar(aba) troca a aba do app (ex.: 'tarefas', 'materias'). */
export default function InicioScreen({ onNavegar }) {
  const [tarefas, setTarefas] = useState(TAREFAS_INICIAIS);
  const [emAndamentoId, setEmAndamentoId] = useState(null);

  function alternarTarefa(id) {
    setTarefas((atual) => atual.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)));
  }

  // Só uma sessão de estudo fica ativa por vez.
  function alternarSessao(id) {
    setEmAndamentoId((atual) => (atual === id ? null : id));
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Olá, {USUARIO}</Text>
        <Text style={styles.subtitulo}>Vamos estudar hoje?</Text>

        <ResumoProgresso percentual={72} variacao={8} />

        <SectionHeader titulo="Hoje" link="Ver cronograma >" onPressLink={() => onNavegar('materias')} />
        {CRONOGRAMA.map((item) => (
          <CronogramaItem
            key={item.id}
            item={item}
            emAndamento={emAndamentoId === item.id}
            onToggle={() => alternarSessao(item.id)}
          />
        ))}

        <SectionHeader titulo="Próximas tarefas" link="Ver todas" onPressLink={() => onNavegar('tarefas')} />
        {tarefas.map((t) => (
          <TarefaResumo key={t.id} tarefa={t} onToggle={() => alternarTarefa(t.id)} />
        ))}
      </ScrollView>
    </View>
  );
}
