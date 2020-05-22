const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");
const blogRouter = require("./router/blogRouter");
const multer = require("./utils/multer");
const cors = require('cors')
const passport = require("passport");
const session = require("express-session");
const MongodbStore = require("connect-mongodb-session")(session);
const MONGOOSE_URL = "mongodb+srv://Mikey:6tZSMg3EsQZ9sGge@cluster0-elh0m.mongodb.net/blogapp?retryWrites=true"

const store = new MongodbStore({
    uri: MONGOOSE_URL,
    collection:'sessions'
})
//const multer = require("multer");

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(multer.single('file'));
app.use(session({secret: 'random asdfasdf', resave: false, saveUninitialized : false, store: store}))
;
/*app.use((req, res, next) => {
    console.log(req.method)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.method === 'OPTIONS'){    
        return res.status(200);
    }
    next();
  });
*/

app.use(passport.initialize())
app.use(passport.session()) 

app.use("/auth",authRouter);
app.use("/post",blogRouter);

mongoose.connect(
    MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(result => {
    app.listen(8080);
})
.catch(err => console.log(err))