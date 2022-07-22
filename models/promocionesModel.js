var pool = require('./bd');

async function getPromociones(){
    var query = 'select * from promociones';
    var rows= await pool.query(query);
    return rows;

}

module.exports = { getPromociones }