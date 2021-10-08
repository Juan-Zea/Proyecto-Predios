
exports.up = function(knex) {
  return knex.schema
            .createTable('terrenos',function(table){
                table.increments().primary()
                table.string('area_total',100).notNullable()
                table.integer('valor_comercial').notNullable()
                table.boolean('fuentes_agua').notNullable().defaultTo(false)
                table.string('tipo_terreno',60).notNullable()
            })
            .createTable('pesonas_naturales',function(table){
                table.integer('numero_documento').primary()
                table.string('tipo_documento',20).notNullable()
                table.string('nombre',100).notNullable()
                table.string('apellido',100).notNullable()
                table.string('direccion',60).notNullable()
                table.string('telefono',60).notNullable()
                table.string('correo',60)
            })
            .createTable('personas_juridicas',function(table){
                table.integer('nit').primary()
                table.string('razon_saocial',60).notNullable()
                table.string('direccion',60).notNullable()
                table.string('telefono',60).notNullable()
                table.string('correo',60)
            })
            .createTable('predios',function(table){
                table.integer('numero_predial').primary()
                table.string('nombre',60).notNullable()
                table.string('departamento',100).notNullable()
                table.string('municipio',100).notNullable()
                table.integer('terreno_id').references('id').inTable('terrenos')
            })
            .createTable('construciones',function(table){
                table.increments().primary()
                table.integer('numero_pisos').notNullable()
                table.integer('area_total').notNullable()
                table.string('tipo_construcion',60).notNullable()
                table.integer('predio_id').references('numero_predial').inTable('predios')
                table.integer('terreno_id').references('id').inTable('terrenos')
            })
            .createTable('propietarios_juridicos',function(table){
                table.integer('fknumero_predial').references('numero_predial').inTable('predios').primary()
                table.integer('nit').references('nit').inTable('personas_juridicas')
            })
            .createTable('propietarios_naturales',function(table){
                table.integer('fknumero_predial').references('numero_predial').inTable('predios').primary()
                table.integer('numero_documento').references('numero_documento').inTable('pesonas_naturales')
            })

};

exports.down = function(knex) {
    return knex.schema.dropTable('terrenos').dropTable('personas_naturales').dropTable('personas_juridicas').dropTable('predios').dropTable('construciones').dropTable('propietarios_juridicos').dropTable('propietarios_naturales')
};
