import dotenv from "dotenv";
import express from "express";
import { router } from "./routes/routes";
import expressJSDocSwagger from "express-jsdoc-swagger";

dotenv.config();

export const app = express();

const options = {
  info: {
    version: "1.0.0",
    title: "TicTacTrip - Sloan Gauthier API Documentation",
    description: "API de l'exercice",
  },
  security: {
    BearerAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: process.cwd(),
  filesPattern: "./src/**/*.ts",
  swaggerUIPath: "/api/docs",
  exposeSwaggerUI: true,
  exposeApiDocs: true,
  apiDocsPath: "/v3/api-docs",
};

expressJSDocSwagger(app)(options);

app.use(express.text());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
