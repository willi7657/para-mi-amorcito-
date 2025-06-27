// --- SCRIPT PARA LA INTERACTIVIDAD ---

// Script para el mensaje especial (modal de Snoopy con corazón)
const snoopyHeart = document.getElementById('snoopyHeart');
const secretModal = document.getElementById('secret-modal');
const closeModal = document.getElementById('close-modal');

snoopyHeart.addEventListener('click', () => {
    secretModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    secretModal.classList.remove('active');
});

// Cierra el modal si se hace clic fuera del contenido
secretModal.addEventListener('click', (event) => {
    if (event.target === secretModal) {
        secretModal.classList.remove('active');
    }
});