import express, { Application } from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import session from "express-session";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import "express-async-errors";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../config/swagger";
import helmet from "helmet";
import updateLastActivityMiddleware from "./middlewares/updateLastActivityMiddleware";

dotenv.config();
const app: Application = express();

// app.get('/login', (req, res) => {
//   req.session.user = { id: 1, username: 'example' };
//   res.send('شما وارد شده‌اید.');
// });
// پیکربندی middleware session
const sessionMiddleware = session({
  //To do
  // const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

  secret: "mysecretkey", // کلید مخفی برای رمزنگاری اطلاعات جلسات
  resave: false,
  saveUninitialized: false,
});

connentDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use(helmet());
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.get("/swagger-json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});


// app.use(express.static(path.join(__dirname, "../../public")));

// app.use(
//   "/api-docs/swagger-ui",
//   express.static(path.join(__dirname, "../../node_modules/sswagger-ui-dist"))
// );
// app.use(
//   "/api-docs/swagger-express",
//   express.static(path.join(__dirname, "../../node_modules/sswagger-ui-express"))
// );


app.use("/api/v1", indexRouter);

app.use(sessionMiddleware);

app.use(errorHandlerMiddleware);

export default app;

