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