const db = require('../data/config')

function find() {
    return db("instructions")
        .select("id", "instructions")
}

function findById(id) {
    return db("instructions")
        .select("id", "instructions")
        .where({id}).first()
}

function findBy(filter) {
    return db("instructions")
        .select("id", "instructions")
        .where(filter)
}

async function add(instruction) {
    const [id] = await db("instructions").insert(instruction)
        return findById(id)
}

function remove(id) {
    return db('instructions')
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