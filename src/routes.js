const express = require("express");
const routes = express.Router();

const EnderecoController = require("./app/controller/EnderecoController");
const JogadorController = require("./app/controller/JogadorController");
const PatenteController = require("./app/controller/PatenteController");
const ArtefatoController = require("./app/controller/ArtefatoController");
const CompraController = require("./app/controller/ArtefatoController");
const ArmaController = require("./app/controller/ArmaController");


routes.get("/", function(req, res) {
  return res.send("Servidor no ar ...");
});

routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);

routes.get("/jogador", JogadorController.list);
routes.post("/jogador", JogadorController.store);

routes.get("/patente", PatenteController.list);
routes.post("/patente", PatenteController.store);

routes.get("/artefato", ArtefatoController.list);
routes.post("/artefato", ArtefatoController.store);

routes.get("/compra", CompraController.list);
routes.post("/compra", CompraController.store);

routes.get("/arma", ArmaController.list);
routes.post("/arma", ArmaController.store);

module.exports = routes;