const { getAll } = require('../controllers/iteam.controller');

module.exports = async function (resolve, reject) {

    let rows = await getAll();
    resolve({"response": rows})

}