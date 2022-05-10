const { create } = require('../controllers/categories.controller');

module.exports = async function (body, resolve, reject) {

    let name = body.name;

    try {
        let row = await create(name);
        resolve({ "response": 'uploaded id:' + row.insertId });
    } catch {
        reject({ "response": 'uploaded failed:'});

    }

}  
