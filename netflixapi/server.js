const Express = require("express")
const Cors = require("cors")
const Mongoose = require("mongoose")
const userRoutes = require("./routes/UserRoutes")

const app = Express();

app.use(Cors())
app.use(Express.json())

Mongoose.connect("mongodb://127.0.0.1:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected");
})

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"))