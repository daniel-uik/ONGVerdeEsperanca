// Menu Script

const btnMenu = document.getElementById('btnMenu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('ativo');
        menu.style.display = 'flex';
    } else {
        menu.style.display = '';
    }
});


// Doação Form Script

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formDoacao');
    const modal = document.getElementById('modalConfirmacao');
    const fechar = document.querySelector('.fechar');
    const outroBtn = document.querySelector('.valor-btn.outro');
    const outroValor = document.getElementById('outroValor');
    const valorBtns = document.querySelectorAll('.valor-btn');

    if (!form || !modal) return;

    valorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            valorBtns.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            if (btn.classList.contains('outro')) {
                outroValor.style.display = 'block';
            } else {
                outroValor.style.display = 'none';
                outroValor.value = btn.dataset.valor;
            }
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        modal.style.display = 'flex';
        form.reset();
        valorBtns.forEach(b => b.classList.remove('ativo'));
        outroValor.style.display = 'none';
    });

    fechar.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
});


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

