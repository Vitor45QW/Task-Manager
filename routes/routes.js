const routes = require("express").Router();
const ListController = require("../controller/ListController")
const List = require("../models/List");


routes.get("/", ListController.getAllLists);
routes.post("/create", ListController.createList)
routes.get("/getById", ListController.getById);
routes.delete('/delete/:_id');
module.exports = routes;