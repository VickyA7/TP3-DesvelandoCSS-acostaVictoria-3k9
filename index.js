// Este archivo JavaScript es opcional para este ejercicio
// Puedes agregar interactividad aquí si lo deseas

console.log('Página cargada correctamente');

// Ejemplo: Agregar un evento al hacer clic en las imágenes
document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');
    
    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            alert('¡Hiciste clic en una imagen!');
        });
    });
});
