exports.seed = async function(knex) {
  await knex("recipe").insert([
           {title: "cookie n cream", source: "sweet cookbook"},
           {title: "cherry pie", source: "youtube"},
           {title: "apple pie", source: "google"}
    ])
   };
