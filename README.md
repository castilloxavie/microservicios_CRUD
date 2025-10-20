# Microservicios CRUD - Operaciones Matemáticas

Sistema de microservicios en Node.js para realizar operaciones matemáticas básicas (suma, resta, multiplicación y división) con diferentes tipos de parámetros (body, query, path) y persistencia en SQLite. Incluye un frontend en React para interactuar con los microservicios.

## 🚀 Características Actuales

- ✅ **12 Microservicios Independientes**: Cada operación matemática tiene 3 microservicios (body, query, path)
- ✅ **Documentación Swagger Completa**: UI interactiva en `/api-docs` con todos los endpoints organizados por tags
- ✅ **Base de Datos SQLite**: Persistencia compartida entre todos los microservicios
- ✅ **Arquitectura Modular**: Controladores, modelos, rutas y configuración separados
- ✅ **Scripts de Desarrollo**: Comandos npm para ejecutar microservicios individuales o todos simultáneamente
- ✅ **Limpieza de Base de Datos**: Script para resetear datos de prueba
- ✅ **Frontend en React**: Interfaz de usuario para interactuar con los microservicios

## Arquitectura

El proyecto consta de 12 microservicios independientes que comparten la misma base de datos, más un frontend en React.

### Microservicios de Suma:
- **Microservicio Suma Body** (Puerto 3001): Operaciones con parámetros en JSON body
- **Microservicio Suma Query** (Puerto 3002): Operaciones con parámetros en query string
- **Microservicio Suma Path** (Puerto 3003): Operaciones con parámetros en URL path

### Microservicios de Resta:
- **Microservicio Resta Body** (Puerto 4001): Operaciones con parámetros en JSON body
- **Microservicio Resta Query** (Puerto 4002): Operaciones con parámetros en query string
- **Microservicio Resta Path** (Puerto 4003): Operaciones con parámetros en URL path

### Microservicios de Multiplicación:
- **Microservicio Multiplicación Body** (Puerto 5001): Operaciones con parámetros en JSON body
- **Microservicio Multiplicación Query** (Puerto 5002): Operaciones con parámetros en query string
- **Microservicio Multiplicación Path** (Puerto 5003): Operaciones con parámetros en URL path

### Microservicios de División:
- **Microservicio División Body** (Puerto 6001): Operaciones con parámetros en JSON body
- **Microservicio División Query** (Puerto 6002): Operaciones con parámetros en query string
- **Microservicio División Path** (Puerto 6003): Operaciones con parámetros en URL path

### Frontend:
- **Aplicación React**: Interfaz de usuario para realizar operaciones matemáticas a través de los microservicios

## Tecnologías

### Backend:
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **SQLite3** - Base de datos
- **CORS** - Middleware para cross-origin
- **Body-parser** - Middleware para parsing de JSON

### Frontend:
- **React** - Biblioteca para interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **ESLint** - Linter para JavaScript/React

## Instalación

1. Clona el repositorio:
```bash
git clone <https://github.com/castilloxavie/microservicios_CRUD.git>
cd backend_nodeJs/microservicios_CRUD
```

2. Instala las dependencias del backend:
```bash
cd backend
npm install
```

3. Instala las dependencias del frontend:
```bash
cd ../frontend
npm install
```

4. Configura las variables de entorno (archivo `backend/.env`):
```env
PORT_SUMABODY=3001
PORT_SUMAQUERY=3002
PORT_SUMAPARAMS=3003
PORT_RESTABODY=4001
PORT_RESTAQUERY=4002
PORT_RESTAPARAMS=4003
PORT_MULTIPLICACIONBODY=5001
PORT_MULTIPLICACIONQUERY=5002
PORT_MULTIPLICACIONPATH=5003
PORT_DIVISIONBODY=6001
PORT_DIVISIONQUERY=6002
PORT_DIVISIONPATH=6003
```

## Uso

### Ejecutar microservicios individualmente:

```bash
# Microservicios de Suma
npm run start:body       # Puerto 3001
npm run start:query      # Puerto 3002
npm run start:path       # Puerto 3003

# Microservicios de Resta
npm run start:resta_body   # Puerto 4001
npm run start:resta_query  # Puerto 4002
npm run start:resta_path   # Puerto 4003

# Microservicios de Multiplicación
npm run start:multiplicacion:body   # Puerto 5001
npm run start:multiplicacion:query  # Puerto 5002
npm run start:multiplicacion:path   # Puerto 5003

# Microservicios de División
npm run start:division:body   # Puerto 6001
npm run start:division:query  # Puerto 6002
npm run start:division:path   # Puerto 6003
```

