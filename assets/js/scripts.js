// Função que mostra o menu-mobile
function mostraMenu() {
    // Pegar o elemento
    let menuMobile = document.querySelector('.menu-mobile');

    // Se o menuMobile possui a classe .open...
    // Remova a classe e altere o ícone do botão para o menu_mobile.svg
    // Senão, adicione a classe e altere o ícone do meno para o menu_mobile_closed.svg
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src='./assets/img/menu_mobile.svg';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src='./assets/img/menu_mobile_closed.svg';
    }
}

// Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('.menu-mobile a');

// Adiciona um evento de click nos links
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        //Quando qualquer um dos links forem clicados
        //o menu será fechado, removendo a classe 'open'
        document.querySelector('.menu-mobile').classList.remove('open');
        //Muda o ícone do menu para o inicial (menu fechado)
        document.querySelector('.menu-icon').src='./assets/img/menu_mobile.svg';
    });
});

// Mostrar ano atual no Footer
const ano = document.getElementById('mostrarAnoAtual'); // Variável ano contendo o span do html
const anoAtual = new Date(); // Variável anoAtual com uma nova Data para captuira do ano
ano.innerHTML = anoAtual.getFullYear(); // Captura do ano da nova Data (anoAtual) e colocado na variável 'ano'.