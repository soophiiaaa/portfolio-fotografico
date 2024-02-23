/* Menu respondivo */

let header = document.getElementById('header');
let content = document.getElementById('container');
let navigation = document.getElementById('constante');
let sidebar = false;

function toggleMenu() {
    sidebar = !sidebar;
    updateMenuStyle();
}

function closeMenu() {
    sidebar = false;
    updateMenuStyle();
}

function updateMenuStyle() {
    if (sidebar) {
        navigation.style.left = '-5px';
        navigation.style.animationName = 'sidebar'
        navigation.style.animationDuration = '1s'
    } else {
        navigation.style.left = '-500px';
        navigation.style.animationName = ''
        navigation.style.animationDuration = ''
    }
}

// Exemplo de uso em um botão:
// document.getElementById('botaoFecharMenu').addEventListener('click', closeMenu);


// Adicione um evento para chamar a função fecharMenu (por exemplo, ao clicar em um botão)
// Exemplo:
// document.getElementById('botaoFecharMenu').addEventListener('click', fecharMenu);


/* console.log(navigation); // Verifique se navigation não é null
console.log(content);     // Verifique se content não é null */
