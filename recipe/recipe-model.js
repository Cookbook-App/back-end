const db = require('../data/config')

function find() {
    return db("recipe")
        .select("id", "title", "source")
}

function findById(id) {
    return db("recipe")
        .select("id", "title", "source")
        .where({id}).first()
}

function findBy(filter) {
    return db("recipe")
        .select("id", "title", "source")
        .where(filter)
}

async function add(recipes) {
    const [id] = await db("recipe").insert(recipes)
        return findById(id)
}

function remove(id) {
    return db('recipe')
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