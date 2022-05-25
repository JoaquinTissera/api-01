import mongoose, { Schema, model } from "mongoose";

export interface User extends mongoose.Document {
  name: string,
  email: string,
  document: string,
  domicilio: string,
  permisos: string,
  compras: string,
  datosTarjesta: string,
  ingresos: number,
}

const userSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  document: {
    type: String,
    unique: true,
    required: true,
  },
  domicilio: {
    type: String,
    unique: false,
    required: true,
  },
  permisos: {
    type: String,
    unique: false,
    required: true,
  },
  compras: {
    type: String,
    unique: false,
    required: true,
  },
  datosTarjeta: {
    type: String,
    unique: false,
    required: true,
  },
  ingresos: {
    type: Number,
    unique: false,
    required: true,
  },
});

export default model<User>("users", userSchema);
