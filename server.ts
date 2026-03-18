import app from "./app";

const PORT = process.env.PORT || 8080;

const startServer = async (): Promise<void> => {
  try {
    const testResult = console.log("successfully connected to database");

    app.listen(PORT, () => {
      console.log(`Server now runnning on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to server", err);
    process.exit(1);
  }
};

startServer();
