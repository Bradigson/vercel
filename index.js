const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api", require("./router/user.router"))


app.listen(app.get("port"), ()=>{
    console.log("server available at", app.get("port"))
})