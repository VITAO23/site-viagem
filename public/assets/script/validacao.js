const formulario = document.getElementById('contatos');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

if (formulario) {
    formulario.addEventListener('submit', async function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const pacote = document.querySelector('input[name="pacote"]:checked');

        if (nome === '' || email === '' || !pacote) {
            alert('Por favor, preencha nome, e-mail e pacote.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        const dados = new FormData(formulario);

        try {
            const resposta = await fetch('processaFormulario.php', {
                method: 'POST',
                body: dados
            });

            if (!resposta.ok) {
                throw new Error('Falha ao enviar formulário.');
            }

            formulario.reset();
            alert('Formulário enviado com sucesso!');
        } catch (erro) {
            alert('Houve um erro ao enviar o formulário.');
        }
    });
}

