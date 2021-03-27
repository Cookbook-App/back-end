exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("recipe").truncate()
  await knex("instructions").truncate()
  await knex("category").truncate()
}
