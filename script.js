class libro {
    constructor(titulo,autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarDatos(tipo) {
        if(tipo === 'alert' || tipo === 'Alert' || tipo === 'ALERT') {
            alert(`El libro es "${this.titulo}" de ${this.autor}`);
        } else if(tipo === 'consola' || tipo === 'Consola' || tipo === 'CONSOLA') {
            console.log(`El libro es "${this.titulo}" de ${this.autor}`);
        } else if (tipo === 'documento' || tipo === 'Documento' || tipo === 'DOCUMENTO') {
            document.write(`<h1> El libro es "${this.titulo}" de ${this.autor} </h1>`);
        } else {
            console.log(`El libro es "${this.titulo}" de ${this.autor}`);
        }
    }

    getTitulo() {
        return this.titulo
    }

}

const libro1 = new libro("Ángeles y Demonios", "Dan Brown");
console.log(libro1);

libro1.mostrarDatos("consola");
libro1.mostrarDatos("alert");

let nuevolibro = new libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();

nuevolibro.mostrarDatos("consola")
nuevolibro.mostrarDatos("alert")
nuevolibro.mostrarDatos()
