# Microservicios CRUD - Operaciones Matemáticas

Sistema de microservicios en Node.js para realizar operaciones matemáticas básicas (suma) con diferentes tipos de parámetros (body, query, path) y persistencia en SQLite.

## Arquitectura

El proyecto consta de 3 microservicios independientes que comparten la misma base de datos:

- **Microservicio Body** (Puerto 3001): Operaciones con parámetros en JSON body
- **Microservicio Query** (Puerto 3002): Operaciones con parámetros en query string
- **Microservicio Path** (Puerto 3003): Operaciones con parámetros en URL path

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
```

## Uso

### Ejecutar microservicios individualmente:

```bash
# Microservicio Body
npm run start:body

# Microservicio Query
npm run start:query

# Microservicio Path
npm run start:path
```

### Ejecutar todos los microservicios simultáneamente:

```bash
npm run start:all
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

### Microservicio Body (Puerto 3001)

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

### Microservicio Query (Puerto 3002)

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

### Microservicio Path (Puerto 3003)

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

## Base de Datos

La aplicación utiliza SQLite con una tabla `operaciones` que almacena:

- `id`: Identificador único (autoincremental)
- `numero1`: Primer número de la operación
- `numero2`: Segundo número de la operación
- `resultado`: Resultado de la operación
- `tipo_operacion`: Tipo de operación ('suma')
- `tipo_parametros`: Tipo de parámetros ('body', 'query', 'path')
- `fecha_creacion`: Timestamp de creación

## Estructura del Proyecto

```
backend/
├── .env                    # Variables de entorno
├── package.json           # Dependencias y scripts
├── server/
│   ├── index.js           # Punto de entrada microservicio Body
│   ├── indexQuery.js      # Punto de entrada microservicio Query
│   ├── indexPath.js       # Punto de entrada microservicio Path
│   ├── ServerSumaBody.js  # Clase servidor Body
│   ├── ServerSumaQuery.js # Clase servidor Query
│   └── ServerSumaPath.js  # Clase servidor Path
├── src/
│   ├── controllers/       # Controladores de negocio
│   ├── models/           # Modelos de datos
│   ├── router/           # Definición de rutas
│   └── database/         # Configuración BD
└── node_modules/         # Dependencias
```

## Testing con Postman

Importa la colección de Postman desde `endpoints.txt` o crea requests manualmente siguiendo los ejemplos de curl arriba.

## Próximos pasos

- Implementar operaciones adicionales (resta, multiplicación, división)
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
