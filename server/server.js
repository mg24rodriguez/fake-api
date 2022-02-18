const express = require('express')
const app = express()

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api", (req, res)=> {
    res.json({"users":["userOne", "userTwo", "userThree"]})
})

app.listen(3001, () => {console.log("Server started on port 3001")} )