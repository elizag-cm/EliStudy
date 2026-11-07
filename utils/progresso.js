// Calcula o progresso de uma matéria a partir da lista de conteúdos (checklist).
export function calcularProgresso(topicos = []) {
  const total = topicos.length;
  const concluidos = topicos.filter((t) => t.concluido).length;
  const percentual = total > 0 ? Math.round((concluidos / total) * 100) : 0;
  return { total, concluidos, percentual };
}

export function textoProva(dias) {
  if (dias === null || dias === undefined) return 'Sem prova marcada';
  if (dias === 0) return 'Prova hoje';
  if (dias === 1) return 'Prova amanhã';
  return `Prova em ${dias} dias`;
}
