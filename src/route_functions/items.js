const getAll = require('../actionsIteams/getAll')
const getid = require('../actionsIteams/getById')

exports.get = async req => {


    return new Promise(async (resolve, reject) => {
        getAll(req, resolve, reject);

    });
}

exports.getById = async req => {

    let param = req.params['id'];
 
    return new Promise(async (resolve, reject) => {
        getid(param, resolve, reject);

    });
}

