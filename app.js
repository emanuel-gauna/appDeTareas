
const archivoTareas = require('./funcionesDeTareas'); 

let accion = process.argv[2];


switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
         let tareas = archivoTareas.leerArchivo(); 
       
        tareas.forEach((tarea,i)=>{
            console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
        })
        console.log()
        break;
    case "crear":
        let titulo = process.argv[3]
        if(typeof titulo === "undefined"){
            console.log("debes pasar una tarea");
            return;
     }
        let tarea ={
        titulo,
        estado: "pendiente"
    }
    archivoTareas.guardarTarea(tarea);
    console.log("Nueva tarea creada");
    console.log("--------------------------");
    console.log(`tarea: ${tarea.titulo} estado ${tarea.estado}`);
    
        break;
        case "filtrar":
            let estado = process.argv[3]; 
            if(typeof estado === "undefined"){
                   console.log("debes pasar un estado de tarea");
                   return;
            }
            let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
            console.log("tareas filtradas por estado: " + estado);
            console.log("-----------------------");
         tareasFiltradas.forEach((tarea,i)=> {
                console.log(`titulo : ${i+1}. ${tarea.titulo}\n Estado : ${tarea.estado}`) 
            });
            break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar,filtrar o crear');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, filtrar o crear');
        console.log('------------------------------------');
        break;
}
