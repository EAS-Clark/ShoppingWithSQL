const { getByID } = require('../controllers/iteam.controller');

module.exports = async function (params, resolve, reject) {
    try{
    let row = await getByID(params);
    resolve({"response": row})
    }catch (err) {reject({ "response": 'failed: to find' + params});}
}
 