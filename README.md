# Microservicios CRUD - Operaciones Matemáticas

Sistema de microservicios en Node.js para realizar operaciones matemáticas básicas (suma y resta) con diferentes tipos de parámetros (body, query, path) y persistencia en SQLite.

## Arquitectura

El proyecto consta de 6 microservicios independientes que comparten la misma base de datos:

### Microservicios de Suma:
- **Microservicio Suma Body** (Puerto 3001): Operaciones con parámetros en JSON body
- **Microservicio Suma Query** (Puerto 3002): Operaciones con parámetros en query string
- **Microservicio Suma Path** (Puerto 3003): Operaciones con parámetros en URL path

### Microservicios de Resta:
- **Microservicio Resta Body** (Puerto 4001): Operaciones con parámetros en JSON body
- **Microservicio Resta Query** (Puerto 4002): Operaciones con parámetros en query string
- **Microservicio Resta Path** (Puerto 4003): Operaciones con parámetros en URL path

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
```

### Ejecutar todos los microservicios simultáneamente:

```bash
npm run start:all_suma    # Solo suma
npm run start:all_resta   # Solo resta
npm run start:all         # Suma y resta
```

### Modo desarrollo con nodemon:

```bash
# Todos los microservicios en modo dev
npm run dev:all

# Microservicio específico en modo dev
npm run dev:body
npm run dev:query
npm run dev:path
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

## Base de Datos

La aplicación utiliza SQLite con una tabla `operaciones` que almacena:

- `id`: Identificador único (autoincremental)
- `numero1`: Primer número de la operación
- `numero2`: Segundo número de la operación
- `resultado`: Resultado de la operación
- `tipo_operacion`: Tipo de operación ('suma', 'resta')
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
│   │   └── resta/         # Controladores de resta
│   ├── models/           # Modelos de datos
│   ├── router/           # Definición de rutas
│   └── database/         # Configuración BD
├── endpoints.txt         # Documentación de endpoints para Postman
└── node_modules/         # Dependencias
```

## Testing con Postman

Importa la colección de Postman desde `endpoints.txt` o crea requests manualmente siguiendo los ejemplos de curl arriba.

## Próximos pasos

- Implementar operaciones adicionales (multiplicación, división)
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
