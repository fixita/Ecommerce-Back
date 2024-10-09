import express from 'express';
import appsRoutes from './routes/index.js'
import sequelize from './db/config.js';
import models from './models/index.js'; // Importa los modelos

const app = express();

//Antes de toda ruta, usamos MDW para que pueda recibir Json
app.use(express.json());

app.use('/api', appsRoutes);

//MDW en caso de poner una ruta no valida 
app.use((req, res, next) => {
    res.status(404).json({
        messsage: 'Not Found'
    });
});
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
      // Intenta conectar a la base de datos
      await sequelize.authenticate();
      console.log('Conexión a la base de datos establecida correctamente.');
  
      // Si la conexión es exitosa, levanta el servidor
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    }
};
  
// Llama a la función para iniciar el servidor
startServer();