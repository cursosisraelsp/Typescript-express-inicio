# Inicio cos formularios enviando imaxes
## Multer

Multer es un "middleware" de node.js para el manejo de `multipart/form-data`, el cuál es usado sobre todo para la subida de archivos.

Multer añade un objeto ``body`` y un objeto ``file o files`` al objeto ``request``. El ``objeto body`` contiene los valores correspondientes a los ``campos de texto del formulario``, los ``objetos file o files contienen los archivos`` que serán subidos mediante el formulario.

Poderíamos configurar a carpeta destino inicialmente de forma básica:

```javascript
const upload = multer({ dest: 'uploads/' })
```

Ou tela máis elavorada:

```javascript 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'uploads'))
    },
    filename: function (req, files, cb) {
      cb(null, files.originalname  )
    }
  })
  
const upload = multer({ storage: storage })
```

Podemos configurar o destino, neste caso teño que ter creada a carpeta `uploads`:

```javascript
 path.join(__dirname,'uploads')
```

## Un sólo arquivo
> A continuación temos un formulario básico onde enviamos un ficheiro
```html
<form action="/profile" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" />
    <input type="text" name="usuario" placeholder="Introduce o teu nome"/>
    <input type="text" name="apelido1" placeholder="Introduce o teu primeiro apelido"/>
    <input type="text" name="apelido2" placeholder="Introduce o teu segundo apelido"/>
    <input type="submit" value="Get me the stats!" class="btn btn-default"> 
  </form>
```
Partimos da base seguinte

```typescript
app.post('/profile',  upload.single('avatar'),function (request: express.Request, response: express.Response, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    
   
    console.log("Datos de ficheiro ",request.file)
    console.log("Campos de entrada ",request.body.usuario,request.body)
    response.send({
        mensaxe: "datos gardados"
    })
  })
```
## Varios arquivos


```html
<form action="/photos/upload" method="post" enctype="multipart/form-data" >
    <input type="text" name="usuario" placeholder="Introduce o teu nome"/>
    <input type="text" name="apelido1" placeholder="Introduce o teu primeiro apelido"/>
    <input type="text" name="apelido2" placeholder="Introduce o teu segundo apelido"/>
    <input type="file" name="photos" multiple/>
    <input type="submit" value="Get me the stats!" class="btn btn-default"> 
  </form>
```

O método que utilizamos a continuación, limita os arquivos mediante o valor `2`

```typescript
 app.post('/photos/upload', upload.array('photos', 2), function (request: express.Request, response: express.Response, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log("Datos de ficheiros ",request.files)
    console.log("Campos de entrada ",request.body.apelido1,request.body)
    response.send({
        mensaxe: "datos gardados"
    })
  })
```