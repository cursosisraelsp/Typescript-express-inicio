# Inicio

> [!WARNING] 
> Instalacións previas: partimos da base que tes instalado de maneira global: `typescript` e `ts-node`, de non ser así, deberás realizar a instalación en modo local disto. Debedes instalar todos os paquetes `npm i`, e admáis inicialo con `tsc --init` para que se xenere o `tsconfig.json`

## typescript

Ao ser un proxecto basado en typescript deberás telo instalado, se non o tiveras podes instalado de maneira global no teu equipo:

```bash
$ npm i -g typescript
```

ou en modo local

```bash
$ npm i typescript
```


## ts-node

Deberemos ter instalado `ts-node` en modo local ou en modo global:

```bash
$ npm i -g ts-node
```

ou en modo local

```bash
$ npm i -D ts-node
```

A continuación executo o comando a modo global:

```bash
$ ts-node server
```

Se o tivéramos instalado no proxecto, deberemos executalo mediante `npx`, é dicir:


```bash
$ npx ts-node server
```


## Base do código en `server.ts`

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
> Petición básica `http://localhost:3000/?firstname=John&lastname=Smith`


> Petición básica `http://localhost:8080/?firstname=John&lastname=Smith`
