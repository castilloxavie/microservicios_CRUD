const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'app_database.db');

const db = new  sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(`Error a conectarse a la basse de datos: ${err.message}`)
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
})

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS operaciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero1 REAL NOT NULL,
            numero2 REAL NOT NULL,
            resultado REAL NOT NULL,
            tipo_operacion TEXT NOT NULL,
            tipo_parametros TEXT NOT NULL,
            fecha_creacion TEXT DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
            if (err) {
                console.error('Error al crear tabla:', err.message);
            } else {
                console.log('Tabla operaciones verificada/creada exitosamente.');
            }
        }
    );
});
module.exports = db;