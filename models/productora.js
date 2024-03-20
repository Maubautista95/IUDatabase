// productora.js
const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, 
    unique: true
  },
  estado: {
    type: String,
    enum: ['Activo', 'Inactivo'], 
    default: 'Activo' },
  fechaCreacion: {
    type: Date,
    default: Date.now 
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now 
  },
  slogan: {
    type: String,
     required: true
    },
  descripcion: {
    type: String,
     required: true 
    } 
});

module.exports = mongoose.model('Productora', productoraSchema);
