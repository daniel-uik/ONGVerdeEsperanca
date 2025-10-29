// Cadastro Form Script

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = form.querySelector('#nome')?.value || '';
        alert(`Cadastro recebido${nome ? ' — ' + nome : ''}. Obrigado!`);
        form.reset();
    });
});

// Input Mask Script

const mask = (input, pattern) => {
    input.addEventListener('input', () => {
        let v = input.value.replace(/\D/g, '');
        let i = 0;
        input.value = pattern.replace(/#/g, _ => v[i++] || '');
    });
};
mask(document.getElementById('cpf'), '###.###.###-##');
mask(document.getElementById('telefone'), '(##) #####-####');
mask(document.getElementById('cep'), '#####-###');
mask(document.getElementById('dataNascimento'), '##/##/####');