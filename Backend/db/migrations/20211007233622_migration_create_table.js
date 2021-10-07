
exports.up = function(knex) {
  return knex.schema
            .createTable('terrenos',function(table){
                table.increments().primary()
                table.string('area_total',100).notNullable
                table.integer('valor_comercial').notNullable
                table.boolean('fuentes_agua').notNullable.defaultTo(false)
                table.string('tipo_terreno',60).notNullable
            })
            .createTable('pesona_natural',function(table){
                table.integer('numero_documento').primary()
                table.string('tipo_documento',20).notNullable
                table.string('nombre',100).notNullable
                table.string('apellido',100).notNullable
                table.string('direccion',60).notNullable
                table.string('telefono',60).notNullable
                table.string('correo',60)
            })
            .createTable('persona_juridica',function(table){
                table.integer('nit').primary()
                table.string('razon_saocial',60).notNullable
                table.string('direccion',60).notNullable
                table.string('telefono',60).notNullable
                table.string('correo',60)
            })
            .createTable('')
};

exports.down = function(knex) {
  
};
