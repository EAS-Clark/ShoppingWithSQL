const { getByID } = require('../controllers/categories.controller');

module.exports = async function (params, resolve, reject) {

    try{
    let row = await getByID(params);
    row.name;
    resolve({"response": row})

    }catch (err) {reject({ "response": 'failed: to find' + params});}
}
 