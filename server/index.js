'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/db.js');
const PORT = 3000;

const router = require('./router.js');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(router);

async function bootstrap() {
  try {
    await db.sequelize.sync();
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log('Error starting the server:', err);
  }
}

bootstrap();
