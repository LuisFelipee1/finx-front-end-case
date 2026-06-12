export function calcularIdade(dataNascimento: string): string {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();

  const aniversarioJaPassou =
    mesAtual > mesNascimento ||
    (mesAtual === mesNascimento &&
      hoje.getDate() >= nascimento.getDate());

  if (!aniversarioJaPassou) {
    idade--;
  }

  return `${idade} Ano${idade > 1 ? 's' : ''}`;
}

export function formatarData(dataString: string): string {
  const data = new Date(dataString);

  if (isNaN(data.getTime())) {
    return "Data inválida";
  }

  return data.toLocaleDateString("pt-BR");
}