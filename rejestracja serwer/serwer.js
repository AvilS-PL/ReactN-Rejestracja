const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.json());

// let tab = [{ id: 2, login: "a", password: "b", time: 1 }, { id: 1, login: "a", password: "b", time: 1 }, { id: 3, login: "a", password: "b", time: 1 }]
let tab = []
let i = 0

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
            time: new Date(),
            id: i,
        }
        i++
        res.end(JSON.stringify("GUT"));
    } else {
        res.end(JSON.stringify("USEREXISTS"));
    }
})

app.patch("/delUser", function (req, res) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == req.body.id) {
            tab.splice(i, 1)
            break
        }
    }
    res.end(JSON.stringify(tab));
})

app.get("/getUsers", function (req, res) {
    res.end(JSON.stringify(tab));
})

app.get("/getUser", function (req, res) {
    let temp = 0
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == req.query.id) {
            temp = i
            break
        }
    }
    res.end(JSON.stringify(tab[temp]));
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})