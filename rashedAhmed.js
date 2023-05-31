const bcrypt = require("bcrypt");

exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

exports.comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};



//Promise
// const s=false;
// const promise = new Promise((resolve,reject,callback)=>{
//     if(s){
//       resolve("s is here");
//     }else{
//       reject("s is not here");
//     }
// })
//  promise
//        .then((yes)=>{ // from resolve
//             console.log(yes);
//        })
//        .catch((no)=>{  // from reject
//         console.log(no);

//        })







// const jwt = require('jsonwebtoken');

// // Example payload
// const payload = {
//   iss: 'mywebsite.com',
//   sub: 'user123',
//   exp: Math.floor(Date.now() / 1000) + 3600, // Token expires in 1 hour
// };

// // Secret key used to sign the token
// const secretKey = 'mySecretKey';
// //  localhost/login
// // Generate the token
// const token = jwt.sign(payload, secretKey);

// console.log('Generated JWT:', token);
// ///======================================

// try {
//   // Verify and decode the token
//   const decoded = jwt.verify(token, secretKey);

//   console.log('Decoded JWT:', decoded);
// } catch (error) {
//   console.error('Invalid token:', error.message);
// }
























// const express = require('express');
// const bcrypt = require('bcrypt');

// const app = express();

// app.use(express.json());

// const users = [];

// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const existingUser = users.find((user) => user.username === username);
//     if (existingUser) {
//       return res.status(409).json({ error: 'Username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("hashed Password:",hashedPassword);
//     const newUser = {
//       id: users.length + 1,
//       username,
//       password: hashedPassword,
//     };
//     users.push(newUser);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = users.find((user) => user.username === username);
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }
//     console.log("user.pass:",user.password);
//     console.log("pass:",password);
//     //bcrypt.compare(GivenPassword,HashedPassword)
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     res.json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


















// SALT
// const express = require('express');
// const bcrypt = require('bcrypt');

// const app = express();

// //Middleware to parse JSON body
// app.use(express.json());

// // Generate salt and hash the password

// const saltRounds = 10;
// const plaintextPassword = 'password';
// bcrypt.genSalt(saltRounds, (err, salt) => {
//   console.log(salt);
//   bcrypt.hash(plaintextPassword, salt, (err, hash) => {
//     console.log(hash);
//     if (err) {
//       console.error('Error hashing password:', err);
//       return;
//     }
//     console.log('Hashed password:', hash);


//     // Verify the hashed password
//     bcrypt.compare(plaintextPassword, hash, (err, result) => {
//       console.log(plaintextPassword);
//       if (err) {
//         console.error('Error comparing passwords:', err);
//         return;
//       }
//       console.log('Password verification result:', result);
//     });
//   });
// });


// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


















//BCRYPT
// const express = require('express');
// const bcrypt = require('bcrypt');

// const app = express();

// // Middleware to parse incoming JSON
// app.use(express.json());

// // Mock user data (replace with your own database)
// const users = [
//   {
//     id: 1,
//     username: 'john',
//     password: '$2b$10$8Y1YmLVbzBCZPSi5wT6wQelkwv1vqpm3v6jO92zbbByAvVMv/TaDi', // hashed password: "password123"
//   },
  
// ];


// // Route to register a new user
// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username is already taken
//     const existingUser =  users.find((user) => user.username === username);
//     if (existingUser) {
//       return res.status(409).json({ error: 'Username already exists' });
//     }

    
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the user in the database (in this case, users array)
//     const newUser = {
//       id: users.length + 1,
//       username,
//       password: hashedPassword,
//     };
//     users.push(newUser);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to login and verify password
// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user in the database
//     const user = users.find((user) => user.username === username);
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     // Compare the provided password with the stored hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.password); // user.password =hashed password that is given 2nd time in users 
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     res.json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Run the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });





















