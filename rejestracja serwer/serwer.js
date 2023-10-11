const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.json());

const tab = []

app.post("/register", function (req, res) {

    let temp = true

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].login == req.body.login) {
            temp = false
        }
    }
    if (temp) {
        tab[tab.length] = {
            login: req.body.login,
            password: req.body.password,
            time: new Date()
        }
        console.log(tab[tab.length - 1])
        res.end(JSON.stringify("GUT"));
    } else {
        res.end(JSON.stringify("USEREXISTS"));
    }
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})