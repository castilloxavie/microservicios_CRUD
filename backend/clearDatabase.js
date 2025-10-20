const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = path.join(__dirname, 'src', 'database', 'app_database.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1);
    }
    console.log('Conectado a la base de datos SQLite.');
});

function clearDatabase() {
    const sql = 'DELETE FROM operaciones';

    db.run(sql, [], function(err) {
        if (err) {
            console.error('Error al eliminar los datos:', err.message);
            return;
        }
        console.log(`Se eliminaron ${this.changes} registros de la tabla 'operaciones'.`);
    });

    db.run('DELETE FROM sqlite_sequence WHERE name="operaciones"', [], function(err) {
        if (err) {
            console.error('Error al resetear el autoincremento:', err.message);
        } else {
            console.log('Autoincremento reseteado.');
        }
    });
}

clearDatabase();

setTimeout(() => {
    db.close((err) => {
        if (err) {
            console.error('Error al cerrar la base de datos:', err.message);
        } else {
            console.log('Conexión a la base de datos cerrada.');
        }
    });
}, 1000);
