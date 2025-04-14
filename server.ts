import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
//const upload = multer({ dest: 'uploads/' })
const portNumber = 8080;
const app = express();

  
const upload = multer({ storage: storage })
const upload2 = upload.single('avatar')
// https://expressjs.com/en/starter/static-files.html
// Ficheiros estáticos
app.use('/uploads',express.static('uploads'))
app.use('/static',express.static('public'))



app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
 })

app.post('/profile',  function (request: express.Request, response: express.Response) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    upload2(request, response, function(err){

      if (err instanceof multer.MulterError) {
        
        console.error("Erro de Multer:", err);
        return response.status(400).send({ error: "Erro ao subir ficheiros: " + err.message });
      } else if (err) {
        
        console.error("Erro inesperado:", err);
        return response.status(500).send({ error: "Erro interno ao subir ficheiros" });
      }
      
    try {
      console.log("Datos de ficheiros ", request.files);
      console.log("Campos de entrada ", request.body.apelido1, request.body);

      response.send({
        mensaxe: "datos gardados"
      });
    } catch (error) {
      console.error("Erro ao procesar os datos:", error);
      response.status(500).send({ error: "Erro ao procesar os datos" });
    }
    })
   
    
  })
  
  app.post('/photos/upload', upload.array('photos', 2), function (request: express.Request, response: express.Response, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log("Datos de ficheiros ",request.files)
    console.log("Campos de entrada ",request.body.apelido1,request.body)
    response.send({
        mensaxe: "datos gardados"
    })
  })


 app.listen(portNumber, 'localhost', () => {
 console.log('Listening on localhost:' + portNumber);
 });