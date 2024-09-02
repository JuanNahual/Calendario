const productos = [
    { nombre: "Producto 1", fecha: "2024-09-01" },
    { nombre: "Producto 2", fecha: "2024-09-05" },
    { nombre: "Producto 3", fecha: "2024-09-05" }, // Mismo día que Producto 2
    { nombre: "Producto 4", fecha: "2024-09-12" },
    { nombre: "Producto 5", fecha: "2024-09-18" },
    { nombre: "Producto 6", fecha: "2024-09-18" }, // Mismo día que Producto 5
    // Añadir más productos con sus respectivas fechas
];
const days = document.querySelectorAll(".date");
productos.forEach(producto => {
    const fecha = new Date(producto.fecha);
    const dia = fecha.getDate(); // Obtiene el día del mes (1-30)

    if (dia >= 1 && dia <= 30) {
        const dayElement = days[dia - 1];

        // Si no hay una lista, crearla
        let ul = dayElement.querySelector("ul");
        if (!ul) {
            ul = document.createElement("ul");
            dayElement.appendChild(ul);
        }
        
        // Añadir el producto como un elemento de la lista
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        ul.appendChild(li);
    }
});
