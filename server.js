const express = require('express')

const app = express()

app.use(express.json());

const PORT =  4001;

app.listen(PORT, () =>  {
    console.log(`Serveur is listening on port ${PORT}`)
});

users = [
    { id: "1", name: "one" },
    { id: "2", name: "two" }
]

app.get("/API/user",() => {
    res.json(users)
})

app.post("/API/user", (req, res) => {
    users.push(req.body);
    res.json(req.body);
});

app.delete("/API/user/:id", (req, res) => {
    users = users.filter(user => user.id !== req.params.id);
    res.json({ message: "User has been deleted" });
});
