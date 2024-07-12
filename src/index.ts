import app from "./app/app";
import logger from "./utils/helpers/logger";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
