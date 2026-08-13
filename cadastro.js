// Seleciona o formulário e a mensagem de sucesso
const formulario = document.getElementById('formCadastro');
const mensagemSucesso = document.getElementById('mensagemSucesso');

// Escuta o envio do formulário
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // impede o recarregamento da página

  // Captura os valores digitados
  const nomeLoja = document.getElementById('nomeLoja').value;
  const categoria = document.getElementById('categoria').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const endereco = document.getElementById('endereco').value;
  const horario = document.getElementById('horario').value;

  // Monta um objeto com os dados da loja
  const dadosLoja = {
    nome: nomeLoja,
    categoria: categoria,
    whatsapp: whatsapp,
    endereco: endereco,
    horario: horario
  };

  // Por enquanto, mostra os dados no console (útil para conferir durante o desenvolvimento)
  console.log('Loja cadastrada:', dadosLoja);

  // Mostra a mensagem de sucesso
  mensagemSucesso.textContent = `Loja "${nomeLoja}" cadastrada com sucesso!`;
  mensagemSucesso.style.display = 'block';

  // Limpa o formulário
  formulario.reset();
});