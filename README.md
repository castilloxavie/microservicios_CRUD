# Microservicios CRUD - Operaciones Matemáticas

Sistema de microservicios en Node.js para realizar operaciones matemáticas básicas (suma, resta, multiplicación y división) con diferentes tipos de parámetros (body, query, path) y persistencia en SQLite.

## Arquitectura

El proyecto consta de 12 microservicios independientes que comparten la misma base de datos:

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

## Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **SQLite3** - Base de datos
- **CORS** - Middleware para cross-origin
- **Body-parser** - Middleware para parsing de JSON

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd backend_nodeJs/microservicios_CRUD
```

2. Instala las dependencias:
```bash
cd backend
npm install
```

3. Configura las variables de entorno (archivo `.env`):
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
├── package.json           # Dependencias y scripts
├── server/
│   ├── suma/
│   │   ├── index.js           # Punto de entrada microservicio Suma Body
│   │   ├── indexQuery.js      # Punto de entrada microservicio Suma Query
│   │   ├── indexPath.js       # Punto de entrada microservicio Suma Path
│   │   ├── ServerSumaBody.js  # Clase servidor Suma Body
│   │   ├── ServerSumaQuery.js # Clase servidor Suma Query
│   │   └── ServerSumaPath.js  # Clase servidor Suma Path
│   └── resta/
│       ├── index.js           # Punto de entrada microservicio Resta Body
│       ├── indexQuery.js      # Punto de entrada microservicio Resta Query
│       ├── indexPath.js       # Punto de entrada microservicio Resta Path
│       ├── ServerRestaBody.js # Clase servidor Resta Body
│       ├── ServerRestaQuery.js# Clase servidor Resta Query
│       └── ServerRestaPath.js # Clase servidor Resta Path
├── src/
│   ├── controllers/       # Controladores de negocio
│   │   ├── suma/          # Controladores de suma
│   │   ├── resta/         # Controladores de resta
│   │   ├── multiplicacion/ # Controladores de multiplicación
│   │   └── division/      # Controladores de división
│   ├── models/           # Modelos de datos
│   ├── router/           # Definición de rutas
│   └── database/         # Configuración BD
├── endpoints.txt         # Documentación de endpoints para Postman
└── node_modules/         # Dependencias
```

## Testing con Postman

Importa la colección de Postman desde `endpoints.txt` o crea requests manualmente siguiendo los ejemplos de curl arriba.

## Próximos pasos

- Agregar validaciones más robustas
- Implementar logging avanzado
- Agregar tests unitarios
- Documentación con Swagger/OpenAPI

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

ISC
