const { getByID } = require('../controllers/categories.controller');

module.exports = async function (params, resolve, reject) {
    let row = await getByID(params);
    resolve({"response": row})

}
 