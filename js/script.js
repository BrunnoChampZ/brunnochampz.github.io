/*=================== toggle icon navbar ===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=================== scroll section active link ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*=================== sticky navbar ===================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*=================== remove toggle icon and navbar when click navbar link (scroll) ===================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*=================== scroll reveal animation ===================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .consultoria-container, .alunos-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });



// ...

// Selecione o campo de telefone pelo id
let telefoneInput = document.querySelector('#telefone');

// Adicione um ouvinte de evento de entrada para validar o campo enquanto o usuário digita
telefoneInput.addEventListener('input', function() {
    // Remova todos os caracteres não numéricos
    let telefone = this.value.replace(/\D/g, '');
    
    // Verifique o tamanho do número de telefone
    if (telefone.length === 11) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7, 11);
    } else if (telefone.length === 10) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6, 10);
    } else if (telefone.length >= 6) {
        telefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6);
    } else if (telefone.length >= 2) {
        telefone = '(' + telefone.substring(0, 2) + ')';
    }
    
    // Atualize o valor do campo com a máscara aplicada
    this.value = telefone;
});

