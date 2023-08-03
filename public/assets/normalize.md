# Uso de normalize.css en una aplicación Next.js

Para usar la normalización de CSS en una aplicación React, todo lo que tiene que hacer es instalar la biblioteca desde NPM e incluirla en su componente _app.js (o cualquier componente que siempre esté cargado con su aplicación).

```bash
npm i normalize.css
```

Cree un componente de aplicación personalizado y luego simplemente importe su archivo de normalización allí:

```bash
// pages/_app.js 
import 'normalize.css/normalize.css';
```