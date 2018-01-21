const pg = require ('pg');
const Pool = pg.Pool;
const config = {
    database: 'pauls_photo_gallery',
    host: 'localhost',
    port: 5432,
    idleTimeoutMillis: 5000,
    max: 10
};

const pool = new Pool(config);

module.exports = pool;