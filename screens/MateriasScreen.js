import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Chip from '../components/Chip';
import MateriaCard from '../components/materias/MateriaCard';
import ModalNovaMateria from '../components/modal/ModalNovaMateria';
import ModalNovaCategoria from '../components/modal/ModalNovaCategoria';
import ModalDetalheMateria from '../components/modal/ModalDetalheMateria';
import styles from './MateriasScreen.styles';

const CATEGORIAS_INICIAIS = ['Tecnologia', 'Exatas', 'Humanas', 'BNCC'];

// Gera a lista de conteúdos; os primeiros "feitos" já vêm concluídos.
const topicos = (titulos, feitos) =>
  titulos.map((titulo, i) => ({ id: i + 1, titulo, concluido: i < feitos }));

const MATERIAS_INICIAIS = [
  {
    id: 1,
    nome: 'Programação Orientada a Objetos',
    categoria: 'Tecnologia',
    descricao: 'Fundamentos de orientação a objetos.',
    diasProva: 2,
    topicos: topicos(['Classes e objetos', 'Encapsulamento', 'Herança', 'Polimorfismo', 'Abstração', 'Interfaces'], 4),
  },
  {
    id: 2,
    nome: 'Banco de Dados',
    categoria: 'Tecnologia',
    descricao: 'Modelagem e consultas SQL.',
    diasProva: 2,
    topicos: topicos(['Modelagem ER', 'Normalização', 'SQL básico', 'Joins', 'Transações'], 2),
  },
  {
    id: 3,
    nome: 'Redes de Computadores',
    categoria: 'Tecnologia',
    descricao: '',
    diasProva: 3,
    topicos: topicos(['Modelo OSI', 'TCP/IP', 'Endereçamento IP', 'DNS', 'Roteamento'], 4),
  },
];

export default function MateriasScreen() {
  const [materias, setMaterias] = useState(MATERIAS_INICIAIS);
  const [categorias, setCategorias] = useState(CATEGORIAS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todas');
  const [novaMateriaVisivel, setNovaMateriaVisivel] = useState(false);
  const [novaCategoriaVisivel, setNovaCategoriaVisivel] = useState(false);
  const [materiaSelecionadaId, setMateriaSelecionadaId] = useState(null);

  // O detalhe sempre lê a matéria atualizada da lista.
  const materiaSelecionada = materias.find((m) => m.id === materiaSelecionadaId) || null;

  const materiasFiltradas = materias.filter(
    (m) =>
      (filtro === 'Todas' || m.categoria === filtro) &&
      m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function adicionarMateria(nova) {
    setMaterias((atual) => [...atual, { ...nova, id: Date.now() }]);
    setNovaMateriaVisivel(false);
  }

  function adicionarCategoria(nome) {
    setCategorias((atual) => (atual.includes(nome) ? atual : [...atual, nome]));
  }

  function alternarTopico(materiaId, topicoId) {
    setMaterias((atual) =>
      atual.map((m) =>
        m.id === materiaId
          ? {
              ...m,
              topicos: m.topicos.map((t) => (t.id === topicoId ? { ...t, concluido: !t.concluido } : t)),
            }
          : m
      )
    );
  }

  function adicionarTopico(materiaId, titulo) {
    setMaterias((atual) =>
      atual.map((m) =>
        m.id === materiaId
          ? { ...m, topicos: [...m.topicos, { id: Date.now(), titulo, concluido: false }] }
          : m
      )
    );
  }

  function removerMateria(id) {
    setMaterias((atual) => atual.filter((m) => m.id !== id));
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.titulo}>Minhas Matérias</Text>
          <Button title="Nova" icon="add" onPress={() => setNovaMateriaVisivel(true)} />
        </View>
        <Text style={styles.subtitulo}>Gerencie seus conteúdos e progresso</Text>

        <Input icon="search" placeholder="Buscar Matéria" value={busca} onChangeText={setBusca} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtros}>
          {['Todas', ...categorias].map((f) => (
            <Chip key={f} label={f} active={filtro === f} onPress={() => setFiltro(f)} />
          ))}
          <Chip label="+ Categoria" onPress={() => setNovaCategoriaVisivel(true)} />
        </ScrollView>

        {materiasFiltradas.length === 0 && (
          <Text style={styles.vazio}>Nenhuma matéria encontrada.</Text>
        )}

        {materiasFiltradas.map((m) => (
          <MateriaCard
            key={m.id}
            materia={m}
            onPress={() => setMateriaSelecionadaId(m.id)}
            onDelete={() => removerMateria(m.id)}
          />
        ))}
      </ScrollView>

      <ModalNovaMateria
        visible={novaMateriaVisivel}
        onClose={() => setNovaMateriaVisivel(false)}
        onSave={adicionarMateria}
        categorias={categorias}
        onAddCategoria={adicionarCategoria}
      />

      <ModalNovaCategoria
        visible={novaCategoriaVisivel}
        onClose={() => setNovaCategoriaVisivel(false)}
        onSave={(nome) => {
          adicionarCategoria(nome);
          setNovaCategoriaVisivel(false);
        }}
        categorias={categorias}
      />

      <ModalDetalheMateria
        materia={materiaSelecionada}
        onClose={() => setMateriaSelecionadaId(null)}
        onToggleTopico={alternarTopico}
        onAddTopico={adicionarTopico}
      />
    </View>
  );
}
