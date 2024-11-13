// Aguarda o carregamento do conteúdo da página para ativar o efeito
document.addEventListener("DOMContentLoaded", function () {
    // Animação da imagem de entrada
    const homeImage = document.querySelector(".home-image img");
    setTimeout(() => {
        homeImage.classList.add("loaded");
    }, 500);

    // Função de rolagem suave para links de navegação
    const navLinks = document.querySelectorAll(".navbar a, .footer-nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Rolar para o elemento-alvo suavemente
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Animação para seções quando aparecem na tela (scroll reveal)
    const sections = document.querySelectorAll(".section");
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Chama uma vez para revelar seções já visíveis ao carregar
});


function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
