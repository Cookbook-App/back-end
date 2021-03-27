exports.seed = async function(knex) {
  await knex("category").insert([
           {category: "fastfood"}
    ])
   };