### Ejecutar todos los microservicios simultáneamente:

```bash
npm run start:all_suma          # Solo suma
npm run start:all_resta         # Solo resta
npm run start:all_multiplicacion # Solo multiplicación
npm run start:all_division      # Solo división
npm run start:all               # Todos los microservicios
```

### Limpiar la base de datos:

```bash
npm run clear:db          # Elimina todos los registros de la tabla operaciones
```

### Modo desarrollo con nodemon:

```bash
# Todos los microservicios en modo dev
npm run dev:all

# Microservicio específico en modo dev
npm run dev:body
npm run dev:query
npm run dev:path
npm run dev:resta_body
npm run dev:resta_query
npm run dev:resta_path
npm run dev:multiplicacion_body
npm run dev:multiplicacion_query
npm run dev:multiplicacion_path
npm run dev:division_body
npm run dev:division_query
npm run dev:division_path
```

### Ejecutar el frontend:

```bash
cd frontend
npm run dev  # Inicia el servidor de desarrollo en http://localhost:5173
```

## Endpoints

### Microservicios de Suma

#### Microservicio Suma Body (Puerto 3001)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/suma/body` | Crear nueva operación de suma |
| GET | `/api/suma/body` | Listar todas las operaciones de suma |
| PUT | `/api/suma/body/:id` | Actualizar operación por ID |
| DELETE | `/api/suma/body/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:3001/api/suma/body \
  -H "Content-Type: application/json" \
  -d '{"numero1": 5, "numero2": 3}'
```

#### Microservicio Suma Query (Puerto 3002)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/suma/query` | Crear nueva operación de suma |
| GET | `/api/suma/query` | Listar todas las operaciones de suma |
| PUT | `/api/suma/query/:id` | Actualizar operación por ID |
| DELETE | `/api/suma/query/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST "http://localhost:3002/api/suma/query?numero1=5&numero2=3"
```

#### Microservicio Suma Path (Puerto 3003)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/suma/path/:numero1/:numero2` | Crear nueva operación de suma |
| GET | `/api/suma/path` | Listar todas las operaciones de suma |
| PUT | `/api/suma/path/:id/:numero1/:numero2` | Actualizar operación por ID |
| DELETE | `/api/suma/path/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:3003/api/suma/path/5/3
```

### Microservicios de Resta

#### Microservicio Resta Body (Puerto 4001)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/resta/body` | Crear nueva operación de resta |
| GET | `/api/resta/body` | Listar todas las operaciones de resta |
| PUT | `/api/resta/body/:id` | Actualizar operación por ID |
| DELETE | `/api/resta/body/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:4001/api/resta/body \
  -H "Content-Type: application/json" \
  -d '{"numero1": 5, "numero2": 3}'
```

#### Microservicio Resta Query (Puerto 4002)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/resta/query` | Crear nueva operación de resta |
| GET | `/api/resta/query` | Listar todas las operaciones de resta |
| PUT | `/api/resta/query/:id` | Actualizar operación por ID |
| DELETE | `/api/resta/query/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST "http://localhost:4002/api/resta/query?numero1=5&numero2=3"
```

#### Microservicio Resta Path (Puerto 4003)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/resta/path/:numero1/:numero2` | Crear nueva operación de resta |
| GET | `/api/resta/path` | Listar todas las operaciones de resta |
| PUT | `/api/resta/path/:id/:numero1/:numero2` | Actualizar operación por ID |
| DELETE | `/api/resta/path/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:4003/api/resta/path/5/3
```

### Microservicios de Multiplicación

#### Microservicio Multiplicación Body (Puerto 5001)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/multiplicacion/body` | Crear nueva operación de multiplicación |
| GET | `/api/multiplicacion/body` | Listar todas las operaciones de multiplicación |
| PUT | `/api/multiplicacion/body/:id` | Actualizar operación por ID |
| DELETE | `/api/multiplicacion/body/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:5001/api/multiplicacion/body \
  -H "Content-Type: application/json" \
  -d '{"numero1": 5, "numero2": 3}'
```

#### Microservicio Multiplicación Query (Puerto 5002)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/multiplicacion/query` | Crear nueva operación de multiplicación |
| GET | `/api/multiplicacion/query` | Listar todas las operaciones de multiplicación |
| PUT | `/api/multiplicacion/query/:id` | Actualizar operación por ID |
| DELETE | `/api/multiplicacion/query/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST "http://localhost:5002/api/multiplicacion/query?numero1=5&numero2=3"
```

