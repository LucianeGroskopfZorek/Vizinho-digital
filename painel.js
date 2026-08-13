// Mesma lista de produtos usada na loja.html (por enquanto, dados fixos)
const produtosPadrao = [
  { nome: "Arroz 5kg", preco: 24.90, promocao: false },
  { nome: "Feijão 1kg", preco: 8.50, promocao: false },
  { nome: "Óleo de soja 900ml", preco: 7.30, promocao: false },
  { nome: "Açúcar 1kg", preco: 5.20, promocao: false },
  { nome: "Café 500g", preco: 12.90, promocao: false },
  { nome: "Leite 1L", preco: 6.10, promocao: false }
];

// Tenta carregar produtos já salvos antes; se não houver, usa os padrão
const dadosSalvos = localStorage.getItem('produtosVizinhoDigital');
const produtos = dadosSalvos ? JSON.parse(dadosSalvos) : produtosPadrao;

const corpoTabela = document.getElementById('corpoTabela');
const botaoSalvar = document.getElementById('botaoSalvar');
const mensagemSalvo = document.getElementById('mensagemSalvo');

// Gera uma linha da tabela para cada produto
function desenharTabela() {
  corpoTabela.innerHTML = ''; // limpa antes de redesenhar

  produtos.forEach(function (produto, indice) {
    const linha = document.createElement('tr');
    if (produto.promocao) {
      linha.classList.add('linha-promocao');
    }

    linha.innerHTML = `
      <td>${produto.nome}</td>
      <td><input type="number" step="0.10" min="0" value="${produto.preco.toFixed(2)}" data-indice="${indice}" class="input-preco"></td>
      <td><input type="checkbox" ${produto.promocao ? 'checked' : ''} data-indice="${indice}" class="input-promocao"></td>
    `;

    corpoTabela.appendChild(linha);
  });
}

desenharTabela();

// Ao clicar em "Salvar alterações"
botaoSalvar.addEventListener('click', function () {

  // Percorre todos os campos de preço e atualiza a lista de produtos
  document.querySelectorAll('.input-preco').forEach(function (campo) {
    const indice = campo.getAttribute('data-indice');
    produtos[indice].preco = parseFloat(campo.value);
  });

  // Percorre todas as caixinhas de promoção e atualiza a lista
  document.querySelectorAll('.input-promocao').forEach(function (campo) {
    const indice = campo.getAttribute('data-indice');
    produtos[indice].promocao = campo.checked;
  });

  // Salva no navegador para persistir os dados
  localStorage.setItem('produtosVizinhoDigital', JSON.stringify(produtos));

  // Redesenha a tabela já com as linhas de promoção destacadas
  desenharTabela();

  // Mostra mensagem de confirmação
  mensagemSalvo.textContent = 'Alterações salvas com sucesso!';
  mensagemSalvo.style.display = 'block';

  setTimeout(function () {
    mensagemSalvo.style.display = 'none';
  }, 3000);
});