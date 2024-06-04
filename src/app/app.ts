import express, { Application } from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import session from "express-session";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import "express-async-errors";

dotenv.config();
const app: Application = express();
connentDB();
app.use(cors());
app.use(express.json());

// app.get('/login', (req, res) => {
//   req.session.user = { id: 1, username: 'example' };
//   res.send('شما وارد شده‌اید.');
// });
// پیکربندی middleware session
const sessionMiddleware = session({
  
  //To do 
  // const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

  secret: 'mysecretkey', // کلید مخفی برای رمزنگاری اطلاعات جلسات
  resave: false,
  saveUninitialized: false,
});


// اضافه کردن middleware session به برنامه
app.use(sessionMiddleware);
app.use(loggerMiddleware);

app.use("/api", indexRouter)
app.use(errorHandlerMiddleware);

export default app;
