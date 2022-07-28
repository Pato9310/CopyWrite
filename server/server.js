const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));

app.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization', 'Accept'],
}));
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
})

//routes
app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;