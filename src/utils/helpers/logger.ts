import pino from "pino";
import { multistream } from "pino-multi-stream";
// import fs from "fs";

// ایجاد استریم برای لاگ‌های فایل
// const logFile = fs.createWriteStream("./logs/app.log", { flags: "a" });

const streams = [
  { stream: process.stdout }, // لاگ‌ها به کنسول
  // { stream: logFile }, // لاگ‌ها به فایل
];

const logger = pino(
  {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true, // رنگ‌بندی لاگ‌ها در کنسول
        levelFirst: true,
        translateTime: true,
      },
    },
  },
  multistream(streams)
);

export default logger;
