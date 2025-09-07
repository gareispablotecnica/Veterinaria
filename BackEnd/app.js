// ---> Express
const express= require('express')
// ---> Path Para rutas
const path=require('path')
// ---> Invocamos los Protocolos HTTP (CORS)
const cors= require('cors')
// -------> Inicializamos la Variable Principal
const app= express()
// ---> Creamos el puerto del Servidor
require('dotenv').config()
const PORT=process.env.PORT || 5000;

// ---> Utilizamos los Protocolos de Cors
app.use(cors())
// ---> Enviamos la base de datos como un Json (Archivo texto plano)
app.use(express.json())

app.use(PORT,()=>{
    console.log(`🚀 Servidor Corriendo en http:localhost:${PORT}`)
})