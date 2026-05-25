document.getElementById('contatos').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const pacote = document.querySelector('input[name="pacote"]:checked');
    const mensagem = document.getElementById('mensagem').value;
    const newsletter = document.querySelector('input[name="newsletter"]:checked');
  
    if(nome === '' || email === '' || !pacote || (newsletter.value === 'sim' && mensagem === '')) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
    } else if(!validateEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        event.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  $(document).ready(function() {
    $('#contatos').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: 'processaFormulario.php',
            type: 'post',
            data: $('#contatos').serialize(),
            success: function() {
                alert('Formulário enviado com sucesso!');
            },
            error: function() {
                alert('Houve um erro ao enviar o formulário.');
            }
        });
    });
});

  