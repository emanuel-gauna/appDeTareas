const fs = require('fs');
const process = require('process');


let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: () =>  {
        return JSON.parse(fs.readFileSync("./tareas.json", 'utf-8'));
    },
    escribirJson : function (arrayDeTareas) { 
       let dataEscribir = JSON.stringify(arrayDeTareas)
        fs.writeFileSync(this.archivo, dataEscribir , "utf-8");
    },
    guardarTarea :function (tarea) {
        let listaDeTareas = this.leerArchivo() 
        listaDeTareas.push(tarea);
        this.escribirJson(listaDeTareas)
        
    },
    filtrarPorEstado: function (estado) {
        let listaDetareas = this.leerArchivo()
        let tareasPorEstado = listaDetareas.filter(tarea =>{//tareasporEstado es un nuevo array q le vamos a filtrar las tareas    
            return tarea.estado === estado;
        })
    return tareasPorEstado;
    },
};

module.exports = archivoTareas; 