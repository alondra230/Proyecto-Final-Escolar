function registrarEstudiante() {

    let nombre = document.getElementById("nombre").value;
    let edad = Number(document.getElementById("edad").value);
    let grado = document.getElementById("grado").value;
    let curso = document.getElementById("curso").value;

    let textoNotas = document.getElementById("notas").value;

    let notas = textoNotas.split(",").map(Number);

    let estudiante = {
        nombre: nombre,
        edad: edad,
        grado: grado,
        curso: curso,
        notas: notas
    };

    estudiante.notas.push(100);
    estudiante.notas.pop();

    estudiante.notas.sort(function(a,b){
        return a-b;
    });

    let suma = 0;

    for(let i = 0; i < estudiante.notas.length; i++){
        suma += estudiante.notas[i];
    }

    let promedio = suma / estudiante.notas.length;

    let aprobado = promedio >= 61;

    let fecha = new Date();

    let cursoMayuscula = estudiante.curso.toUpperCase();

    let ejemploSubstring = "Programacion".substring(0,6);

    let posicion = "Programacion".indexOf("gra");

    let notasTexto = estudiante.notas.join("-");

    document.getElementById("resultado").innerHTML = `
        <h2>Datos del Estudiante</h2>

        <p><b>Nombre:</b> ${estudiante.nombre}</p>
        <p><b>Edad:</b> ${estudiante.edad}</p>
        <p><b>Grado:</b> ${estudiante.grado}</p>
        <p><b>Curso:</b> ${estudiante.curso}</p>

        <p><b>Notas:</b> ${estudiante.notas}</p>

        <p><b>Promedio:</b> ${promedio.toFixed(2)}</p>

        <p><b>Aprobado:</b> ${aprobado}</p>

        <p><b>Fecha:</b> ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}</p>

        <hr>

        <h3>Pruebas solicitadas</h3>

        <p><b>toUpperCase():</b> ${cursoMayuscula}</p>

        <p><b>substring():</b> ${ejemploSubstring}</p>

        <p><b>indexOf():</b> ${posicion}</p>

        <p><b>join():</b> ${notasTexto}</p>

        <p><b>split():</b> ${textoNotas}</p>
    `;
}
function registrarEstudiante() {

let nombre = document.getElementById("nombre").value;
let edad = Number(document.getElementById("edad").value);
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let grado = document.getElementById("grado").value;
let curso = document.getElementById("curso").value;
let textoNotas = document.getElementById("notas").value;
let notas = textoNotas.split(",").map(Number);
let estudiante = {
    nombre: nombre,
    edad: edad,
    direccion: direccion,
    telefono: telefono,
    correo: correo,
    grado: grado,
    curso: curso,
    notas: notas
};
estudiante.notas.push(100);
estudiante.notas.pop();
estudiante.notas.sort(function(a,b){
    return a-b;
});
let suma = 0;
for(let i = 0; i < estudiante.notas.length; i++){
    suma += estudiante.notas[i];
}
let promedio = suma / estudiante.notas.length;
let aprobado = promedio >= 70;
let fecha = new Date();
let cursoMayuscula = estudiante.curso.toUpperCase();
let ejemploSubstring = "Programacion".substring(0,6);
let posicion = "Programacion".indexOf("gra");
let notasTexto = estudiante.notas.join("-");
document.getElementById("resultado").innerHTML = `
    <h2>Datos del Estudiante</h2>
    <p><b>Nombre:</b> ${estudiante.nombre}</p>
    <p><b>Edad:</b> ${estudiante.edad}</p>
    <p><b>Dirección:</b> ${estudiante.direccion}</p>
    <p><b>Teléfono:</b> ${estudiante.telefono}</p>
    <p><b>Correo:</b> ${estudiante.correo}</p>
    <p><b>Grado:</b> ${estudiante.grado}</p>
    <p><b>Curso:</b> ${estudiante.curso}</p>
    <p><b>Notas:</b> ${estudiante.notas}</p>
    <p><b>Promedio:</b> ${promedio.toFixed(2)}</p>
    <p><b>Aprobado:</b> ${aprobado}</p>
    <p><b>Fecha:</b> ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}</p>
    <hr>
    <h3>Pruebas solicitadas</h3>
    <p><b>toUpperCase():</b> ${cursoMayuscula}</p>
    <p><b>substring():</b> ${ejemploSubstring}</p>
    <p><b>indexOf():</b> ${posicion}</p>
    <p><b>join():</b> ${notasTexto}</p>
    <p><b>split():</b> ${textoNotas}</p>
`;

}
