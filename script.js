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

let nuevoLibro = new libro("Fuego y Sangre","GEORGE R. R. MARTIN")

nuevoLibro.mostrarDatos('consola')