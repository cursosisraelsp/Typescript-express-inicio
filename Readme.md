# Inicio
Partimos da base seguinte

```typescript
 import express from 'express';
 const portNumber = 8080;
 const app = express();

// Petición básica
 app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
 })

 // HABILITAMOS SERVER
 app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
 });
```

> Petición básica `http://localhost:8080/?firstname=John&lastname=Smith`

## ts-node

Deberemos ter instalado `ts-node` en modo local ou en modo global,xa que estamos a executar o arquivo mediante este comando:

A continuación executo o comando a modo global:

```bash
$ ts-node server
```

Se o tivéramos instalado no proxecto, deberemos executalo mediante `npx`, é dicir:


```bash
$ npx ts-node server
```