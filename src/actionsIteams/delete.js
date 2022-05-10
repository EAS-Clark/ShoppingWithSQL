const { remove } = require('../controllers/iteam.controller');

module.exports = async function (params, resolve, reject) {
    try {
        let row = await remove(params);
        resolve({ "response": row })
    } catch (err) { reject({ "response": 'failed: to delete' + params }); }
}