#### Microservicio Multiplicación Path (Puerto 5003)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/multiplicacion/path/:numero1/:numero2` | Crear nueva operación de multiplicación |
| GET | `/api/multiplicacion/path` | Listar todas las operaciones de multiplicación |
| PUT | `/api/multiplicacion/path/:id/:numero1/:numero2` | Actualizar operación por ID |
| DELETE | `/api/multiplicacion/path/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:5003/api/multiplicacion/path/5/3
```

### Microservicios de División

#### Microservicio División Body (Puerto 6001)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/division/body` | Crear nueva operación de división |
| GET | `/api/division/body` | Listar todas las operaciones de división |
| PUT | `/api/division/body/:id` | Actualizar operación por ID |
| DELETE | `/api/division/body/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:6001/api/division/body \
  -H "Content-Type: application/json" \
  -d '{"numero1": 10, "numero2": 2}'
```

#### Microservicio División Query (Puerto 6002)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/division/query` | Crear nueva operación de división |
| GET | `/api/division/query` | Listar todas las operaciones de división |
| PUT | `/api/division/query/:id` | Actualizar operación por ID |
| DELETE | `/api/division/query/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST "http://localhost:6002/api/division/query?numero1=10&numero2=2"
```

#### Microservicio División Path (Puerto 6003)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/division/path/:numero1/:numero2` | Crear nueva operación de división |
| GET | `/api/division/path` | Listar todas las operaciones de división |
| PUT | `/api/division/path/:id/:numero1/:numero2` | Actualizar operación por ID |
| DELETE | `/api/division/path/:id` | Eliminar operación por ID |

**Ejemplo POST:**
```bash
curl -X POST http://localhost:6003/api/division/path/10/2
```

## Base de Datos

La aplicación utiliza SQLite con una tabla `operaciones` que almacena:

- `id`: Identificador único (autoincremental)
- `numero1`: Primer número de la operación
- `numero2`: Segundo número de la operación
- `resultado`: Resultado de la operación
- `tipo_operacion`: Tipo de operación ('suma', 'resta', 'multiplicacion', 'division')
- `tipo_parametros`: Tipo de parámetros ('body', 'query', 'path')
- `fecha_creacion`: Timestamp de creación

## Estructura del Proyecto

