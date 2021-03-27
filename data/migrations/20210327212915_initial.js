exports.up =  async function(knex) {
    await knex.schema.createTable("users", (tbl) => {
      tbl.increments('id') 
      tbl.text('username').notNull().unique()
      tbl.text("password").notNull()
    })
    await knex.schema.createTable("recipe", (tbl) => {
      tbl.increments('id') 
      tbl.text("title").notNull()
      tbl.text("source").notNull()
    })
    await knex.schema.createTable("instructions", (tbl) =>{
      tbl.increments('id') 
      tbl.text("instructions").notNull()
    })
    await knex.schema.createTable("category", (tbl) => {
      tbl.increments('id') 
      tbl.text("category").notNull()
    })
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("category")
      await knex.schema.dropTableIfExists("instructions")
      await knex.schema.dropTableIfExists("recipe")
      await knex.schema.dropTableIfExists("users")
      
  }
