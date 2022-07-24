var pool = require('./bd');
var md5 = require('md5');

async function getUserAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];//reforzar la query, que traiga solo un usuario creado con el mismo nombre (limit 1). Rows[0] es para que traiga el primero que reciba con el nombre indicado, Porque el 'select' siempre trae un array de elementos

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserAndPassword }

//try-catch: tirar por consola los datos que no entienda especificando el error
// se usa corchete xq es un array de elementos
//los datos que estan dentro de parentesis luego del nombre de la función, son parámetros  (informacion que necesitamos pasarle a la función)