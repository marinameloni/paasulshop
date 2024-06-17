/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ycgzqgbjjoeeby4",
    "created": "2024-06-17 14:10:29.057Z",
    "updated": "2024-06-17 14:10:29.057Z",
    "name": "brand",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o2cle9yk",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ycgzqgbjjoeeby4");

  return dao.deleteCollection(collection);
})
