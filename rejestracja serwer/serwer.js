const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.json());

const tab = [
    { name: "a", password: "test", time: new Date(), id: 0 },
    { name: "b", password: "test", time: new Date(), id: 1 },
    { name: "f", password: "test", time: new Date(), id: 2 },
    { name: "c", password: "test", time: new Date(), id: 3 },
    { name: "d", password: "test", time: new Date(), id: 4 },
    { name: "e", password: "test", time: new Date(), id: 5 },
]

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
            id: tab.length,
        }
        console.log(tab[tab.length - 1])
        res.end(JSON.stringify("GUT"));
    } else {
        res.end(JSON.stringify("USEREXISTS"));
    }
})

app.patch("/del", function (req, res) {

})

app.get("/getUsers", function (req, res) {
    res.end(JSON.stringify(tab));
})

app.get("/user", function (req, res) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].login == req.body.login) {
            temp = false
        }
    }
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})