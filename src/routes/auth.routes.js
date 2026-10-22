import { Router } from "express";
import { autenticarUsuario, listarUsuarios, registrarRecompensaBoveda } from "../controllers/auth.controller.js";
import { autenticarLocal, autenticarJWT, autorizarAdmin } from "../middlewares/auth.middlewares.js";
import { validarLogin, validarRecompensa } from "../validators/auth.validator.js"


export const authRouter = Router();


authRouter.post("/users/authenticate",validarLogin,autenticarLocal,autenticarUsuario)
authRouter.post("/users/list",autenticarJWT,listarUsuarios)
authRouter.post("/boveda/recompensa",autenticarJWT,autorizarAdmin,validarRecompensa, registrarRecompensaBoveda);


