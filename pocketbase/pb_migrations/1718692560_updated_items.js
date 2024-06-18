/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ihkb48mbbmaqqrx")

  // remove
  collection.schema.removeField("tmtqo5om")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s817u5tv",
    "name": "brand",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sanrio",
        "Nijntje",
        "Nintendo",
        "Ikea"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ihkb48mbbmaqqrx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmtqo5om",
    "name": "brand",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ycgzqgbjjoeeby4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("s817u5tv")

  return dao.saveCollection(collection)
})
