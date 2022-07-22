var pool = require('./bd');

async function getPromociones(){
    var query = 'select * from promociones';
    var rows= await pool.query(query);
    return rows;
}

async function insertPromociones(obj){
    try{
        var query = 'insert into promociones set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch(error){
        console.log(error);
        throw error; //el error va por un camino o por otro, en el caso q no este cargado algún campo sale un error o en el caso q no se cargue el combo porq se cae el servidor
    }
}


module.exports = { getPromociones, insertPromociones }