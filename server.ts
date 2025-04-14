import express from 'express';
import fs from 'fs';
import path from 'path';
const portNumber = 8080;
const app = express();


// https://expressjs.com/en/starter/static-files.html
// Ficheiros estáticos
app.use('/uploads',express.static('uploads'))
app.use('/static',express.static('public'))



app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
 })
// Middleware para recibir datos binarios (imágenes en este caso)
app.post('/upload-image', express.raw({ type: 'image/*', limit: '10mb' }), (req, res) => {
  const imageBuffer = req.body;

  // Ruta y nombre del archivo
  const fileName = `imagen_${Date.now()}.jpg`; // puedes ajustar la extensión según el tipo real
  const filePath = path.join(__dirname, 'uploads', fileName);

  // Asegúrate de que el directorio 'uploads' existe
  fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

  // Guardar la imagen en el sistema de archivos
  fs.writeFile(filePath, imageBuffer, (err) => {
    if (err) {
      console.error('Error al guardar la imagen:', err);
      return res.status(500).send('Error al guardar la imagen');
    }

    console.log('Imagen guardada en:', filePath);
    res.send('Imagen recibida y guardada');
  });
});

  



 app.listen(portNumber, 'localhost', () => {
 console.log('Listening on localhost:' + portNumber);
 });