import express from "express";
import path from "path";
import app from "./app.local";
import "./database";
import "./config/initializer";

import users_routes from "./routes/user.router";

app.set("port", process.env.PORT || 3010);

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "public")))

// Router

app.use('/', users_routes)

app.listen(app.get("port"),() => {
  console.log(`Server on  port ${app.get("port")}`);
})