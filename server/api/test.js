import mysql from "mysql2";

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    console.log('QUERY', query)

    const db = {
        host: "localhost",
        user: "c47379_old_santur_ru",
        password: "RuCwaWugjuseg42",
        database: "c47379_old_santur_ru",
    };

    const pool = mysql.createPool({
        ...db,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });

    const promisePool = pool.promise();

    const [rows] = await promisePool.query(`SELECT * FROM sd67f523gj_posts WHERE sd67f523gj_posts.ID = ${query.id}`);



    return rows;
});