import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import SequenciaCard from '../components/progresso/SequenciaCard';
import GraficoBarras from '../components/progresso/GraficoBarras';
import ConclusaoArea from '../components/progresso/ConclusaoArea';
import { colors } from '../theme';
import styles from './ProgressoScreen.styles';

const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const HORAS_INICIAIS = [2, 3, 1.5, 4, 2.5, 1, 0.5];

const AREAS = [
  { id: 1, nome: 'Tecnologia', percentual: 82, cor: colors.primary },
  { id: 2, nome: 'Exatas', percentual: 60, cor: colors.yellow },
  { id: 3, nome: 'Humanas', percentual: 100, cor: colors.pink },
];

// getDay(): 0 = domingo. Converte para 0 = segunda.
const indiceHoje = (new Date().getDay() + 6) % 7;

export default function ProgressoScreen() {
  const [horas, setHoras] = useState(HORAS_INICIAIS);

  const dados = DIAS.map((rotulo, i) => ({ rotulo, valor: horas[i] }));
  const total = horas.reduce((soma, h) => soma + h, 0);

  function registrarEstudo() {
    setHoras((atual) => atual.map((h, i) => (i === indiceHoje ? h + 1 : h)));
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Progresso</Text>
        <Text style={styles.subtitulo}>Acompanhe sua evolução diária</Text>

        <SequenciaCard dias={5} />

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitulo}>HORAS DE ESTUDO (ESTA SEMANA)</Text>
            <Text style={styles.total}>Total: {total.toFixed(1).replace('.', ',')}h</Text>
          </View>
          <GraficoBarras dados={dados} destaque={indiceHoje} />
        </Card>

        <Card style={styles.card}>
          <Text style={[styles.cardTitulo, styles.cardTituloEspaco]}>CONCLUSÃO POR ÁREA</Text>
          {AREAS.map((a) => (
            <ConclusaoArea key={a.id} nome={a.nome} percentual={a.percentual} cor={a.cor} />
          ))}
        </Card>

        <Button
          title="Registrar 1h de Estudo Hoje"
          icon="timer-outline"
          variant="outline"
          size="large"
          onPress={registrarEstudo}
          style={styles.botao}
        />
      </ScrollView>
    </View>
  );
}
