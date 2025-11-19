document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad de Tema Oscuro/Claro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para alternar el modo
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        // Actualizar el texto del botón
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌙 Cambiar Tema';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '☀️ Cambiar Tema';
            localStorage.setItem('theme', 'light');
        }
    };

    // Cargar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme(); // Llama a la función para establecer el tema oscuro y actualizar el botón.
    }

    // Evento click para el botón
    themeToggle.addEventListener('click', toggleTheme);

    // 2. Funcionalidad de Añadir al Carrito (Simple)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obtener el título y precio del juego
            const card = event.target.closest('.game-card');
            const title = card.querySelector('h4').textContent;
            const price = card.dataset.price;
            
            // Mostrar una alerta simple
            alert(`"${title}" ($${price}) ha sido añadido al carrito (¡Funcionalidad simulada!).`);
        });
    });
});