db.produtos
.find({
  ingredientes: {
    $elemMatch: {
      $eq: "picles",
    },
  },
}, { nome: 1, _id: 0, ingredientes: 1, valoresNutricionais: { $slice: 3 } });
