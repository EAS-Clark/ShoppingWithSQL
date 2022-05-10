const getAll = require('../actionsIteams/getAll');
const getid = require('../actionsIteams/getById');
const remove = require('../actionsIteams/delete');
const upload = require('../actionsIteams/upload');
const update = require('../actionsIteams/update');

exports.get = async req => {
    return new Promise(async (resolve, reject) => {getAll(resolve, reject);});
}

exports.getById = async req => {

    let param = req.params['id'];
 
    return new Promise(async (resolve, reject) => {getid(param, resolve, reject);});
}

exports.post = async req => {

    return new Promise(async (resolve, reject) => {
        upload(req.body, resolve, reject);
    });

}

exports.delete = async req => {

    let param = req.params['id'];
 
    return new Promise(async (resolve, reject) => {remove(param, resolve, reject);});
}

exports.patch = async req => {

    let param = req.params['id'];
    let body = req.body;
 
    //let name = req.body.name;
    console.log(body);

    return new Promise(async (resolve, reject) => {update(param, body, resolve, reject);});
}
