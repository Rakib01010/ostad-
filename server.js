//Sir Im busy with my exam that is why im giving this in a file

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Task 1: Mongoose Schema and Model
const myproductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, 
 { timestamps: true,versionKey:false }
);

const Product = mongoose.model('Product', myproductSchema);






// Task 2: Express.js Route
const app = express();

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.json({ massage: 'Internal Server Error' });
  }
});




// Task 3: JSON Web Tokens (JWT)
const secretKey = 'THIS_IS_MY_KEY'; 

function generateToken(userId) {
  return jwt.sign({ userId }, secretKey);
}





// Task 4: Express.js Middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  // we take  request from header and key is authorization

  if (!token) {
    return res.json({ massage: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
     const { userId } = decoded;
    req.userId = userId;
    next();
  } catch (error) {
    res.json({ massage: 'Unauthorized' });
  }
}



// MongoDB Connection and Server Setup
mongoose.connect('mongodb://localhost/ostadb3', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(err => {
    console.log(err);
  });

