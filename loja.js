// Número de WhatsApp da loja (sem espaços, com código do país)
const whatsappLoja = "5547992929550";

// Lista de produtos da loja (dados de exemplo - futuramente virá de um banco de dados)
const produtos = [
  { nome: "Arroz 5kg", preco: 24.90 },
  { nome: "Feijão 1kg", preco: 8.50 },
  { nome: "Óleo de soja 900ml", preco: 7.30 },
  { nome: "Açúcar 1kg", preco: 5.20 },
  { nome: "Café 500g", preco: 12.90 },
  { nome: "Leite 1L", preco: 6.10 }
];

// Seleciona o elemento onde os produtos vão ser inseridos
const listaProdutos = document.getElementById('listaProdutos');

// Para cada produto da lista, cria um cartão HTML
produtos.forEach(function (produto) {

  // Cria a div do cartão
  const cartao = document.createElement('div');
  cartao.classList.add('produto');

  // Monta o conteúdo interno do cartão
  cartao.innerHTML = `
    <h3>${produto.nome}</h3>
    <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
    <button>Pedir pelo WhatsApp</button>
  `;

  // Pega o botão que acabou de ser criado dentro do cartão
  const botaoPedir = cartao.querySelector('button');

  // Ao clicar, monta a mensagem e abre o WhatsApp
  botaoPedir.addEventListener('click', function () {
    const mensagem = `Olá! Gostaria de pedir: ${produto.nome} (R$ ${produto.preco.toFixed(2)})`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsapp = `https://wa.me/${whatsappLoja}?text=${mensagemCodificada}`;

    window.open(linkWhatsapp, '_blank');
  });

  // Adiciona o cartão pronto na página
  listaProdutos.appendChild(cartao);
});