// tipo.js

const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  descripcion: {
    type: String
    // Puedes agregar más validaciones o configuraciones según tus necesidades
  }
});

module.exports = mongoose.model('Tipo', tipoSchema);
