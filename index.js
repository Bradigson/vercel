const express = require("express");
const {swaggerDocs : v1swaggerDocs} = require('./swagger')

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api", require("./router/user.router"))


app.listen(app.get("port"), ()=>{
    console.log("server available at", app.get("port"));
    v1swaggerDocs(app, app.get("port"))
})