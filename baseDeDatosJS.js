const alumnos = [
    { nombre: 'Alejandra', apellido: 'Navarrete', edad: 19 },
    { nombre: 'Andrea', apellido: 'Pinchulaf', edad: 27 },
    { nombre: 'Margarita', apellido: 'Pinchulaf', edad: 42 },
    { nombre: 'Isidora', apellido: 'Salsa', edad: 25 },
    { nombre: 'Maria', apellido: 'Del Carmen', edad: 18 },
    { nombre: 'Jade', apellido: 'Pinto', edad: 20 },
    { nombre: 'Marco', apellido: 'Trecanao', edad: 36 },
    { nombre: 'Ana', apellido: 'Camerilla', edad: 50 },
    { nombre: 'David', apellido: 'Urrutia', edad: 19 },
    { nombre: 'Juan', apellido: 'Mella', edad: 30 },
];

const cursos = [
    { nombre: 'Alejandra', cursos: 'Natacion' },
    { nombre: 'Andrea', cursos: 'Futbol' },
    { nombre: 'Margarita', cursos: 'Kunfu' },
    { nombre: 'Isidora', cursos: 'Canto' },
    { nombre: 'Maria', cursos: 'Futbol' },
    { nombre: 'Jade', cursos: 'Natacion' },
    { nombre: 'Marco', cursos: 'Kunfu' },
    { nombre: 'Ana', cursos: 'Futbol' },
    { nombre: 'David', cursos: 'Canto' },
    { nombre: 'Juan', cursos: 'Ajedrez' },
];
const promedios = [
    { nombre: 'Alejandra', promedio: 7 },
    { nombre: 'Andrea', promedio: 4 },
    { nombre: 'Margarita', promedio: 7 },
    { nombre: 'Isidora', promedio: 7 },
    { nombre: 'Maria', promedio: 6 },
    { nombre: 'Jade', promedio: 6 },
    { nombre: 'Marco', promedio: 5 },
    { nombre: 'Ana', promedio: 3 },
    { nombre: 'David', promedio: 4 },
    { nombre: 'Juan', promedio: 5 },
];


function mostrarContenido(contenido) {
    const secciones = ['contenido1', 'contenido2', 'contenido3'];

    secciones.forEach(seccion => {
        const elemento = document.getElementById(seccion);
        elemento.style.display = seccion === contenido ? 'block' : 'none';
    });

    if (contenido === 'contenido1') {
        const tablaBody = document.querySelector('#contenido1 tbody');
        tablaBody.innerHTML = crearFilasAlumnos(alumnos);
    } else if (contenido === 'contenido2') {
        const tablaBody = document.querySelector('#contenido2 table');
        tablaBody.innerHTML = crearFilasCursos(cursos);
    }
     else if (contenido === 'contenido3') {
    const tablaBody = document.querySelector('#contenido3 table');
    tablaBody.innerHTML = crearFilasCursos(promedios);
}
}

function buscarAlumno(contenido) {
    const inputBuscar = document.querySelector('.buscar input');
    const filtro = inputBuscar.value.toUpperCase();
    const tabla = document.querySelector(`#${contenido} table`);
    const filas = tabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td")[0];

        if (celdas) {
            const textoCelda = celdas.textContent || celdas.innerText;
            filas[i].style.display = textoCelda.toUpperCase().includes(filtro) ? "" : "none";
        }
    }
}

document.querySelector('.buscar input').addEventListener('input', function() {
    buscarAlumno('contenido1');
    buscarAlumno('contenido2');
    buscarAlumno('contenido3');
});


function crearFilasAlumnos(alumnos) {
    let filasHTML = "";
    for (let i = 0; i < alumnos.length; i++) {
        const { nombre, apellido, edad } = alumnos[i];
        filasHTML += `
        <tr>
            <td>${nombre}</td> 
            <td>${apellido}</td> 
            <td>${edad}</td> 
        </tr>
        `;
    }
    return filasHTML;
}

function crearFilasCursos(cursos) {
    let filasHTML = "";
    for (let i = 0; i < cursos.length; i++) {
        const { nombre, cursos: nombreCurso } = cursos[i];
        filasHTML += `
        <tr>
            <td>${nombre}</td> 
            <td>${nombreCurso}</td> 
        </tr>
        `;
    }
    return filasHTML;
}

function crearFilasPromedios(promedios) {
    let filasHTML = "";
    for (let i = 0; i < promedios.length; i++) {
        const { nombre, promedio } = promedios[i];
        filasHTML += `
        <tr>
            <td>${nombre}</td> 
            <td>${promedio}</td> 
        </tr>
        `;
    }
    return filasHTML;
    }

    function agregarAlumno() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const curso = document.getElementById('curso').value;
        const promedio = document.getElementById('promedio').value;
    
        if (!nombre || !apellido || !edad || !curso || !promedio) {
            alert('Todos los campos son obligatorios.');
            return;
        }
    
        const nuevoAlumno = {
            nombre: nombre,
            apellido: apellido,
            edad: parseInt(edad),
        };
    
        alumnos.push(nuevoAlumno);
    
        localStorage.setItem('alumnos', JSON.stringify(alumnos));
    
        const tablaAlumnos = document.querySelector('#contenido1 tbody');
        const tablaCursos = document.querySelector('#contenido2 table');
        const tablaPromedios = document.querySelector('#contenido3 table');
    
        tablaAlumnos.innerHTML = crearFilasAlumnos(alumnos);
        tablaCursos.innerHTML = crearFilasCursos(cursos);
        tablaPromedios.innerHTML = crearFilasPromedios(promedios);
    }

    //profe no identifique porque no me sale la nota en los promedios y en agregar alumnos hice lo que pude)
    
    

