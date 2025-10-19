class OperacionesModels{
    constructor(db){
        this.db = db;
    }

    async crear(numero1, numero2, resultado, tipo_operacion, tipo_parametros){
        return new Promise((resolve, reject) => {
            this.db.run(
                `INSERT INTO operaciones (numero1, numero2, resultado, tipo_operacion, tipo_parametros) VALUES (?, ?, ?, ?, ?)`,
                [numero1, numero2, resultado, tipo_operacion, tipo_parametros],
                function(err) {
                    if (err) {
                        reject(err);
                    }
                    else{
                        resolve({
                            id: this.lastID,
                            numero1,
                            numero2,
                            resultado,
                            tipo_operacion,
                            tipo_parametros
                        })
                    }
                }
            )
        })
    }

    async listar(tipo, tipo_parametros){
        return new Promise((resolve, reject) => {
            this.db.all(
                `SELECT * FROM operaciones WHERE tipo_operacion = ? AND tipo_parametros = ?`,
                [tipo, tipo_parametros],
                (err, rows) => {
                    if (err){
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                }
            )
        })
    }

    async eliminar(id) {
        return new Promise((resolve, reject) => {
            this.db.run(
                `DELETE FROM operaciones WHERE id = ?`,
                [id],
                function(err) {
                    if (err) {
                        reject(err);
                    }
                    else{
                        resolve({ message: `Operación eliminada correctamente. ${id}` });
                    }
                }
            )
        })
    }

    async actualizar(id, numero1, numero2, resultado){
        return new Promise((resolve, reject) => {
            this.db.run(
                `UPDATE operaciones SET numero1 = ?, numero2 = ?, resultado = ? WHERE id = ?`,
                [numero1, numero2, resultado, id],
                function(err) {
                    if (err) {
                        reject(err);
                    }
                    else{
                        resolve({
                            id,
                            numero1,
                            numero2,
                            resultado
                        });
                    }
                }
            )
        })
    }
}
module.exports = OperacionesModels;