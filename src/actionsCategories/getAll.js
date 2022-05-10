const { getAll } = require('../controllers/categories.controller');

module.exports = async function (resolve, reject) {

    let rows = await getAll();
    resolve({"response": rows})

}