// genero.js
const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
   },
  estado: {
    type: String,
    enum: ['Activo', 'Inactivo'],
    default: 'Activo'
   },
  fechaCreacion: {
    type: Date,
    default: Date.now
   },
  fechaActualizacion: {
    type: Date,
    default: Date.now
   }
  
});

module.exports = mongoose.model('Genero', generoSchema);
