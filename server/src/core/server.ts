import express from "express";


const app = express();
const PORT = process.env.PORT || 5000;

const serverRunningLogs = () => {
  console.log(`✅Server is running on port ${PORT}`)
}

app.listen(PORT, serverRunningLogs);