import { createServer } from "http";

import app from "./app";
const GRAPHQL_PORT = 5000;

const runServer = async () => {
  const server = createServer(app.callback());

  server.listen(GRAPHQL_PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`Server started on port: ${GRAPHQL_PORT}`);

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info(
        `GraphQL Playground available at /playground on port ${GRAPHQL_PORT}`
      );
    }
  });
};

(async () => {
  // eslint-disable-next-line no-console
  console.log("Server starting...");
  await runServer();
})();
