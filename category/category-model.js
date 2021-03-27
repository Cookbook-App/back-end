const db = require('../data/config')

function find() {
    return db("category")
        .select("id", "category")
}

function findById(id) {
    return db("category")
        .select("id", "category")
        .where({id}).first()
}

function findBy(filter) {
    return db("category")
        .select("id", "category")
        .where(filter)
}

async function add(categories) {
    const [id] = await db("category").insert(categories)
        return findById(id)
}

function remove(id) {
    return db("category")
      .where('id', id)
      .del();
  }
  

module.exports = {
    find,
    findById,
    findBy,
    add,
    remove
}