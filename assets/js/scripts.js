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

// Mostrar ano atual no Footer
const ano = document.getElementById('mostrarAnoAtual'); // Variável ano contendo o span do html
const anoAtual = new Date(); // Variável anoAtual com uma nova Data para captuira do ano
ano.innerHTML = anoAtual.getFullYear(); // Captura do ano da nova Data (anoAtual) e colocado na variável 'ano'.