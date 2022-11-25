const express = require("express");
const cors = require("cors");
const path  = require("path");

const PORT = process.env.PORT || 6321;
const app = new express();

const loginRouter = require("./src/routes/loginRouter");
const signupRouter = require("./src/routes/signupRouter");
const adminRouter = require("./src/routes/adminRouter");
const userRouter = require("./src/routes/userRouter");
const commonRouter = require("./src/routes/commonRouter");

app.use(express.static('./dist/frontend'));

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/common", commonRouter);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
});


app.listen(PORT, () => {
  console.log(`app listening to port : ${PORT}`);
});