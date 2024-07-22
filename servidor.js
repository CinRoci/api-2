const express = require('express');
const connectDB = require('./configuracion/mongooseconfig');
const jokeRoutes = require('./rutas/jokes.rutas');

connectDB();

const app = express();
app.use(express.json());

app.use('/chistes', jokeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});