```
backend/
├── .env                    # Variables de entorno
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Dependencias y scripts
├── package-lock.json      # Lock de dependencias
├── clearDatabase.js       # Script para limpiar base de datos
├── endpoints.txt          # Documentación de endpoints para Postman
├── server/
│   ├── index.js           # Servidor principal con Swagger
│   ├── suma/
│   │   ├── index.js           # Punto de entrada microservicio Suma Body
│   │   ├── indexQuery.js      # Punto de entrada microservicio Suma Query
│   │   └── indexPath.js       # Punto de entrada microservicio Suma Path
│   ├── resta/
│   │   ├── index.js           # Punto de entrada microservicio Resta Body
│   │   ├── indexQuery.js      # Punto de entrada microservicio Resta Query
│   │   └── indexPath.js       # Punto de entrada microservicio Resta Path
│   ├── multiplicacion/
│   │   ├── index.js           # Punto de entrada microservicio Multiplicación Body
│   │   ├── indexQuery.js      # Punto de entrada microservicio Multiplicación Query
│   │   └── indexPath.js       # Punto de entrada microservicio Multiplicación Path
│   └── division/
│       ├── index.js           # Punto de entrada microservicio División Body
│       ├── indexQuery.js      # Punto de entrada microservicio División Query
│       └── indexPath.js       # Punto de entrada microservicio División Path
├── src/
│   ├── swagger.js         # Configuración de Swagger UI
│   ├── swaggerDocs.js     # Documentación OpenAPI de Swagger
│   ├── controllers/       # Controladores de negocio
│   │   ├── suma/          # Controladores de suma
│   │   │   ├── SumaBodyControllers.js
│   │   │   ├── SumaPathControllers.js
│   │   │   └── SumaQueryControllers.js
│   │   ├── resta/         # Controladores de resta
│   │   │   ├── RestaBodyControllers.js
│   │   │   ├── RestaPathControllers.js
│   │   │   └── RestaQueryControllers.js
│   │   ├── multiplicacion/ # Controladores de multiplicación
│   │   │   ├── MultiplicacionBodyControllers.js
│   │   │   ├── MultiplicacionPathControllers.js
│   │   │   └── MultiplicacionQueryControllers.js
│   │   └── division/      # Controladores de división
│   │       ├── DivisionBodyControllers.js
│   │       ├── DivisionPathControllers.js
│   │       └── DivisionQueryControllers.js
│   ├── models/           # Modelos de datos
│   │   └── OperacionesModels.js
│   ├── router/           # Definición de rutas
│   │   ├── suma/
│   │   │   ├── sumaBodyRoutes.js
│   │   │   ├── sumaPathRoutes.js
│   │   │   └── sumaQueryRoutes.js
│   │   ├── resta/
│   │   │   ├── restaBodyRoutes.js
│   │   │   ├── restaPathRoutes.js
│   │   │   └── restaQueryRoutes.js
│   │   ├── multiplicacion/
│   │   │   ├── multiplicacionBodyRoutes.js
│   │   │   ├── multiplicacionPathRoutes.js
│   │   │   └── multiplicacionQueryRoutes.js
│   │   └── division/
│   │       ├── divisionBodyRoutes.js
│   │       ├── divisionPathRoutes.js
│   │       └── divisionQueryRoutes.js
│   ├── server/           # Clases servidor para cada microservicio
│   │   ├── suma/
│   │   │   ├── ServerSumaBody.js
│   │   │   ├── ServerSumaPath.js
│   │   │   └── ServerSumaQuery.js
│   │   ├── resta/
│   │   │   ├── ServerRestaBody.js
│   │   │   ├── ServerRestaPath.js
│   │   │   └── ServerRestaQuery.js
│   │   ├── multiplicacion/
│   │   │   ├── ServerMultiplicacionBody.js
│   │   │   ├── ServerMultiplicacionPath.js
│   │   │   └── ServerMultiplicacionQuery.js
│   │   └── division/
│   │       ├── ServerDivisionBody.js
│   │       ├── ServerDivisionPath.js
│   │       └── ServerDivisionQuery.js
│   └── database/         # Configuración BD
│       ├── databases.js
│       └── app_database.db
└── node_modules/         # Dependencias

frontend/
├── .gitignore            # Archivos ignorados por Git
├── eslint.config.js      # Configuración de ESLint
├── index.html            # Punto de entrada HTML
├── package.json          # Dependencias y scripts
├── package-lock.json     # Lock de dependencias
├── vite.config.js        # Configuración de Vite
├── public/
│   └── vite.svg          # Ícono de Vite
├── src/
│   ├── App.css           # Estilos de la aplicación
│   ├── App.jsx           # Componente principal de React
│   ├── index.css         # Estilos globales
│   ├── main.jsx          # Punto de entrada de React
│   ├── assets/
│   │   └── react.svg     # Ícono de React
│   ├── components/
│   │   └── Calculator.jsx # Componente de calculadora
│   ├── hooks/
│   │   └── useCalculator.js # Hook personalizado para la calculadora
│   ├── services/
│   │   └── apiService.js # Servicio para llamadas a la API
│   └── utils/
│       └── constants.js  # Constantes de la aplicación
└── node_modules/         # Dependencias
```

## Testing con Postman

Importa la colección de Postman desde `endpoints.txt` o crea requests manualmente siguiendo los ejemplos de curl arriba.

## Documentación Swagger

La documentación completa de la API está disponible a través de Swagger UI. Para acceder:

1. Ejecuta el servidor principal:
```bash
npm run dev  # Puerto 3000 por defecto
```

2. Abre tu navegador y ve a: `http://localhost:3000/api-docs`

3. La documentación incluye:
   - Todos los endpoints organizados por operación (Suma, Resta, Multiplicación, División)
   - Esquemas de request/response
   - Ejemplos de uso
   - Posibilidad de probar los endpoints directamente desde la interfaz

**Nota:** Si el servidor se cierra inmediatamente al ejecutar `npm run dev`, verifica que el archivo `backend/server/index.js` tenga la configuración correcta de middlewares y servidor como se muestra en el código actualizado.

## Frontend

El frontend está construido con React y Vite, proporcionando una interfaz de usuario para interactuar con los microservicios backend.

### Plugins de Vite

Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (o [oxc](https://oxc.rs) cuando se usa en [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

### React Compiler

El React Compiler no está habilitado en esta plantilla debido a su impacto en el rendimiento de desarrollo y construcción. Para agregarlo, consulta [esta documentación](https://react.dev/learn/react-compiler/installation).

### Configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos usar TypeScript con reglas de lint conscientes de tipos habilitadas. Consulta la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

ISC
