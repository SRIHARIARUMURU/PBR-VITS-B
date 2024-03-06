const express = require('express');

const cors = require('cors');

const { checkStatus } = require('./status');
const { initiatePayment } = require('./initiatePayment');



const app = express();
const port = 3001;
const router = express.Router();

app.use(cors({
  origin: "*", 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

const BASE_URL = process.env.BASE_URL;



router.post('/initiatePayment', initiatePayment);
router.post('/api/status/:transactionId', checkStatus);




app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});