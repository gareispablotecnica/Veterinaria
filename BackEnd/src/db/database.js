const sqlite3= require('sqlite3')

// -----------------> Nombre de la base de datos
const ConexionBD=new sqlite3.Database('./Veterinaria.db',(Error)=>{
    if(Error){
        console.error("No se pudo Crear la BD , debido a: "+Error)
    }
    else{
        console.log('Base de Datos Creada Correctamente 🤞')
    }
});

// ----> Tablas
ConexionBD.run(`
        CREATE TABLE IF NOT EXISTS Productos(
            ID_Productos INTEGER PRIMARY KEY,
            Nombre TEXT
        )`);