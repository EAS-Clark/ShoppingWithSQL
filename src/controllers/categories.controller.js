const {query} = require('../utils/db.js');

const getAll = async () => {
    const rows = await query("SELECT * FROM categories");
    return rows;
}

const create = async (name) => {
    const response = await query("INSERT INTO categories (name) VALUES (?)", [name]);
    return
}

const getByID = async (id) => {
  const [row] = await query("SELECT * FROM categories WHERE id=?", id);
  return row;
}

const update = async (id, name) => {
    const response = await query("UPDATE categories SET name=? WHERE id=?" , [name, id]);
    return response;
}

const remove = async (id) => {
    const response = await query("DELETE FROM categories WHERE id=?" , id);
    return response;
}

module.exports = {
    getAll,
    getByID,
    create,
    update,
    remove,
}