// 1. Guardamos en "variables" los tres elementos que necesitamos controlar
const menuToggle = document.getElementById('menu-toggle'); // Botón hamburguesa
const menuClose = document.getElementById('menu-close');   // Botón X
const sidebar = document.getElementById('sidebar');         // El menú lateral

// 2. Cuando el usuario haga clic en la hamburguesa...
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active'); // Añadimos la clase para que se deslice hacia adentro
});

// 3. Cuando el usuario haga clic en la X...
menuClose.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Quitamos la clase para que se vuelva a esconder
});
