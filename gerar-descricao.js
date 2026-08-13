const formulario = document.getElementById('formDescricao');
const resultadoDiv = document.getElementById('resultadoDescricao');

// Frases prontas para combinar de acordo com as palavras-chave digitadas
const frasesPorPalavra = {
  fresco: "colhido/preparado fresquinho",
  artesanal: "feito de forma artesanal, com todo cuidado",
  natural: "100% natural, sem conservantes",
  caseiro: "com aquele sabor caseiro de dar água na boca",
  premium: "de qualidade premium, selecionado com cuidado",
  promocao: "em oferta especial por tempo limitado",
  organico: "cultivado de forma orgânica"
};

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nomeDigitado = document.getElementById('nomeProduto').value.trim();
  const nomeProduto = nomeDigitado.charAt(0).toUpperCase() + nomeDigitado.slice(1);
  const textoPalavras = document.getElementById('palavrasChave').value;

  // Transforma "fresco, artesanal, 500g" em uma lista: ["fresco", "artesanal", "500g"]
  const palavras = textoPalavras
    .split(',')
    .map(function (palavra) {
      return palavra.trim();
    })
    .filter(function (palavra) {
      return palavra.length > 0;
    });

  // Monta frases descritivas a partir das palavras-chave conhecidas
  const frasesEncontradas = [];
  const detalhesExtras = [];

  palavras.forEach(function (palavra) {
    const chave = palavra.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (frasesPorPalavra[chave]) {
      frasesEncontradas.push(frasesPorPalavra[chave]);
    } else {
      // Palavras não reconhecidas (ex: "500g") viram detalhes técnicos
      detalhesExtras.push(palavra);
    }
  });

  // Monta a descrição final juntando as partes
  let descricao = `${nomeProduto}`;

  if (frasesEncontradas.length > 0) {
    descricao += `, ${frasesEncontradas.join(', ')}`;
  }

  if (detalhesExtras.length > 0) {
    descricao += `. Disponível em: ${detalhesExtras.join(', ')}`;
  }

  descricao += '. Confira no Vizinho Digital e faça já o seu pedido!';

  // Exibe o resultado
  resultadoDiv.innerHTML = `<strong>Descrição gerada:</strong><br>${descricao}`;
  resultadoDiv.style.display = 'block';
});