document.addEventListener('DOMContentLoaded', function() {
    var inputTamanhoSenha = document.getElementById('tamanho-senha');
    
    // Configura a mensagem de erro personalizada para o caso de valor máximo
    inputTamanhoSenha.oninvalid = function(event) {
        event.target.setCustomValidity('');
        if (event.target.validity.rangeOverflow) {
            event.target.setCustomValidity('O tamanho da senha deve conter no máximo 12 caracteres.');
        } else if (event.target.validity.rangeUnderflow) {
            // Esta linha é opcional, já que o HTML5 automaticamente lida com o mínimo
            event.target.setCustomValidity('O tamanho da senha deve conter no mínimo 6 caracteres.');
        } else {
            event.target.setCustomValidity('Por favor, insira um número válido.');
        }
    };
    
    // Limpa a mensagem de erro customizada após a validação ser bem-sucedida
    inputTamanhoSenha.oninput = function(event) {
        event.target.setCustomValidity('');
    };

    document.getElementById('form-gerador-senha').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let tamanhoSenha = inputTamanhoSenha.value;
        tamanhoSenha = parseInt(tamanhoSenha);
        
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
        let senhaGerada = '';
        for (let i = 0; i < tamanhoSenha; i++) {
            let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            senhaGerada += caracteres.charAt(indiceAleatorio);
        }

        document.getElementById('resultado-senha').innerText = senhaGerada;
        document.querySelector('.resultado').style.display = 'block';
    });
});
