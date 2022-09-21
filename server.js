import express from "express";
import mongoose from "mongoose";
import app from "./app.js";
import * as dotenv from "dotenv";

const PORT = process.env.PORT || 5000;

dotenv.config();

//Database uri.
const uri = process.env.ATLAS_URI;

//Connect to the DB.
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
