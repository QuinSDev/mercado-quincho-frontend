const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'http://localhost:8080/auth/register',
  user: 'root',
  password: 'root',
  database: 'mercado_quincho',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL: ' + err.stack);
    return;
  }
  console.log('Conexión a MySQL exitosa como ID ' + connection.threadId);
});

// Puedes exportar esta conexión para usarla en tus rutas o controladores.
module.exports = connection;