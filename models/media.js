const mongoose = require('mongoose');

// Importar schemas

const mediaSchema = new mongoose.Schema({
  serial: {
    type: String,
    unique: true,
    required: true
  },
  titulo: {
    type: String,
    required: true,
    maxlength: 255
  },
  sinopsis: {
    type: String
  },
  urlPelicula: {
    type: String,
    required: true
  },
  imagenPortada: {
    type: String
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  anhoEstreno: {
    type: Number,
    min: 1900,
    max: 2100
  },
  generoPrincipal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genero',
    required: true,
  },
  directorPrincipal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true,
  },
  productora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Productora',
    required: true,
  },
  tipo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tipo',
    required: true,
  },
});

// Crear índices

mediaSchema.index({ titulo: 'text' });
mediaSchema.index({ generoPrincipal: 1 });
mediaSchema.index({ directorPrincipal: 1 });
mediaSchema.index({ productora: 1 });
mediaSchema.index({ tipo: 1 });

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
