const { update } = require('../controllers/categories.controller');

module.exports = async function (params, body, resolve, reject) {

    // (id, name)
    let name = body.name;

    console.log("name " + name);
    console.log("id "+params);
    try {
        let row = await update(params, name);
        resolve({ "response": 'rows edited: ' + row.changedRows });

    } catch (err) {reject({ "response": 'upldate failed:'});}
}