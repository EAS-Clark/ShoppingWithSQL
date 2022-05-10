const { create } = require('../controllers/categories.controller');

module.exports = async function (body, resolve, reject) {

    // (name)
    let name = body.name;

    //let name = req.body.name;
    console.log('name: ' + name);

    try {
        let row = await create(name);
        console.log(row)
        resolve({ "response": 'uploaded id:' + row.insertId });
    } catch {


    }

}  
