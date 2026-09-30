const formulario = document.getElementById("formulario-contacto");
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const listaContactos = document.getElementById("lista-contactos");

let contactos = [];
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();
    if (nombre === "" || telefono === "") {
        return;
    }
    const contacto = {
        nombre: nombre,
        telefono: telefono
    };
    contactos.push(contacto);
    mostrarContactos();
    nombreInput.value = "";
    telefonoInput.value = "";
});
function mostrarContactos() {

    listaContactos.innerHTML = "";
    contactos.forEach(function(contacto) {

        const div = document.createElement("div");

        div.classList.add("contacto");
        div.innerHTML = `
    <div class="info-contacto">
        <strong>${contacto.nombre}</strong>
        <span>${contacto.telefono}</span>
    </div>

    <button class="btn-eliminar">
        Eliminar
    </button>
`;  
    listaContactos.appendChild(div);

const botonEliminar = div.querySelector(".btn-eliminar");
botonEliminar.addEventListener("click", function() {
    contactos = contactos.filter(function(item) {
        return item !== contacto;
    });

    mostrarContactos();

});
   });

}