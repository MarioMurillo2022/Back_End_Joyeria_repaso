const db = require('../database/conn');

const postUser = async (req, res) => {

    const params = [
        req.body.email,
        req.body.pass,
        req.body.first_name,
        req.body.last_name,
    ];

    let sql = `insert into tbl_users
    (email, pass, first_name, last_name) 
    values
    ($1, $2, $3, $4)
    returning * `;

    try {
        const result = await db.query(sql, params);
        res.json(result);

    } catch (error) {
        res.status(500).json(error);
    }


}

module.exports = {
    postUser
}
