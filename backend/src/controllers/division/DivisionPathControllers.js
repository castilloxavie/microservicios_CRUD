class DivisionPathControllers {
    constructor(model) {
        this.model = model;
    }

    async crear(req, res){
        try {
            const {numero1, numero2} = req.params;

            if(numero1 == null || numero2 == null){
                return res.status(400).json({error: 'Faltan parametros'});
            }
            if(Number(numero2) === 0) {
                return res.status(400).json({error: 'No se puede dividir por cero'});
            }

            const resultado = Number(numero1) / Number(numero2);
            const data = await this.model.crear(numero1, numero2, resultado, 'division', 'path');
            console.log("Operacion de division creada:", data);
            res.status(201).json(data);


        } catch (error) {
            console.error("Error al crear la operación:", error);
            res.status(500).json({error: "Error interno del servidor"});
        }
    }

    async listar(req, res){
        try {
            const data = await this.model.listar('division', 'path');
            console.log("Operaciones de division listadas:", data);
            res.status(200).json(data);

        } catch (error) {
            console.error("Error al listar las operaciones:", error);
            res.status(500).json({error: "Error interno del servidor"});
        }
    }

    async actualizar(req, res){
        try {
            const {id, numero1, numero2} = req.params;

            if (isNaN(numero1) || isNaN(numero2)) {
                return res.status(400).json({error: 'Los parametros deben ser numeros'});
            }
            if(Number(numero2) === 0) {
                return res.status(400).json({error: 'No se puede dividir por cero'});
            }

            const resultado = Number(numero1) / Number(numero2);
            const respuesta = await this.model.actualizar(id, numero1, numero2, resultado);

            if(!respuesta) {
                return res.status(404).json({error: 'registro no encontrada'});
            }
            console.log("Operacion de division actualizada:", respuesta);
            res.status(200).json(respuesta);
        } catch (error) {
            console.error("Error al actualizar la operación:", error);
            res.status(500).json({error: "Error interno del servidor"});
        }
    }

    async eliminar(req, res){
        try {
            const {id} = req.params;
            const respuesta = await this.model.eliminar(id);
            console.log("Operacion de division eliminada:", respuesta);
            res.status(200).json(respuesta);
        } catch (error) {
            console.error("Error al eliminar la operación:", error);
            res.status(500).json({error: "Error interno del servidor"});
        }
    }
}

module.exports = DivisionPathControllers;
