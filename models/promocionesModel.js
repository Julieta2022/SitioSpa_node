var pool = require('./bd');

async function getPromociones() {
    var query = 'select * from promociones';
    var rows = await pool.query(query);
    return rows;
}// limit 4 es para que muestre solo 4

async function getPromocionesfront() {
    var query = 'select * from promociones limit 4';
    var rows = await pool.query(query);
    return rows;
}// limit 4 es para que muestre solo 4 en el front

async function insertPromociones(obj) {
    try {
        var query = 'insert into promociones set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error; //el error va por un camino o por otro, en el caso q no este cargado algún campo sale un error o en el caso q no se cargue el combo porq se cae el servidor
    }
}

async function deletePromocionByID(id) {
    var query = 'delete from promociones where id= ?'
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getPromocionesByID(id) {
    var query = 'select * from promociones where id = ?'
    var rows = await pool.query(query, [id]);
    return rows[0];//si o si trae una sola, xq es un array
}

async function updatePromocionByID(obj, id) {
    try {
        var query = 'update promociones set ? where id=?'
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        // console.log(error)
        throw error;
    }
}

module.exports = { getPromociones, insertPromociones, deletePromocionByID, getPromocionesByID, updatePromocionByID, getPromocionesfront }