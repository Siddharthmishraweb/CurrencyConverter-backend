const express = require('express');
const cryptoRoutes = require('./src/routes/cryptoRoutes');
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', cryptoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
