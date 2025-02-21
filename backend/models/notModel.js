const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const notSema = Sema(
  {
    baslik: {
      type: String,
      required: [true,'Başlık zorunlu olarak girilmelidir']
    },
    aciklama: {
      type: String,
    },
    kullanici_id:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);
