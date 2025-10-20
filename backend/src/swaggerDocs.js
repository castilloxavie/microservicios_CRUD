module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API Operaciones Matemáticas',
    version: '1.0.0',
    description: 'Documentación centralizada para suma, resta, multiplicación y división',
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Servidor Principal (Swagger)' },
    { url: 'http://localhost:3001', description: 'Suma Body' },
    { url: 'http://localhost:3002', description: 'Suma Query' },
    { url: 'http://localhost:3003', description: 'Suma Path' },
    { url: 'http://localhost:4001', description: 'Resta Body' },
    { url: 'http://localhost:4002', description: 'Resta Query' },
    { url: 'http://localhost:4003', description: 'Resta Path' },
    { url: 'http://localhost:5001', description: 'Multiplicación Body' },
    { url: 'http://localhost:5002', description: 'Multiplicación Query' },
    { url: 'http://localhost:5003', description: 'Multiplicación Path' },
    { url: 'http://localhost:6001', description: 'División Body' },
    { url: 'http://localhost:6002', description: 'División Query' },
    { url: 'http://localhost:6003', description: 'División Path' }
  ],
  tags: [
    { name: 'Suma', description: 'Operaciones de suma' },
    { name: 'Resta', description: 'Operaciones de resta' },
    { name: 'Multiplicación', description: 'Operaciones de multiplicación' },
    { name: 'División', description: 'Operaciones de división' }
  ],
  paths: {
    "/api/suma/body": {
      post: {
        summary: "Crear suma (body)",
        tags: ["Suma"],
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } }
        },
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar sumas (body)",
        tags: ["Suma"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/body/{id}": {
      put: {
        summary: "Actualizar suma (body)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } }
        },
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar suma (body)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/path/{numero1}/{numero2}": {
      post: {
        summary: "Crear suma (path)",
        tags: ["Suma"],
        parameters: [
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/path": {
      get: {
        summary: "Listar sumas (path)",
        tags: ["Suma"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/path/{id}/{numero1}/{numero2}": {
      put: {
        summary: "Actualizar suma (path)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/path/{id}": {
      delete: {
        summary: "Eliminar suma (path)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/query": {
      post: {
        summary: "Crear suma (query)",
        tags: ["Suma"],
        parameters: [
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar sumas (query)",
        tags: ["Suma"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/suma/query/{id}": {
      put: {
        summary: "Actualizar suma (query)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar suma (query)",
        tags: ["Suma"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },

    "/api/resta/body": {
      post: {
        summary: "Crear resta (body)",
        tags: ["Resta"],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar restas (body)",
        tags: ["Resta"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/body/{id}": {
      put: {
        summary: "Actualizar resta (body)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar resta (body)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/path/{numero1}/{numero2}": {
      post: {
        summary: "Crear resta (path)",
        tags: ["Resta"],
        parameters: [
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/path": {
      get: {
        summary: "Listar restas (path)",
        tags: ["Resta"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/path/{id}/{numero1}/{numero2}": {
      put: {
        summary: "Actualizar resta (path)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/path/{id}": {
      delete: {
        summary: "Eliminar resta (path)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/query": {
      post: {
        summary: "Crear resta (query)",
        tags: ["Resta"],
        parameters: [
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar restas (query)",
        tags: ["Resta"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/resta/query/{id}": {
      put: {
        summary: "Actualizar resta (query)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar resta (query)",
        tags: ["Resta"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },

    "/api/multiplicacion/body": {
      post: {
        summary: "Crear multiplicación (body)",
        tags: ["Multiplicación"],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar multiplicaciones (body)",
        tags: ["Multiplicación"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/body/{id}": {
      put: {
        summary: "Actualizar multiplicación (body)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar multiplicación (body)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/path/{numero1}/{numero2}": {
      post: {
        summary: "Crear multiplicación (path)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/path": {
      get: {
        summary: "Listar multiplicaciones (path)",
        tags: ["Multiplicación"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/path/{id}/{numero1}/{numero2}": {
      put: {
        summary: "Actualizar multiplicación (path)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/path/{id}": {
      delete: {
        summary: "Eliminar multiplicación (path)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/query": {
      post: {
        summary: "Crear multiplicación (query)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      get: {
        summary: "Listar multiplicaciones (query)",
        tags: ["Multiplicación"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/multiplicacion/query/{id}": {
      put: {
        summary: "Actualizar multiplicación (query)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" } }
      },
      delete: {
        summary: "Eliminar multiplicación (query)",
        tags: ["Multiplicación"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },

    "/api/division/body": {
      post: {
        summary: "Crear división (body)",
        tags: ["División"],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      },
      get: {
        summary: "Listar divisiones (body)",
        tags: ["División"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/division/body/{id}": {
      put: {
        summary: "Actualizar división (body)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/OperacionBody" } } } },
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      },
      delete: {
        summary: "Eliminar división (body)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/division/path/{numero1}/{numero2}": {
      post: {
        summary: "Crear división (path)",
        tags: ["División"],
        parameters: [
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      }
    },
    "/api/division/path": {
      get: {
        summary: "Listar divisiones (path)",
        tags: ["División"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/division/path/{id}/{numero1}/{numero2}": {
      put: {
        summary: "Actualizar división (path)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "path", required: true, schema: { type: "number" } },
          { name: "numero2", in: "path", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      }
    },
    "/api/division/path/{id}": {
      delete: {
        summary: "Eliminar división (path)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/division/query": {
      post: {
        summary: "Crear división (query)",
        tags: ["División"],
        parameters: [
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      },
      get: {
        summary: "Listar divisiones (query)",
        tags: ["División"],
        responses: { "200": { description: "OK" } }
      }
    },
    "/api/division/query/{id}": {
      put: {
        summary: "Actualizar división (query)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
          { name: "numero1", in: "query", required: true, schema: { type: "number" } },
          { name: "numero2", in: "query", required: true, schema: { type: "number" } }
        ],
        responses: { "200": { description: "OK" }, "400": { description: "Error" } }
      },
      delete: {
        summary: "Eliminar división (query)",
        tags: ["División"],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: { "200": { description: "OK" } }
      }
    }
  },
  components: {
    schemas: {
      OperacionBody: {
        type: "object",
        properties: { numero1: { type: "number" }, numero2: { type: "number" } },
        required: ["numero1", "numero2"]
      }
    }
  }
};
