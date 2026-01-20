[
  {
    "op": "core/row-removal",
    "engineConfig": {
      "facets": [
        {
          "type": "list",
          "name": "sub_region_1",
          "expression": "value",
          "columnName": "sub_region_1",
          "invert": false,
          "omitBlank": false,
          "omitError": false,
          "selection": [
            {
              "v": {
                "v": "3530",
                "l": "3530"
              }
            },
            {
              "v": {
                "v": "3557",
                "l": "3557"
              }
            },
            {
              "v": {
                "v": "1204",
                "l": "1204"
              }
            }
          ],
          "selectBlank": false,
          "selectError": false
        }
      ],
      "mode": "row-based"
    },
    "description": "Supprimer les lignes"
  }
]