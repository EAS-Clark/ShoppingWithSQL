const { getAll } = require('../controllers/iteam.controller');

module.exports = async function (req, resolve, reject) {

    let rows = await getAll();
    resolve({"response": rows})

}