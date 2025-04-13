import express from 'express';
import multer from 'multer';
import path from 'path';

//const upload = multer({ dest: 'uploads/' })
const portNumber = 8080;
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'uploads'))
    },
    filename: function (req, files, cb) {
      console.log("files ",files.filename)
      cb(null, files.originalname  )
    }
  })
  
  const upload = multer({ storage: storage })

app.use('/uploads',express.static('uploads'))
app.use('/static',express.static('public'))// https://expressjs.com/en/starter/static-files.html



app.get("/formulario-imaxes",(request: express.Request, response: express.Response)=>{

 })
app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
 })

app.post('/profile',  upload.single(''),function (request: express.Request, response: express.Response, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    
   
    console.log("ficheiros ",request.file,request.body)
    
    response.send({
        mensaxe: "ficheiro gardado"
    })
  })
  
  app.post('/photos/upload', upload.array('photos', 2), function (request: express.Request, response: express.Response, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log("ficheiros ",request.files,request.body)
    response.send({
        mensaxe: "ficheiros gardados"
    })
  })


 app.listen(portNumber, 'localhost', () => {
 console.log('Listening on localhost:' + portNumber);
 });