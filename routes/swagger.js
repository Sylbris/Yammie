import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec, specs } from "../controllers/swagger.js";

const router = express.Router();

router.get("/json", swaggerSpec);

router.use("/", swaggerUi.serve, swaggerUi.setup(specs));

export default router;
