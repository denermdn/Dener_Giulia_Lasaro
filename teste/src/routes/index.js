import UserController from '../controllers/UserController/index.js';
import express from 'express';

const routes = express.Router();
const userController = new UserController();

// GET: buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar
// DELETE: Deletar

routes.post('/user', userController.create);


export default routes;