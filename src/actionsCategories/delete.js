const { remove } = require('../controllers/categories.controller');

module.exports = async function (params, resolve, reject) {
    let row = await remove(params);
    resolve({"response": row})

}
 